import { FounderPlaceholder } from "@/components/founder-placeholder";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { MotionSection } from "@/components/ui/motion-section";
import { AboutPageTracker } from "@/components/about-page-tracker";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "NextU is making expertise easier to find. Learn about our mission to connect people with the right professionals.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      "We're making expertise easier to find—connecting people with professionals across fields.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutPageTracker />
      <Navbar />
      <main>
        <section className="border-b border-border/60 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.1),transparent)] pt-16 pb-12 sm:pt-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              We&apos;re making expertise easier to find.
            </h1>
          </div>
        </section>

        <MotionSection className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              NextU exists to simplify how people find professional help. Instead
              of jumping between directories, forums, and word-of-mouth, you tell
              us what you need—we use our network to help identify someone who
              can support you.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We believe expertise should feel accessible and human: clear
              communication, relevant matches, and a straightforward first step.
            </p>
          </div>
        </MotionSection>

        <MotionSection className="border-y border-border/60 bg-muted/25 py-14" delay={0.05}>
          <div className="mx-auto flex max-w-md justify-center gap-6 px-4">
            <div className="rounded-2xl border border-border bg-card px-8 py-5 text-center">
              <p className="text-3xl font-semibold text-primary">
                {siteConfig.stats.experts}
              </p>
              <p className="text-sm text-muted-foreground">Experts</p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-8 py-5 text-center">
              <p className="text-3xl font-semibold text-primary">
                {siteConfig.stats.customers}
              </p>
              <p className="text-sm text-muted-foreground">Customers</p>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="py-16 sm:py-20" delay={0.08}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold">Founder</h2>
            <div className="mt-8">
              <FounderPlaceholder />
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </>
  );
}
