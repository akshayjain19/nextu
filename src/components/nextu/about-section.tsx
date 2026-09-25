import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            We believe finding the right support shouldn&apos;t be complicated.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-lg text-ink-muted">
            People often know that something in their life needs attention, but
            they don&apos;t always know who to turn to.
          </p>
          <p className="mt-4 text-ink-muted">
            It could be confidence. Communication. Relationships. Lifestyle.
            Career. Health. Personal growth.
          </p>
          <p className="mt-4 text-lg text-ink-muted">
            NextU helps make that first step simpler by connecting people with
            relevant experts—Life Design & Transformation in practice.
          </p>
          <Link href="/about" className="mt-6 inline-block font-semibold text-cobalt hover:underline">
            About NextU →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
