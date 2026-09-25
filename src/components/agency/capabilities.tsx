"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { services } from "@/data/services";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const visualGradients: Record<string, string> = {
  product: "from-[#E5EDF3] to-[#B2C8DA]",
  web: "from-[#DDE6EE] to-[#9DA1A4]",
  mobile: "from-[#171616] to-[#606263]",
  ai: "from-[#3D5F7C] to-[#B2C8DA]",
  design: "from-[#F4F7FA] to-[#E5EDF3]",
  data: "from-[#606263] to-[#B2C8DA]",
};

export function Capabilities() {
  const [active, setActive] = useState(services[0].id);
  const activeService = services.find((s) => s.id === active) ?? services[0];
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-y border-border bg-surface py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Services as an editorial system.
            </h2>
            <p className="mt-4 text-ink-muted">
              Hover or focus a capability to preview its visual panel—no generic
              icon grid.
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="grid gap-8 lg:grid-cols-2">
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service.id}>
                    <button
                      type="button"
                      className={cn(
                        "group flex w-full items-baseline justify-between gap-4 border-b border-border py-4 text-left transition-colors",
                        active === service.id
                          ? "text-ink"
                          : "text-ink-muted hover:text-ink",
                      )}
                      onMouseEnter={() => {
                        setActive(service.id);
                        trackEvent("service_selected", { service: service.id });
                      }}
                      onFocus={() => setActive(service.id)}
                    >
                      <span className="text-lg font-medium">{service.title}</span>
                      <span className="text-xs uppercase tracking-widest text-ink-soft opacity-0 transition-opacity group-hover:opacity-100">
                        →
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-border">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    className={cn(
                      "absolute inset-0 flex flex-col justify-end bg-gradient-to-br p-8",
                      visualGradients[activeService.visual],
                    )}
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="text-sm font-semibold uppercase tracking-widest text-ink/70">
                      {activeService.title}
                    </p>
                    <p className="mt-3 text-lg leading-relaxed text-ink">
                      {activeService.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeService.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-surface/50 px-3 py-1 text-xs text-ink-muted backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
