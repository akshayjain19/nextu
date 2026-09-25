export const siteConfig = {
  name: "NextU",
  tagline: "Tell us what you need. We'll find the right expert.",
  description:
    "NextU connects you with professionals across healthcare, technology, business, and specialized fields. Tell us what you need and we'll find the right expert.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nextu.in",
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

export const navLinks = [
  { href: "/#lead-form", label: "Find an Expert" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/about", label: "About Us" },
] as const;
