"use client";

import { MotionSection } from "@/components/ui/motion-section";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Tell us what you need",
    description:
      "Share what you're looking for through a simple form.",
  },
  {
    step: "02",
    title: "We find the right expert",
    description:
      "Our network helps identify someone relevant to your requirement.",
  },
  {
    step: "03",
    title: "Get connected",
    description:
      "We'll help connect you with the expert and take it from there.",
  },
];

export function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionSection id="how-it-works" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          How it works
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A simple path from your question to the right professional.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((item, i) => (
            <motion.article
              key={item.step}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/25 hover:shadow-md hover:shadow-primary/5"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
            >
              <span className="text-xs font-semibold tracking-widest text-primary">
                {item.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
