"use client";

import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1750;

function parseStatValue(value: string) {
  const trimmed = value.trim();
  const hasPlus = trimmed.endsWith("+");
  const numericPart = hasPlus ? trimmed.slice(0, -1) : trimmed;
  const target = Number.parseInt(numericPart.replace(/,/g, ""), 10);
  const suffix = hasPlus ? "+" : trimmed.replace(/[\d,]/g, "");
  return {
    target: Number.isFinite(target) ? target : 0,
    suffix,
  };
}

function formatCount(n: number) {
  return n >= 1000 ? n.toLocaleString("en-US") : String(n);
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

type AnimatedStatProps = {
  value: string;
  label: string;
  enterDelay: number;
  countDelay: number;
};

function AnimatedStat({ value, label, enterDelay, countDelay }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const { target, suffix } = parseStatValue(value);
  const [count, setCount] = useState(0);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    let raf = 0;
    const startTimer = window.setTimeout(() => {
      const startAt = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - startAt) / DURATION_MS, 1);
        const next = Math.round(easeOutCubic(t) * target);
        setCount(next);
        if (t < 1) {
          raf = requestAnimationFrame(step);
        } else {
          setCount(target);
          setSettled(true);
        }
      };
      raf = requestAnimationFrame(step);
    }, countDelay);

    return () => {
      window.clearTimeout(startTimer);
      cancelAnimationFrame(raf);
    };
  }, [inView, reduceMotion, target, countDelay]);

  const display = reduceMotion
    ? `${formatCount(target)}${suffix}`
    : `${formatCount(count)}${suffix}`;

  return (
    <motion.div
      ref={ref}
      className="relative"
      role="group"
      aria-label={`${value} ${label}`}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, delay: enterDelay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="pointer-events-none absolute -left-6 top-1/2 size-24 -translate-y-1/2 rounded-full bg-cobalt/10 blur-2xl"
        aria-hidden
      />
      <motion.p
        className={cn(
          "font-editorial tabular-nums text-[clamp(3.25rem,10vw,6.5rem)] font-semibold leading-none tracking-tight text-sky",
          !settled && !reduceMotion && inView && "opacity-90",
        )}
        animate={
          settled && !reduceMotion
            ? { scale: [1, 1.025, 1] }
            : !reduceMotion && inView && count < target
              ? { filter: ["blur(3px)", "blur(0px)"] }
              : undefined
        }
        transition={
          settled
            ? { duration: 0.45, ease: "easeOut" }
            : { duration: 0.35, delay: enterDelay }
        }
      >
        {display}
      </motion.p>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.22em] text-ink-soft">
        {label}
      </p>
    </motion.div>
  );
}

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();

  const stats = [
    { value: siteConfig.stats.experts, label: "Experts", enterDelay: 0.25, countDelay: 400 },
    { value: siteConfig.stats.customers, label: "Customers", enterDelay: 0.35, countDelay: 480 },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-spacing relative overflow-hidden bg-canvas"
      aria-labelledby="trust-heading"
    >
      <motion.div
        className="pointer-events-none absolute right-[10%] top-1/2 size-40 -translate-y-1/2 rounded-full bg-cobalt/12 blur-3xl"
        aria-hidden
        animate={
          reduceMotion || !inView
            ? undefined
            : { scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <motion.p
          id="trust-heading"
          className="max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          A growing network of experts helping people across different areas of
          life and personal development.
        </motion.p>

        <div className="mt-14 flex flex-col gap-14 sm:mt-16 sm:flex-row sm:items-end sm:justify-start sm:gap-24 lg:gap-32">
          {stats.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              enterDelay={stat.enterDelay}
              countDelay={stat.countDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
