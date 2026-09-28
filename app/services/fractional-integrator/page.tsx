import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { fractionalIntegrator } from "@/content/services";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(fractionalIntegrator.title, fractionalIntegrator.description, fractionalIntegrator.path);
export default function FractionalIntegratorPage() { return <ServicePage service={fractionalIntegrator} />; }
