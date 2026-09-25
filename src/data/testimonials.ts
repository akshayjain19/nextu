export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role?: string;
  /** Path under /public — real customer portrait when available */
  image?: string;
  featured?: boolean;
};

/**
 * Add real NextU customer testimonials here when provided by the company.
 * Leave empty until then — the homepage shows an explicit placeholder layout.
 */
export const testimonials: Testimonial[] = [];

export function partitionTestimonials(items: Testimonial[]) {
  if (items.length === 0) {
    return { featured: null, supporting: [] as Testimonial[] };
  }
  const featured = items.find((t) => t.featured) ?? items[0];
  const supporting = items.filter((t) => t.id !== featured.id).slice(0, 3);
  return { featured, supporting };
}
