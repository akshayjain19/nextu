import { AboutSection } from "@/components/nextu/about-section";
import { CoreInterventions } from "@/components/nextu/core-interventions";
import { ExpertIntervention } from "@/components/nextu/expert-intervention";
import { FaqSection } from "@/components/nextu/faq";
import { FinalCta } from "@/components/nextu/final-cta";
import { HowItWorks } from "@/components/nextu/how-it-works";
import { LifeDesignBridge } from "@/components/nextu/life-design-bridge";
import { NextUHero } from "@/components/nextu/hero";
import { TestimonialsSection } from "@/components/nextu/testimonials";
import { TrustSection } from "@/components/nextu/trust-section";
import { JsonLd } from "@/components/json-ld";
import { faqJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <main>
      <JsonLd data={faqJsonLd()} />
      <NextUHero />
      <LifeDesignBridge />
      <CoreInterventions />
      <ExpertIntervention />
      <HowItWorks />
      <TrustSection />
      <TestimonialsSection />
      <AboutSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
