"use client";

import { MotionSection } from "@/components/ui/motion-section";
import { motion, useReducedMotion } from "framer-motion";
import { Layers, MessageCircle, Target, Zap } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "One place",
    description: "Access expertise across multiple fields.",
  },
  {
    icon: MessageCircle,
    title: "Human connection",
    description: "We're not just a list of search results.",
  },
  {
    icon: Target,
    title: "Relevant expertise",
    description: "We focus on understanding your requirement first.",
  },
  {
    icon: Zap,
    title: "Simple process",
    description: "No complicated booking or registration process.",
  },
];

export function WhyNextU() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionSection className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Don&apos;t spend hours searching.
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Tell us what you need and let our network help you find the right
          person.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md hover:shadow-navy/5"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={reduceMotion ? undefined : { y: -2 }}
            >
              <item.icon className="size-5 text-primary" aria-hidden />
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
