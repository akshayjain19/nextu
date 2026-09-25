"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { useState, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

function FieldShell({
  children,
  focused,
  error,
}: {
  children: React.ReactNode;
  focused: boolean;
  error?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={cn(
        "rounded-2xl border bg-surface transition-colors",
        error ? "border-red-400/70" : focused ? "border-cobalt/40" : "border-border",
      )}
      animate={
        reduceMotion
          ? undefined
          : { boxShadow: focused ? "0 0 0 4px rgba(37, 99, 235, 0.1)" : "0 0 0 0px transparent" }
      }
    >
      {children}
    </motion.div>
  );
}

export function AnimatedInput({
  label,
  error,
  optional,
  id,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  optional?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = id ?? props.name;
  return (
    <div>
      <label htmlFor={fieldId} className="mb-2.5 block text-sm font-medium">
        {label}
        {optional && <span className="ml-1 font-normal text-ink-soft">(optional)</span>}
      </label>
      <FieldShell focused={focused} error={error}>
        <input
          id={fieldId}
          className={cn("w-full rounded-2xl bg-transparent px-4 py-3 text-sm focus:outline-none", className)}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
          {...props}
        />
      </FieldShell>
      {error && <p className="mt-1.5 text-xs text-red-600" role="alert">{error}</p>}
    </div>
  );
}

export function AnimatedTextarea({
  label,
  error,
  optional,
  id,
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  optional?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = id ?? props.name;
  return (
    <div>
      <label htmlFor={fieldId} className="mb-2.5 block text-sm font-medium">
        {label}
        {optional && <span className="ml-1 font-normal text-ink-soft">(optional)</span>}
      </label>
      <FieldShell focused={focused} error={error}>
        <textarea
          id={fieldId}
          className={cn("w-full resize-none rounded-2xl bg-transparent px-4 py-3 text-sm focus:outline-none", className)}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
          {...props}
        />
      </FieldShell>
      {error && <p className="mt-1.5 text-xs text-red-600" role="alert">{error}</p>}
    </div>
  );
}
