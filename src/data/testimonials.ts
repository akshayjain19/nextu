export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  /** CSS object-position for editorial framing */
  imagePosition?: string;
  featured?: boolean;
};

// TEMPORARY PLACEHOLDER TESTIMONIALS + IMAGES — REPLACE BEFORE PRODUCTION
// Temporary sample testimonials — replace with official NextU testimonials before production.

export const testimonials: Testimonial[] = [
  {
    id: "aarav",
    featured: true,
    name: "Aarav Mehta",
    role: "Working Professional",
    image: "/images/testimonials/testimonial-aarav.webp",
    imagePosition: "50% 20%",
    quote:
      "I had been looking for the right kind of guidance but wasn't really sure where to start. NextU understood what I was looking for and helped me connect with someone who was actually relevant to my situation. The process was incredibly simple.",
  },
  {
    id: "riya",
    name: "Riya Sharma",
    role: "Young Professional",
    image: "/images/testimonials/testimonial-riya.webp",
    imagePosition: "50% 15%",
    quote:
      "I didn't know exactly what kind of expert I needed. I just knew I needed help figuring out my next step. The conversation with NextU made the process feel much easier and more personal.",
  },
  {
    id: "kunal",
    name: "Kunal Verma",
    role: "Entrepreneur",
    image: "/images/testimonials/testimonial-kunal.webp",
    imagePosition: "50% 25%",
    quote:
      "What I liked most was that I didn't have to spend hours searching on different platforms. I explained what I needed and NextU helped point me in the right direction.",
  },
  {
    id: "ananya",
    name: "Ananya Kapoor",
    role: "Marketing Professional",
    image: "/images/testimonials/testimonial-ananya.webp",
    imagePosition: "55% 18%",
    quote:
      "Finding the right person to talk to can be surprisingly difficult. NextU made the first step simple, and I was able to get connected with someone who understood what I was looking for.",
  },
  {
    id: "arjun",
    name: "Arjun Malhotra",
    role: "Consultant",
    image: "/images/testimonials/testimonial-arjun.webp",
    imagePosition: "48% 22%",
    quote:
      "The experience felt much more personal than simply browsing a directory. I could explain what I needed, and NextU helped me find the right kind of expertise.",
  },
];

export function partitionTestimonials(items: Testimonial[]) {
  if (items.length === 0) {
    return { featured: null as Testimonial | null, supporting: [] as Testimonial[] };
  }
  const featured = items.find((t) => t.featured) ?? items[0];
  const supporting = items.filter((t) => t.id !== featured.id);
  return { featured, supporting };
}
