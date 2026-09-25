import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/ui/reveal";

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">What people say</h2>
          <p className="mt-3 text-ink-muted">Real stories will appear here when available.</p>
        </Reveal>

        {testimonials.length === 0 ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <div
              className="flex min-h-[220px] items-center justify-center rounded-[2rem] border border-dashed border-border bg-canvas lg:col-span-7"
              aria-label="Featured testimonial placeholder"
            >
              <p className="max-w-xs text-center text-sm text-ink-soft">
                Featured testimonial slot — add quote, name, and role in{" "}
                <code className="text-xs">data/testimonials.ts</code>
              </p>
            </div>
            <div className="grid gap-4 lg:col-span-5">
              {[1, 2].map((slot) => (
                <div
                  key={slot}
                  className="flex min-h-[100px] items-center justify-center rounded-2xl border border-dashed border-border bg-canvas-sky/50 p-6"
                >
                  <p className="text-xs text-ink-soft">Testimonial placeholder {slot}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article key={t.id} className="rounded-2xl border border-border p-6">
                <p className="text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-ink-muted">{t.role}</p>
                </footer>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
