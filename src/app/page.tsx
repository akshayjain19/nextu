import { AboutPreview } from "@/components/about-preview";
import { CategoryGrid } from "@/components/category-grid";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { JsonLd } from "@/components/json-ld";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { TrustStats } from "@/components/trust-stats";
import { WhyNextU } from "@/components/why-nextu";
import { faqJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <HowItWorks />
        <CategoryGrid />
        <WhyNextU />
        <AboutPreview />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
