import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article-body";
import { CTA } from "@/components/cta";
import { JsonLd } from "@/components/json-ld";
import { articles, getArticle } from "@/content/insights";
import { absoluteUrl, operatorName, pageMetadata, siteName } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata(article.title, article.description, `/insights/${article.slug}`);
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const url = absoluteUrl(`/insights/${article.slug}`);
  const schema = {
    "@context": "https://schema.org", "@type": "Article", headline: article.title,
    description: article.description, author: { "@type": "Organization", name: siteName }, publisher: { "@type": "Organization", name: siteName },
    ...(url ? { mainEntityOfPage: url, url } : {}),
  };
  return <>
    <JsonLd data={schema} /><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: article.title, path: `/insights/${article.slug}` }])} />
    <article>
      <header className="page-hero"><div className="reading"><span className="eyebrow">{article.category}</span><h1>{article.title}</h1><p>{article.description}</p><div className="article-meta"><span>Martin Operational Strategy</span><span>Operating practice</span></div><Link className="text-link" href="/insights">All insights</Link></div></header>
      <div className="reading section--tight"><ArticleBody blocks={article.blocks} /></div>
    </article>
    <div className="reading" style={{ marginBottom: "2rem" }}><p className="field-hint">Written for founders evaluating operating leadership. Content is educational and should be applied to the company’s specific context.</p><p className="field-hint">{operatorName} · <Link href="/about">About the operator</Link></p></div>
    <CTA title="Is this pattern showing up in your company?" body="Talk through what is creating the bottleneck and what operating ownership would help." />
  </>;
}
