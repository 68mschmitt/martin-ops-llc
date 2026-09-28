import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/cta";
import { JsonLd } from "@/components/json-ld";
import { assessmentDimensions } from "@/content/assessment";
import { breadcrumbSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("Founder Dependency & Operations Assessment", "Review ten practical dimensions of founder dependency and operating maturity, from decision ownership and leadership accountability to meeting effectiveness and execution.", "/operations-assessment");

export default function AssessmentPage() {
  return <>
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Operations Assessment", path: "/operations-assessment" }])} />
    <section className="page-hero"><div className="container"><span className="eyebrow">Founder dependency assessment</span><h1>Where does the company still depend on you to keep moving?</h1><p>A practical review of the operating conditions that create founder bottlenecks. Use these questions to identify where ownership, visibility, or management support may need attention.</p><div className="hero-actions"><Link className="button" href="/contact">Discuss your operating picture <span aria-hidden="true">↗</span></Link></div></div></section>
    <section className="section section--dark"><div className="container service-split"><div><span className="eyebrow">A directional tool</span><h2 style={{ marginTop: "1rem" }}>Start a useful conversation. Not a pseudo-scientific score.</h2></div><div className="content-stack"><p>This page is a structured starting point, not a diagnostic instrument with validated benchmarks. There are no hidden industry averages or automatic risk labels. For each dimension, consider where the business is today, what evidence you can point to, and what the operating cost is when it breaks down.</p><p>The dimensions can later support a guided assessment. Any future scoring will be directional, transparent about its limitations, and tied to practical next questions—not presented as a prediction or a certification.</p></div></div></section>
    <section className="section"><div className="container"><div className="assessment-grid">{assessmentDimensions.map((dimension, index) => <article className="assessment-dimension" key={dimension.title}><span className="eyebrow">0{index + 1} / 10</span><h3>{dimension.title}</h3><p>{dimension.prompt}</p></article>)}</div></div></section>
    <section className="section section--sage"><div className="container service-split"><div><span className="eyebrow">How to use it</span><h2 style={{ marginTop: "1rem" }}>Follow the evidence into one practical next step.</h2></div><div className="content-stack"><p>For each area, note an example from the last month. Where does work wait? What returns to the founder? Which meeting or handoff is absorbing time without moving a decision?</p><p>Choose one repeatable point of friction. Clarify what result matters, who should own it, what authority they need, and where the leadership team will review progress. A focused change gives the team something concrete to test.</p><Link className="text-link" href="/insights/signs-business-too-dependent-on-founder">Read: signs your business is too founder-dependent</Link></div></div></section>
    <CTA title="Want to work through the assessment together?" body="A fit call can help separate symptoms from the operating constraint underneath them—and identify whether ongoing operating leadership would help." />
  </>;
}
