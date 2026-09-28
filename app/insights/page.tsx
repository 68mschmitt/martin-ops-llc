import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content/insights";
import { CTA } from "@/components/cta";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("Operations Insights for Founder-Led Businesses", "Practical guidance on founder dependency, fractional COO roles, operating cadence, leadership accountability, and predictable execution.", "/insights");

export default function InsightsPage() {
  return <>
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }])} />
    <section className="page-hero"><div className="container"><span className="eyebrow">Field notes for founders</span><h1>Practical thinking about how the business runs.</h1><p>Clear guidance for founders working through operating complexity, leadership accountability, and the question of what an experienced operator should own.</p></div></section>
    <section className="section section--tight"><div className="container"><div className="article-grid">{articles.map((article) => <Link className="article-card" href={`/insights/${article.slug}`} key={article.slug}><span className="eyebrow">{article.category}</span><h2>{article.title}</h2><p>{article.description}</p><span className="text-link">Read article</span></Link>)}</div></div></section>
    <CTA title="Need help applying this inside the business?" body="An Operations Fit Call is a working conversation about your current operating constraints and the leadership role that could help." />
  </>;
}
