"use client";

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
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div
          className={cn(
            "flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-6",
            scrolled
              ? "border-border bg-surface/90 shadow-lg shadow-navy/5 backdrop-blur-md"
              : "border-white/40 bg-surface/70 backdrop-blur-sm",
          )}
        >
          <Link href="/" className="flex items-center gap-2 font-semibold text-navy">
            <span className="flex size-8 items-center justify-center rounded-full bg-cobalt text-sm text-white">N</span>
            {siteConfig.name}
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-ink-muted md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-cobalt">
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => { trackEvent("hero_cta_clicked"); scrollToLeadForm(); }}
            className="hidden rounded-full bg-cobalt px-4 py-2 text-sm font-semibold text-white hover:bg-cobalt-deep sm:inline-flex"
          >
            Find My Expert
          </button>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border md:hidden"
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
            className="fixed inset-0 z-40 flex flex-col bg-navy/95 px-8 pb-10 pt-24 text-white md:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="space-y-6">
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
