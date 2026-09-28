import Link from "next/link";
import { bookingUrl } from "@/lib/site";

type CtaProps = { title?: string; body?: string; buttonLabel?: string; className?: string };

export function CTA({
  title = "Your company should grow without requiring more of you every month.",
  body = "Let's identify what's creating operational drag and whether embedded leadership is the right next step.",
  buttonLabel = "Book an Operations Fit Call",
  className = "",
}: CtaProps) {
  return <section className={`section--tight ${className}`}><div className="container"><div className="cta-panel">
    <div><span className="eyebrow">A practical next step</span><h2>{title}</h2><p>{body}</p></div>
    <Link className="button" href={bookingUrl} data-analytics-event="fit_call_click" data-analytics-location="closing_cta">{buttonLabel}<span aria-hidden="true">↗</span></Link>
  </div></div></section>;
}
