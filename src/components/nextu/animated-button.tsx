"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";

type AnimatedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "default" | "form";
};

export function AnimatedButton({
  className,
  children,
  disabled,
  type = "button",
  size = "default",
  ...props
}: AnimatedButtonProps) {
  const reduceMotion = useReducedMotion();
  const isFullWidth = className?.includes("w-full");

  return (
    <motion.div
      className={cn("inline-flex", isFullWidth && "w-full")}
      whileHover={reduceMotion || disabled ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion || disabled ? undefined : { scale: 0.98 }}
    >
      <button
        type={type}
        disabled={disabled}
        className={cn(
          "relative w-full overflow-hidden rounded-2xl bg-cobalt font-semibold text-on-accent shadow-md shadow-black/25 transition-colors hover:bg-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-50 sm:w-auto",
          size === "form"
            ? "min-h-[52px] max-h-[58px] rounded-xl px-5 py-2.5 text-sm"
            : "px-6 py-3.5 text-sm",
          className,
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {!reduceMotion && (
          <motion.span
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        )}
      </button>
    </motion.div>
  );
}
