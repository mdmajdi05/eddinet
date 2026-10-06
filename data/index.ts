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
//  ├── services/      parent (10 core services + category page copy)
//  │   └── child/     ← har service child page = APNI ALAG FILE
//  ├── industries/    sectors
//  ├── portfolio/     client sites + case studies
//  └── blog/          posts
//
//  PARENT vs CHILD — yahi farq hai:
//      parent  →  data/services/services.ts
//                 data/services/service-page-content.ts
//                 URL: /services  aur  /services/[slug]
//      child   →  data/services/child/<category>/<child-slug>.ts
//                 (EK CHILD PAGE = EK FILE — us page ka SAARA content usi me)
//                 har category ka apna folder + barrel: services/child/pages.ts
//                 URL: /services/[slug]/[childSlug]
//                       /services/seo/[childSlug]
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
//  │ Services (PARENT)               │ services/services.ts (10 core services,│
//  │  /services  +  /services/[slug]  │           tabs, per-service FAQs,      │
//  │                                 │           cross-links + child images)  │
//  │                                 │ services/service-page-content.ts       │
//  │                                 │           (category page copy)         │
//  │ Service CHILD pages             │ services/child/<category>/<slug>.ts     │
//  │  /services/[slug]/[childSlug] +  │    ← SAARA page content isi ek file me │
//  │  /services/seo/[childSlug]       │    (13 category folders, 138 files:     │
//  │                                 │     software-ai/, web-development/,     │
//  │                                 │     seo/, ecommerce/, … )               │
//  │                                 │    EDIT: seedha us file me badlo.        │
//  │                                 │    NAYA PAGE: file copy + pages.ts      │
//  │                                 │    me import/entry add karo.            │
//  │                                 │ services/child/pages.ts (barrel —       │
//  │                                 │    har child page yahan import hota hai)│
//  │                                 │ services/child/generated-child-services │
//  │                                 │    (slug helpers + category templates — │
//  │                                 │     DON'T EDIT)                         │
//  │ Portfolio                       │ portfolio/portfolio.ts (62 client      │
//  │                                 │           sites + categories).         │
//  │                                 │           NAYA CLIENT YAHIN            │
//  │ Case Studies                    │ portfolio/case-studies.ts              │
//  │ Blog                            │ blog/blog.ts (posts). NAYA BLOG YAHIN  │
//  │ Industries                      │ industries/industries.ts (sectors)     │
//  │ Contact / company info          │ site/contact.ts (phone, email, address,│
//  │                                 │           hours, whatsapp — header/     │
//  │                                 │           footer bhi yahin se)          │
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
//  QUICK EXAMPLE — naya service CHILD page add karna:
//
//  1) file banao:  data/services/child/<category>/<child-slug>.ts
//         export const child = { slug: "…", categorySlug: "…", title: "…", … };
//  2) usi folder ke `pages.ts` me:
//         import { child as <category>_<child_slug> } from "./<category>/<child-slug>";
//         export const childPages = { …, "<category>/<child-slug>": <ident>, … };
//     (pages.ts ke entries ke zaroori hain — URL wahi se bante hain)
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
