"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { processSteps } from "@/data/process";
import { motion, useReducedMotion } from "framer-motion";

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="process" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionLabel>How we work</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            A vertical narrative—from question to launch.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-0">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <div
                className="grid gap-6 border-t border-border py-12 sm:grid-cols-[120px_1fr_280px] sm:gap-10"
              >
                <p className="text-5xl font-semibold tracking-tight text-dusty sm:text-6xl">
                  {step.step}
                </p>
                <div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-muted">
                    {step.description}
                  </p>
                </div>
                <motion.p
                  className="self-center text-sm leading-relaxed text-ink-soft sm:border-l sm:border-border sm:pl-8"
                  initial={reduceMotion ? false : { opacity: 0.6 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {step.accent}
                </motion.p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
