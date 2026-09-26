"use client";

import { FounderPortrait } from "@/components/nextu/founder-portrait";
import { founders, type Founder } from "@/data/founders";
import { siteConfig } from "@/lib/config";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

function FounderCard({ founder, index }: { founder: Founder; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group flex h-full flex-col"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: 0.12 + index * 0.08, ease }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
    >
      <div className="flex h-full flex-col rounded-[1.5rem] border border-border bg-surface p-5 sm:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-cobalt">
          {founder.categoryLabel}
        </p>
        <FounderPortrait
          name={founder.name}
          category={founder.category}
          initials={founder.initials}
          image={founder.image}
          className="mt-4"
        />
        <div className="mt-5 flex flex-1 flex-col">
          <header>
            <h3 className="text-lg font-semibold leading-snug text-ink sm:text-xl">
              {founder.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-ink-muted">
              {founder.designation}
            </p>
            {founder.secondaryDesignation && (
              <p className="mt-1 text-sm text-ink-soft">{founder.secondaryDesignation}</p>
            )}
          </header>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
            {founder.bio}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function DisciplineBridge({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <div className="relative my-10 hidden lg:block" aria-hidden>
      <svg
        className="mx-auto h-28 w-full max-w-4xl text-cobalt/50"
        viewBox="0 0 800 100"
        fill="none"
      >
        <motion.path
          d="M40 50 C 200 20, 600 20, 760 50"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0.3 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute left-[6%] top-4 text-[10px] font-bold tracking-widest text-ink-soft">
        AVIATION
      </div>
      <div className="absolute left-1/2 top-4 -translate-x-1/2 text-[10px] font-bold tracking-widest text-ink-soft">
        MEDICINE
      </div>
      <div className="absolute right-[6%] top-4 text-[10px] font-bold tracking-widest text-ink-soft">
        PSYCHOLOGY
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
        <p className="text-[10px] font-bold tracking-[0.35em] text-ink-soft">NEXTU</p>
        <p className="mt-1 text-xs font-medium text-ink-muted">{siteConfig.brandLine}</p>
      </div>
    </div>
  );
}

export function FoundersSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="section-spacing relative overflow-hidden bg-canvas-sky texture-grain"
      aria-labelledby="founders-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 45%), radial-gradient(circle at 80% 60%, color-mix(in srgb, var(--accent-highlight) 8%, transparent), transparent 40%)",
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-24 top-10 size-80 rounded-full bg-cobalt/10 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <motion.header
          className="max-w-3xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cobalt">
            Different perspectives. One mission.
          </p>
          <h2
            id="founders-heading"
            className="font-editorial mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-ink"
          >
            Meet the people behind NextU.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Three different professional journeys, brought together by one belief:
            finding the right guidance can change what comes next.
          </p>
        </motion.header>

        <DisciplineBridge reduceMotion={reduceMotion} />

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8">
          {founders.map((founder, i) => (
            <FounderCard key={founder.id} founder={founder} index={i} />
          ))}
        </div>

        <motion.div
          className="mt-14 text-center lg:mt-16"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          <p className="font-editorial text-[clamp(1.75rem,4.5vw,3rem)] font-semibold leading-tight tracking-tight text-ink">
            Different paths.
            <br />
            <span className="text-cobalt">One mission.</span>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            From the cockpit to the clinic to the world of psychology, NextU brings
            together perspectives that help people move forward.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 rounded-[1.5rem] border border-border bg-surface p-7 text-center sm:mt-14 sm:p-9"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15, ease }}
        >
          <p className="text-lg font-semibold text-ink">Different expertise. One place to start.</p>
          <p className="mt-3 text-ink-muted">{siteConfig.tagline}</p>
          <Link
            href="/#lead-form"
            className="mt-7 inline-flex min-h-[52px] items-center justify-center rounded-xl bg-cobalt px-8 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-sky"
          >
            Find My Expert →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
