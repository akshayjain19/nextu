"use client";

import { MotionSection } from "@/components/ui/motion-section";
import { siteConfig } from "@/lib/config";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { label: "Experts", value: siteConfig.stats.experts },
  { label: "Customers", value: siteConfig.stats.customers },
];

export function TrustStats() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionSection className="border-y border-border/60 bg-muted/30 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 px-4 sm:gap-6 sm:px-6 lg:px-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex min-w-[140px] flex-col items-center rounded-2xl border border-border bg-card px-8 py-5 shadow-sm"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            whileHover={reduceMotion ? undefined : { y: -2 }}
          >
            <span className="text-3xl font-semibold tracking-tight text-primary">
              {stat.value}
            </span>
            <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  );
}
