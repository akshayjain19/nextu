"use client";

import { ExpertPictogram } from "@/components/nextu/expert-pictograms";
import { expertInterventionTypes } from "@/data/expert-interventions";
import { scrollToLeadForm } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const ART_HEIGHT = "h-[172px] sm:h-[180px]";
const CONTENT_MIN = "min-h-[5.75rem]";

function ExpertWallCard({
  expert,
  index,
}: {
  expert: (typeof expertInterventionTypes)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      className="group relative flex h-full list-none flex-col overflow-hidden rounded-[1.35rem] border border-border bg-gradient-to-br from-elevated to-surface shadow-[var(--shadow-card)]"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: 0.04 + index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -4, transition: { duration: 0.25 } }
      }
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-cobalt/10 blur-2xl"
        aria-hidden
      />
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center px-4 pt-3",
          ART_HEIGHT,
        )}
      >
        <ExpertPictogram
          id={expert.id}
          className="max-h-[85%] max-w-[82%] h-auto w-auto transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div
        className={cn(
          "mt-auto flex flex-1 flex-col border-t border-border bg-canvas/40 px-4 py-3.5 backdrop-blur-sm sm:px-5 sm:py-4",
          CONTENT_MIN,
        )}
      >
        <p className="font-semibold leading-snug text-ink transition-colors group-hover:text-sky text-base sm:text-lg">
          {expert.label}
        </p>
        <p className="mt-1.5 text-xs leading-snug text-ink-muted sm:text-sm">
          {expert.descriptor}
        </p>
      </div>
    </motion.li>
  );
}

export function ExpertIntervention() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-spacing relative overflow-hidden bg-elevated text-ink texture-grain">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 0%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 55%), radial-gradient(ellipse 60% 40% at 90% 80%, color-mix(in srgb, var(--accent-highlight) 8%, transparent), transparent 50%)",
        }}
      />
      <svg
        className="pointer-events-none absolute left-0 top-1/4 h-2/3 w-full opacity-[0.14]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 200 Q300 80 600 200 T1200 180"
          fill="none"
          stroke="currentColor"
          className="text-cobalt"
          strokeWidth="1.5"
          strokeDasharray="8 12"
        />
      </svg>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <motion.header
          className="max-w-4xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cobalt">
            Expert intervention
          </p>
          <h2 className="font-editorial mt-4 text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-ink">
            Right support starts with the right expertise.
          </h2>
          <p className="mt-6 text-lg text-ink-muted">
            Based on the plan, you work with experts such as:
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            NextU understands your need, identifies the relevant area of support,
            and helps connect you with an appropriate expert—not as employees of
            NextU, but as independent professionals in our network.
          </p>
        </motion.header>

        <ul
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14"
          aria-label="Expert intervention categories"
        >
          {expertInterventionTypes.map((expert, i) => (
            <ExpertWallCard key={expert.id} expert={expert} index={i} />
          ))}
        </ul>

        <motion.div
          className="mt-10 text-center sm:mt-12 lg:text-left"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            type="button"
            onClick={scrollToLeadForm}
            className="text-sm font-semibold text-cobalt transition-colors hover:text-sky"
          >
            Tell us what you need →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
