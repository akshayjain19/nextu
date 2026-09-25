"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

type FieldLabelProps = {
  id: string;
  label: string;
  optional?: boolean;
};

export function FieldLabel({ id, label, optional }: FieldLabelProps) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-medium text-foreground"
    >
      {label}
      {optional && (
        <span className="ml-1 font-normal text-muted-foreground">(optional)</span>
      )}
    </label>
  );
}

type AnimatedInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  optional?: boolean;
};

export function AnimatedInput({
  label,
  error,
  optional,
  className,
  id,
  ...props
}: AnimatedInputProps) {
  const [focused, setFocused] = useState(false);
  const reduceMotion = useReducedMotion();
  const fieldId = id ?? props.name;

  return (
    <div className="w-full">
      {fieldId && <FieldLabel id={fieldId} label={label} optional={optional} />}
      <motion.div
        className={cn(
          "relative rounded-xl border bg-card transition-colors",
          error ? "border-destructive/60" : focused ? "border-primary/50" : "border-border",
        )}
        animate={
          reduceMotion
            ? undefined
            : { boxShadow: focused ? "0 0 0 3px rgba(37, 99, 235, 0.12)" : "0 0 0 0px transparent" }
        }
        transition={{ duration: 0.2 }}
      >
        <input
          id={fieldId}
          className={cn(
            "w-full rounded-xl bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none",
            className,
          )}
          onFocus={(e) => {
            setFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />
      </motion.div>
      {error && (
        <p className="mt-1.5 text-xs text-destructive" role="alert">{error}</p>
      )}
    </div>
  );
}

type AnimatedTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  optional?: boolean;
};

export function AnimatedTextarea({
  label,
  error,
  optional,
  className,
  id,
  ...props
}: AnimatedTextareaProps) {
  const [focused, setFocused] = useState(false);
  const reduceMotion = useReducedMotion();
  const fieldId = id ?? props.name;

  return (
    <div className="w-full">
      {fieldId && <FieldLabel id={fieldId} label={label} optional={optional} />}
      <motion.div
        className={cn(
          "relative rounded-xl border bg-card transition-colors",
          error ? "border-destructive/60" : focused ? "border-primary/50" : "border-border",
        )}
        animate={
          reduceMotion
            ? undefined
            : { boxShadow: focused ? "0 0 0 3px rgba(37, 99, 235, 0.12)" : "0 0 0 0px transparent" }
        }
        transition={{ duration: 0.2 }}
      >
        <textarea
          id={fieldId}
          rows={4}
          className={cn(
            "w-full resize-none rounded-xl bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none",
            className,
          )}
          onFocus={(e) => {
            setFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />
      </motion.div>
      {error && (
        <p className="mt-1.5 text-xs text-destructive" role="alert">{error}</p>
      )}
    </div>
  );
}
