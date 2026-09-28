import type { MetadataRoute } from "next";
import { articles } from "@/content/insights";
import { caseStudies } from "@/content/case-studies";
import { absoluteUrl, siteUrl } from "@/lib/site";

const staticPaths = ["/", "/services/fractional-coo", "/services/fractional-integrator", "/process", "/operations-assessment", "/case-studies", "/about", "/insights", "/faq", "/contact", "/atlanta-fractional-coo"];

export default function sitemap(): MetadataRoute.Sitemap {
  // An empty sitemap avoids publishing an invented canonical host before deployment is configured.
  if (!siteUrl) return [];
  const paths = [...staticPaths, ...articles.map((article) => `/insights/${article.slug}`), ...caseStudies.filter((study) => study.approvedForPublication).map((study) => `/case-studies/${study.slug}`)];
  return paths.map((path) => ({ url: absoluteUrl(path)! }));
}
