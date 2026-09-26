"use client";

import { expertGroups, expertSelectOptions } from "@/data/expert-categories";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export function AnimatedSelect({
  value,
  onChange,
  label,
  error,
}: {
  value: string;
  onChange: (value: string, label: string) => void;
  label: string;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const selected = expertSelectOptions.find((o) => o.value === value);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return expertSelectOptions;
    return expertSelectOptions.filter(
      (o) => o.label.toLowerCase().includes(q) || o.group.toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref}>
      <label className="mb-2.5 block text-left text-sm font-medium">{label}</label>
      <motion.div
        className={cn(
          "relative rounded-2xl border bg-surface",
          error ? "border-red-400/70" : focused || open ? "border-cobalt/55" : "border-border",
          "bg-elevated/80",
        )}
        animate={
          reduceMotion
            ? undefined
            : { boxShadow: focused || open ? "0 0 0 4px var(--focus-ring)" : "0 0 0 0px transparent" }
        }
      >
        <button
          type="button"
          aria-expanded={open}
          className="flex w-full min-h-[48px] items-center justify-between gap-2 px-4 py-3 text-left text-sm"
          onClick={() => setOpen((o) => !o)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <span
            className={cn(
              "min-w-0 flex-1 text-left leading-snug",
              selected ? "text-ink" : "text-ink-soft",
            )}
          >
            {selected?.label ?? "Search or select an expert type..."}
          </span>
          <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-border bg-surface shadow-xl"
            >
              <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                <Search className="size-4 text-ink-soft" />
                <input
                  className="w-full py-2 text-sm focus:outline-none"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                />
              </div>
              <ul className="max-h-60 overflow-y-auto p-1">
                {expertGroups.map((group) => {
                  const items = filtered.filter((o) => o.group === group);
                  if (!items.length) return null;
                  return (
                    <li key={group}>
                      <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-ink-soft">
                        {group}
                      </p>
                      {items.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          className={cn(
                            "flex w-full items-start justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm hover:bg-elevated",
                            value === opt.value && "bg-cobalt/15 text-sky",
                          )}
                          onClick={() => {
                            onChange(opt.value, opt.label);
                            trackEvent("expert_category_selected", { category: opt.value });
                            setOpen(false);
                            setQuery("");
                          }}
                        >
                          {opt.label}
                          {value === opt.value && <Check className="size-4" />}
                        </button>
                      ))}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {error && <p className="mt-1.5 text-xs text-red-600" role="alert">{error}</p>}
    </div>
  );
}
