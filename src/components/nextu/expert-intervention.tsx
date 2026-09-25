"use client";

import { ExpertPictogram } from "@/components/nextu/expert-pictograms";
import { expertInterventionTypes, type ExpertSize } from "@/data/expert-interventions";
import { scrollToLeadForm } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const sizeStyles: Record<
  ExpertSize,
  { card: string; art: string; title: string }
> = {
  feature: {
    card: "min-h-[280px] sm:min-h-[320px]",
    art: "h-[55%] min-h-[140px]",
    title: "text-xl sm:text-2xl",
  },
  large: {
    card: "min-h-[240px] sm:min-h-[260px]",
    art: "h-[50%] min-h-[120px]",
    title: "text-lg sm:text-xl",
  },
  medium: {
    card: "min-h-[200px]",
    art: "h-[48%] min-h-[100px]",
    title: "text-base sm:text-lg",
  },
  compact: {
    card: "min-h-[180px]",
    art: "h-[45%] min-h-[88px]",
    title: "text-sm sm:text-base",
  },
};

function ExpertWallCard({
  expert,
  index,
}: {
  expert: (typeof expertInterventionTypes)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const styles = sizeStyles[expert.size];

  return (
    <motion.li
      className={cn(
        "group relative list-none overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-[#1a2d4a] to-[#0f1f38] shadow-xl shadow-black/20",
        styles.card,
        expert.widthClass,
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: expert.size === "feature" ? 0 : 0.06 + index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -4, transition: { duration: 0.25 } }
      }
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-cobalt/20 blur-2xl"
        aria-hidden
      />
      <div
        className={cn(
          "relative flex items-end justify-center overflow-hidden px-2 pt-2",
          styles.art,
        )}
      >
        <motion.div
          className="w-full max-w-[220px]"
          animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
          transition={{
            duration: 4 + index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ExpertPictogram
            id={expert.id}
            className="h-full w-full transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </motion.div>
      </div>
      <div className="relative border-t border-white/10 bg-[#0c1a3a]/60 px-4 py-3 backdrop-blur-sm sm:px-5 sm:py-4">
        <p
          className={cn(
            "font-semibold leading-snug text-white transition-colors group-hover:text-sky",
            styles.title,
          )}
        >
          {expert.label}
        </p>
        <p className="mt-1 text-xs text-white/55 sm:text-sm">{expert.descriptor}</p>
      </div>
    </motion.li>
  );
}

export function ExpertIntervention() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#071222] py-20 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 0%, rgba(37,99,235,0.35), transparent 55%), radial-gradient(ellipse 60% 40% at 90% 80%, rgba(45,212,191,0.15), transparent 50%)",
        }}
      />
      <svg
        className="pointer-events-none absolute left-0 top-1/4 h-2/3 w-full opacity-[0.12]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 200 Q300 80 600 200 T1200 180"
          fill="none"
          stroke="#7dd3fc"
          strokeWidth="2"
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
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-sky/90">
            Expert intervention
          </p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-white">
            Right support starts with the right expertise.
          </h2>
          <p className="mt-6 text-lg text-white/80">
            Based on the plan, you work with experts such as:
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
            NextU understands your need, identifies the relevant area of support,
            and helps connect you with an appropriate expert—not as employees of
            NextU, but as independent professionals in our network.
          </p>
        </motion.header>

        <ul
          className="mt-14 flex flex-wrap justify-center gap-3 sm:gap-4"
          aria-label="Expert intervention categories"
        >
          {expertInterventionTypes.map((expert, i) => (
            <ExpertWallCard key={expert.id} expert={expert} index={i} />
          ))}
        </ul>

        <motion.div
          className="mt-12 text-center lg:text-left"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            type="button"
            onClick={scrollToLeadForm}
            className="text-sm font-semibold text-sky hover:underline"
          >
            Tell us what you need →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
