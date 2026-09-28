import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
const rateWindow = 60_000;
const rateLimit = 5;
const submissions = new Map<string, number[]>();

function clean(value: unknown, limit: number): string {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (submissions.get(forwarded) || []).filter((time) => now - time < rateWindow);
  if (recent.length >= rateLimit) return NextResponse.json({ message: "Please wait a minute before sending another request." }, { status: 429 });

  let data: Record<string, unknown>;
  try { data = await request.json() as Record<string, unknown>; }
  catch { return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 }); }

  if (clean(data.website, 500)) return NextResponse.json({ message: "Thanks. Your note has been received." });
  const name = clean(data.name, 120);
  const email = clean(data.email, 254);
  const company = clean(data.company, 160);
  const teamSize = clean(data.teamSize, 40);
  const challenge = clean(data.challenge, 3000);
  const timing = clean(data.timing, 1000);
  if (!name || !challenge || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Please provide your name, a valid email, and a little context about the challenge." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) {
    return NextResponse.json({ message: "The contact form is not configured yet. Please try again later." }, { status: 503 });
  }

  const message = [
    `Name: ${name}`, `Email: ${email}`, `Company: ${company || "Not provided"}`,
    `Team size: ${teamSize || "Not provided"}`, `Challenge: ${challenge}`, `Timing: ${timing || "Not provided"}`,
  ].join("\n\n");
  let delivery: Response;
  try {
    delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: sender, to: [recipient], reply_to: email, subject: `Operations Fit Call inquiry — ${name}`, text: message }),
    });
  } catch {
    return NextResponse.json({ message: "Your message could not be sent right now. Please try again shortly." }, { status: 502 });
  }
  if (!delivery.ok) return NextResponse.json({ message: "Your message could not be sent right now. Please try again shortly." }, { status: 502 });
  recent.push(now);
  submissions.set(forwarded, recent);
  return NextResponse.json({ message: "Thanks. Your note has been sent. We'll be in touch soon." });
}
