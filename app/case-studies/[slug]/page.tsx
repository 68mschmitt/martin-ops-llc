import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { notFound } from "next/navigation";
import { caseStudies } from "@/content/case-studies";
import { absoluteUrl, pageMetadata, siteName } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export function generateStaticParams() { return caseStudies.filter((study) => study.approvedForPublication).map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug && entry.approvedForPublication);
  if (!study) return {};
  return pageMetadata(`${study.client}: Fractional Operations Case Study`, study.startingSituation, `/case-studies/${study.slug}`);
}
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug && entry.approvedForPublication);
  if (!study) notFound();
  const url = absoluteUrl(`/case-studies/${study.slug}`);
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article", headline: `${study.client}: Fractional Operations Case Study`,
    description: study.startingSituation, author: { "@type": "Organization", name: siteName },
    ...(url ? { mainEntityOfPage: url, url } : {}),
  };
  return <>
    <JsonLd data={articleSchema} /><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: study.client, path: `/case-studies/${study.slug}` }])} />
    <article className="section"><div className="reading"><span className="eyebrow">{study.industry}</span><h1>{study.client}</h1><p>{study.startingSituation}</p><div className="article-meta"><span>Company size · {study.companySize}</span><span>Timeline · {study.timeline}</span></div><div className="prose"><h2>Situation</h2><p>{study.startingSituation}</p><h2>Constraint</h2><p>{study.constraint}</p><h2>Intervention</h2><ul>{study.intervention.map((item) => <li key={item}>{item}</li>)}</ul><h2>Execution</h2><ul>{study.execution.map((item) => <li key={item}>{item}</li>)}</ul><h2>Result</h2><ul>{study.measurableResults.map((item) => <li key={item}>{item}</li>)}</ul><h2>Ongoing operating model</h2><p>{study.ongoingModel}</p>{study.founderQuote ? <blockquote>{study.founderQuote}</blockquote> : null}</div></div></article>
  </>;
}
