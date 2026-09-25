import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  HeartHandshake,
  Lightbulb,
  Map,
  Scale,
  Sparkles,
  UserRound,
} from "lucide-react";

export type Intervention = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  layout: "large" | "medium" | "compact";
};

export const coreInterventions: Intervention[] = [
  {
    id: "clarity",
    title: "Life Clarity Session",
    description:
      "Get clarity on where you are, what matters, and what comes next.",
    icon: Lightbulb,
    layout: "large",
  },
  {
    id: "lifestyle",
    title: "Lifestyle Evaluation",
    description:
      "Take a closer look at the habits, routines and lifestyle patterns shaping your everyday life.",
    icon: Scale,
    layout: "medium",
  },
  {
    id: "personality",
    title: "Personality Traits Upgradation",
    description:
      "Work on the traits and behaviours that can support personal growth and development.",
    icon: ArrowUpRight,
    layout: "compact",
  },
  {
    id: "relationships",
    title: "Better Relationship Management",
    description:
      "Build healthier communication, understanding and relationship habits.",
    icon: HeartHandshake,
    layout: "medium",
  },
  {
    id: "confidence",
    title: "Confidence Building",
    description:
      "Develop greater confidence in how you think, communicate and show up.",
    icon: UserRound,
    layout: "compact",
  },
  {
    id: "goals",
    title: "Goal Mapping",
    description:
      "Turn your aspirations into clearer goals and actionable direction.",
    icon: Map,
    layout: "large",
  },
];

export const lifeDesignIntro = {
  eyebrow: "Life Design & Transformation",
  title: "Support for the areas that matter in your life",
  description:
    "Different challenges need different kinds of support. NextU helps connect you with experts across key areas of personal growth and transformation.",
  icon: Sparkles,
};
