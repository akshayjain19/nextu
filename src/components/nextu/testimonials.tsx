"use client";

import { TestimonialPortrait } from "@/components/nextu/testimonial-portrait";
import { partitionTestimonials, testimonials, type Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const transitionCopy =
  "Different needs. Different experts. Real people taking their next step.";

const ease = [0.22, 1, 0.36, 1] as const;
const PORTRAIT_ALT = "Placeholder lifestyle portrait for demo testimonial layout";

function FeaturedTestimonial({ item }: { item: Testimonial }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group relative"
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: 0.1, ease }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
    >
      <div
        className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-surface/90 p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-10"
      >
        <TestimonialPortrait
          image={item.image}
          imagePosition={item.imagePosition}
          alt={PORTRAIT_ALT}
          variant="featured"
        />
        <div className="relative mt-8 lg:mt-0">
          <span
            className="pointer-events-none absolute -left-1 -top-8 font-serif text-[4rem] leading-none text-cobalt/20 select-none sm:text-5xl"
            aria-hidden
          >
            &ldquo;
          </span>
          <blockquote className="relative text-[clamp(1.2rem,2.8vw,1.85rem)] font-medium leading-snug text-navy">
            {item.quote}
          </blockquote>
          <footer className="mt-6 border-t border-border pt-5">
            <p className="text-lg font-semibold text-ink">{item.name}</p>
            <p className="mt-1 text-sm font-medium text-cobalt-deep">{item.role}</p>
          </footer>
        </div>
      </div>
    </motion.article>
  );
}

function SupportingTestimonial({ item, index }: { item: Testimonial; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group flex h-full flex-col"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.12 + index * 0.06, ease }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
    >
      <div className="flex h-full flex-col gap-4 rounded-[1.5rem] border border-white/50 bg-surface/90 p-5 shadow-lg shadow-navy/8 sm:flex-row sm:items-stretch">
        <div className="w-full shrink-0 sm:w-[140px] md:w-[160px]">
          <TestimonialPortrait
            image={item.image}
            imagePosition={item.imagePosition}
            alt={PORTRAIT_ALT}
            variant="supporting"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <p className="text-sm leading-relaxed text-navy sm:text-base">
            &ldquo;{item.quote}&rdquo;
          </p>
          <footer className="mt-4">
            <p className="font-semibold text-ink">{item.name}</p>
            <p className="text-sm text-ink-muted">{item.role}</p>
          </footer>
        </div>
      </div>
    </motion.article>
  );
}

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const { featured, supporting } = partitionTestimonials(testimonials);

  if (!featured) return null;

  const [rowA, rowB] = [supporting.slice(0, 2), supporting.slice(2, 4)];

  return (
    <section
      className="section-spacing relative overflow-hidden bg-gradient-to-b from-canvas-sky/50 via-[#f8fbff] to-surface"
      aria-labelledby="testimonials-heading"
    >
      <motion.div
        className="pointer-events-none absolute -left-24 top-20 size-72 rounded-full bg-cobalt/12 blur-3xl"
        aria-hidden
        animate={reduceMotion ? undefined : { x: [0, 14, 0], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <motion.p
          className="max-w-xl text-sm font-medium text-cobalt-deep sm:text-base"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
        >
          {transitionCopy}
        </motion.p>

        <motion.header
          className="mt-8 max-w-3xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06, ease }}
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
        </motion.header>

        <div className="mt-12 space-y-6 lg:space-y-8">
          <FeaturedTestimonial item={featured} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {rowA.map((item, i) => (
              <SupportingTestimonial key={item.id} item={item} index={i} />
            ))}
          </div>
          {rowB.length > 0 && (
            <div
              className={cn(
                "grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8",
                rowB.length === 1 && "md:max-w-xl",
              )}
            >
              {rowB.map((item, i) => (
                <SupportingTestimonial key={item.id} item={item} index={i + 2} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
