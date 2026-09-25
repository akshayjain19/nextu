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
  { group: "Career & Personal Growth", value: "career-coach", label: "Career Coach" },
  { group: "Career & Personal Growth", value: "personality-development", label: "Personality Development Expert" },
  { group: "Career & Personal Growth", value: "interview-expert", label: "Interview Expert" },
  { group: "Career & Personal Growth", value: "communication-expert", label: "Communication Expert" },
  { group: "Career & Personal Growth", value: "mentor", label: "Mentor" },
  { group: "Technology", value: "software-engineer", label: "Software Engineer" },
  { group: "Technology", value: "ai-expert", label: "AI Expert" },
  { group: "Technology", value: "data-expert", label: "Data Expert" },
  { group: "Technology", value: "product-manager", label: "Product Manager" },
  { group: "Technology", value: "tech-consultant", label: "Tech Consultant" },
  { group: "Business & Marketing", value: "digital-marketer", label: "Digital Marketer" },
  { group: "Business & Marketing", value: "growth-expert", label: "Growth Expert" },
  { group: "Business & Marketing", value: "business-consultant", label: "Business Consultant" },
  { group: "Business & Marketing", value: "sales-expert", label: "Sales Expert" },
  { group: "Business & Marketing", value: "branding-expert", label: "Branding Expert" },
  { group: "Specialized", value: "pilot", label: "Pilot" },
  { group: "Specialized", value: "aviation-expert", label: "Aviation Expert" },
  { group: "Specialized", value: "finance-expert", label: "Finance Expert" },
  { group: "Specialized", value: "legal-expert", label: "Legal Expert" },
  { group: "Specialized", value: "education-expert", label: "Education Expert" },
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
  { id: "doctor", title: "Doctor", category: "Healthcare", tone: "white", icon: "🩺", rotate: -6, offset: { x: -12, y: 8 } },
  { id: "therapist", title: "Therapist", category: "Wellness", tone: "sky", icon: "💬", rotate: 4, offset: { x: 55, y: -5 } },
  { id: "pilot", title: "Pilot", category: "Specialized", tone: "navy", icon: "✈️", rotate: -3, offset: { x: 78, y: 42 } },
  { id: "marketer", title: "Digital Marketer", category: "Business", tone: "cobalt", icon: "📈", rotate: 5, offset: { x: 8, y: 55 } },
  { id: "engineer", title: "Software Engineer", category: "Technology", tone: "white", icon: "⚡", rotate: -4, offset: { x: 42, y: 28 } },
  { id: "coach", title: "Career Coach", category: "Growth", tone: "sky", icon: "🎯", rotate: 7, offset: { x: 65, y: 12 } },
];

export const networkGroups = [
  {
    id: "healthcare",
    title: "Healthcare",
    examples: ["Doctor", "Dentist", "Therapist", "Dermatologist"],
    tone: "sky" as const,
  },
  {
    id: "career",
    title: "Career & Growth",
    examples: ["Career Coach", "Mentor", "Interview Expert"],
    tone: "white" as const,
  },
  {
    id: "tech",
    title: "Technology",
    examples: ["Software Engineer", "AI Expert", "Product Manager"],
    tone: "cobalt" as const,
  },
  {
    id: "business",
    title: "Business & Marketing",
    examples: ["Digital Marketer", "Growth Expert", "Consultant"],
    tone: "navy" as const,
  },
  {
    id: "specialized",
    title: "Specialized",
    examples: ["Pilot", "Legal Expert", "Finance Expert"],
    tone: "sky" as const,
  },
];
