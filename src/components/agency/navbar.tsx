"use client";

import { AgencyLogo } from "@/components/agency/logo";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function AgencyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-canvas/90 py-3 backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-5",
        )}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <AgencyLogo />
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              className="hidden sm:inline-flex"
              onClick={() => trackEvent("nav_cta_clicked")}
            >
              Start a project
            </Button>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface/80 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm md:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,420px)] flex-col bg-canvas-warm px-8 py-10 shadow-2xl md:hidden"
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
            aria-label="Mobile"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
              Menu
            </p>
            <ul className="mt-10 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-semibold tracking-tight text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto">
              <p className="text-sm text-ink-muted">{siteConfig.tagline}</p>
              <Button
                href="/contact"
                className="mt-6 w-full"
                onClick={() => {
                  trackEvent("nav_cta_clicked");
                  setOpen(false);
                }}
              >
                Start a project
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
