export interface Testimonial {
  text: string;
  name: string;
  role: string;
  company: string;
  service: string;
  outcome: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "Eddinet rebuilt our organic presence from the ground up. Within months we moved from low visibility to 7.96M+ monthly impressions, and organic search turned from a cost centre into our most consistent admissions channel.",
    name: "Rajesh Kumar",
    role: "Marketing Head",
    company: "TGC Institute",
    service: "SEO & AI SEO",
    outcome: "7.96M monthly impressions, page-one primary rankings",
    initials: "RK",
  },
  {
    text: "We launched with no campaign data and a tight budget. Eddinet kept cost per acquisition 38% below category average while scaling us to 250 conversions in the first five weeks. The reporting made every rupee explainable.",
    name: "Sarah Anderson",
    role: "Founder",
    company: "Bliss & Burn Brand",
    service: "Google Ads & PPC",
    outcome: "250 conversions in 5 weeks, CPA 38% below average",
    initials: "SA",
  },
  {
    text: "From page 3 to dominating Google Maps for our service category. The 650+ monthly leads we now receive have transformed the phone ring-off of the store. The team understood local search better than anyone we'd worked with before.",
    name: "Mike Thompson",
    role: "Owner",
    company: "OK Tire Calgary",
    service: "Local SEO & Lead Generation",
    outcome: "650+ monthly leads in under 4 months",
    initials: "MT",
  },
  {
    text: "They don't chase vanity metrics. Every strategy decision was tied to patient acquisition cost and revenue, not impressions. Our cost per acquisition dropped 42% while conversions nearly doubled within six months.",
    name: "Neha Patel",
    role: "CEO",
    company: "MedConnect Healthcare",
    service: "Performance Marketing",
    outcome: "CPA down 42%, conversions nearly doubled in 6 months",
    initials: "NP",
  },
];