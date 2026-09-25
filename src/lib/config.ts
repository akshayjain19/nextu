const DEFAULT_SITE_URL = "https://nextu.in";
const VERCEL_PRODUCTION_HOST = "nextu-nu.vercel.app";

function normalizeSiteUrl(value: string | undefined): string | null {
  const raw = value?.trim();
  if (!raw) return null;
  try {
    const parsed = new URL(raw.includes("://") ? raw : `https://${raw}`);
    return parsed.origin;
  } catch {
    return null;
  }
}

function resolveSiteUrl(): string {
  const fromPublicEnv = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  if (fromPublicEnv) return fromPublicEnv;

  const fromVercel = normalizeSiteUrl(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : undefined,
  );
  if (fromVercel) return fromVercel;

  return normalizeSiteUrl(`https://${VERCEL_PRODUCTION_HOST}`) ?? DEFAULT_SITE_URL;
}

export const siteConfig = {
  name: "NextU",
  brandLine: "Life Design & Transformation",
  tagline: "Tell us what you need. We'll find the right expert.",
  description:
    "NextU is Life Design & Transformation—helping you identify what needs attention in your life and connecting you with relevant experts for clarity, confidence, health, relationships, and personal growth.",
  url: resolveSiteUrl(),
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "917737283140",
  stats: {
    experts: "100+",
    customers: "1,000+",
  },
  social: {
    twitter: "#",
    linkedin: "#",
    instagram: "#",
    github: "#",
  },
  /** Replace with verified metrics when available — do not invent figures. */
  metrics: [] as { label: string; value: string }[],
} as const;

export const navLinks = [
  { href: "/#lead-form", label: "Find an Expert" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/about", label: "About Us" },
] as const;
