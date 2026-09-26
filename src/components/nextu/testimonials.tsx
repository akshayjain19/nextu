"use client";

import { TestimonialPortrait } from "@/components/nextu/testimonial-portrait";
import { partitionTestimonials, testimonials, type Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const transitionCopy =
  "Different needs. Different experts. Real people taking their next step.";

const ease = [0.22, 1, 0.36, 1] as const;
const PORTRAIT_ALT = "Placeholder lifestyle portrait for demo testimonial layout";

function TestimonialContent({
  quote,
  name,
  role,
  featured = false,
}: {
  quote: string;
  name: string;
  role: string;
  featured?: boolean;
}) {
  return (
    <div className="testimonial-content min-w-0">
      {featured ? (
        <blockquote className="font-editorial text-[clamp(1.15rem,2.6vw,1.85rem)] font-medium leading-snug text-ink">
          <span className="font-serif text-cobalt/40" aria-hidden>&ldquo;</span>
          {quote}
        </blockquote>
      ) : (
        <blockquote className="text-sm leading-relaxed text-ink sm:text-base">
          &ldquo;{quote}&rdquo;
        </blockquote>
      )}
      <footer className="testimonial-author mt-5 border-t border-border pt-4 sm:mt-6">
        <p className={cn("font-semibold text-ink", featured && "text-lg")}>{name}</p>
        <p className="mt-1 text-sm font-medium text-cobalt">{role}</p>
      </footer>
    </div>
  );
}

function FeaturedTestimonial({ item }: { item: Testimonial }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group h-full"
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: 0.1, ease }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
    >
      <div
        className="grid h-full grid-cols-1 items-center gap-8 rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8 md:grid-cols-[minmax(200px,280px)_minmax(0,1fr)] md:gap-8 lg:grid-cols-[minmax(220px,320px)_minmax(0,1fr)] lg:gap-10 lg:p-10"
      >
        <div className="testimonial-image mx-auto w-full md:mx-0">
          <TestimonialPortrait
            image={item.image}
            imagePosition={item.imagePosition}
            alt={PORTRAIT_ALT}
            variant="featured"
          />
        </div>
        <TestimonialContent
          quote={item.quote}
          name={item.name}
          role={item.role}
          featured
        />
      </div>
    </motion.article>
  );
}

function SupportingTestimonial({ item, index }: { item: Testimonial; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group h-full"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.12 + index * 0.06, ease }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
    >
      <div
        className="grid h-full min-h-0 grid-cols-1 items-center gap-6 rounded-[1.5rem] border border-border bg-surface p-5 shadow-[var(--shadow-card)] md:grid-cols-[180px_minmax(0,1fr)] md:gap-7 md:p-6"
      >
        <div className="testimonial-image mx-auto w-full md:mx-0">
          <TestimonialPortrait
            image={item.image}
            imagePosition={item.imagePosition}
            alt={PORTRAIT_ALT}
            variant="supporting"
          />
        </div>
        <TestimonialContent quote={item.quote} name={item.name} role={item.role} />
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
      className="section-spacing texture-grain relative overflow-hidden bg-cream text-on-cream"
      aria-labelledby="testimonials-heading"
    >
      <motion.div
        className="pointer-events-none absolute -left-24 top-20 size-72 rounded-full bg-cobalt/20 blur-3xl"
        aria-hidden
        animate={reduceMotion ? undefined : { x: [0, 14, 0], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <motion.p
          className="max-w-xl text-sm font-medium text-on-cream-muted sm:text-base"
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
            className="font-editorial text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-tight text-on-cream"
          >
            People who&apos;ve taken the next step.
          </h2>
          <p className="mt-4 text-lg text-on-cream-muted">
            Real experiences from people who&apos;ve connected with the right
            expertise through NextU.
          </p>
        </motion.header>

        <div className="mt-12 space-y-6 lg:space-y-8">
          <FeaturedTestimonial item={featured} />
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
            {rowA.map((item, i) => (
              <SupportingTestimonial key={item.id} item={item} index={i} />
            ))}
          </div>
          {rowB.length > 0 && (
            <div
              className={cn(
                "grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8",
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
