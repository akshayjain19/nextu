import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

const footerLinks = [
  { href: "/#lead-form", label: "Find an Expert" },
  { href: "/about", label: "About Us" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline} Expert discovery across healthcare, technology,
              business, and specialized fields.
            </p>
            <div className="mt-6 flex gap-4 text-sm text-muted-foreground">
              <a href={siteConfig.social.twitter} className="hover:text-foreground">
                Twitter
              </a>
              <a href={siteConfig.social.linkedin} className="hover:text-foreground">
                LinkedIn
              </a>
              <a href={siteConfig.social.instagram} className="hover:text-foreground">
                Instagram
              </a>
            </div>
          </div>
          <nav className="grid grid-cols-2 gap-3 text-sm sm:justify-items-end">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-12 border-t border-border pt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
