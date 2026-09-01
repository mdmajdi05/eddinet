export interface Testimonial {
  text: string;
  name: string;
  role: string;
  company: string;
  service: string;
  outcome: string;
  initials: string;
}

// We only publish testimonials with direct, permission-based client consent.
// No entries are included until we have verifiable, approved feedback - per our
// quality and trust rules, we do not publish placeholder or fabricated reviews.
export const testimonials: Testimonial[] = [];
