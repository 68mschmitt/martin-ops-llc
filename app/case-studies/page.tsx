import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/cta";
import { JsonLd } from "@/components/json-ld";
import { caseStudies } from "@/content/case-studies";
import { breadcrumbSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("Fractional COO Case Studies", "See how fractional operational leadership is structured. Client case studies are published only when the company, scope, and results can be verified and approved.", "/case-studies");

export default function CaseStudiesPage() {
  return <>
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }])} />
    <section className="page-hero"><div className="container"><span className="eyebrow">Evidence over claims</span><h1>Operational change should be specific enough to examine.</h1><p>Useful case studies show the starting situation, what the operator actually owned, what changed, and how the result was measured. Client examples belong here only after those details and publication permission are confirmed.</p></div></section>
    <section className="section section--tight"><div className="container">
      {caseStudies.filter((study) => study.approvedForPublication).length ? <div className="article-grid">{caseStudies.filter((study) => study.approvedForPublication).map((study) => <Link className="article-card" key={study.slug} href={`/case-studies/${study.slug}`}><span className="eyebrow">{study.industry}</span><h2>{study.client}</h2><p>{study.startingSituation}</p><span className="text-link">Read the case study</span></Link>)}</div> : <div className="notice" style={{ maxWidth: "800px" }}><strong>No client case studies are published yet.</strong><br />Client identities, operating scope, and outcomes will be shared only after they are confirmed and approved. In the meantime, review the engagement model or talk with Jeff directly about the work your company needs.</div>}
      <div className="link-grid" style={{ marginTop: "2rem", maxWidth: "800px" }}><Link className="link-card" href="/process"><div><h3>How the work is structured</h3><p>See the sequence from assessment through embedded execution.</p></div><span className="text-link">View the process</span></Link><Link className="link-card" href="/about"><div><h3>Meet the operator</h3><p>Understand how Jeff works with founders, leaders, and managers.</p></div><span className="text-link">About Jeff Martin</span></Link></div>
    </div></section>
    <CTA title="Ask about work relevant to your company." body="Share your industry, team, and current operating challenge. Jeff can discuss whether his role and experience fit what you're facing." />
  </>;
}
