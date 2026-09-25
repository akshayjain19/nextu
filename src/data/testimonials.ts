export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

/** Empty until real testimonials are provided — UI shows designed placeholders */
export const testimonials: Testimonial[] = [];
