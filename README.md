# Martin Operational Strategy

A content-led business site for Jeff Martin's fractional COO and Integrator practice. Built on the Next.js App Router with TypeScript, server-rendered pages, CSS design tokens, structured TypeScript content, and a small client-side contact form. There is no CMS or runtime UI framework.

## Architecture

- `app/` — App Router pages, the contact route handler, sitemap, robots, and social image.
- `components/` — shared navigation, footer, CTA, FAQ, article, contact, analytics, and schema components.
- `content/` — typed services, FAQs, insight articles, assessment dimensions, case-study model/template, and the shared agent brief.
- `lib/site.ts` — brand constants, canonical URL, booking destination, metadata helper.
- `lib/structured-data.ts` — centralized JSON-LD builders for organization/person, services, breadcrumbs.
- `app/globals.css` — design tokens and responsive layout system. Typography uses local system stacks; there are no remote font or image requests.
- `/og` — generated social-card image route, referenced only when the production origin is configured.

## Local development and checks

Requirements: Node.js 20.19+ (or 22.13+) and npm.

```sh
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm start
```

The project targets a Node.js-compatible Next.js host (for example, Vercel or a Node server). The contact route needs a Node runtime and outbound HTTPS to Resend.

## Environment variables

Copy `.env.example` to `.env.local` for local or deployment configuration.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production origin, e.g. `https://your-verified-domain`. Required for absolute canonicals, sitemap entries, and allowing crawler indexing. Until set, robots disallows crawling and sitemap is empty by design. |
| `NEXT_PUBLIC_BOOKING_URL` | Verified Calendly/Cal.com (or other scheduler) URL. Without it, fit-call CTAs go to `/contact#fit-call`. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional Plausible site domain. Analytics stays off when unset. |
| `NEXT_PUBLIC_PLAUSIBLE_SRC` | Optional self-hosted/proxy script URL; defaults to Plausible's hosted script when analytics is enabled. |
| `RESEND_API_KEY` | Server-only Resend API key for contact form delivery. |
| `CONTACT_TO_EMAIL` | Verified recipient mailbox for inquiry submissions. |
| `CONTACT_FROM_EMAIL` | Resend-verified sender address. |

The form validates input server-side, limits field length/body size, includes a honeypot and a basic in-memory per-IP throttle. The throttle is best-effort and instance-local; use a shared rate-limit store or provider-level protection if traffic warrants it. No email address, domain, physical address, phone number, proof point, or booking destination has been guessed. Configure and test the delivery path before launch.

## Publishing content

### Insights

Add an entry to `content/insights.ts` with a unique `slug`, title, search description, category, and ordered content blocks (`paragraph`, `heading`, `list`, or `callout`). Article pages and sitemap paths are generated from this typed source; add internal links in service pages and related articles where useful. No date is emitted unless one is factually supplied.

### Case studies

Add complete data to `content/case-studies.ts`, then set `approvedForPublication: true` only after the client has approved attribution and each scope/result/quote is verified. `content/case-study-template.md` is the intake checklist. Drafts are not rendered or included in the sitemap. Do not invent metrics or imply an EOS affiliation.

### Agent brief

Edit `content/agent-brief.ts` to maintain the company brief shared by `/for-agents`, `/for-agents.md`, and `/llms.txt`. Keep the HTML and Markdown facts aligned with published services, FAQs, and case studies. Confirm prices, availability, credentials, and client outcomes before adding them; the brief explicitly records when evidence is not publicly available. The brief also documents the contact prefill fragment contract (`/contact#prefill=<URI-encoded JSON object>`); supported keys, field limits, and accepted team-size options are enforced by `lib/contact-prefill.ts` and `components/contact-form.tsx`.

### FAQs and services

Edit `content/faqs.ts` for visible accordion answers and FAQPage JSON-LD (the same items are used for both). Edit `content/services.ts` for fractional COO/Integrator descriptions. Add or update service structured data through the shared `ServicePage` and `lib/structured-data.ts` utilities.

### Brand, booking, and navigation

- Update name, descriptions, operator, location label, and booking fallback in `lib/site.ts`.
- Update menu links in `components/header.tsx` and footer links in `components/footer.tsx`.
- Configure verified site/booking URLs and form delivery through environment variables rather than editing CTA instances.
- Adjust color, typography, sizing, and breakpoints in `app/globals.css` variables and responsive rules.

### SEO and structured data

Page titles/descriptions/canonicals are set per route through `pageMetadata`. JSON-LD is centralized in `lib/structured-data.ts`; visible FAQs have corresponding FAQPage data, article pages have Article data, and service pages have Service data. Do not add a physical address, social profile, certification, review, or metric until confirmed. Set `NEXT_PUBLIC_SITE_URL` to the verified canonical origin before deployment; check `/robots.txt` and `/sitemap.xml` after release.

## Launch inputs that need verification

- Confirm the production domain, preferred canonical host, and redirects (there is no existing URL inventory in the repository).
- Set the booking scheduler URL and test the full booking path.
- Verify response-time expectations and configure Resend with a verified recipient/sender; test valid, invalid, and failed delivery.
- Confirm approved founder biography, role history, experience, EOS-related credentials/affiliation, client permissions, testimonials, and measurable outcomes before publishing any proof.
- Confirm whether any address or service-area details should be published. The current local positioning is Atlanta/Georgia plus remote and does not expose a street address.

## Design and performance notes

The visual system is intentionally lean: parchment and ink, a rust accent, serif editorial headings, mono operational labels, fine rules, CSS diagrams, and system font stacks. No stock photography, remote web fonts, analytics script (unless explicitly configured), or global animation library is loaded. Interactions use semantic links, native details/summary FAQ disclosure, and small client components for the mobile menu, optional analytics, and contact form.
