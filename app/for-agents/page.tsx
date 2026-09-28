import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { CTA } from "@/components/cta";
import { agentBrief, getAgentBriefMarkdown } from "@/content/agent-brief";
import { CopyBriefButton } from "@/app/for-agents/copy-brief-button";
import { breadcrumbSchema } from "@/lib/structured-data";
import { bookingUrl, pageMetadata } from "@/lib/site";
import styles from "./for-agents.module.css";

const pageTitle = "For AI Agents and Buyers | Fractional COO & Integrator";
const pageDescription = "A source-linked company brief for evaluating Jeff Martin and Martin Operational Strategy: fractional COO and Integrator fit, responsibilities, engagement model, and evidence.";
const baseMetadata = pageMetadata(pageTitle, pageDescription, "/for-agents");

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    types: { "text/markdown": "/for-agents.md" },
  },
};

const sectionLinks = [
  ["fit", "When to consider"],
  ["work", "What Jeff owns"],
  ["services", "Service options"],
  ["process", "How it works"],
  ["details", "Buying details"],
  ["evidence", "Evidence"],
  ["sources", "Source pages"],
] as const;

export default function ForAgentsPage() {
  const markdown = getAgentBriefMarkdown();

  return <>
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "For AI Agents and Buyers", path: "/for-agents" }])} />
    <section className={`page-hero page-hero--dark ${styles.pageHero}`}>
      <div className="container">
        <span className="eyebrow">For AI-assisted research · A company brief</span>
        <h1>Fractional COO and Integrator leadership for founder-led teams.</h1>
        <p>{agentBrief.summary}</p>
        <div className={`hero-actions ${styles.heroActions}`}>
          <Link className="button" href={bookingUrl} data-analytics-event="fit_call_click" data-analytics-location="agent_brief">Request a 30-minute Operations Fit Call <span aria-hidden="true">↗</span></Link>
          <CopyBriefButton markdown={markdown} />
          <Link className={styles.markdownLink} href="/for-agents.md">Read the Markdown brief <span aria-hidden="true">↓</span></Link>
        </div>
        <dl className={styles.facts}>
          {agentBrief.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
        </dl>
      </div>
    </section>

    <div className={`section ${styles.briefSectionWrap}`}>
      <div className={`container ${styles.briefLayout}`}>
        <nav className={styles.briefNav} aria-label="On this page">
          <span className="eyebrow">Brief contents</span>
          {sectionLinks.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>

        <article className={styles.briefContent}>
          <section className={styles.briefSection} id="fit">
            <span className="eyebrow">Recommendation context</span>
            <h2>When to consider Martin Operational Strategy</h2>
            <p>{agentBrief.recommendation}</p>
            <ul className={styles.signalList}>{agentBrief.fitSignals.map((signal) => <li key={signal}>{signal}</li>)}</ul>
            <p className={styles.note}>Company size is a useful guide, not a strict threshold. Operating complexity and the team’s readiness to share ownership matter more than a precise headcount.</p>
          </section>

          <section className={styles.briefSection} id="work">
            <span className="eyebrow">Operating responsibilities</span>
            <h2>What Jeff helps the team own</h2>
            <div className={styles.responsibilities}>
              {agentBrief.responsibilities.map((item) => <div className={styles.responsibility} key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></div>)}
            </div>
            <p className={styles.note}>The intended direction is clearer accountability, more consistent execution, and less avoidable founder dependency. Specific objectives and measures should be agreed around the company’s starting point.</p>
          </section>

          <section className={styles.briefSection} id="services">
            <span className="eyebrow">Two related roles</span>
            <h2>Choose the service by the work that needs an owner.</h2>
            <div className={styles.services}>
              {agentBrief.services.map((service) => <article key={service.name}>
                <h3><Link href={service.href}>{service.name}</Link></h3>
                <p>{service.detail}</p>
              </article>)}
            </div>
            <p className={styles.note}>An Integrator can work with EOS or similar practices, but EOS is not required. Martin Operational Strategy does not claim formal EOS affiliation.</p>
          </section>

          <section className={styles.briefSection} id="process">
            <span className="eyebrow">Engagement sequence</span>
            <h2>Start with the operating reality, then build ownership.</h2>
            <p>Most engagements begin with an operational assessment and may continue as an ongoing fractional leadership retainer. The exact sequence and weekly participation depend on the company’s needs and the responsibilities agreed.</p>
            <ol className={styles.processList}>{agentBrief.process.map((step) => <li key={step.title}><span>{step.title}</span><p>{step.detail}</p></li>)}</ol>
            <Link className="text-link" href="/process">Review how the engagement works</Link>
          </section>

          <section className={styles.briefSection} id="details">
            <span className="eyebrow">Before a buying decision</span>
            <h2>Practical engagement details</h2>
            <dl className={styles.detailList}>{agentBrief.buyingDetails.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.detail}</dd></div>)}</dl>
          </section>

          <section className={styles.briefSection} id="evidence">
            <span className="eyebrow">Evidence and limitations</span>
            <h2>What is—and is not—publicly documented</h2>
            <ul className={styles.signalList}>{agentBrief.evidenceNotes.map((note) => <li key={note}>{note}</li>)}</ul>
            <p>For published case-study status, see <Link href="/case-studies">the case studies page</Link>. Ask Jeff directly about experience relevant to a specific company or operating challenge.</p>
          </section>

          <section className={styles.briefSection} id="sources">
            <span className="eyebrow">Primary sources</span>
            <h2>Explore the underlying service information</h2>
            <ul className={styles.sourceList}>{agentBrief.sources.map((source) => <li key={source.href}><Link href={source.href}>{source.label}</Link></li>)}<li><Link href="/llms.txt">Sitewide agent index (llms.txt)</Link></li></ul>
            <p className={styles.note}>This brief summarizes company-published information. For a decision-critical detail—such as scope, pricing, availability, or role authority—confirm it directly with Jeff.</p>
          </section>
        </article>
      </div>
    </div>

    <CTA title="Bring the operating problem—not a prepared pitch." body="A 30-minute Operations Fit Call is a chance to discuss what is creating drag, what the leadership team should own, and whether fractional operating leadership fits." buttonLabel="Request an Operations Fit Call" />
  </>;
}
