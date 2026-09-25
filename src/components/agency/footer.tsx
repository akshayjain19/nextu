import { AgencyLogo } from "@/components/agency/logo";
import { Container } from "@/components/ui/container";
import { navLinks, siteConfig } from "@/lib/config";
import { services } from "@/data/services";
import Link from "next/link";

export function AgencyFooter() {
  return (
    <footer className="border-t border-border bg-surface pt-16 pb-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <AgencyLogo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-muted">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-sm text-ink-muted hover:text-ink"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-soft">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-ink-soft">
            <a href={siteConfig.social.linkedin} className="hover:text-ink">
              LinkedIn
            </a>
            <a href={siteConfig.social.twitter} className="hover:text-ink">
              Twitter
            </a>
            <a href={siteConfig.social.github} className="hover:text-ink">
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
