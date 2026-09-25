"use client";

import { siteConfig } from "@/lib/config";
import { Reveal } from "@/components/ui/reveal";
import { motion, useReducedMotion } from "framer-motion";

export function TrustSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <p className="max-w-2xl text-lg text-ink-muted">
            A growing network of experts helping people across different areas of
            life and personal development.
          </p>
        </Reveal>
        <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:items-end sm:gap-20">
          {[
            { value: siteConfig.stats.experts, label: "Experts" },
            { value: siteConfig.stats.customers, label: "Customers" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <motion.div whileHover={reduceMotion ? undefined : { y: -4 }}>
                <p className="text-[clamp(3rem,9vw,5.5rem)] font-bold leading-none tracking-tight text-cobalt">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-ink-soft">{stat.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
