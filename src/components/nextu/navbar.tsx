"use client";

import { NextULogo } from "@/components/nextu/next-u-logo";
import { navLinks, siteConfig } from "@/lib/config";
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
      <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4">
        <div
          className={cn(
            "flex w-full max-w-[min(1280px,calc(100vw-1.5rem))] items-center gap-2 rounded-full border px-3 py-2 sm:gap-3 sm:px-5",
            scrolled
              ? "border-border bg-surface/90 shadow-lg shadow-navy/5 backdrop-blur-md"
              : "border-white/40 bg-surface/70 backdrop-blur-sm",
          )}
        >
          <div className="flex min-w-0 shrink-0 items-center">
            <NextULogo
              priority
              variant="full"
              className="max-h-8 max-w-[min(112px,28vw)] sm:max-h-9 sm:max-w-[min(132px,24vw)]"
            />
          </div>
          <span className="hidden min-w-0 truncate text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-soft xl:inline">
            {siteConfig.brandLine}
          </span>
          <nav className="ml-auto hidden items-center gap-5 text-sm text-ink-muted lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="whitespace-nowrap hover:text-cobalt">
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => { trackEvent("hero_cta_clicked"); scrollToLeadForm(); }}
            className="hidden shrink-0 rounded-full bg-cobalt px-3.5 py-2 text-xs font-semibold text-white hover:bg-cobalt-deep sm:px-4 sm:text-sm lg:inline-flex lg:ml-2"
          >
            Find My Expert
          </button>
          <button
            type="button"
            className="ml-auto inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="fixed inset-0 z-40 flex flex-col bg-navy/95 px-6 pb-10 pt-6 text-white lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="rounded-2xl bg-surface px-3 py-2.5">
              <NextULogo href="/" className="max-h-9 max-w-[min(140px,50vw)]" />
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
              className="mt-auto w-full rounded-2xl bg-cobalt py-4 font-semibold"
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
