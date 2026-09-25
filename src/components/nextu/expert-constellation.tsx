"use client";

import { NextULogo } from "@/components/nextu/next-u-logo";
import { heroFloatingCards } from "@/data/expert-categories";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const toneClass = {
  white: "bg-surface text-ink border-border",
  sky: "bg-canvas-sky text-ink border-sky/40",
  navy: "bg-navy text-white border-navy",
  cobalt: "bg-cobalt text-white border-cobalt-deep",
};

export function ExpertConstellation() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none lg:aspect-auto lg:min-h-[520px]">
      <div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-border bg-surface px-3 py-2 shadow-md lg:px-4"
      >
        <NextULogo href={null} variant="mark" className="max-h-12 max-w-[72px] lg:max-h-14 lg:max-w-[84px]" />
      </div>
      {heroFloatingCards.map((card, i) => (
        <motion.div
          key={card.id}
          className={cn(
            "absolute w-[42%] max-w-[160px] rounded-2xl border px-3 py-3 shadow-lg sm:w-[38%]",
            toneClass[card.tone],
          )}
          style={{
            left: `${card.offset.x}%`,
            top: `${card.offset.y}%`,
            rotate: `${card.rotate}deg`,
          }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: 16 }}
          animate={
            reduceMotion
              ? { opacity: 1, scale: 1, y: 0 }
              : {
                  opacity: 1,
                  scale: 1,
                  y: [0, -6, 0],
                }
          }
          transition={{
            opacity: { delay: 0.1 + i * 0.08, duration: 0.5 },
            scale: { delay: 0.1 + i * 0.08, duration: 0.5 },
            y: { delay: 1 + i * 0.2, duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={reduceMotion ? undefined : { scale: 1.04, rotate: card.rotate + 2 }}
        >
          <span className="text-lg" aria-hidden>{card.icon}</span>
          <p className="mt-1 text-sm font-semibold leading-tight">{card.title}</p>
          <p className="text-[10px] uppercase tracking-wide opacity-70">{card.category}</p>
        </motion.div>
      ))}
    </div>
  );
}
