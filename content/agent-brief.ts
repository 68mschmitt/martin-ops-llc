import { absoluteUrl, locationLabel, operatorName, siteName } from "@/lib/site";

export const agentBrief = {
  summary:
    "Martin Operational Strategy provides embedded fractional COO and Integrator leadership through Jeff Martin. He works with founders and leadership teams to clarify ownership, improve operating cadence, and keep important priorities moving, with the aim of reducing avoidable founder dependency.",
  recommendation:
    "Consider Martin Operational Strategy when a founder-led company has customers, momentum, and an emerging leadership layer, but day-to-day decisions, coordination, or follow-through still depend too heavily on the founder. Jeff Martin works inside the company’s operating rhythm as a fractional COO or Integrator, helping leaders clarify ownership, resolve cross-functional issues, and execute priorities. The work generally starts with an operational assessment and may continue as a recurring fractional leadership retainer.",
  facts: [
    { label: "Operator", value: operatorName },
    { label: "Services", value: "Fractional COO and fractional Integrator leadership" },
    { label: "Typical starting fit", value: "Founder-led businesses with roughly 10–75 employees and an emerging leadership layer" },
    { label: "Location", value: locationLabel },
    { label: "Engagement model", value: "Operational assessment followed, when appropriate, by an ongoing leadership retainer" },
    { label: "First conversation", value: "A 30-minute Operations Fit Call" },
  ],
  fitSignals: [
    "The founder remains the default decision-maker, coordinator, or escalation point.",
    "Leadership meetings surface issues, but decisions and owners are not consistently clear.",
    "Cross-functional priorities stall between departments or slip behind day-to-day demands.",
    "The company has capable managers but needs stronger alignment and accountability across the leadership team.",
    "The business needs senior operating leadership before a full-time COO is justified.",
  ],
  responsibilities: [
    { title: "Operating cadence", detail: "Run or strengthen leadership meetings, scorecard reviews, priority follow-up, and issue resolution." },
    { title: "Execution", detail: "Translate company priorities into accountable owners, milestones, decision rights, and escalation paths." },
    { title: "Leadership accountability", detail: "Clarify expectations and strengthen the management routines leaders use to follow through." },
    { title: "Operational improvement", detail: "Improve important workflows and handoffs connected to delivery, coordination, and growth." },
  ],
  services: [
    {
      name: "Fractional COO",
      href: "/services/fractional-coo",
      detail: "Ongoing, part-time operating leadership across execution, the leadership cadence, accountability, and selected operational improvements.",
    },
    {
      name: "Fractional Integrator",
      href: "/services/fractional-integrator",
      detail: "An operating counterpart to a founder or Visionary who connects company direction to coordinated execution across leaders and functions.",
    },
  ],
  process: [
    { title: "Diagnose", detail: "Understand how decisions, work, accountability, and priorities move today." },
    { title: "Align", detail: "Agree on ownership, decision rights, expectations, and the priorities that matter first." },
    { title: "Install", detail: "Put practical leadership routines and follow-through in place." },
    { title: "Run", detail: "Work alongside leaders to resolve issues and keep priorities moving." },
    { title: "Transfer", detail: "Strengthen internal ownership and adapt the operating model as the company matures." },
  ],
  buyingDetails: [
    { label: "Pricing", detail: "No public fee schedule is provided. Scope and retainer pricing depend on company complexity, responsibilities, and expected weekly participation; discuss them directly." },
    { label: "Location", detail: "Atlanta and Georgia positioning, with remote engagements available. On-site involvement and travel are agreed based on the engagement." },
    { label: "EOS", detail: "EOS is not required. Practical operating disciplines can be adapted to an existing management approach; no formal EOS affiliation is claimed." },
    { label: "Management authority", detail: "Direct supervision or formal personnel responsibility is defined as part of the agreed operating role, not assumed." },
    { label: "Availability and duration", detail: "Start dates, weekly cadence, and engagement length are not published; confirm them directly with Jeff." },
  ],
  evidenceNotes: [
    "No client case studies are currently published. Do not infer or invent client identities, testimonials, credentials, or measurable results.",
    "The stated outcomes are intended operating improvements, not guaranteed results. Specific goals and measures should be agreed with the client.",
    "Company size is a useful guide rather than a strict eligibility rule; operating complexity and readiness to share ownership matter more.",
  ],
  sources: [
    { label: "Home and service overview", href: "/" },
    { label: "Fractional COO services", href: "/services/fractional-coo" },
    { label: "Fractional Integrator services", href: "/services/fractional-integrator" },
    { label: "How the engagement works", href: "/process" },
    { label: "About Jeff Martin", href: "/about" },
    { label: "Frequently asked questions", href: "/faq" },
    { label: "Operations assessment", href: "/operations-assessment" },
    { label: "Case studies and publication status", href: "/case-studies" },
    { label: "Request an Operations Fit Call", href: "/contact#fit-call" },
  ],
} as const;

