import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { fractionalCoo } from "@/content/services";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(fractionalCoo.title, fractionalCoo.description, fractionalCoo.path);
export default function FractionalCooPage() { return <ServicePage service={fractionalCoo} />; }
