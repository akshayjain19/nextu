"use client";

import { coreInterventions } from "@/data/interventions";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

export function CoreInterventions() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="interventions" className="section-spacing scroll-mt-28 bg-canvas">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cobalt">
            Life Design & Transformation
          </p>
          <h2 className="font-editorial mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Core interventions
          </h2>
          <p className="mt-4 max-w-xl text-ink-muted">
            Different challenges need different kinds of support. NextU helps
            connect you with experts across key areas of personal growth and
            transformation.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-min gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {coreInterventions.map((item, i) => {
            const Icon = item.icon;
            const span =
              item.layout === "large"
                ? "sm:col-span-2 lg:col-span-7"
                : item.layout === "medium"
                  ? "lg:col-span-5"
                  : "lg:col-span-4";
            return (
              <Reveal key={item.id} delay={i * 0.05} className={cn(span)}>
                <motion.article
                  className={cn(
                    "group h-full rounded-[1.5rem] border border-border bg-gradient-to-br from-surface to-elevated/80 p-6 sm:p-7",
                    item.layout === "large" && "lg:p-9",
                  )}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                >
                  <div
                    className={cn(
                      "mb-4 inline-flex items-center justify-center rounded-xl border border-cobalt/25 bg-cobalt/10 text-cobalt",
                      item.layout === "large" ? "size-14" : "size-11",
                    )}
                  >
                    <Icon className={item.layout === "large" ? "size-7" : "size-5"} />
                  </div>
                  <h3
                    className={cn(
                      "font-semibold text-ink",
                      item.layout === "large" ? "text-2xl" : "text-lg",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {item.description}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
