import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, personSchema } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";
import { absoluteUrl } from "@/lib/site";

const socialImage = absoluteUrl("/og");

export const metadata: Metadata = {
  title: {
    default: "Fractional COO & Integrator for Founder-Led Businesses | Martin Operational Strategy",
    template: "%s | Martin Operational Strategy",
  },
  description:
    "Embedded fractional COO and Integrator leadership for founder-led businesses ready for clearer accountability, stronger execution, and less founder dependency.",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  applicationName: "Martin Operational Strategy",
  openGraph: {
    type: "website",
    siteName: "Martin Operational Strategy",
    title: "Fractional COO & Integrator for Founder-Led Businesses",
    description: "An experienced operator in the seat—helping founder-led companies build the accountability and execution rhythm to grow with less founder dependency.",
    ...(socialImage ? { images: [socialImage] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Operational Strategy",
    description: "Fractional COO and Integrator leadership for founder-led businesses.",
    ...(socialImage ? { images: [socialImage] } : {}),
  },
};

export const viewport: Viewport = { themeColor: "#f4f6fa", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={personSchema()} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
