import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { insights } from "@/data/insights";
import Image from "next/image";
import Link from "next/link";

export function InsightsPreview() {
  const featured = insights.find((p) => p.featured) ?? insights[0];
  const rest = insights.filter((p) => p.slug !== featured.slug);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Insights</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Notes from the studio.
            </h2>
          </div>
          <Button variant="secondary" href="/insights">Read all</Button>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Link
              href={`/insights/${featured.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-border bg-surface lg:grid-cols-2"
            >
              <div className="relative min-h-[220px] lg:min-h-full">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-strong">
                  {featured.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-accent-strong">
                  {featured.title}
                </h3>
                <p className="mt-3 text-ink-muted">{featured.excerpt}</p>
                <p className="mt-6 text-xs text-ink-soft">
                  {featured.date} · {featured.readTime}
                </p>
              </div>
            </Link>
          </Reveal>
          <div className="flex flex-col gap-6 lg:col-span-5">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex gap-5 border-t border-border pt-6"
                >
                  <div className="relative size-24 shrink-0 overflow-hidden rounded-xl border border-border">
                    <Image src={post.image} alt="" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-soft">
                      {post.category}
                    </p>
                    <h3 className="mt-1 font-semibold group-hover:text-accent-strong">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-ink-muted">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
