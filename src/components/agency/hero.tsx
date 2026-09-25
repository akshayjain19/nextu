"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function AgencyHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-28 pb-16 lg:min-h-[96vh] lg:pt-32">
      <div className="editorial-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-7">
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {siteConfig.studioDescriptor}
          </motion.p>
          <motion.h1
            className="mt-6 text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-ink"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            We build
            <br />
            digital products
            <br />
            <span className="text-accent-strong">people use.</span>
          </motion.h1>
          <motion.p
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {siteConfig.tagline} Strategy, design, and engineering for teams
            shipping web, mobile, and AI-powered software.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            <Button
              href="/contact"
              onClick={() => trackEvent("hero_primary_cta")}
            >
              Start a project
            </Button>
            <Button
              variant="secondary"
              href="/work"
              onClick={() => trackEvent("hero_secondary_cta")}
            >
              View selected work
            </Button>
          </motion.div>
        </div>

        <div className="relative lg:col-span-5 lg:min-h-[520px]">
          <motion.div
            className="relative mx-auto max-w-md lg:max-w-none lg:absolute lg:inset-0"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="absolute -right-4 top-8 z-10 w-[72%] rotate-2 shadow-xl shadow-ink/10 lg:-right-8">
              <Image
                src="/visuals/hero-fragment-dashboard.svg"
                alt=""
                width={420}
                height={280}
                className="w-full rounded-2xl border border-border bg-surface"
                priority
              />
            </div>
            <motion.div
              className="relative z-20 ml-auto w-[48%] -rotate-3"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/visuals/hero-fragment-mobile.svg"
                alt=""
                width={200}
                height={360}
                className="w-full drop-shadow-2xl"
              />
            </motion.div>
            <div className="absolute bottom-4 left-0 z-30 rounded-full border border-border bg-surface/90 px-4 py-2 text-xs text-ink-muted backdrop-blur-sm">
              Product · Web · Mobile · AI
            </div>
            <div className="absolute -left-2 top-1/3 hidden rounded-lg border border-dusty/50 bg-dusty/20 px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-accent-strong lg:block">
              In production
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
