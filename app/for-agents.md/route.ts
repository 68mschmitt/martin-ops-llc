import { getAgentBriefMarkdown } from "@/content/agent-brief";

export const dynamic = "force-static";

export function GET() {
  return new Response(getAgentBriefMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
