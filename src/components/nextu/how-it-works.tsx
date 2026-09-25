"use client";

import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Tell us what you need",
    copy: "Share what you're looking for through a simple form.",
  },
  {
    n: "02",
    title: "We understand the right kind of support",
    copy: "Based on your requirement, we help identify the right area of expertise.",
  },
  {
    n: "03",
    title: "Get connected",
    copy: "We connect you with the relevant expert and take it from there.",
  },
];

export function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="scroll-mt-28 bg-canvas-sky py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">How it works</h2>
        </Reveal>
        <div className="relative mt-14">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-cobalt/20 lg:left-1/2 lg:block" aria-hidden />
          <ul className="space-y-12 lg:space-y-20">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <li
                  className={cn(
                    "relative grid gap-6 lg:grid-cols-2 lg:items-center",
                    i % 2 === 1 && "lg:text-right",
                  )}
                >
                  <motion.div
                    className={cn("flex items-center gap-4", i % 2 === 1 && "lg:order-2 lg:justify-end")}
                    whileHover={reduceMotion ? undefined : { x: i % 2 ? -6 : 6 }}
                  >
                    <span className="text-6xl font-bold text-cobalt/25 sm:text-7xl">{step.n}</span>
                    <div className={i % 2 === 1 ? "lg:text-right" : ""}>
                      <h3 className="text-2xl font-semibold text-navy">{step.title}</h3>
                      <p className="mt-2 max-w-md text-ink-muted">{step.copy}</p>
                    </div>
                  </motion.div>
                  <div
                    className={cn(
                      "hidden h-20 rounded-3xl border border-dashed border-cobalt/25 bg-surface/60 lg:block",
                      i % 2 === 1 && "lg:order-1",
                    )}
                    aria-hidden
                  />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
