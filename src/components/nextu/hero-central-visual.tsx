"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Abstract editorial figure — finding the right expert (not a real person) */
export function HeroCentralVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[220px] sm:max-w-[260px]"
      animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <svg viewBox="0 0 280 320" className="h-auto w-full drop-shadow-sm">
        <defs>
          <linearGradient id="hero-fig-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="hero-fig-body" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0c1a3a" />
          </linearGradient>
          <radialGradient id="hero-fig-glow" cx="50%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="140" cy="160" rx="110" ry="120" fill="url(#hero-fig-glow)" />
        <circle cx="140" cy="160" r="108" fill="url(#hero-fig-bg)" opacity="0.55" />
        <path
          d="M140 88c-28 0-50 22-50 50 0 18 8 34 22 44v58c0 8 6 14 14 14h28c8 0 14-6 14-14v-58c14-10 22-26 22-44 0-28-22-50-50-50z"
          fill="url(#hero-fig-body)"
          opacity="0.92"
        />
        <circle cx="140" cy="118" r="36" fill="#f5d0b5" />
        <path
          d="M108 108c6-22 24-36 32-36s26 14 32 36c-8 4-18 6-32 6s-24-2-32-6z"
          fill="#1e293b"
        />
        <path
          d="M70 200 Q140 170 210 200"
          stroke="#2563eb"
          strokeWidth="2"
          strokeOpacity="0.35"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="70" cy="200" r="5" fill="#2563eb" opacity="0.4" />
        <circle cx="210" cy="200" r="5" fill="#2563eb" opacity="0.4" />
        <circle cx="140" cy="248" r="6" fill="#0ea5e9" opacity="0.5" />
      </svg>
    </motion.div>
  );
}
