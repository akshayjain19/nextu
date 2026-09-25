import type { LucideIcon } from "lucide-react";
import {
  Apple,
  Brain,
  Dumbbell,
  Mic2,
  Palette,
  Smartphone,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

export type ExpertInterventionType = {
  id: string;
  label: string;
  icon: LucideIcon;
};

/** Official expert intervention examples — categories only, not individual profiles */
export const expertInterventionTypes: ExpertInterventionType[] = [
  { id: "public-speaking", label: "Public Speaking Coach", icon: Mic2 },
  { id: "nutritionist", label: "Nutritionist", icon: Apple },
  { id: "dermatologist", label: "Dermatologist & Hair Specialist", icon: Stethoscope },
  { id: "fitness", label: "Fitness Coach", icon: Dumbbell },
  { id: "career", label: "Career Coach", icon: Sparkles },
  { id: "mental-health", label: "Mental Health Professional", icon: Brain },
  { id: "image", label: "Image Consultant", icon: Palette },
  { id: "digital-detox", label: "Digital Detox & Detachment Coach", icon: Smartphone },
  { id: "communication", label: "Communication Trainer", icon: Users },
];
