import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { FAQList } from "@/components/faq-list";
import { breadcrumbSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/site";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = pageMetadata("Fractional COO & Integrator FAQs", "Straight answers about fractional COO and Integrator roles, fit, EOS, company size, engagement cadence, pricing, and the first 90 days.", "/faq");
export default function FAQPage() {
  return <>
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQs", path: "/faq" }])} />
    <section className="page-hero"><div className="container"><span className="eyebrow">Useful answers, before a conversation</span><h1>Questions founders ask before bringing in an operator.</h1><p>How fractional COO and Integrator leadership works, who it fits, and what to expect from an engagement.</p></div></section>
    <section className="section section--tight"><div className="reading"><FAQList items={faqs} /></div></section>
    <CTA title="Still deciding what your company needs?" body="Bring the operating question that keeps landing back on your desk. We'll talk through the role and whether the timing makes sense." />
  </>;
}
