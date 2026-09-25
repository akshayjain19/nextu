export type Service = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  visual: "product" | "web" | "mobile" | "ai" | "design" | "data";
};

export const services: Service[] = [
  {
    id: "product",
    title: "Product Development",
    summary:
      "From discovery to launch—strategy, roadmaps, and full product builds.",
    tags: ["Discovery", "MVP", "Scale"],
    visual: "product",
  },
  {
    id: "web",
    title: "Web Development",
    summary:
      "Fast, accessible marketing sites and complex web applications.",
    tags: ["Next.js", "Performance", "SEO"],
    visual: "web",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    summary: "Native-feel experiences across iOS and Android.",
    tags: ["React Native", "Offline", "Push"],
    visual: "mobile",
  },
  {
    id: "ai",
    title: "AI & Automation",
    summary:
      "Practical AI features, agents, and workflow automation that ship.",
    tags: ["LLMs", "Agents", "Integrations"],
    visual: "ai",
  },
  {
    id: "design",
    title: "UI / UX",
    summary:
      "Editorial interfaces, design systems, and prototype-to-production handoff.",
    tags: ["Systems", "Motion", "Research"],
    visual: "design",
  },
  {
    id: "saas",
    title: "SaaS Development",
    summary: "Multi-tenant architecture, billing, and growth-ready foundations.",
    tags: ["Auth", "Billing", "Dashboards"],
    visual: "web",
  },
  {
    id: "data",
    title: "Data & Analytics",
    summary: "Pipelines, dashboards, and decision-ready instrumentation.",
    tags: ["ETL", "Warehouses", "BI"],
    visual: "data",
  },
  {
    id: "backend",
    title: "APIs & Backend",
    summary: "Reliable services, integrations, and cloud-native infrastructure.",
    tags: ["APIs", "Postgres", "Edge"],
    visual: "data",
  },
  {
    id: "consulting",
    title: "Technology Consulting",
    summary:
      "Architecture reviews, team augmentation, and technical due diligence.",
    tags: ["Audits", "Staff+", "Roadmaps"],
    visual: "product",
  },
];
