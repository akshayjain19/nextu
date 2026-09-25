import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getInsight, insights } from "@/data/insights";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return { title: "Insight" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/insights/${slug}`,
    },
  };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  return (
    <main className="pt-28 pb-24">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
            {post.category} · {post.readTime}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-ink-muted">{post.date}</p>
        </Reveal>
        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
          <Image src={post.image} alt="" fill className="object-cover" priority />
        </div>
        <div className="prose prose-neutral mt-12 max-w-none space-y-6 text-lg leading-relaxed text-ink-muted">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p className="text-sm text-ink-soft">
            This article uses placeholder body copy—replace via{" "}
            <code className="rounded bg-surface-muted px-1">data/insights.ts</code>{" "}
            or your CMS when ready.
          </p>
        </div>
      </Container>
    </main>
  );
}
