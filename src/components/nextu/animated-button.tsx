"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";

export function AnimatedButton({
  className,
  children,
  disabled,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={cn("inline-flex", className?.includes("w-full") && "w-full")}
      whileHover={reduceMotion || disabled ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion || disabled ? undefined : { scale: 0.98 }}
    >
      <button
        type={type}
        disabled={disabled}
        className={cn(
          "relative w-full overflow-hidden rounded-2xl bg-cobalt px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cobalt/25 transition-colors hover:bg-cobalt-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt/40 focus-visible:ring-offset-2 disabled:opacity-50 sm:w-auto",
          className,
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {!reduceMotion && (
          <motion.span
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        )}
      </button>
    </motion.div>
  );
}
