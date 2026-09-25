"use client";

import { Reveal } from "@/components/ui/reveal";
import { motion, useReducedMotion } from "framer-motion";

const points = [
  { title: "One place", copy: "Experts across multiple fields." },
  { title: "Human connection", copy: "More than just a list of search results." },
  { title: "Relevant expertise", copy: "We start with what you actually need." },
  { title: "Simple process", copy: "No complicated booking or registration." },
];

export function WhyNextU() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
        <Reveal>
          <div className="relative aspect-[4/5] max-h-[520px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-canvas-sky via-surface to-cobalt/10">
            <div className="absolute inset-8 rounded-3xl border border-dashed border-cobalt/25" aria-hidden />
            <div className="absolute bottom-10 left-10 right-10 rounded-2xl bg-navy p-6 text-white shadow-xl">
              <p className="text-sm uppercase tracking-widest text-sky">NextU</p>
              <p className="mt-2 text-2xl font-semibold">Your need → the right person</p>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Finding expertise shouldn&apos;t feel like a search project.
            </h2>
          </Reveal>
          <ul className="mt-10 space-y-6">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <motion.li
                  className="border-l-2 border-cobalt/30 pl-5"
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                >
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-ink-muted">{p.copy}</p>
                </motion.li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
