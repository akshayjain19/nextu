export type Project = {
  id: string;
  slug: string;
  index: string;
  title: string;
  problem: string;
  tags: string[];
  /** Placeholder until real case study imagery is added */
  image: string;
  layout: "left" | "right" | "full";
  /** Placeholder — add verified impact when available */
  impact?: string;
};

export const projects: Project[] = [
  {
    id: "atlas",
    slug: "atlas-platform",
    index: "01",
    title: "Atlas Operations Platform",
    problem:
      "A unified workspace for distributed teams to plan releases, track incidents, and align on product health.",
    tags: ["Product", "Next.js", "Design system"],
    image: "/visuals/project-atlas.svg",
    layout: "left",
  },
  {
    id: "lumen",
    slug: "lumen-mobile",
    index: "02",
    title: "Lumen Field App",
    problem:
      "A mobile companion for field technicians—offline-first workflows, photo capture, and sync when back online.",
    tags: ["Mobile", "React Native", "Offline"],
    image: "/visuals/project-lumen.svg",
    layout: "right",
  },
  {
    id: "signal",
    slug: "signal-analytics",
    index: "03",
    title: "Signal Analytics Hub",
    problem:
      "Executive dashboards that turn messy product data into a single, trustworthy narrative.",
    tags: ["Data", "APIs", "Visualization"],
    image: "/visuals/project-signal.svg",
    layout: "full",
  },
];
