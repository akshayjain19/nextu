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

export type NetworkCard = {
  id: string;
  title: string;
  category: string;
  tone: "sky" | "navy" | "white" | "cobalt";
  icon: string;
  rotate: number;
  offset: { x: number; y: number };
};

/** Visual category cards only — not real people */
export const heroFloatingCards: NetworkCard[] = [
  { id: "career", title: "Career Coach", category: "Growth", tone: "sky", icon: "🎯", rotate: -5, offset: { x: -8, y: 10 } },
  { id: "nutrition", title: "Nutritionist", category: "Wellness", tone: "white", icon: "🥗", rotate: 4, offset: { x: 52, y: -4 } },
  { id: "mental", title: "Mental Health", category: "Support", tone: "navy", icon: "🧠", rotate: -3, offset: { x: 75, y: 38 } },
  { id: "speaking", title: "Public Speaking", category: "Confidence", tone: "cobalt", icon: "🎤", rotate: 6, offset: { x: 10, y: 52 } },
  { id: "fitness", title: "Fitness Coach", category: "Lifestyle", tone: "white", icon: "💪", rotate: -4, offset: { x: 40, y: 26 } },
  { id: "communication", title: "Communication", category: "Relationships", tone: "sky", icon: "💬", rotate: 5, offset: { x: 62, y: 14 } },
];
