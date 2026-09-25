import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            We&apos;re making expertise easier to find.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-lg text-ink-muted">
            Finding the right professional often means asking multiple people,
            searching several places, comparing options, and still not knowing who
            can actually help.
          </p>
          <p className="mt-4 text-lg text-ink-muted">
            NextU simplifies that first step—tell us what you need, and we&apos;ll
            help connect you with someone from our network.
          </p>
          <Link href="/about" className="mt-6 inline-block font-semibold text-cobalt hover:underline">
            About NextU →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
