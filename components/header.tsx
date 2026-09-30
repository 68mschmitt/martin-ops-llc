"use client";

import Image from "next/image";
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
          <Image className="brand-mark" src="/mo-logo-transparent.webp" alt="" width={545} height={289} />
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
