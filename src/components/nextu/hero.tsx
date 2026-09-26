"use client";

import { ExpertConstellation } from "@/components/nextu/expert-constellation";
import { LeadForm } from "@/components/nextu/lead-form";
import { siteConfig } from "@/lib/config";
import { scrollToLeadForm } from "@/lib/scroll";
import { trackEvent } from "@/lib/analytics";
import { motion, useReducedMotion } from "framer-motion";

export function NextUHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-blob relative overflow-x-clip pt-28 pb-10 lg:pb-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="order-1 lg:col-span-5 lg:pt-4">
            <motion.p
              className="text-[11px] font-bold uppercase tracking-[0.28em] text-cobalt-deep"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {siteConfig.brandLine}
            </motion.p>
            <motion.h1
              className="mt-4 text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.03em] text-navy"
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
              className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
            >
              Whether you&apos;re looking for clarity, confidence, healthier habits,
              stronger relationships or a specialist to help you move forward,
              tell us what you need and we&apos;ll help connect you with the right
              expert.
            </motion.p>
            <motion.button
              type="button"
              className="mt-6 hidden rounded-2xl bg-cobalt px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cobalt/20 hover:bg-cobalt-deep lg:inline-flex"
              onClick={() => {
                trackEvent("hero_cta_clicked");
                scrollToLeadForm();
              }}
            >
              Find My Expert →
            </motion.button>
          </div>

          <div className="relative order-2 lg:col-span-4 lg:min-h-[440px]">
            <ExpertConstellation />
          </div>

          <div className="relative z-10 order-3 lg:col-span-3 lg:-mt-2">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
