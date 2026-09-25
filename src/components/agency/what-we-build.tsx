import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

const pillars = [
  {
    title: "Platforms",
    copy: "SaaS, internal tools, and customer portals engineered for scale.",
  },
  {
    title: "Experiences",
    copy: "Marketing sites and product UI with editorial typography and motion.",
  },
  {
    title: "Intelligence",
    copy: "AI features, automation, and data layers that stay maintainable.",
  },
];

export function WhatWeBuild() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel>What we build</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Software with a point of view.
            </h2>
          </Reveal>
          <div className="lg:col-span-7 lg:pt-8">
            <ul className="space-y-12 border-t border-border">
              {pillars.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <li className="grid gap-4 border-b border-border pb-12 sm:grid-cols-[140px_1fr]">
                    <span className="text-sm font-semibold uppercase tracking-widest text-accent-strong">
                      {item.title}
                    </span>
                    <p className="text-xl leading-relaxed text-ink-muted">
                      {item.copy}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
