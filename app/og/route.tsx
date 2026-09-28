import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "#f4f1ea", color: "#212925", padding: "66px 78px", border: "18px solid #e9e5dc" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 23, letterSpacing: 3, textTransform: "uppercase" }}><span style={{ width: 35, height: 35, border: "1px solid #212925", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 21 }}>M</span> MARTIN OPERATIONAL STRATEGY</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 70, lineHeight: 1.02, letterSpacing: -3, maxWidth: 950 }}><span>Your business has outgrown</span><span style={{ color: "#a3492e" }}>founder-led operations.</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: 2, textTransform: "uppercase", color: "#46514b" }}><span>Fractional COO · Fractional Integrator</span><span>Atlanta · Remote</span></div>
    </div>,
    { width: 1200, height: 630 },
  );
}
