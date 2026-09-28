import { absoluteUrl, operatorName, siteDescription, siteName } from "@/lib/site";

export type Breadcrumb = { name: string; path: string };

export function organizationSchema() {
  const url = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    name: siteName,
    description: siteDescription,
    ...(url ? { url } : {}),
    founder: { "@type": "Person", name: operatorName, jobTitle: "Fractional COO and Integrator" },
    areaServed: [{ "@type": "AdministrativeArea", name: "Georgia" }, { "@type": "Country", name: "United States" }],
    knowsAbout: ["Fractional COO services", "Operational leadership", "Leadership accountability", "Business operations", "Fractional Integrator services"],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: operatorName,
    jobTitle: "Fractional COO and Integrator",
    worksFor: { "@type": "Organization", name: siteName },
    knowsAbout: ["Business operations", "Leadership cadence", "Operational execution", "Founder-led companies"],
  };
}

export function breadcrumbSchema(items: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(absoluteUrl(item.path) ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@type": "Organization", name: siteName, ...(absoluteUrl("/") ? { url: absoluteUrl("/") } : {}) },
    ...(absoluteUrl(path) ? { url: absoluteUrl(path) } : {}),
    areaServed: { "@type": "AdministrativeArea", name: "Georgia" },
  };
}

export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
