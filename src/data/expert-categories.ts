export type ExpertOption = {
  value: string;
  label: string;
  group: string;
};

export const expertSelectOptions: ExpertOption[] = [
  { group: "Health & Wellness", value: "doctor", label: "Doctor" },
  { group: "Health & Wellness", value: "dentist", label: "Dentist" },
  { group: "Health & Wellness", value: "dermatologist", label: "Dermatologist" },
  { group: "Health & Wellness", value: "therapist", label: "Therapist" },
  { group: "Health & Wellness", value: "nutritionist", label: "Nutritionist" },
  { group: "Health & Wellness", value: "fitness-expert", label: "Fitness Expert" },
  {
    group: "Career & Personal Growth",
    value: "career-coach",
    label: "Career Coach",
  },
  {
    group: "Career & Personal Growth",
    value: "personality-development",
    label: "Personality Development Expert",
  },
  {
    group: "Career & Personal Growth",
    value: "interview-expert",
    label: "Interview Expert",
  },
  {
    group: "Career & Personal Growth",
    value: "communication-expert",
    label: "Communication Expert",
  },
  { group: "Career & Personal Growth", value: "mentor", label: "Mentor" },
  {
    group: "Technology",
    value: "software-engineer",
    label: "Software Engineer",
  },
  { group: "Technology", value: "ai-expert", label: "AI Expert" },
  { group: "Technology", value: "data-expert", label: "Data Expert" },
  { group: "Technology", value: "product-manager", label: "Product Manager" },
  {
    group: "Technology",
    value: "tech-consultant",
    label: "Tech Consultant",
  },
  {
    group: "Business & Marketing",
    value: "digital-marketer",
    label: "Digital Marketer",
  },
  {
    group: "Business & Marketing",
    value: "growth-expert",
    label: "Growth Expert",
  },
  {
    group: "Business & Marketing",
    value: "business-consultant",
    label: "Business Consultant",
  },
  {
    group: "Business & Marketing",
    value: "sales-expert",
    label: "Sales Expert",
  },
  {
    group: "Business & Marketing",
    value: "branding-expert",
    label: "Branding Expert",
  },
  { group: "Specialized", value: "pilot", label: "Pilot" },
  {
    group: "Specialized",
    value: "aviation-expert",
    label: "Aviation Expert",
  },
  {
    group: "Specialized",
    value: "finance-expert",
    label: "Finance Expert",
  },
  { group: "Specialized", value: "legal-expert", label: "Legal Expert" },
  {
    group: "Specialized",
    value: "education-expert",
    label: "Education Expert",
  },
  { group: "Other", value: "other", label: "Other" },
];

export type CategoryCard = {
  id: string;
  slug: string;
  title: string;
  description: string;
  examples: string[];
  icon: "health" | "career" | "tech" | "business" | "specialized";
};

/** Future routes: /experts/[slug] */
export const categoryCards: CategoryCard[] = [
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare",
    description: "Medical and wellness professionals for your health goals.",
    examples: ["Doctor", "Dentist", "Therapist", "Dermatologist"],
    icon: "health",
  },
  {
    id: "career",
    slug: "career-growth",
    title: "Career & Growth",
    description: "Coaches and mentors to help you grow personally and professionally.",
    examples: ["Career Coach", "Mentor", "Interview Expert"],
    icon: "career",
  },
  {
    id: "technology",
    slug: "technology",
    title: "Technology",
    description: "Engineers and product leaders for technical guidance.",
    examples: ["Software Engineer", "AI Expert", "Product Manager"],
    icon: "tech",
  },
  {
    id: "business",
    slug: "business-marketing",
    title: "Business & Marketing",
    description: "Strategists and marketers to grow your business.",
    examples: ["Digital Marketer", "Business Consultant", "Growth Expert"],
    icon: "business",
  },
  {
    id: "specialized",
    slug: "specialized",
    title: "Specialized",
    description: "Niche experts across finance, law, aviation, and more.",
    examples: ["Pilot", "Legal Expert", "Finance Expert"],
    icon: "specialized",
  },
];

export const expertGroups = [
  ...new Set(expertSelectOptions.map((o) => o.group)),
];
