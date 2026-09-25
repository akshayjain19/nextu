"use client";

import { MotionSection } from "@/components/ui/motion-section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <MotionSection className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              We&apos;re making expertise easier to find.
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              Finding the right professional often means searching multiple
              places, asking for recommendations, and still not knowing who to
              trust.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              NextU aims to make the process simpler by connecting people with
              professionals across different fields.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              About NextU
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
