"use client";

import { AnimatedButton } from "@/components/animated-button";
import { MotionSection } from "@/components/ui/motion-section";
import { trackEvent } from "@/lib/analytics";
import { scrollToLeadForm } from "@/lib/scroll";

export function FinalCta() {
  function handleClick() {
    trackEvent("hero_cta_clicked", { location: "final_cta" });
    scrollToLeadForm();
  }

  return (
    <MotionSection className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary to-navy px-8 py-14 text-center text-primary-foreground sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]"
            aria-hidden
          />
          <h2 className="relative text-3xl font-semibold tracking-tight sm:text-4xl">
            Looking for someone who can help?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Tell us what you need. We&apos;ll find the right expert.
          </p>
          <AnimatedButton
            variant="secondary"
            size="lg"
            className="relative mt-8 border-white/20 bg-white text-navy hover:bg-white/95"
            onClick={handleClick}
          >
            Find My Expert →
          </AnimatedButton>
        </div>
      </div>
    </MotionSection>
  );
}
