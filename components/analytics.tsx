"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
  }
}

const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const source = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC || "https://plausible.io/js/script.js";

export function Analytics() {
  useEffect(() => {
    if (!domain) return;
    const track = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLElement>("[data-analytics-event]");
      const name = link?.dataset.analyticsEvent;
      if (name) window.plausible?.(name, { props: { location: link.dataset.analyticsLocation || "site" } });
    };
    document.addEventListener("click", track);
    return () => document.removeEventListener("click", track);
  }, []);

  if (!domain) return null;
  return <Script src={source} data-domain={domain} strategy="afterInteractive" />;
}
