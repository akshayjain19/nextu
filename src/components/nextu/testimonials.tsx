"use client";

import { TestimonialPortrait } from "@/components/nextu/testimonial-portrait";
import { partitionTestimonials, testimonials, type Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const transitionCopy =
  "Different needs. Different experts. Real people taking their next step.";

function PlaceholderStory({ variant }: { variant: "featured" | "supporting" }) {
  if (variant === "featured") {
    return (
      <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
        <span className="font-medium text-ink">Featured story slot.</span> Add a real
        customer quote, name, and portrait in{" "}
        <code className="rounded bg-canvas px-1 text-xs">data/testimonials.ts</code>
        — placeholders are not presented as actual customers.
      </p>
    );
  }
  return (
    <p className="text-xs leading-relaxed text-ink-soft">
      Supporting story slot — awaiting real testimonial content.
    </p>
  );
}

function TestimonialStoryCard({
  item,
  variant,
  index,
}: {
  item: Testimonial | null;
  variant: "featured" | "supporting";
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const isPlaceholder = !item;
  const portraitAlt = item ? `${item.name}, NextU customer` : "Portrait placeholder";

  return (
    <motion.article
      className={cn(
        "group relative",
        variant === "featured" ? "lg:col-span-7" : "lg:col-span-5",
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: variant === "featured" ? 0.15 : 0.28 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
    >
      <div
        className={cn(
          "grid gap-6",
          variant === "featured" ? "lg:grid-cols-[1fr,1.1fr] lg:items-center" : "",
        )}
      >
        <motion.div
          className={cn(variant === "supporting" && "max-w-[220px]")}
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          transition={{ duration: 0.25 }}
        >
          <TestimonialPortrait
            image={item?.image}
            alt={portraitAlt}
            variant={variant}
          />
        </motion.div>
        <div className={cn(variant === "featured" ? "relative lg:py-4" : "mt-2")}>
          {variant === "featured" && (
            <span
              className="pointer-events-none absolute -left-2 -top-6 font-serif text-[5rem] leading-none text-cobalt/15 select-none sm:-left-6 sm:text-[7rem]"
              aria-hidden
            >
              &ldquo;
            </span>
          )}
          {isPlaceholder ? (
            <PlaceholderStory variant={variant} />
          ) : (
            <>
              <blockquote
                className={cn(
                  "relative font-medium leading-snug text-navy",
                  variant === "featured"
                    ? "text-xl sm:text-2xl lg:text-3xl"
                    : "text-base sm:text-lg",
                )}
              >
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer className="mt-5">
                <p className="font-semibold text-ink">{item.name}</p>
                {item.role && (
                  <p className="mt-1 text-sm text-ink-muted">{item.role}</p>
                )}
              </footer>
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const { featured, supporting } = partitionTestimonials(testimonials);
  const hasReal = testimonials.length > 0;
  const supportingSlots = hasReal ? supporting : [null, null];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-canvas-sky/40 via-surface to-surface py-20 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <motion.div
        className="pointer-events-none absolute -left-20 top-32 size-64 rounded-full bg-cobalt/10 blur-3xl"
        aria-hidden
        animate={reduceMotion ? undefined : { x: [0, 12, 0], opacity: [0.4, 0.55, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="pointer-events-none absolute right-[8%] top-24 hidden text-[120px] font-serif text-cobalt/10 lg:block"
        aria-hidden
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        &rdquo;
      </motion.span>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <motion.p
          className="max-w-xl text-sm font-medium text-cobalt-deep sm:text-base"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          {transitionCopy}
        </motion.p>

        <motion.header
          className="mt-8 max-w-3xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <h2
            id="testimonials-heading"
            className="text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-navy"
          >
            People who&apos;ve taken the next step.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Real experiences from people who&apos;ve connected with the right
            expertise through NextU.
          </p>
          {!hasReal && (
            <p className="mt-3 text-xs text-ink-soft" role="note">
              Development placeholder layout — no fabricated customer stories are shown.
            </p>
          )}
        </motion.header>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <TestimonialStoryCard
            item={featured}
            variant="featured"
            index={0}
          />

          <div className="flex flex-col gap-8 lg:col-span-5 lg:pt-16">
            {supportingSlots.map((item, i) => (
              <TestimonialStoryCard
                key={item?.id ?? `placeholder-${i}`}
                item={item}
                variant="supporting"
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
