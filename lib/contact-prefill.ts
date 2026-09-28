const fieldLimits = {
  name: 120,
  email: 254,
  company: 160,
  teamSize: 40,
  challenge: 3000,
  timing: 1000,
} as const;

export type ContactPrefill = Partial<Record<keyof typeof fieldLimits, string>>;

export const contactPrefillTeamSizes = ["1–9", "10–25", "26–50", "51–75", "76+"] as const;

const allowedTeamSizes = new Set<string>(contactPrefillTeamSizes);
const maximumFragmentLength = 32_768;

export function parseContactPrefillFragment(hash: string): ContactPrefill | null {
  if (!hash.startsWith("#prefill=") || hash.length > maximumFragmentLength) return null;

  const encodedPayload = new URLSearchParams(hash.slice(1)).get("prefill");
  if (!encodedPayload) return null;

  try {
    const payload: unknown = JSON.parse(encodedPayload);
    if (typeof payload !== "object" || payload === null || Array.isArray(payload)) return null;

    const input = payload as Record<string, unknown>;
    const prefill: ContactPrefill = {};

    for (const [field, limit] of Object.entries(fieldLimits) as [keyof typeof fieldLimits, number][]) {
      const value = input[field];
      if (typeof value !== "string") continue;

      const cleanValue = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, limit);
      if (!cleanValue) continue;
      if (field === "teamSize" && !allowedTeamSizes.has(cleanValue)) continue;

      prefill[field] = cleanValue;
    }

    return Object.keys(prefill).length ? prefill : null;
  } catch {
    return null;
  }
}
