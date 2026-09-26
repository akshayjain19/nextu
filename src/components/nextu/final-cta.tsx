"use client";

import { scrollToLeadForm } from "@/lib/scroll";
import { trackEvent } from "@/lib/analytics";

export function FinalCta() {
  return (
    <section className="section-spacing relative overflow-hidden border-t border-border bg-canvas texture-grain">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 text-center sm:px-8 lg:px-10">
        <h2 className="font-editorial text-4xl font-semibold text-ink sm:text-5xl">
          Ready to take the next step?
        </h2>
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
          className="mt-8 rounded-2xl bg-cobalt px-8 py-4 text-sm font-semibold text-on-accent shadow-md shadow-black/30 transition-colors hover:bg-sky"
        >
          Find My Expert →
        </button>
      </div>
    </section>
  );
}
