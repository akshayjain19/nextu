"use client";

import { AnimatedButton } from "@/components/animated-button";
import { MotionSection } from "@/components/ui/motion-section";
import { categoryCards } from "@/data/expert-categories";
import { scrollToLeadForm } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  HeartPulse,
  Plane,
  Rocket,
  Sparkles,
} from "lucide-react";

const iconMap = {
  health: HeartPulse,
  career: Sparkles,
  tech: Rocket,
  business: Briefcase,
  specialized: Plane,
};

export function CategoryGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionSection id="categories" className="scroll-mt-24 bg-muted/20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Experts for whatever you&apos;re looking for.
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Browse by area—or tell us your exact need in the form.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoryCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.article
                key={card.id}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
              >
                <div
                  className={cn(
                    "mb-4 inline-flex size-10 items-center justify-center rounded-xl border border-border bg-muted/50 text-primary transition-colors group-hover:border-primary/20 group-hover:bg-primary/5",
                  )}
                >
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {card.examples.map((ex) => (
                    <li
                      key={ex}
                      className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-dashed border-border bg-card/50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base font-medium">Looking for something else?</p>
          <AnimatedButton variant="secondary" onClick={scrollToLeadForm}>
            Tell us what you need →
          </AnimatedButton>
        </div>
      </div>
    </MotionSection>
  );
}
