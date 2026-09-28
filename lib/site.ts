export const siteName = "Martin Operational Strategy";
export const siteDescription =
  "Fractional COO and Integrator leadership for founder-led businesses that have outgrown founder-led operations.";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "";
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact#fit-call";
export const operatorName = "Jeff Martin";
export const locationLabel = "Atlanta, Georgia · Remote engagements available";

export function absoluteUrl(path: string): string | undefined {
  if (!siteUrl) return undefined;
  return new URL(path, `${siteUrl}/`).toString();
}

export function pageMetadata(title: string, description: string, path: string) {
  const canonical = absoluteUrl(path);
  return {
    title,
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: { title, description, ...(canonical ? { url: canonical } : {}) },
  };
}
