"use client";

import { AnimatedButton } from "@/components/animated-button";
import { Logo } from "@/components/logo";
import { trackEvent } from "@/lib/analytics";
import { scrollToLeadForm } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleCta() {
    trackEvent("hero_cta_clicked");
    scrollToLeadForm();
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border/80 bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a
            href="#how-it-works"
            className="transition-colors hover:text-foreground"
          >
            How it works
          </a>
          <a
            href="#categories"
            className="transition-colors hover:text-foreground"
          >
            Categories
          </a>
          <a href="/about" className="transition-colors hover:text-foreground">
            About
          </a>
        </nav>
        <AnimatedButton size="sm" onClick={handleCta}>
          Find My Expert
        </AnimatedButton>
      </div>
    </header>
  );
}
