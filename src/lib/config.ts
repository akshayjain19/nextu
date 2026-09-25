export const siteConfig = {
  name: "NextU",
  studioDescriptor: "Product & technology studio",
  tagline: "We design and build digital products with clarity, craft, and momentum.",
  description:
    "NextU is an independent product and technology studio. We partner with teams to ship web apps, mobile experiences, AI workflows, and the platforms behind them.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nextu.in",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@nextu.in",
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
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;
