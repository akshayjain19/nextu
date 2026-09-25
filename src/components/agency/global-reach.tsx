"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import dynamic from "next/dynamic";

const InteractiveGlobe = dynamic(
  () => import("@/components/globe").then((m) => m.InteractiveGlobe),
  {
    ssr: false,
    loading: () => (
      <div
        className="mx-auto flex size-[min(100%,420px)] items-center justify-center rounded-full bg-dusty/20"
        aria-hidden
      />
    ),
  },
);

export function GlobalReach() {
  return (
    <section className="overflow-hidden bg-canvas-warm py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Global reach</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Distributed teams.
              <br />
              Shared standards.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
              We collaborate across time zones with async rituals, clear
              documentation, and overlap where it matters. Markers on the globe
              are illustrative collaboration hubs—not office claims.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-0 rounded-full bg-dusty/30 blur-3xl"
                aria-hidden
              />
              <InteractiveGlobe className="relative" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
