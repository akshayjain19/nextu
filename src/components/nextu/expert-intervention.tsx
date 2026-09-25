"use client";

import { expertInterventionTypes } from "@/data/expert-interventions";
import { scrollToLeadForm } from "@/lib/scroll";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

export function ExpertIntervention() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-navy py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Expert intervention</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Based on the plan, you work with experts such as:
          </p>
          <p className="mt-2 max-w-xl text-sm text-white/60">
            NextU understands your need, identifies the relevant area of support,
            and helps connect you with an appropriate expert—not as employees of
            NextU, but as independent professionals in our network.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {expertInterventionTypes.map((expert, i) => {
            const Icon = expert.icon;
            return (
              <Reveal key={expert.id} delay={i * 0.04}>
                <motion.li
                  className={cn(
                    "flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm",
                    i % 3 === 1 && "lg:translate-y-3",
                  )}
                  whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cobalt/30 text-sky">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-medium leading-snug">{expert.label}</span>
                </motion.li>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10">
          <button
            type="button"
            onClick={scrollToLeadForm}
            className="text-sm font-semibold text-sky hover:underline"
          >
            Tell us what you need →
          </button>
        </Reveal>
      </div>
    </section>
  );
}
