import { AgencyFinalCta } from "@/components/agency/final-cta";
import { AgencyHero } from "@/components/agency/hero";
import { Capabilities } from "@/components/agency/capabilities";
import { FeaturedWork } from "@/components/agency/featured-work";
import { GlobalReach } from "@/components/agency/global-reach";
import { InsightsPreview } from "@/components/agency/insights-preview";
import { ProcessSection } from "@/components/agency/process-section";
import { TrustStrip } from "@/components/agency/trust-strip";
import { WhatWeBuild } from "@/components/agency/what-we-build";
import { WhyUs } from "@/components/agency/why-us";

export default function HomePage() {
  return (
    <main>
      <AgencyHero />
      <TrustStrip />
      <WhatWeBuild />
      <FeaturedWork />
      <ProcessSection />
      <Capabilities />
      <WhyUs />
      <GlobalReach />
      <InsightsPreview />
      <AgencyFinalCta />
    </main>
  );
}
