"use client";

import { siteConfig } from "@/lib/config";
import { Reveal } from "@/components/ui/reveal";
import { motion, useReducedMotion } from "framer-motion";

export function TrustSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #2563eb 0%, transparent 45%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Already helping people find the right connection.
          </h2>
        </Reveal>
        <div className="mt-14 flex flex-col gap-10 sm:flex-row sm:items-end sm:gap-20">
          {[
            { value: siteConfig.stats.experts, label: "Experts" },
            { value: siteConfig.stats.customers, label: "Customers" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -4 }}
              >
                <p className="text-[clamp(3.5rem,10vw,6rem)] font-bold leading-none tracking-tight text-sky">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">{stat.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
