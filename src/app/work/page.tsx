import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { projects } from "@/data/projects";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected product and engineering work from ${siteConfig.name}.`,
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="pt-28 pb-24">
      <Container>
        <Reveal>
          <SectionLabel>Work</SectionLabel>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight">
            Projects composed like editorials—not card grids.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Placeholder case studies below. Swap visuals and copy when real
            client work is cleared for publication.
          </p>
        </Reveal>

        <div className="mt-20 space-y-32">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <article id={project.slug} className="scroll-mt-28">
                <p className="text-sm tracking-[0.2em] text-ink-soft">
                  {project.index}
                </p>
                <h2 className="mt-2 text-4xl font-semibold">{project.title}</h2>
                <div className="mt-10 overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={project.image}
                    alt={`${project.title} placeholder`}
                    width={1400}
                    height={720}
                    className="w-full"
                  />
                </div>
                <p className="mt-8 max-w-2xl text-lg text-ink-muted">
                  {project.problem}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-block text-sm font-medium underline-offset-4 hover:underline"
                >
                  Discuss a similar project →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </main>
  );
}
