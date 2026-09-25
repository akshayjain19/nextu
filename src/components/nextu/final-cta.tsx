"use client";

import { heroFloatingCards } from "@/data/expert-categories";
import { scrollToLeadForm } from "@/lib/scroll";
import { trackEvent } from "@/lib/analytics";
import { motion, useReducedMotion } from "framer-motion";

export function FinalCta() {
  const reduceMotion = useReducedMotion();
  const cards = heroFloatingCards.slice(0, 5);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-canvas-sky to-cobalt/15 py-24 sm:py-32">
      <div className="relative mx-auto max-w-[1280px] px-5 text-center sm:px-8 lg:px-10">
        <div className="pointer-events-none relative mx-auto mb-12 h-48 max-w-lg" aria-hidden>
          <div className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt shadow-lg" />
          {cards.map((card, i) => {
            const angle = (i / cards.length) * Math.PI * 2;
            const x = 50 + Math.cos(angle) * 38;
            const y = 50 + Math.sin(angle) * 38;
            return (
              <motion.div
                key={card.id}
                className="absolute rounded-xl border border-border bg-surface px-2 py-1 text-[10px] font-semibold shadow-md"
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                transition={{ duration: 3 + i * 0.2, repeat: Infinity }}
              >
                {card.title}
              </motion.div>
            );
          })}
        </div>
        <h2 className="text-4xl font-bold text-navy sm:text-5xl">Someone out there can help.</h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-ink-muted">
          Tell us what you need. We&apos;ll find the right expert.
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
