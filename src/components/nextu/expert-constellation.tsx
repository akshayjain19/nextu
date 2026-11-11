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

const ORBIT_DURATION_S = 20;

const [career, nutrition, mental, speaking] = heroExpertCards;

/** Clockwise orbit start: top → right → bottom → left */

const ORBIT_LAYOUT = [
  { card: nutrition, angleDeg: -90 },
  { card: mental, angleDeg: 0 },
  { card: speaking, angleDeg: 90 },
  { card: career, angleDeg: 180 },
] as const;

const orbitSpin = {
  duration: ORBIT_DURATION_S,
  repeat: Infinity,
  ease: "linear" as const,
};

function ExpertCard({
  card,
  delay,
  className,
  orbit = false,
}: {
  card: HeroExpertCard;
  delay: number;
  className?: string;
  orbit?: boolean;
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
        reduceMotion || orbit
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: [0, -3, 0] }
      }
      transition={
        orbit
          ? { opacity: { delay, duration: 0.45 } }
          : {
              opacity: { delay, duration: 0.45 },
              y: {
                delay: 1 + delay,
                duration: 5.2 + delay * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
      }
      whileHover={reduceMotion ? undefined : { scale: 1.03, y: -2 }}
    >
      <span className="text-base" aria-hidden>{card.icon}</span>
      <p className="mt-1.5 text-sm font-semibold leading-snug">{card.title}</p>
      <p className="text-[10px] font-medium uppercase tracking-wide opacity-75">
        {card.category}
      </p>
    </motion.div>
  );
}

function OrbitRing({ reduceMotion }: { reduceMotion: boolean | null }) {
  if (reduceMotion) return null;

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 z-[1] size-0 [--orbit-r:118px] max-[430px]:[--orbit-r:104px] sm:[--orbit-r:138px] md:[--orbit-r:152px]"
      aria-hidden
    >
      <motion.div
        className="relative size-0 origin-center will-change-transform"
        animate={{ rotate: 360 }}
        transition={orbitSpin}
      >
        {ORBIT_LAYOUT.map(({ card, angleDeg }, index) => (
          <div
            key={card.id}
            className="pointer-events-none absolute left-0 top-0"
            style={{
              transform: `rotate(${angleDeg}deg) translateX(var(--orbit-r))`,
            }}
          >
            <motion.div
              className="pointer-events-auto -translate-x-1/2 -translate-y-1/2 will-change-transform"
              animate={{ rotate: -360 }}
              transition={orbitSpin}
            >
              <ExpertCard card={card} delay={0.06 + index * 0.05} orbit />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function StaticDesktopGrid() {
  return (
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
  );
}

function StaticMobileStack() {
  return (
    <div className="flex flex-col items-center gap-8 sm:hidden">
      <HeroCentralVisual />
      <div className="grid w-full max-w-[340px] grid-cols-2 gap-5">
        <ExpertCard card={career} delay={0.08} className="w-full max-w-[156px] justify-self-end" />
        <ExpertCard card={nutrition} delay={0.12} className="w-full max-w-[156px] justify-self-start" />
      </div>
      <ExpertCard card={mental} delay={0.16} />
    </div>
  );
}

function AnimatedOrbitStage() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative min-h-[360px] w-full sm:min-h-[420px] md:min-h-[440px]"
      aria-hidden
    >
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <HeroCentralVisual />
      </div>
      <OrbitRing reduceMotion={reduceMotion} />
    </div>
  );
}

export function ExpertConstellation() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto w-full max-w-[560px] overflow-hidden px-2 py-6 sm:py-8 lg:mx-0 lg:py-10"
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

      {reduceMotion ? (
        <>
          <StaticDesktopGrid />
          <StaticMobileStack />
        </>
      ) : (
        <AnimatedOrbitStage />
      )}
    </div>
  );
}
