export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  /** Placeholder body — replace with CMS/MDX content */
  body: string[];
};

export const insights: InsightPost[] = [
  {
    slug: "designing-for-clarity",
    title: "Designing for clarity in complex products",
    excerpt:
      "How we reduce noise in dashboards and workflows without dumbing down the underlying system.",
    category: "Design",
    date: "2026-02-12",
    readTime: "6 min",
    image: "/visuals/insight-clarity.svg",
    featured: true,
    body: [
      "Complex products fail when every screen tries to say everything at once.",
      "We start with a single narrative per view—what decision is this surface supporting?",
      "Typography, spacing, and motion then reinforce that story instead of competing with it.",
    ],
  },
  {
    slug: "shipping-ai-features",
    title: "Shipping AI features that teams can maintain",
    excerpt:
      "Practical patterns for evals, fallbacks, and observability when LLMs meet production.",
    category: "Engineering",
    date: "2026-01-28",
    readTime: "8 min",
    image: "/visuals/insight-ai.svg",
    body: [
      "The hardest part of AI in products is not the demo—it's the operating model.",
      "We treat prompts, tools, and guardrails as versioned code with explicit ownership.",
    ],
  },
  {
    slug: "editorial-marketing-sites",
    title: "Why editorial marketing sites outperform template landings",
    excerpt:
      "Composition, rhythm, and imagery as trust signals for technical buyers.",
    category: "Studio",
    date: "2026-01-05",
    readTime: "5 min",
    image: "/visuals/insight-editorial.svg",
    body: [
      "Buyers can feel when a site was assembled from blocks versus composed with intent.",
      "Editorial layouts create memory—they signal how you'll treat their product.",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((p) => p.slug === slug);
}
