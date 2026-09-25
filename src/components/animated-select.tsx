"use client";

import { expertSelectOptions, expertGroups } from "@/data/expert-categories";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type AnimatedSelectProps = {
  value: string;
  onChange: (value: string, label: string) => void;
  label: string;
  error?: string;
};

export function AnimatedSelect({
  value,
  onChange,
  label,
  error,
}: AnimatedSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const selected = expertSelectOptions.find((o) => o.value === value);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return expertSelectOptions;
    return expertSelectOptions.filter(
      (o) =>
        o.label.toLowerCase().includes(q) ||
        o.group.toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="w-full" ref={containerRef}>
      <label
        id="expert-type-label"
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <motion.div
        className={cn(
          "relative rounded-xl border bg-card",
          error ? "border-destructive/60" : focused || open ? "border-primary/50" : "border-border",
        )}
        animate={
          reduceMotion
            ? undefined
            : {
                boxShadow:
                  focused || open
                    ? "0 0 0 3px rgba(37, 99, 235, 0.12)"
                    : "0 0 0 0px transparent",
              }
        }
        transition={{ duration: 0.2 }}
      >
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby="expert-type-label"
          className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm"
          onClick={() => setOpen((o) => !o)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <span
            className={cn(
              selected ? "text-foreground" : "text-muted-foreground/70",
            )}
          >
            {selected?.label ?? "Search or select an expert type..."}
          </span>
          <ChevronDown
            className={cn(
              "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-navy/10"
              role="listbox"
            >
              <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                <Search className="size-4 text-muted-foreground" aria-hidden />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search categories..."
                  className="w-full bg-transparent py-1.5 text-sm focus:outline-none"
                  autoFocus
                />
              </div>
              <ul className="max-h-64 overflow-y-auto p-1">
                {expertGroups.map((group) => {
                  const items = filtered.filter((o) => o.group === group);
                  if (items.length === 0) return null;
                  return (
                    <li key={group}>
                      <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {group}
                      </p>
                      {items.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          role="option"
                          aria-selected={value === option.value}
                          className={cn(
                            "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-muted/70",
                            value === option.value && "bg-primary/5 text-primary",
                          )}
                          onClick={() => {
                            onChange(option.value, option.label);
                            trackEvent("expert_category_selected", {
                              category: option.value,
                            });
                            setOpen(false);
                            setQuery("");
                          }}
                        >
                          {option.label}
                          {value === option.value && (
                            <Check className="size-4" aria-hidden />
                          )}
                        </button>
                      ))}
                    </li>
                  );
                })}
                {filtered.length === 0 && (
                  <li className="px-3 py-4 text-center text-sm text-muted-foreground">
                    No matches found
                  </li>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {error && (
        <p className="mt-1.5 text-xs text-destructive" role="alert">{error}</p>
      )}
    </div>
  );
}
