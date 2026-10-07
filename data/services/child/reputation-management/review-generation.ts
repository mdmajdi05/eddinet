// ============================================================================
//  FILE: data/services/child/reputation-management/review-generation.ts
//  PAGE: /services/reputation-management/review-generation-services-in-india
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================
// ── HERO FIELDS (top of the page) ─────────────────────────────────────
//   heroEyebrow    = badge chip shown ABOVE the <h1>
//   heroHeading    = the <h1> heading itself
//   heroSubheading = paragraph shown BELOW the <h1>

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/reputation-management";
export const child = {
  slug: "review-generation-services-in-india",
  title: "Review Generation",
  metaTitle: "Review Generation Services in Delhi NCR | Eddinet",
  metaDescription: "Ethical review-generation flows that steadily grow your rating and review volume. More genuine reviews, at a pace and volume that helps rankings — the right way. Eddinet delivers dependable review generation services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Genuine Google Reviews | QR Code Campaigns | WhatsApp & SMS Requests",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Review Generation Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET offers review generation services in India to help businesses turn satisfied customers into visible, credible advocates. Our team builds simple, compliant systems that make leaving a review effortless, so your rating grows steadily and honestly.",
  detailedDescription: "Happy customers rarely write reviews on their own. They leave satisfied, get busy, and forget. Meanwhile, a rival with fewer skills but more stars wins the click.\n\nAt EDDINET, a Google review generation company in Delhi, we close that gap. We ask the right customers at the right moment, through the channel they already use. The result is a steady stream of authentic feedback.\n\nOur customer review collection services in India fit clinics, retailers, restaurants, and service firms. Our automated review request software in India removes the manual chasing. If you wonder how to get more Google reviews for your business in Delhi NCR, our proven system gives you a clear answer.",
  features: [
    {
      title: "Review Request Campaigns",
      description: "Our review generation services in India send polite requests by WhatsApp, SMS, or email. Customers reach your Google review page in a single tap.",
    },
    {
      title: "QR Codes & Review Links",
      description: "We create branded QR codes and short links for counters, bills, and packaging. Walk-in customers can review on the spot.",
    },
    {
      title: "Automated Review Requests",
      description: "Our automated review request software in India triggers a message after each purchase or appointment. No customer is forgotten, and no staff time is wasted.",
    },
    {
      title: "Customer Review Collection",
      description: "Our customer review collection services in India gather feedback across Google and other trusted platforms. Your proof appears where buyers look.",
    },
    {
      title: "Staff Training & Scripts",
      description: "We teach your team when and how to ask. A friendly, well-timed request lifts response rates.",
    },
    {
      title: "Local Review Strategy",
      description: "We guide you on how to get more Google reviews for business in Delhi NCR, with outlet-wise goals and monthly targets. Each branch builds its own momentum.",
    },
  ],
  featuresHeading: "Our Review Generation Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Google Review Generation Company in Delhi?",
    points: [
      "Genuine Reviews Only: We never buy reviews, offer rewards, or create fake accounts. Your profile stays safe, and your rating stays credible.",
      "Every Customer Invited: We invite all customers to share their experience, not a selected few. This keeps your profile within Google's guidelines.",
      "Effortless for Customers: Fewer taps mean more completed reviews. Our links and QR codes remove every unnecessary step.",
      "Perfectly Timed Requests: We ask when the experience is still fresh. Smart timing earns more responses than random reminders.",
      "Built for Every Scale: We run campaigns for single outlets and multi-branch networks. Each location builds its own momentum.",
      "Honest, Plain Reporting: You see real numbers on reviews, ratings, and response rates. We never hide behind jargon.",
    ],
  },
  process: {
    heading: "Our Review Generation Process",
    steps: [
      {
        num: "01",
        title: "Customer Journey Mapping",
        description: "We study how customers reach you and when satisfaction peaks. This reveals the ideal moment to ask, such as after delivery, treatment, or checkout.",
      },
      {
        num: "02",
        title: "Review Link & Template Setup",
        description: "We create your direct Google review link, branded QR codes, and message templates. Each one is written in a warm tone that matches your brand.",
      },
      {
        num: "03",
        title: "Campaign Launch",
        description: "Requests go out through WhatsApp, SMS, email, or in-store QR codes on a planned schedule. Customers reach your review page in a single tap.",
      },
      {
        num: "04",
        title: "Team Onboarding",
        description: "We train your staff to invite reviews politely and at the right time. A confident, friendly request lifts response rates noticeably.",
      },
      {
        num: "05",
        title: "Monthly Growth Report",
        description: "You receive a clear summary of new reviews, rating movement, and response rates. We also share fresh ideas to improve results the following month.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are review generation services?",
      a: "They help businesses collect genuine customer reviews through simple, compliant requests.",
    },
    {
      q: "How much do review generation services in India cost?",
      a: "Pricing depends on locations, customer volume, and channels. Share your needs, and we will send a clear quote.",
    },
    {
      q: "How can I get more Google reviews for my business in Delhi NCR?",
      a: "Ask every customer soon after the service, and share a direct review link. QR codes and WhatsApp requests make it easy.",
    },
    {
      q: "Can I offer discounts in exchange for reviews?",
      a: "No. Google prohibits incentivised reviews. We rely on polite, honest requests instead.",
    },
    {
      q: "Can you guarantee a 5-star rating?",
      a: "No. Ratings reflect real customer experiences. We help you collect more feedback, and your service quality shapes the stars.",
    },
    {
      q: "How long does it take to see results?",
      a: "Many businesses notice new reviews within the first few weeks. A stronger rating builds over several months.",
    },
    {
      q: "Do you work with businesses that have few reviews?",
      a: "Yes. New and small profiles often gain the most from a structured campaign.",
    },
  ],
  cta: {
    heading: "Turn Happy Customers Into Your Best Marketing",
    sub: "Discuss Your Review Generation Needs",
    description: "Ready to grow your ratings the right way? Partner with EDDINET, a trusted Google review generation company in Delhi. Contact our team today for a complimentary review plan and a clear quote within 24 hours.",
  },
  crossLinks: crossLinksFor("reputation-management"),
  docxHeadings: {
    about: "About EDDINET: Google Review Generation Company in Delhi",
    process: "Our Review Generation Process",
    faqs: "Frequently Asked Questions",
  },
};
