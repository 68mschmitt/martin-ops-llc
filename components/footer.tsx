import Link from "next/link";
import { bookingUrl, locationLabel, siteName } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-intro">
          <Link className="brand" href="/" aria-label={`${siteName} home`}>
            <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M3 19V5l9 9 9-9v14M3 5h4m10 0h4" stroke="currentColor" strokeWidth="1.5" /></svg></span>
            <span className="brand-name">Martin<small>Operational Strategy</small></span>
          </Link>
          <p>Embedded operational leadership for founder-led businesses ready to grow with less founder dependency.</p>
        </div>
        <div><p className="footer-heading">Explore</p><div className="footer-links">
          <Link href="/services/fractional-coo">Fractional COO</Link><Link href="/services/fractional-integrator">Fractional Integrator</Link><Link href="/process">How we work</Link><Link href="/operations-assessment">Operations assessment</Link>
        </div></div>
        <div><p className="footer-heading">More</p><div className="footer-links">
          <Link href="/case-studies">Case studies</Link><Link href="/insights">Insights</Link><Link href="/about">About Jeff</Link><Link href="/faq">FAQs</Link><Link href={bookingUrl}>Book an Operations Fit Call</Link>
          <span className="muted" style={{ fontSize: ".8rem", marginTop: ".35rem" }}>{locationLabel}</span>
        </div></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Martin Operational Strategy</span><span>Clear ownership. Stronger execution. Less founder dependency.</span></div>
    </footer>
  );
}
