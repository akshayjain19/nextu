export type Founder = {
  id: string;
  name: string;
  designation: string;
  secondaryDesignation?: string;
  /** Short discipline tag, e.g. Aviation */
  category: string;
  /** Display label, e.g. AVIATION */
  categoryLabel: string;
  bio: string;
  /**
   * Official portrait under /public (e.g. /images/founders/sandeep-bagh.webp).
   * Omit until company-provided photographs are available.
   */
  image?: string;
  initials: string;
  featured?: boolean;
};

export const founders: Founder[] = [
  {
    id: "sandeep",
    featured: true,
    name: "Sandeep Bagh",
    designation: "Commercial Pilot · Akasa Air",
    category: "Aviation",
    categoryLabel: "AVIATION",
    initials: "SB",
    bio:
      "Sandeep Bagh is a commercial pilot with Akasa Air. His professional life is shaped by discipline, responsibility, communication and decision-making in demanding environments — perspectives that contribute to the way he thinks about people, growth and the NextU mission.",
  },
  {
    id: "kuldeep",
    name: "Dr. Kuldeep Bagh",
    designation: "Doctor",
    secondaryDesignation: "Emergency & Trauma Care",
    category: "Medicine",
    categoryLabel: "MEDICINE",
    initials: "KB",
    bio:
      "Dr. Kuldeep Bagh brings a medical perspective to NextU, with experience in emergency and trauma care and an understanding of the importance of quality, patient safety and clear decision-making in healthcare. He has been previously associated with St. Stephen's.",
  },
  {
    id: "prerna",
    name: "Dr. Prerna Singh Bagh",
    designation: "Psychologist & Mental Health Professional",
    category: "Psychology",
    categoryLabel: "PSYCHOLOGY",
    initials: "PSB",
    bio:
      "Dr. Prerna Singh Bagh is a psychologist and mental health professional whose work spans counselling, personal development, emotional well-being and psychological education. Her work has included supporting students, parents and institutions, with a focus on emotional resilience, mindset development, behaviour and mental well-being.",
  },
];

export function partitionFounders(items: Founder[]) {
  const featured = items.find((f) => f.featured) ?? items[0];
  const supporting = items.filter((f) => f.id !== featured.id);
  return { featured, supporting };
}
