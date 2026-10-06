// ============================================================================
//  EDDINET — DATA DIRECTORY (sab data kahan hai, isme yahan hi se dhundho)
// ============================================================================
//
//  Data PAGE-WISE + CATEGORY-WISE rakha hai — jo page browser me dikhta hai,
//  uske folder me file kholo. Neeche pura map hai.
//
//  data/
//  ├── site/          company info + saari images
//  ├── home/          homepage copy
//  ├── about/         about page copy
//  ├── services/      services + saare service child pages (incl. generated)
//  ├── industries/    sectors
//  ├── portfolio/     client sites + case studies
//  ├── blog/          posts
//  └── seo/           SEO child services + their images
//
//  ┌─────────────────────────────────┬────────────────────────────────────────┐
//  │ BROWSER PAGE                     │ DATA FILE (data/…)                     │
//  ├─────────────────────────────────┼────────────────────────────────────────┤
//  │ Home                            │ home/home.ts  (process steps,          │
//  │                                 │           why-features, testimonials,  │
//  │                                 │           home FAQs)                   │
//  │ About                           │ about/about.ts  (chhota — page ka      │
//  │                                 │           content app/about/page.tsx   │
//  │                                 │           me hai)                      │
//  │ Services + Services child pages │ services/services.ts (10 core services,│
//  │                                 │           tabs, per-service FAQs,      │
//  │                                 │           cross-links + child images)  │
//  │                                 │ services/service-page-content.ts       │
//  │                                 │           (category page copy)         │
//  │ (216 service detail pages)      │ services/generated-child-services.ts + │
//  │                                 │ services/docx-content.ts +             │
//  │                                 │ services/docx-content-services.ts      │
//  │                                 │   (raw/generated — DON'T EDIT, banner   │
//  │                                 │    dekho; source: EDDITNET .docx)       │
//  │ Portfolio                       │ portfolio/portfolio.ts (62 client      │
//  │                                 │           sites + categories).         │
//  │                                 │           NAYA CLIENT YAHIN            │
//  │ Case Studies                    │ portfolio/case-studies.ts              │
//  │ Blog                            │ blog/blog.ts (posts). NAYA BLOG YAHIN  │
//  │ Industries                      │ industries/industries.ts (sectors)     │
//  │ Contact / company info          │ site/contact.ts (phone, email, address,│
//  │                                 │           hours, whatsapp — header/     │
//  │                                 │           footer bhi yahin se)          │
//  │ SEO child pages                 │ seo/seo-child-services.ts +            │
//  │                                 │ seo/seo-feature-images.ts              │
//  │ EVERY PAGE (images)             │ site/images.ts (image registry — har   │
//  │                                 │           page ki image kahan hai,     │
//  │                                 │           naming convention + IMG.*    │
//  │                                 │           helpers) + site/stock-images │
//  │ Navbar / MegaMenu               │ ⚠ alag nav file nahi hai — services +  │
//  │                                 │   portfolio se Header/MegaMenu banata  │
//  │                                 │   hai (components/Header.tsx)          │
//  └─────────────────────────────────┴────────────────────────────────────────┘
//
//  QUICK EXAMPLE — naya portfolio/client site add karna (data/portfolio/portfolio.ts):
//
//      {                                              <- kisi entry ke baad copy karo
//        title: "Client Name",
//        slug: "client-name",
//        url: "https://client.com",
//        image: stockImageSrc("photo-1234567890abcdef"),
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
//  IMPORT FORMAT (folder ke baad file ka naam bhi likhna padta hai):
//      import { services } from "@/data/services/services";
//      import { site }     from "@/data/site/contact";
//
//  Neeche ke re-exports sirf technical hain (taaki code imports na toote).
//  Naye data edits hamesha page-wise files me karo, is file me nahi.
// ============================================================================

export * from "@/data/home/home";
export * from "@/data/services/services";
export * from "@/data/portfolio/portfolio";
export * from "@/data/blog/blog";
export * from "@/data/industries/industries";
export * from "@/data/site/contact";
export * from "@/data/portfolio/case-studies";
export * from "@/data/site/images";
export * from "@/data/site/stock-images";
