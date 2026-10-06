// ============================================================================
//  FILE: data/services/child/design-creative/logo-designing.ts
//  PAGE: /services/design-creative/logo-designing
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/design-creative";
export const child = {
  slug: "logo-designing",
  title: "Logo Designing",
  metaTitle: "Logo Designing Services in India | Eddinet",
  metaDescription: "Eddinet delivers premium logo design services in Delhi NCR to give your brand an iconic, unforgettable visual identity.",
  heroHeading: "Logo Design Services in Delhi",
  heroSubheading: "Custom Logo Design | Logos for Startups | Professional Brand Identity",
  detailedDescription: "Eddinet delivers premium logo design services in Delhi NCR to give your brand an iconic, unforgettable visual identity. We design every logo custom from the ground up crafted around your brand narrative, target market, and growth vision. Stand out with a timeless mark that builds instant credibility. Get your free logo consultation today!\n\nDoes your current logo look like a hundred others? Is it blurry on your website or unreadable on a visiting card? If yes, Eddinet is the solution to your problem.\n\nAs a logo designing company in Delhi, we have created marks for shops, startups, and growing businesses. We learn what makes you different before sketching the first idea. You also see clear previews at every stage, so you always know where your logo stands.",
  features: [
    {
      title: "Custom Logo Design in Delhi",
      description: "Our custom logo design starts with research and hand sketches, not stock icons. We explore several directions, then refine the one that fits your brand best. As a result, your logo is original and can be trademarked more easily.",
    },
    {
      title: "Professional Logo Design for Brand Identity",
      description: "Our professional logo design goes beyond a single image. We choose colours, fonts, and layouts that work together as a small brand kit. In addition, you receive a simple guide showing how and where to use your logo.",
    },
    {
      title: "Business Logo Design for Every Use",
      description: "A good business logo must work on a signboard and a tiny social media icon. We create horizontal, stacked, and icon-only versions. Because of this, your logo stays clear on websites, packaging, uniforms, and invoices.",
    },
    {
      title: "Logo Design for Startups",
      description: "Startups need a strong look without a large budget. We offer focused packages that cover a logo, colour palette, and social media profile images. Your brand looks established from the first day, and you can add more later.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Logo Design Services in Delhi",
    points: [
      "Original concepts only: We do not copy stock icons or reuse old designs. Your logo is created for your business alone. This protects your identity and builds recognition.",
      "Tested on real surfaces: We check your logo on cards, signs, and screens before delivery. Small text stays readable and colours stay accurate. Surprises after printing are avoided.",
      "Clear explanation behind every concept: You learn why each shape and colour was chosen. Decisions become easier and less subjective. Feedback stays focused and productive.",
      "Complete file set: You receive vector, print, and web formats. Your printer, developer, or designer can use them without asking us. This saves time and extra cost.",
      "You own the final logo: After final payment, the rights to the chosen design are yours. No hidden restrictions limit your brand. Your business stays in control.",
      "Quick replies in Indian business hours: Our team is available when your working day begins. Messages get clear answers, not delays. Projects stay on schedule.",
    ],
  },
  process: {
    heading: "Our Process for Logo Design in Delhi",
    steps: [
      {
        num: "01",
        title: "Brand questionnaire",
        description: "You tell us about your business, customers, and competitors. This shows what your logo must say. It also helps us avoid ideas that look like your rivals.",
      },
      {
        num: "02",
        title: "Market and style research",
        description: "We study your industry and collect visual references. As a result, you approve a clear style direction before design begins. Guesswork is removed early.",
      },
      {
        num: "03",
        title: "Sketching and concept creation",
        description: "Next, we sketch ideas on paper and build the strongest ones digitally. You receive a small set of focused concepts. Each one comes with a short explanation.",
      },
      {
        num: "04",
        title: "Feedback and refinement",
        description: "Then we polish your chosen concept using your comments. We adjust shapes, spacing, and colours until it feels right. Every round stays organized and on schedule.",
      },
      {
        num: "05",
        title: "Real-world testing",
        description: "We place the logo on a website header, a visiting card, a signboard, and a social media icon. We also check it in black and white. Weak spots are fixed before delivery.",
      },
      {
        num: "06",
        title: "File delivery and guidance",
        description: "Finally, you receive print-ready and web-ready files, plus a short usage guide. We remain available for future updates. Your logo is ready for use everywhere.",
      },
    ],
    description: "Here is how we take your logo from the first conversation to the final files.",
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "How much do logo design services in Delhi cost?",
      a: "The price depends on the number of concepts, revision rounds, and extra items such as a brand guide. A simple logo costs less than a full identity package. After a short discovery call, we share a clear quote with no hidden charges.",
    },
    {
      q: "How long does it take to design a custom logo?",
      a: "Most logo projects take one to two weeks, depending on how quickly feedback arrives. Larger identity projects take longer. We share a timeline before work begins.",
    },
    {
      q: "Which files will I receive after the logo is finished?",
      a: "You receive vector files, high-resolution images, and web-friendly versions with transparent backgrounds. These cover printing, websites, and social media. We confirm the exact file list before the project starts.",
    },
    {
      q: "Can you design a logo for my startup on a small budget?",
      a: "Yes. Our startup packages focus on the essentials: a logo, colour palette, and profile images. You can add stationery, packaging, or a full brand guide as you grow.",
    },
    {
      q: "How is a logo design agency different from using an online logo maker?",
      a: "Online makers use templates that many businesses share. An agency creates original work based on your market and audience. This makes your logo more unique and easier to protect legally.",
    },
  ],
  crossLinks: crossLinksFor("design-creative"),
  featuresHeading: "Our Logo Design Services in Delhi",
  featuresDescription: "We focus on four areas that decide whether a logo works for your business.",
  docxHeadings: {
    about: "About Us: Logo Designing Company in Delhi",
    process: "Our Process for Logo Design in Delhi",
    faqs: "FAQs",
  },
};
