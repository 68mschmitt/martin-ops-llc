import { jsonLd } from "@/lib/structured-data";
export function JsonLd({ data }: { data: object }) { return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(data)} />; }
