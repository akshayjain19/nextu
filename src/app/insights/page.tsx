import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { insights } from "@/data/insights";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description: `Articles and notes from ${siteConfig.name} on product, design, and engineering.`,
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const featured = insights.find((p) => p.featured) ?? insights[0];
  const rest = insights.filter((p) => p.slug !== featured.slug);

  return (
    <main className="pt-28 pb-24">
      <Container>
        <Reveal>
          <SectionLabel>Insights</SectionLabel>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight">
            Editorial notes—not a template blog.
          </h1>
        </Reveal>

        <Reveal className="mt-16">
          <Link
            href={`/insights/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-border bg-surface lg:grid-cols-2"
          >
            <div className="relative min-h-[280px]">
              <Image src={featured.image} alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-strong">
                Featured · {featured.category}
              </p>
              <h2 className="mt-4 text-3xl font-semibold group-hover:text-accent-strong">
                {featured.title}
              </h2>
              <p className="mt-4 text-ink-muted">{featured.excerpt}</p>
            </div>
          </Link>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link
                href={`/insights/${post.slug}`}
                className="group block border-t border-border pt-8"
              >
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl border border-border">
                  <Image src={post.image} alt="" fill className="object-cover" />
                </div>
                <p className="text-xs uppercase tracking-widest text-ink-soft">
                  {post.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold group-hover:text-accent-strong">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </main>
  );
}
