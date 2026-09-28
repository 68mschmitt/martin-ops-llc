"use client";

import Link from "next/link";
import { useState } from "react";
import { bookingUrl } from "@/lib/site";

const links = [
  { href: "/services/fractional-coo", label: "Services" },
  { href: "/process", label: "How it works" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Martin Operational Strategy home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M3 19V5l9 9 9-9v14M3 5h4m10 0h4" stroke="currentColor" strokeWidth="1.5" /></svg></span>
          <span className="brand-name">Martin<small>Operational Strategy</small></span>
        </Link>
        <button className="mobile-menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
          <span aria-hidden="true" />{open ? "Close" : "Menu"}
        </button>
        <nav className="primary-nav" id="primary-navigation" aria-label="Main navigation" data-open={open}>
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link className="button" href={bookingUrl} data-analytics-event="fit_call_click" data-analytics-location="navigation" onClick={() => setOpen(false)}>Book a Fit Call <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
