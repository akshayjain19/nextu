"use client";

import { heroFloatingCards, networkGroups } from "@/data/expert-categories";
import { scrollToLeadForm } from "@/lib/scroll";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const cardTone = {
  sky: "bg-canvas-sky border-sky/30",
  white: "bg-surface border-border shadow-md",
  cobalt: "bg-cobalt/10 border-cobalt/20",
  navy: "bg-navy text-white border-navy",
};

export function ExpertNetwork() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="categories" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            One network.
            <br />
            So many kinds of expertise.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {networkGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06}>
              <article
                className={cn(
                  "rounded-3xl border p-6 transition-transform",
                  cardTone[group.tone],
                  i % 3 === 1 && "lg:translate-y-6",
                  i % 3 === 2 && "lg:-translate-y-3",
                )}
              >
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.examples.map((ex) => (
                    <li key={ex} className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-ink-muted">
                      {ex}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="relative mt-16 min-h-[200px]">
          {heroFloatingCards.slice(0, 4).map((card, i) => (
            <motion.div
              key={card.id}
              className="absolute rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg"
              style={{ left: `${10 + i * 22}%`, top: `${(i % 2) * 40}%`, rotate: card.rotate }}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold">{card.title}</span>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-12">
          <button
            type="button"
            onClick={scrollToLeadForm}
            className="text-sm font-semibold text-cobalt hover:underline"
          >
            Tell us what you need →
          </button>
        </Reveal>
      </div>
    </section>
  );
}
