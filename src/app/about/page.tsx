import { AboutPageTracker } from "@/components/about-page-tracker";
import { FounderPlaceholder } from "@/components/founder-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — making expertise easier to find.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="pt-28 pb-24">
      <AboutPageTracker />
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <h1 className="text-4xl font-bold text-navy sm:text-5xl">
            We&apos;re making expertise easier to find.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-ink-muted">
            NextU is an expert-discovery platform. You tell us what you need—we
            use our network to help connect you with a relevant professional.
            No accounts, no booking flow in V1: just a simple request via WhatsApp.
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
        <Reveal className="mt-16" delay={0.12}>
          <h2 className="text-2xl font-semibold">Founder</h2>
          <div className="mt-6">
            <FounderPlaceholder />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
