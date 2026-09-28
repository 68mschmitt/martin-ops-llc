import Link from "next/link";
import { CTA } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { bookingUrl, locationLabel } from "@/lib/site";
import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata(
  "Fractional COO & Integrator for Founder-Led Businesses",
  "Your business has outgrown founder-led operations. Get embedded fractional COO or Integrator leadership to clarify ownership, strengthen accountability, and make execution more predictable.",
  "/",
);

const symptoms = [
  "You are pulled into decisions your team should be able to own.",
  "Leadership meetings generate discussion but not enough resolution.",
  "Projects stall between departments, with no one holding the whole thread.",
  "Everyone is busy, but the most important priorities still slip.",
  "Critical processes live in people's heads instead of being repeatable.",
  "Managers escalate problems because decision rights are unclear.",
];

const operatorWork = [
  "Run or strengthen the leadership operating cadence.",
  "Turn company priorities into owned work, clear milestones, and follow-through.",
  "Clarify decision rights, roles, and what each leader is accountable for.",
  "Build scorecards that help the team spot and act on issues early.",
  "Surface cross-functional friction and keep important issues moving toward resolution.",
  "Develop managers and improve the operating routines the business relies on.",
];

const steps = [
  ["01", "Diagnose", "See how decisions, work, and accountability move today."],
  ["02", "Align", "Agree on ownership, priorities, expectations, and useful measures."],
  ["03", "Install", "Put a practical operating cadence and follow-through in place."],
  ["04", "Run", "Work alongside leaders to resolve issues and keep priorities moving."],
  ["05", "Transfer", "Strengthen internal ownership as the company and team mature."],
];

export default function HomePage() {
  return <>
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Fractional COO · Fractional Integrator</span>
          <h1>Your business has outgrown <em><span className="no-break">founder-led</span> operations.</em></h1>
          <p className="hero-copy">Martin Operational Strategy provides embedded operational leadership for growing founder-led businesses that need clearer accountability, stronger execution, and an experienced second-in-command—without hiring a full-time COO.</p>
          <div className="hero-actions"><Link className="button" href={bookingUrl} data-analytics-event="fit_call_click" data-analytics-location="home_hero">Book an Operations Fit Call <span aria-hidden="true">↗</span></Link><Link className="button button--outline" href="/process">See how it works <span aria-hidden="true">↓</span></Link></div>
          <div className="hero-meta"><span>Embedded, not advisory</span><span>Founder-led businesses</span><span>Atlanta + remote</span></div>
        </div>
        <div className="operating-graphic" role="img" aria-label="Operating system diagram: leadership, priorities, managers, and execution connect through a central operating rhythm">
          <span className="graphic-label">A clearer operating system / 01</span>
          <i className="flow-line flow-line--one" /><i className="flow-line flow-line--two" /><i className="flow-line flow-line--three" /><i className="flow-line flow-line--four" />
          <div className="flow-core"><strong>Operating<br />rhythm</strong><span>Shared visibility</span></div>
          <div className="flow-node flow-node--top"><strong>Leadership</strong><small>Alignment</small></div>
          <div className="flow-node flow-node--right"><strong>Priorities</strong><small>Ownership</small></div>
          <div className="flow-node flow-node--bottom"><strong>Managers</strong><small>Accountability</small></div>
          <div className="flow-node flow-node--left"><strong>Execution</strong><small>Follow-through</small></div>
          <span className="graphic-note">From founder hub → shared ownership</span>
        </div>
      </div>
    </section>

    <div className="ticker"><div className="container ticker-inner"><span>Fractional COO</span><span>Fractional Integrator</span><span>Leadership accountability</span><span>Predictable execution</span><span>{locationLabel}</span></div></div>

    <section className="section"><div className="container symptom-layout">
      <div className="symptom-intro"><span className="eyebrow">The founder bottleneck</span><h2>When the founder becomes the operating system, growth starts to cost too much.</h2><p>You approve the work, connect the teams, remember the commitments, settle the disagreements, and make sure things get finished. It works—until every new layer of growth adds another route back to you.</p><Link className="text-link" href="/operations-assessment">Explore the founder dependency assessment</Link></div>
      <div className="symptom-list">{symptoms.map((item, index) => <div className="symptom-item" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div>
    </div></section>

    <section className="section section--dark"><div className="container">
      <SectionHeading eyebrow="The shift" title="Build a company that executes without routing everything through you." body="The goal is not more process. It is a leadership team with the clarity and rhythm to carry more of the business together." wide />
      <div className="shift-grid">
        <article className="shift-card"><span className="eyebrow">Today · Founder-dependent</span><h3>The founder is the connective tissue.</h3><ul><li>Decisions collect at the top</li><li>Priorities compete for attention</li><li>Managers wait for direction</li><li>Issues return to the next meeting</li></ul></article>
        <div className="shift-arrow" aria-hidden="true">→</div>
        <article className="shift-card shift-card--after"><span className="eyebrow">Next · Leadership-owned</span><h3>Leaders own the operating work.</h3><ul><li>Decision ownership is explicit</li><li>Priorities have accountable owners</li><li>Managers resolve more at their level</li><li>Issues move to a clear resolution</li></ul></article>
      </div>
    </div></section>

    <section className="section"><div className="container operator-grid">
      <div className="operator-copy"><span className="eyebrow">Embedded operational leadership</span><h2>Not another advisor. An operator in the seat.</h2><p>A consultant can recommend what to change. A fractional COO or Integrator helps the team make the change happen. Martin works inside your operating rhythm—not from the sidelines—to turn priorities into execution.</p><Link className="text-link" href="/services/fractional-coo">What a fractional COO owns</Link></div>
      <div className="operator-list">{operatorWork.map((item, index) => <div className="operator-row" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div>
    </div></section>

    <section className="section section--sage"><div className="container">
      <SectionHeading eyebrow="A practical path" title="From operational friction to a functioning execution system." body="The work adapts to your team and complexity. The sequence gives everyone a shared view of what happens after we start." />
      <div className="steps-grid">{steps.map(([number, title, body]) => <article className="step" key={number}><span className="step-number">{number} / 05</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      <p style={{ marginTop: "1.4rem" }}><Link className="text-link" href="/process">See the first 90 days and beyond</Link></p>
    </div></section>

    <section className="section"><div className="container fit-grid">
      <div><span className="eyebrow">A strong fit</span><h2>Built for companies with traction—and operational growing pains.</h2><p>Most relevant when the business has customers, managers, and momentum, but day-to-day execution still depends too heavily on the founder.</p></div>
      <div className="fit-checks"><div className="fit-check">A team of roughly 10–75 people</div><div className="fit-check">A founder still deep in daily decisions</div><div className="fit-check">An existing leadership or manager layer</div><div className="fit-check">Growth creating more coordination work</div><div className="fit-check">Execution—not demand—is the constraint</div><div className="fit-check">COO-level leadership before a full-time hire</div><div className="fit-check">Service or operationally complex business</div><div className="fit-check">An appetite for shared accountability</div></div>
    </div></section>

    <section className="section section--dark section--tight"><div className="container two-col">
      <div><span className="eyebrow">Direct operator access</span><h2 style={{ margin: "1rem 0" }}>Experienced leadership, sized to the stage you’re in.</h2></div>
      <p style={{ margin: 0, fontSize: "1.08rem" }}>Work directly with Jeff Martin in the operating rhythm of your business. Engagements typically begin with an operational assessment, then continue as a recurring fractional leadership retainer shaped around your needs and weekly involvement.</p>
    </div></section>

    <CTA />
  </>;
}
