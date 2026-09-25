"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ComponentProps, MouseEventHandler } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

const variants = {
  primary: "bg-ink text-surface hover:bg-ink-muted px-6 py-3",
  secondary:
    "border border-border-strong bg-surface/80 text-ink backdrop-blur-sm hover:border-accent/40 px-6 py-3",
  ghost: "text-ink-muted hover:text-ink px-4 py-2",
  link: "text-ink underline-offset-4 hover:underline px-0 py-0",
};

type ButtonProps = {
  variant?: keyof typeof variants;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<"button">, "children">;

export function Button({
  variant = "primary",
  href,
  className,
  children,
  onClick,
  type = "button",
  ...rest
}: ButtonProps) {
  const reduceMotion = useReducedMotion();
  const classes = cn(base, variants[variant], className);

  const inner = href ? (
    <Link
      href={href}
      className={classes}
      onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
    >
      {children}
    </Link>
  ) : (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );

  if (reduceMotion || variant === "link" || variant === "ghost") {
    return inner;
  }

  return (
    <motion.div
      className="inline-flex"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      {inner}
    </motion.div>
  );
}
