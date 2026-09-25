"use client";

import { ExpertConstellation } from "@/components/nextu/expert-constellation";
import { LeadForm } from "@/components/nextu/lead-form";
import { motion, useReducedMotion } from "framer-motion";

export function NextUHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-blob relative overflow-hidden pt-28 pb-16 lg:pb-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="order-1 lg:col-span-5 lg:pt-6">
            <motion.h1
              className="text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.03em] text-navy"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Tell us what you need.
              <br />
              We&apos;ll find the{" "}
              <span className="relative inline-block">
                <span className="relative z-10">right expert.</span>
                <span
                  className="absolute -inset-x-1 bottom-1 z-0 h-[0.45em] rounded-sm bg-sky/60"
                  aria-hidden
                />
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              From healthcare and personal development to technology, marketing
              and specialized expertise, tell us what you&apos;re looking for and
              we&apos;ll help connect you with someone who can.
            </motion.p>
          </div>

          <div className="relative order-2 lg:col-span-4 lg:min-h-[480px]">
            <ExpertConstellation />
          </div>

          <div className="relative z-10 order-3 lg:col-span-3 lg:-mt-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
