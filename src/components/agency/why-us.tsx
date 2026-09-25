import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { whyUsPoints } from "@/data/why-us";

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionLabel>Different approach</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Strategy, craft, and code in one room.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {whyUsPoints.map((point, i) => (
            <Reveal
              key={point.title}
              delay={i * 0.06}
              className="border-t border-border pt-8"
            >
              <h3 className="text-xl font-semibold">{point.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {point.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
