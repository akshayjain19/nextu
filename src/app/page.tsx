import { AboutSection } from "@/components/nextu/about-section";
import { ExpertNetwork } from "@/components/nextu/expert-network";
import { FaqSection } from "@/components/nextu/faq";
import { FinalCta } from "@/components/nextu/final-cta";
import { HowItWorks } from "@/components/nextu/how-it-works";
import { NextUHero } from "@/components/nextu/hero";
import { TestimonialsSection } from "@/components/nextu/testimonials";
import { TrustSection } from "@/components/nextu/trust-section";
import { WhyNextU } from "@/components/nextu/why-nextu";
import { JsonLd } from "@/components/json-ld";
import { faqJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <main>
      <JsonLd data={faqJsonLd()} />
      <NextUHero />
      <TrustSection />
      <ExpertNetwork />
      <HowItWorks />
      <WhyNextU />
      <TestimonialsSection />
      <AboutSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
