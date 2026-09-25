"use client";

import { MotionSection } from "@/components/ui/motion-section";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <MotionSection className="border-t border-border/60 bg-muted/15 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          What people say
        </h2>
        <p className="mt-3 text-muted-foreground">
          Stories from customers will appear here soon.
        </p>

        {testimonials.length === 0 ? (
          <div
            className="mt-10 rounded-2xl border border-dashed border-border bg-card/40 p-10 text-center"
            aria-label="Testimonials placeholder"
          >
            <p className="text-sm text-muted-foreground">
              Testimonial cards will be added when content is available.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <p className="text-sm leading-relaxed text-foreground">
                  &ldquo;{t.testimonial}&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </footer>
              </article>
            ))}
          </div>
        )}
      </div>
    </MotionSection>
  );
}
