"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/config";
import { motion, useReducedMotion } from "framer-motion";

export function AgencyFinalCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-ink" aria-hidden />
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 30%, #3D5F7C, transparent 60%)",
        }}
        animate={reduceMotion ? undefined : { opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <Container className="relative">
        <h2 className="max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-surface">
          Have a product in mind?
          <br />
          Let&apos;s build it.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-surface/75">
          Tell us about your roadmap, timeline, and team. We&apos;ll respond with
          next steps—not a generic pitch deck.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button
            href="/contact"
            className="bg-surface text-ink hover:bg-canvas-warm"
          >
            Start a project
          </Button>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-surface/80 underline-offset-4 hover:text-surface hover:underline"
          >
            {siteConfig.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
