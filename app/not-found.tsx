import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><span className="eyebrow" style={{ justifyContent: "center" }}>404 · Not found</span><h1>This page is off the org chart.</h1><p>The page may have moved. Start with the operating questions founders bring here most.</p><div className="hero-actions" style={{ justifyContent: "center" }}><Link className="button" href="/">Back to home</Link><Link className="button button--outline" href="/services/fractional-coo">Explore fractional COO</Link></div></section>;
}
