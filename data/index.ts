// ============================================================================
//  EDDINET — DATA DIRECTORY (sab data kahan hai, isme yahan hi se dhundho)
// ============================================================================
//
//  Data PAGE-WISE rakha hai — jo page browser me dikhta hai, usi ke naam ki
//  file kholo. Neeche map hai.
//
//  ┌─────────────────────────────────┬────────────────────────────────────────┐
//  │ BROWSER PAGE                     │ DATA FILE (data/…)                     │
//  ├─────────────────────────────────┼────────────────────────────────────────┤
//  │ Home                            │ home.ts   (process steps, why-features,│
//  │                                 │           testimonials, home FAQs)     │
//  │ About                           │ about.ts  (abhi content page code me hi│
//  │                                 │           hai — page file:              │
//  │                                 │           app/about/page.tsx)          │
//  │ Services + Services child pages │ services.ts (10 core services, tabs,   │
//  │                                 │           per-service FAQs, cross-links│
//  │                                 │           + child images)              │
//  │ Portfolio                       │ portfolio.ts (62 client sites +        │
//  │                                 │           categories). NAYA CLIENT YAHIN│
//  │ Blog                            │ blog.ts    (posts). NAYA BLOG YAHIN    │
//  │ Industries                      │ industries.ts (sectors)                │
//  │ Contact                         │ contact.ts (company info: phone, email,│
//  │                                 │           address, hours, whatsapp —    │
//  │                                 │           header/footer bhi yahin se)  │
//  │ Case Studies                    │ case-studies.ts (abhi khali)           │
//  │ (216 service detail pages)      │ generated-child-services.ts +          │
//  │                                 │ seo-child-services.ts (raw data —      │
//  │                                 │           DON'T EDIT, banner dekho)    │
//  │ EVERY PAGE (images)             │ images.ts  (image registry — har page │
//  │                                 │           ki image kahan hai, naming  │
//  │                                 │           convention + IMG.* helpers)  │
//  └─────────────────────────────────┴────────────────────────────────────────┘
//
//  QUICK EXAMPLE — naya portfolio/client site add karna (data/portfolio.ts):
//
//      {                                              <- kisi entry ke baad copy karo
//        title: "Client Name",
//        slug: "client-name",
//        url: "https://client.com",
//        image: "https://images.unsplash.com/...",
//        category: "web",
//        gradient: "from-cyan-500 to-blue-600",
//        client: "Client Name",
//        year: "2026",
//        tags: ["React", "Next.js"],
//        description: "Ek line me description",
//      },
//
//  Generated service pages ka VISUAL design unke page files me hota hai:
//      app/services/[slug]/[childSlug]/page.tsx
//      app/services/seo/[childSlug]/page.tsx
//
//  Neeche ke re-exports sirf technical hain (taaki code imports na toote).
//  Naye data edits hamesha page-wise files me karo, is file me nahi.
// ============================================================================

export * from "./home";
export * from "./services";
export * from "./portfolio";
export * from "./blog";
export * from "./industries";
export * from "./contact";
export * from "./case-studies";
export * from "./images";