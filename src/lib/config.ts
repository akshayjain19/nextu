export const siteConfig = {
  name: "NextU",
  tagline: "Tell us what you need. We'll find the right expert.",
  description:
    "NextU connects you with verified professionals across healthcare, technology, business, and specialized fields. Tell us what you need and we'll find the right expert.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nextu.in",
  /** WhatsApp business number in international format without + (e.g. 919876543210) */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919876543210",
  stats: {
    experts: "100+",
    customers: "1,000+",
  },
  social: {
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
} as const;
