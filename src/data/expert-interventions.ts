export type ExpertSize = "feature" | "large" | "medium" | "compact";

export type ExpertInterventionType = {
  id: string;
  label: string;
  descriptor: string;
  size: ExpertSize;
  /** Responsive width for editorial wall */
  widthClass: string;
};

/** Official expert intervention examples — categories only, not individual profiles */
export const expertInterventionTypes: ExpertInterventionType[] = [
  {
    id: "public-speaking",
    label: "Public Speaking Coach",
    descriptor: "Communicate with confidence",
    size: "large",
    widthClass: "w-full sm:w-[calc(50%-0.5rem)] lg:w-[46%]",
  },
  {
    id: "nutritionist",
    label: "Nutritionist",
    descriptor: "Nourish everyday habits",
    size: "large",
    widthClass: "w-full sm:w-[calc(50%-0.5rem)] lg:w-[46%]",
  },
  {
    id: "career",
    label: "Career Coach",
    descriptor: "Direction & professional growth",
    size: "feature",
    widthClass: "w-full lg:w-[62%]",
  },
  {
    id: "dermatologist",
    label: "Dermatologist & Hair Specialist",
    descriptor: "Skin & hair care",
    size: "medium",
    widthClass: "w-full sm:w-[calc(50%-0.5rem)] lg:w-[31%]",
  },
  {
    id: "fitness",
    label: "Fitness Coach",
    descriptor: "Strength & movement",
    size: "medium",
    widthClass: "w-full sm:w-[calc(50%-0.5rem)] lg:w-[31%]",
  },
  {
    id: "mental-health",
    label: "Mental Health Professional",
    descriptor: "Wellbeing & support",
    size: "medium",
    widthClass: "w-full sm:w-[calc(50%-0.5rem)] lg:w-[31%]",
  },
  {
    id: "communication",
    label: "Communication Trainer",
    descriptor: "Clearer conversations",
    size: "medium",
    widthClass: "w-full lg:w-[72%]",
  },
  {
    id: "image",
    label: "Image Consultant",
    descriptor: "Personal presence & style",
    size: "compact",
    widthClass: "w-full sm:w-[calc(50%-0.5rem)] lg:w-[24%]",
  },
  {
    id: "digital-detox",
    label: "Digital Detox & Detachment Coach",
    descriptor: "Healthier tech boundaries",
    size: "compact",
    widthClass: "w-full sm:w-[calc(50%-0.5rem)] lg:w-[24%]",
  },
];
