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
      className="group relative lg:col-span-12"
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: 0.12, ease }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
    >
      <div
        className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-surface/90 p-6 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:p-8 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 lg:p-10"
      >
        <motion.div
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:-mr-6 lg:translate-y-1"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.22, ease }}
        >
          <TestimonialPortrait
            image={item.image}
            imagePosition={item.imagePosition}
            alt={PORTRAIT_ALT}
            variant="featured"
          />
          <div
            className="pointer-events-none absolute -bottom-4 -right-4 size-24 rounded-full bg-teal-400/20 blur-2xl"
            aria-hidden
          />
        </motion.div>

        <div className="relative mt-8 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
          <span
            className="pointer-events-none absolute -left-1 -top-10 font-serif text-[4.5rem] leading-none text-cobalt/20 select-none sm:text-[6.5rem] lg:-left-4"
            aria-hidden
          >
            &ldquo;
          </span>
          <blockquote
            className="relative text-[clamp(1.25rem,3.2vw,2rem)] font-medium leading-snug tracking-tight text-navy"
          >
            {item.quote}
          </blockquote>
          <footer className="mt-8 border-t border-border pt-6">
            <p className="text-lg font-semibold text-ink">{item.name}</p>
            <p className="mt-1 text-sm font-medium text-cobalt-deep">{item.role}</p>
          </footer>
        </div>
      </div>
    </motion.article>
  );
}

function SupportingTestimonial({
  item,
  index,
  layout,
}: {
  item: Testimonial;
  index: number;
  layout: "wide" | "tall";
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "group relative",
        layout === "wide" ? "lg:col-span-6" : "lg:col-span-5",
        index === 2 && "lg:col-start-2",
        index === 3 && "lg:col-span-6 lg:col-start-4",
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: 0.2 + index * 0.08, ease }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
    >
      <div
        className={cn(
          "flex h-full gap-5 rounded-[1.5rem] border border-white/50 bg-surface/85 p-5 shadow-lg shadow-navy/8 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-cobalt/10",
          layout === "tall" ? "flex-col sm:flex-row sm:items-center" : "flex-col sm:flex-row",
        )}
      >
        <div className={cn(layout === "wide" ? "sm:max-w-[220px]" : "sm:max-w-[200px]")}>
          <TestimonialPortrait
            image={item.image}
            imagePosition={item.imagePosition}
            alt={PORTRAIT_ALT}
            variant="supporting"
            crop={index === 1 ? "organic" : "default"}
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <p className="text-base leading-relaxed text-navy sm:text-[1.05rem]">
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

function MobileTestimonialRow({ item, index }: { item: Testimonial; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group flex gap-4 rounded-2xl border border-white/50 bg-surface/90 p-4 shadow-md shadow-navy/8 lg:hidden"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.06, ease }}
    >
      <TestimonialPortrait
        image={item.image}
        imagePosition={item.imagePosition}
        alt={PORTRAIT_ALT}
        variant="compact"
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm leading-relaxed text-navy">&ldquo;{item.quote}&rdquo;</p>
        <p className="mt-3 text-sm font-semibold text-ink">{item.name}</p>
        <p className="text-xs text-ink-muted">{item.role}</p>
      </div>
    </motion.article>
  );
}

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const { featured, supporting } = partitionTestimonials(testimonials);

  if (!featured) return null;

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
      <motion.div
        className="pointer-events-none absolute right-[5%] top-40 size-40 rounded-full bg-teal-400/15 blur-2xl"
        aria-hidden
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.span
        className="pointer-events-none absolute right-[10%] top-16 hidden font-serif text-[7rem] text-cobalt/12 lg:block"
        aria-hidden
        animate={reduceMotion ? undefined : { rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        &rdquo;
      </motion.span>
      <svg
        className="pointer-events-none absolute bottom-24 left-[6%] hidden w-32 text-cobalt/20 lg:block"
        viewBox="0 0 120 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M4 20 C40 4, 80 4, 116 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

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

        <div className="mt-12 hidden lg:grid lg:grid-cols-12 lg:gap-8">
          <FeaturedTestimonial item={featured} />
          {supporting.map((item, i) => (
            <SupportingTestimonial
              key={item.id}
              item={item}
              index={i}
              layout={i < 2 ? "wide" : "tall"}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 lg:hidden">
          <div className="lg:hidden">
            <FeaturedTestimonial item={featured} />
          </div>
          {supporting.map((item, i) => (
            <MobileTestimonialRow key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
