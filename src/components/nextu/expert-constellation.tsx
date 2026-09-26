"use client";

import { HeroCentralVisual } from "@/components/nextu/hero-central-visual";
import { heroExpertCards, type HeroExpertCard } from "@/data/expert-categories";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const toneClass: Record<HeroExpertCard["tone"], string> = {
  white: "bg-surface/95 text-ink border-border shadow-md shadow-navy/8",
  sky: "bg-canvas-sky/95 text-ink border-sky/30 shadow-md shadow-navy/6",
  navy: "bg-navy/90 text-white border-navy",
  cobalt: "bg-cobalt text-white border-cobalt-deep shadow-lg shadow-cobalt/25",
};

const FLOAT_DURATION = 5.2;

function ExpertCard({
  card,
  delay,
  className,
}: {
  card: HeroExpertCard;
  delay: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "w-[148px] rounded-2xl border px-3.5 py-3 text-left sm:w-[156px]",
        toneClass[card.tone],
        card.accent && "ring-2 ring-cobalt/20",
        className,
      )}
      style={{ rotate: `${card.rotate}deg` }}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={
        reduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: [0, -3, 0] }
      }
      transition={{
        opacity: { delay, duration: 0.45 },
        y: {
          delay: 1 + delay,
          duration: FLOAT_DURATION + delay * 0.2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <span className="text-base" aria-hidden>{card.icon}</span>
      <p className="mt-1.5 text-sm font-semibold leading-snug">{card.title}</p>
      <p className="text-[10px] font-medium uppercase tracking-wide opacity-75">
        {card.category}
      </p>
    </motion.div>
  );
}

export function ExpertConstellation() {
  const reduceMotion = useReducedMotion();
  const [career, nutrition, mental, speaking] = heroExpertCards;

  return (
    <div
      className="relative mx-auto w-full max-w-[560px] px-2 py-6 sm:py-8 lg:mx-0 lg:py-10"
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(147,197,253,0.35), transparent 70%)",
        }}
      />
      <svg
        className="pointer-events-none absolute inset-0 mx-auto h-full w-[85%] text-cobalt/15"
        viewBox="0 0 400 420"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d="M200 70 Q120 140 80 210 Q120 280 200 320 Q280 280 320 210 Q280 140 200 70"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeDasharray="4 8"
          initial={reduceMotion ? undefined : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </svg>

      {/* Desktop / tablet: orbital grid */}
      <div className="relative hidden min-h-[400px] sm:grid sm:grid-cols-3 sm:grid-rows-3 sm:gap-x-8 sm:gap-y-6 md:min-h-[440px] md:gap-x-10 md:gap-y-8">
        <div className="col-start-2 row-start-1 flex justify-center self-end">
          <ExpertCard card={nutrition} delay={0.12} />
        </div>
        <div className="col-start-1 row-start-2 flex items-center justify-end pr-1">
          <ExpertCard card={career} delay={0.06} />
        </div>
        <div className="col-start-2 row-start-2 flex items-center justify-center">
          <HeroCentralVisual />
        </div>
        <div className="col-start-3 row-start-2 flex items-center justify-start pl-1">
          <ExpertCard card={mental} delay={0.18} />
        </div>
        <div className="col-start-2 row-start-3 flex justify-center self-start pt-1">
          <ExpertCard card={speaking} delay={0.24} />
        </div>
      </div>

      {/* Mobile: simplified stack */}
      <div className="flex flex-col items-center gap-8 sm:hidden">
        <HeroCentralVisual />
        <div className="grid w-full max-w-[340px] grid-cols-2 gap-5">
          <ExpertCard card={career} delay={0.08} className="w-full max-w-[156px] justify-self-end" />
          <ExpertCard card={nutrition} delay={0.12} className="w-full max-w-[156px] justify-self-start" />
        </div>
        <ExpertCard card={mental} delay={0.16} />
      </div>
    </div>
  );
}
