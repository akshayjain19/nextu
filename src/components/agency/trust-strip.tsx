import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

const ecosystems = [
  "Next.js",
  "React",
  "TypeScript",
  "Node",
  "Postgres",
  "Vercel",
  "AWS",
  "Figma",
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface-muted/60 py-12">
      <Container>
        <Reveal>
          <SectionLabel>Capabilities & stack</SectionLabel>
          <p className="mt-4 max-w-2xl text-balance text-lg text-ink-muted">
            We partner with product teams and founders—no fabricated client logos.
            Replace this strip with verified partners when ready.
          </p>
          <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {ecosystems.map((name) => (
              <li
                key={name}
                className="text-sm font-medium tracking-wide text-ink-soft transition-colors hover:text-ink"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
