"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type AnimatedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
};

export function AnimatedButton({
  className,
  variant = "primary",
  size = "default",
  children,
  disabled,
  type = "button",
  onClick,
  ...rest
}: AnimatedButtonProps) {
  const reduceMotion = useReducedMotion();

  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-sm shadow-primary/20 hover:bg-primary/90",
    secondary:
      "border border-border bg-card text-foreground hover:border-primary/30 hover:bg-muted/50",
    ghost: "text-foreground hover:bg-muted/60",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    default: "h-11 px-6 text-sm font-medium",
    lg: "h-12 px-8 text-base font-medium",
  };

  const fullWidth = className?.includes("w-full");

  return (
    <motion.div
      className={cn(fullWidth ? "flex w-full" : "inline-flex")}
      whileHover={reduceMotion || disabled ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion || disabled ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          fullWidth && "w-full",
          variants[variant],
          sizes[size],
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    </motion.div>
  );
}
