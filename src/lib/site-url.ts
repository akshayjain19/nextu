/** Canonical site origin — never empty (required for metadataBase / SEO). */
export const SITE_URL = "https://nextu-nu.vercel.app";

const FALLBACK_URL = SITE_URL;

function normalizeSiteUrl(value: string | undefined): string | null {
  const raw = value?.trim();
  if (!raw) return null;
  try {
    const parsed = new URL(raw.includes("://") ? raw : `https://${raw}`);
    if (!parsed.origin || parsed.origin === "null") return null;
    return parsed.origin;
  } catch {
    return null;
  }
}

export function resolveSiteUrl(): string {
  const candidates = [
    normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
    normalizeSiteUrl(
      process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
    ),
    normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined),
    FALLBACK_URL,
  ];

  for (const candidate of candidates) {
    if (candidate) return candidate;
  }

  return FALLBACK_URL;
}
