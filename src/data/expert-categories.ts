import { expertInterventionTypes } from "@/data/expert-interventions";

export type ExpertOption = {
  value: string;
  label: string;
  group: string;
};

const OFFICIAL_GROUP = "Life Design & Transformation";

export const expertSelectOptions: ExpertOption[] = [
  ...expertInterventionTypes.map((e) => ({
    value: e.id,
    label: e.label,
    group: OFFICIAL_GROUP,
  })),
  { group: "Other", value: "other", label: "Other" },
];

export const expertGroups = [...new Set(expertSelectOptions.map((o) => o.group))];

export type HeroExpertCard = {
  id: string;
  title: string;
  category: string;
  tone: "sky" | "navy" | "white" | "cobalt";
  icon: string;
  rotate: number;
  /** Primary accent card in hero visual */
  accent?: boolean;
};

/** Hero visual only — max 4 category cards, not real people */
export const heroExpertCards: HeroExpertCard[] = [
  {
    id: "career",
    title: "Career Coach",
    category: "Growth",
    tone: "sky",
    icon: "🎯",
    rotate: -3,
  },
  {
    id: "nutrition",
    title: "Nutritionist",
    category: "Wellness",
    tone: "white",
    icon: "🥗",
    rotate: 2,
  },
  {
    id: "mental",
    title: "Mental Health",
    category: "Support",
    tone: "white",
    icon: "🧠",
    rotate: -2,
  },
  {
    id: "speaking",
    title: "Public Speaking",
    category: "Confidence",
    tone: "cobalt",
    icon: "🎤",
    rotate: 3,
    accent: true,
  },
];
