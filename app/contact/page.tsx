import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { CTA } from "@/components/cta";
import { breadcrumbSchema } from "@/lib/structured-data";
import { bookingUrl, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("Book an Operations Fit Call", "Share what is creating operational drag. In a 30-minute conversation, discuss your goals and whether fractional COO or Integrator leadership is the right fit.", "/contact");

export default function ContactPage() {
  return <>
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
    <section className="page-hero"><div className="container"><span className="eyebrow">A low-pressure first conversation</span><h1>Talk through what’s making operations harder than they should be.</h1><p>Share a little context and request an Operations Fit Call. We’ll discuss what is creating operational drag, what you want to change, and whether embedded operating leadership is the right fit.</p></div></section>
    <section className="section section--tight" id="fit-call"><div className="container form-layout">
      <aside className="form-note"><span className="eyebrow">30 minutes · No deck required</span><h2>Bring the problem that’s on your mind.</h2><p>This is a working conversation about your business, not a high-pressure sales presentation.</p><ul><li>Where decisions and work are getting stuck</li><li>What you want the leadership team to own</li><li>Whether a fractional COO or Integrator role fits</li></ul><p className="field-hint">Use the form to request a conversation. If the role looks like a fit, the next step is to coordinate a time.</p></aside>
      <div><ContactForm />{bookingUrl !== "/contact" && bookingUrl !== "/contact#fit-call" ? <p style={{ marginTop: "1.5rem" }}>Prefer to schedule directly? <a href={bookingUrl} data-analytics-event="fit_call_click" data-analytics-location="contact">Choose an Operations Fit Call time</a>.</p> : null}</div>
    </div></section>
    <CTA title="Not sure which role you need?" body="That's a useful place to start. Bring the work that is not getting owned and we can talk through what kind of operating support makes sense." />
  </>;
}
