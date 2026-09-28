export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  blocks: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "signs-business-too-dependent-on-founder",
    title: "7 signs your business is too dependent on you",
    description: "A practical way to spot founder dependency in decisions, management, meetings, priorities, and cross-functional work—and where to begin reducing it.",
    category: "Founder dependency",
    blocks: [
      { type: "paragraph", text: "A business can grow while its founder becomes more central to everything. Revenue rises, the team expands, and customers keep coming—but more decisions, exceptions, and coordination land on the same desk. That is not a character flaw or a sign that the founder needs to work harder. It is an operating design problem." },
      { type: "heading", text: "Look for the pattern, not one bad week" },
      { type: "paragraph", text: "Founder dependency is easy to miss because it often looks like responsiveness. The founder is helpful, knows the context, and can make a decision quickly. Over time, though, the organization learns to wait. A quick answer today can create a queue tomorrow." },
      { type: "list", items: ["People ask you to approve decisions their role should cover.", "Managers bring you problems before they have options or a recommendation.", "Projects slow down when you are unavailable.", "Leadership meetings repeat updates but avoid the decisions underneath them.", "Teams disagree about priorities because no one has resolved the trade-off.", "You are the only person who remembers important commitments and exceptions.", "A planned day away creates a backlog or a string of messages." ] },
      { type: "heading", text: "Why another delegation push rarely fixes it" },
      { type: "paragraph", text: "Telling people to take more ownership does not establish what they can decide, what result they own, or when they should escalate. If those boundaries are unclear, a careful manager will keep checking. If the leadership team does not revisit priorities, people will protect their own function and let cross-functional work drift." },
      { type: "paragraph", text: "The fix is usually not a bigger delegation list. It is clarity around decision rights, manager expectations, shared priorities, and the operating cadence where commitments and issues are reviewed." },
      { type: "callout", text: "A useful first question: What decision or handoff moved back to the founder this week—and what made that the safest path for the team?" },
      { type: "heading", text: "Start with one recurring point of dependency" },
      { type: "paragraph", text: "Choose a recurring approval, escalation, or handoff—not the most dramatic exception. Write down the outcome that matters, who should own the decision, the guardrails they need, and what information belongs in the leadership review. Then let the team practice the new boundary and review what happened." },
      { type: "paragraph", text: "Repeat the cycle with a few meaningful patterns. The aim is not for the founder to disappear from the business. It is for the company to make more appropriate decisions at the level where the context and accountability sit." },
    ],
  },
  {
    slug: "fractional-coo-vs-full-time-coo",
    title: "Fractional COO vs. full-time COO: how to choose",
    description: "Compare a fractional COO and full-time COO by operating need, organizational complexity, leadership capacity, and the work that must be owned—not a revenue rule of thumb.",
    category: "Choosing an operating role",
    blocks: [
      { type: "paragraph", text: "The difference between a fractional COO and a full-time COO is not simply a smaller company versus a larger one. It is whether the business has a defined, full-time operating mandate—and whether the leadership work available is substantial enough to justify a permanent executive role." },
      { type: "heading", text: "What both roles should do" },
      { type: "paragraph", text: "Either role should help the company execute. That can include aligning leaders on priorities, clarifying who owns decisions, resolving issues that cross functions, maintaining useful visibility into performance, and strengthening manager accountability. A title without real operating ownership does not solve the founder bottleneck." },
      { type: "heading", text: "When a fractional COO can make sense" },
      { type: "paragraph", text: "Fractional leadership can be useful when the company needs an experienced operator now but does not need—or is not yet ready to support—a full-time COO. The founder gets continuity and direct senior involvement while the company focuses on a clearly scoped set of operating needs." },
      { type: "list", items: ["The business has an existing leadership layer but inconsistent coordination.", "The founder is still the default escalation point.", "The operating priorities are identifiable, but not yet owned consistently.", "A permanent role's scope is still unclear and needs to be tested.", "The company can benefit from senior operating leadership without filling a full-time seat." ] },
      { type: "heading", text: "When full-time leadership may be the better answer" },
      { type: "paragraph", text: "A full-time COO is more likely to fit when the operating remit is broad and continuous, the organization needs daily executive presence, or the COO must own substantial people, financial, or delivery responsibilities. The company should be able to define the authority, outcomes, and support attached to that seat—not just hope that a senior hire will absorb undefined work." },
      { type: "callout", text: "Before comparing cost or availability, list the outcomes and decisions the operating leader must own in the next year." },
      { type: "heading", text: "A fractional engagement can clarify the permanent role" },
      { type: "paragraph", text: "An embedded fractional COO can help the founder and leadership team see what the role actually requires. Which decisions need executive ownership? Where is the manager layer strong or thin? What work needs daily presence? A clearer operating model can make a future COO search more specific and improve the handoff." },
      { type: "paragraph", text: "The right choice is about the work, authority, and continuity the company needs. If those questions are hard to answer, start by assessing the operating constraints rather than picking a title." },
    ],
  },
  {
    slug: "first-90-days-fractional-coo",
    title: "What should happen in the first 90 days with a fractional COO?",
    description: "A grounded first-90-days framework for a fractional COO: understand actual operating friction, align leaders, install a few useful routines, and begin running them together.",
    category: "The engagement",
    blocks: [
      { type: "paragraph", text: "The first 90 days with a fractional COO should produce a clearer way to operate—not a large set of recommendations the team has to implement alone. The exact work depends on the company, but a useful sequence moves from understanding the current reality to shared ownership and consistent execution." },
      { type: "heading", text: "Weeks 1–3: understand how work actually moves" },
      { type: "paragraph", text: "Begin with founder and leadership conversations. Review the company priorities, existing meeting rhythm, scorecards, roles, key handoffs, and work that is stuck. Pay attention to the points where decisions return to the founder or fall between functions." },
      { type: "paragraph", text: "The outcome is an operating baseline: where the founder is carrying the system, where managers have room to decide, and which few constraints are limiting execution now. This is not an audit of every process." },
      { type: "heading", text: "Weeks 3–6: make ownership and priorities explicit" },
      { type: "paragraph", text: "The founder and leadership team agree on the most important operating changes. Clarify who owns the decisions and results, which priorities take precedence, what information leaders need to review, and how issues will be resolved." },
      { type: "list", items: ["A short list of near-term priorities, each with an accountable owner.", "A clear leadership cadence with a purpose for each review.", "Decision boundaries and escalation expectations for managers.", "A practical scorecard focused on measures the team can act on." ] },
      { type: "heading", text: "Weeks 6–12: install, run, and adjust" },
      { type: "paragraph", text: "The fractional COO participates in the agreed operating cadence, follows commitments, and helps leaders work through issues. New routines will surface friction. Adjust the format and measures based on what helps the team make decisions and move work—not to preserve a template." },
      { type: "callout", text: "The 90-day measure is not the number of meetings added. It is whether ownership, decisions, and follow-through are becoming more reliable." },
      { type: "heading", text: "What a strong start should leave behind" },
      { type: "paragraph", text: "At the end of the first 90 days, leaders should share a clearer view of what matters and who owns it. Issues should have a path to resolution. The founder should see fewer avoidable escalations, and the company should have a practical next plan for developing managers and reducing dependency." },
      { type: "paragraph", text: "That is the beginning of an operating system, not a claim that the business is finished changing. The retainer continues only where ongoing operating leadership still creates value." },
    ],
  },
];

export function getArticle(slug: string) { return articles.find((article) => article.slug === slug); }
