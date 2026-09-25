"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { projects } from "@/data/projects";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function FeaturedWork() {
  return (
    <section className="bg-canvas-warm py-24 sm:py-32">
      <Container>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Featured work</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Case studies in composition.
            </h2>
          </div>
          <Button variant="secondary" href="/work">All projects</Button>
        </Reveal>

        <div className="mt-16 space-y-24 sm:space-y-32">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <article
                className={cn(
                  "grid gap-10",
                  project.layout === "full"
                    ? "lg:grid-cols-1"
                    : "lg:grid-cols-12 lg:items-center",
                )}
              >
                <div
                  className={cn(
                    project.layout === "right" && "lg:order-2",
                    project.layout === "full"
                      ? "relative -mx-5 sm:-mx-8 lg:mx-0"
                      : "lg:col-span-7",
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-2xl border border-border bg-surface",
                      project.layout === "full" && "lg:rounded-none lg:border-x-0",
                    )}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} — placeholder visual`}
                      width={1400}
                      height={720}
                      className={cn(
                        "w-full object-cover",
                        project.layout === "full" && "max-h-[480px]",
                      )}
                    />
                  </div>
                </div>
                <div
                  className={cn(
                    project.layout === "right" && "lg:order-1",
                    project.layout === "full"
                      ? "max-w-2xl"
                      : "lg:col-span-5",
                  )}
                >
                  <p className="text-sm font-semibold tracking-[0.2em] text-ink-soft">
                    PROJECT {project.index}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                    {project.problem}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-ink-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/work#${project.slug}`}
                    className="mt-8 inline-flex text-sm font-medium text-ink underline-offset-4 hover:underline"
                    onClick={() =>
                      trackEvent("project_case_study_clicked", {
                        project: project.slug,
                      })
                    }
                  >
                    View case study →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
