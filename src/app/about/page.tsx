import { FounderPlaceholder } from "@/components/founder-placeholder";
import { ProcessSection } from "@/components/agency/process-section";
import { WhyUs } from "@/components/agency/why-us";
import { AboutPageTracker } from "@/components/about-page-tracker";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — product and technology studio.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageTracker />
      <section className="pt-28 pb-16">
        <Container>
          <Reveal>
            <SectionLabel>About</SectionLabel>
            <h1 className="mt-4 max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
              We&apos;re a studio for teams who care how software feels.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-muted">
              {siteConfig.description}
            </p>
          </Reveal>
        </Container>
      </section>
      <WhyUs />
      <ProcessSection />
      <section className="pb-24">
        <Container>
          <Reveal>
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold">Founder</h2>
            <div className="mt-8">
              <FounderPlaceholder />
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
