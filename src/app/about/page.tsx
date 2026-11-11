import { AboutPageTracker } from "@/components/about-page-tracker";
import { FoundersSection } from "@/components/nextu/founders-section";
import { NextULogo } from "@/components/nextu/next-u-logo";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — ${siteConfig.brandLine}. Connecting you with experts for clarity, confidence, and personal growth.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageTracker />
      <div className="pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <NextULogo href={null} className="mb-6 max-h-12" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cobalt">
              {siteConfig.brandLine}
            </p>
            <h1 className="font-editorial mt-4 text-4xl font-semibold text-ink sm:text-5xl">
              We believe finding the right support shouldn&apos;t be complicated.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-ink-muted">
              NextU helps people identify areas of life that need improvement and
              connects them with relevant experts to support their transformation.
              We facilitate the connection—you work directly with independent
              professionals suited to your need.
            </p>
          </Reveal>
          <Reveal className="mt-12 flex gap-8" delay={0.08}>
            <div>
              <p className="text-4xl font-bold text-cobalt">{siteConfig.stats.experts}</p>
              <p className="text-sm text-ink-muted">Experts</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-cobalt">{siteConfig.stats.customers}</p>
              <p className="text-sm text-ink-muted">Customers</p>
            </div>
          </Reveal>
        </div>
      </div>
      <FoundersSection />
    </main>
  );
}
