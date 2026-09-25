export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  accent: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We map goals, constraints, and the humans involved—so every decision has context.",
    accent: "Understand the problem deeply before pixels or code.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Flows, typography, and motion—prototypes that feel real enough to test with users.",
    accent: "Editorial interfaces with room to breathe.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Iterative engineering with tight design partnership—accessible, performant, observable.",
    accent: "Ship in slices, not big-bang releases.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Hardening, analytics, and handoff—plus a clear path for what comes next.",
    accent: "Launch is a milestone, not the finish line.",
  },
];
