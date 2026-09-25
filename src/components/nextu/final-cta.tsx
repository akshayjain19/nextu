"use client";

import { scrollToLeadForm } from "@/lib/scroll";
import { trackEvent } from "@/lib/analytics";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-canvas-sky to-cobalt/10 py-24 sm:py-32">
      <div className="relative mx-auto max-w-[1280px] px-5 text-center sm:px-8 lg:px-10">
        <h2 className="text-4xl font-bold text-navy sm:text-5xl">Ready to take the next step?</h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-ink-muted">
          Tell us what you need. We&apos;ll find the right expert.
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm text-ink-soft">
          From clarity and confidence to personal growth and specialized support,
          start with a conversation.
        </p>
        <button
          type="button"
          onClick={() => { trackEvent("hero_cta_clicked", { location: "final" }); scrollToLeadForm(); }}
          className="mt-8 rounded-2xl bg-cobalt px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-cobalt/30 hover:bg-cobalt-deep"
        >
          Find My Expert →
        </button>
      </div>
    </section>
  );
}
