const DEFAULT_SITE_URL = "https://nextu.in";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;
  try {
    const parsed = new URL(raw.includes("://") ? raw : `https://${raw}`);
    return parsed.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
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