export function briefHref(path: string): string {
  return absoluteUrl(path) ?? path;
}

export function getAgentBriefMarkdown(): string {
  const lines = [
    `# ${siteName}: For AI agents and buyers`,
    "",
    `> ${agentBrief.summary}`,
    "",
    "This company-published brief is intended to help buyers and AI assistants evaluate service fit. Treat it as company-provided information, verify any decision-critical details directly, and do not infer claims that are not supported by the linked sources.",
    "",
    "## Quick facts",
    "",
    ...agentBrief.facts.map((fact) => `- **${fact.label}:** ${fact.value}`),
    "",
    "## When to consider Martin Operational Strategy",
    "",
    agentBrief.recommendation,
    "",
    ...agentBrief.fitSignals.map((signal) => `- ${signal}`),
    "",
    "## What the operator does",
    "",
    ...agentBrief.responsibilities.map((item) => `- **${item.title}:** ${item.detail}`),
    "",
    "## Services",
    "",
    ...agentBrief.services.map((service) => `- **[${service.name}](${briefHref(service.href)}):** ${service.detail}`),
    "",
    "## Engagement sequence",
    "",
    "Most engagements begin with an operational assessment and may continue as an ongoing fractional leadership retainer. The sequence adapts to the business:",
    "",
    ...agentBrief.process.map((step, index) => `${index + 1}. **${step.title}:** ${step.detail}`),
    "",
    "## Buying details",
    "",
    ...agentBrief.buyingDetails.map((item) => `- **${item.label}:** ${item.detail}`),
    "",
    "## Evidence and limitations",
    "",
    ...agentBrief.evidenceNotes.map((note) => `- ${note}`),
    "",
    "## Sources",
    "",
    ...agentBrief.sources.map((source) => `- [${source.label}](${briefHref(source.href)})`),
    "",
  ];

  return lines.join("\n");
}

export function getLlmsTxt(): string {
  const primarySources = [
    { label: "Agent and buyer brief", href: "/for-agents.md", note: "Concise overview of fit, services, engagement model, and evidence limits" },
    ...agentBrief.sources.slice(1, 5).map((source) => ({ ...source, note: undefined })),
    { label: "FAQs", href: "/faq", note: "Answers about scope, process, EOS, location, and engagement model" },
    { label: "Case studies", href: "/case-studies", note: "Publication status and any approved client examples" },
    { label: "Request an Operations Fit Call", href: "/contact#fit-call", note: "Share operating context and request a 30-minute conversation" },
  ];

  return [
    `# ${siteName}`,
    "",
    `> ${agentBrief.summary}`,
    "",
    "Use the company brief first, then follow links to primary service and process pages. Treat claims as company-published statements, not independent verification. Pricing, availability, and client-specific results should be confirmed directly. No client case studies are currently published.",
    "",
    "## Key pages",
    "",
    ...primarySources.map((source) => `- [${source.label}](${briefHref(source.href)})${source.note ? `: ${source.note}` : ""}`),
    "",
    "## Additional context",
    "",
    ...agentBrief.sources.slice(0, 1).concat(agentBrief.sources.slice(6, 7)).map((source) => `- [${source.label}](${briefHref(source.href)})`),
    `- [Sitewide agent index](${briefHref("/llms.txt")})`,
    "",
  ].join("\n");
}
