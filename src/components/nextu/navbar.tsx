"use client";

import { NextULogo } from "@/components/nextu/next-u-logo";
import { navLinks } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";
import { scrollToLeadForm } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function NextUNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
          <div
            className={cn(
              "grid w-full grid-cols-[auto_auto] items-center gap-3 rounded-full border px-3 py-2 sm:px-4 lg:grid-cols-[auto_1fr_auto] lg:gap-4 lg:px-5",
              scrolled
                ? "border-border bg-canvas/95 shadow-lg shadow-black/40 backdrop-blur-md"
                : "border-border/80 bg-canvas/85 backdrop-blur-sm",
            )}
          >
            <div className="flex shrink-0 items-center justify-self-start overflow-visible">
              <NextULogo priority context="nav" variant="full" />
            </div>

            <nav
              className="hidden items-center justify-center gap-6 text-sm text-ink-muted lg:flex"
              aria-label="Primary"
            >
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="whitespace-nowrap text-ink-muted transition-colors hover:text-sky">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex shrink-0 items-center justify-self-end gap-2">
              <button
                type="button"
                onClick={() => { trackEvent("hero_cta_clicked"); scrollToLeadForm(); }}
                className="hidden rounded-full bg-cobalt px-4 py-2 text-xs font-semibold text-on-accent transition-colors hover:bg-sky sm:text-sm lg:inline-flex"
              >
                Find My Expert
              </button>
              <button
                type="button"
                className="inline-flex size-9 items-center justify-center rounded-full border border-border lg:hidden"
                aria-label="Menu"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="fixed inset-0 z-40 flex flex-col bg-canvas/98 px-6 pb-10 pt-6 text-ink lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="rounded-2xl border border-border bg-surface px-4 py-3">
              <NextULogo href="/" context="nav" variant="full" />
            </div>
            <ul className="mt-10 space-y-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-3xl font-semibold" onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-auto w-full rounded-2xl bg-cobalt py-4 font-semibold text-on-accent hover:bg-sky"
              onClick={() => { setOpen(false); scrollToLeadForm(); trackEvent("hero_cta_clicked"); }}
            >
              Find My Expert
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
