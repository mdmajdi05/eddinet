# Eddinet Website — Developer TODO & SEO/Technical Audit

> File: `developer.md` — यह document बताता है कि website में क्या है, क्या missing है,
> क्या करना चाहिए, errors/problems क्या हैं aur solutions क्या हैं।
> Last updated: 18 Sep 2026

---

## ✅ 1. Kya Pahle Se Ho Chuka Hai (Already Done)

| Kaam | Status | Reference |
|---|---|---|
| Homepage Meta title/description | ✅ Done | `app/layout.tsx` |
| robots `index, follow` meta | ✅ Done | `app/layout.tsx` |
| Favicon (ico/svg), apple-touch-icon | ✅ Done | `public/favicon.*`, `public/apple-touch-icon.png` |
| site.webmanifest + theme-color #0d0d0d | ✅ Done | `public/site.webmanifest` |
| OG image (1200×630) with width/height/alt | ✅ Done | `public/opengraph-image.png` |
| Hreflang en-in / hi-in / x-default | ✅ Done (⚠️ /hi/ page exists nahi) | `app/layout.tsx` |
| Article tags (published_time/modified/author) on blog | ✅ Done | `app/blog/[slug]/page.tsx` |
| Geo tags, language, referrer, PWA/apple metas | ✅ Done | `app/layout.tsx` |
| **X-Robots-Tag header** | ✅ **Abhi add kiya** | `next.config.ts` (headers) |
| llms.txt | ✅ Done | `app/llms.txt/route.ts` |
| sitemap.xml (190 pages) | ✅ Done | `app/sitemap.ts` |
| robots.txt | ✅ Done | `app/robots.ts` |
| 203 child service pages | ✅ Done | `data/generated-child-services.ts` |
| JSON-LD: Organization, Service, FAQ, Breadcrumb, BlogPosting | ✅ Done | layout + pages |
| Docker/standalone build | ✅ Done | `next.config.ts` |
| Google Search Console verification | ✅ Done | `app/layout.tsx` |

> ⚠️ **Zaroori:** ye sab kaam **commit nahi hua** hai abhi — `git status` check karo aur commit karo.

---

## 🔴 2. SEO Kaam — Missing / Must Fix (Priority Order)

### 2.1 X-Robots-Tag — ✅ ab fix ho gaya
- Missing tha server header level pe. **Solution:** `next.config.ts` me `async headers()` add kiya —
  `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
- **Verify:** `response.headers.get("X-Robots-Tag")` / curl -I https://eddinet.com/

### 2.2 `/hi/` Hindi hreflang route — ✅ Removed (fix)
- `hi-in` hreflang remove kar diya `app/layout.tsx` me (kyunki `/hi/` page exist nahi karta tha → 404).
- **Ab:** sirf `en-in` + `x-default` active hai.
- **Baad me:** Hindi site banate waqt hreflang `hi-in` wapas add karna.

### 2.3 Blog — sirf 3 posts + koई categories/tags/pagination nahi
- **Problem:** `data/blog.ts` me sirf 3 articles. Blog SEO ke liye kamzoor.
- **Todo:**
  - Minimum 10–15 quality posts likhna (1 post per week target).
  - `category`, `tags`, `readingTime` fields add karo `data/blog.ts`.
  - Category/tag listing pages banao: `app/blog/[category]/page.tsx`.
  - Pagination/sort banao blog index pe.
- **Reference:** `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `data/blog.ts`

### 2.4 RSS Feed — ❌ Missing
- Blog content ko RSS/Atom feed chahiye (news aggregators + SEO signal).
- **Solution:** `app/feed.xml/route.ts` banao jo latest 20 posts ka XML banaye.
- **Ding:** `<link rel="alternate" type="application/rss+xml" href="/feed.xml">` layout me.

### 2.5 Blog OG images — generic
- **Problem:** har blog post generic `opengraph-image.png` use karta hai (`app/blog/[slug]/page.tsx`).
- **Solution:** per-post `baseURL/og-blog-{slug}.png` banao (ya post ke image ka og:image set karo).

### 2.6 Blog JSON-LD me `image` aur `mainEntity` fields
- **Problem:** BlogPosting schema me `image` nahi hai.
- **Solution:** `data/blog.ts` ke post images ko schema me add karo; `publisher.logo` bhi.

### 2.7 Local SEO Schema — ❌ Missing
- `/contact` pe `LocalBusiness`/`ProfessionalService` (Organization already hai layout me).
- **Solution:** `app/contact/page.tsx` me JSON-LD add karo — `@type: ProfessionalService`, name, address (Okhla Phase I, New Delhi 110020), geo 28.6139,77.2090, telephone, openingHours, sameAs.
- Ye geo tags (`geo.region`, `geo.position`) ke saath milkar "Delhi NCR" local pack me help karega.

### 2.8 WebSite SearchAction schema
- **Solution:** layout ke Organization schema ke saath `WebSite` schema add karo iske saath:
  `"potentialAction": { "@type": "SearchAction", "target": "https://eddinet.com/?s={search_term_string}", "query-input": "required name=search_term_string" }`

### 2.9 Portfolio/Case-study images — remote Unsplash
- **Problem:** `data/portfolio.ts` ke 40 projects saari Unsplash remote images hain. Google/Pagespeed pe weight + slow.
- **Solution:** local `public/images/portfolio/` me thumbnails banao aur `data/images.ts` registry se connect karo.

### 2.10 Website speed / Core Web Vitals
- **Problem:** saare `<Image>` pe `unoptimized` hai (18 files) → Next image optimizer off hai, koi WebP/AVIF/resize nahi.
- **Solution:** `unoptimized` hatao, `sizes` attribute do, `format` detect karo. „next/image” apne aap WebP/AVIF banata hai.
- **Todo:** Lighthouse run karo (desktop + mobile), FCP/LCP/CLS optimize karo.

---

## 🟠 3. Content Kaam — Missing / Khali

| Cheez | Status | Reference | Kya karna |
|---|---|---|---|
| **Case studies** | ❌ Empty | `data/case-studies.ts` | 3–5 real case studies add karo (permission ke baad). Abhi `/case-studies` blank page hai aur saare CTA usi pe le jaate hain. |
| **Testimonials** | ❌ Empty | `data/home.ts` (line 148) | Client reviews add karo (screenshot/verified). Homepage pe testimonial section abhi nahi dikhta. |
| **Social links** | ❌ Empty | `data/contact.ts` | LinkedIn/Facebook/Instagram/X/YouTube URLs daalo — Footer me abhi blank hain. |
| **Portfolio URLs** | ⚠️ Placeholder | `data/portfolio.ts` | Bahut saare project URLs recycled placeholder domains hain → asli client websites daalo (ya section aise show karo jo fix ho). |
| **Blog** | ⚠️ 3 posts | `data/blog.ts` | 15+ posts (badha kar 30+). |
| Hindi version | ❌ Missing | — | `/hi/` ya i18n. |

---

## 🟡 4. Technical Kaam — Errors / Problems / Solutions

### 4.1 No error handling (error.tsx missing)
- **Problem:** koई `error.tsx` / `global-error.tsx` / `loading.tsx` nahi — runtime error pe white screen.
- **Solution:**
  - `app/error.tsx` (client component) — friendly error UI + "Contact Eddinet" CTA.
  - `app/global-error.tsx` — root catch.
  - `app/loading.tsx` — skeleton loader.
- **Reference:** `app/not-found.tsx` (ye hai), error files nahi hain.

### 4.2 Forms — koi backend nahi, sirf WhatsApp
- **Problem:** `components/ContactForm.tsx` sirf `wa.me` link kholta hai. Newsletter (`footer-extras.tsx`) **fake hai** — email kisi ko nahi jaata.
  - Koi conversion tracking nahi (koi analytics nahi).
  - Popup-block hone pe `window.open` fail ho sakta hai.
- **Solution (options):**
  1. **(Recommended)** Google Sheets/Forms webhook ya Email API (Resend/Brevo/Formspree) → `app/api/contact/route.ts` route banau, form ko fetch karo.
  2. WhatsApp par chhoot bhi chahiye, to dual: API submit + WhatsApp fallback.
  3. Newsletter ko bhi API se store karo (ya Brevo/Mailchimp API).
  4. Google Analytics / GA4 ya Plausible + Google Tag Manager add karo for lead tracking.
- **Reference:** `components/ContactForm.tsx`, `components/footer-extras.tsx`, `components/QuotePopup.tsx`, `components/ConsultModal.tsx`

### 4.3 Blog page client-side render
- **Problem:** Blog article body (`app/blog/[slug]/page-client.tsx`) client-rendered hai → crawl slow + SEO weak.
- **Solution:** Server Component me render karo (content `data/blog.ts` se directly).

### 4.4 GZIP/Brotli + caching headers
- **Problem:** `next.config.ts` me abhi sirf X-Robots-Tag hai.
- **Solution files:**
  - static assets me `Cache-Control: public, max-age=31536000, immutable` (hashed files).
  - HTML ya `/` response pe `Cache-Control: public, s-maxage=3600` (ISR/cache).
  - Images ki `next.config.ts` imageOptimization formats me `["image/webp", "image/avif"]`.

### 4.5 next.config.ts headers order
- Abhi sirf `X-Robots-Tag` hai. Recommended folder:
  ```ts
  async headers() {
    return [{
      source: "/(.*)",
      headers: [
        { key: "X-Robots-Tag", value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    }];
  }
  ```

### 4.6 Uncommitted work
- **Problem:** llms.txt, favicons, OG image, manifest, meta tags — sab working tree me hai, committed nahi.
- **Solution:**
  ```bash
  git add -A
  git commit -m "feat: full meta tags, OG image, PWA icons, llms.txt, X-Robots-Tag headers"
  git push
  ```

### 4.7 `/case-studies/[slug]` — sab 404
- **Problem:** `caseStudies` array empty hai → har `/case-studies/:slug` 404, sitemap me nahi.
- **Solution:** ya to case studies content banao (2.1 project), ya CTA buttons ko pehle blog/services links pe bhejo.

### 4.8 About page 989 lines inline
- `app/about/page.tsx` bahut bada hai - koi problem nahi, lekin maintain ke liye `data/about.ts` ka use karo.

---

## 🟢 5. Setup / Commands (References)

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npx tsc --noEmit   # type check
npm start          # production serve (after build)
```

**Yeh files kaam ke liye:**
- Meta/SEO → `app/layout.tsx`
- Headers (X-Robots-Tag) → `next.config.ts`
- Sitemap → `app/sitemap.ts`
- robots.txt → `app/robots.ts`
- llms.txt → `app/llms.txt/route.ts`
- Blog content → `data/blog.ts`
- Service pages content → `data/service-page-content.ts`, `data/generated-child-services.ts`
- Contact info → `data/contact.ts`
- Images registry → `data/images.ts` + `public/images/`
- Portfolio → `data/portfolio.ts`
- Homepage content (faqs/testimonials) → `data/home.ts`

---

## 📋 6. Master TODO Checklist (Priority Wise)

### 🔴 Week 1 — SEO Crunch
- [ ] X-Robots-Tag verify (deploy ke baad) — `next.config.ts` ✅ done, deploy karo
- [ ] /hi/ hreflang — ✅ remove kiya (Hindi site aane pe wapas lagaana)
- [ ] Google Search Console: submit sitemap.xml + llms.txt ko fetch karo
- [ ] LocalBusiness schema /contact pe add karo
- [ ] Blog: har post ka own OG image + JSON-LD image
- [ ] RSS feed.xml banao
- [ ] Suspicious 404 check: /hi/, /case-studies/*

### 🟠 Week 2 — Content
- [ ] 15+ blog posts (categories/tags ke saath)
- [ ] LinkedIn/Facebook/Instagram/X/Youtube URLs (data/contact.ts)
- [ ] 3+ real case studies
- [ ] Testimonials with permission
- [ ] Portfolio URLs fix / local thumbnails

### 🟡 Week 3 — Technical
- [ ] error.tsx / global-error.tsx / loading.tsx
- [ ] `/api/contact` route + form API + newsletter
- [ ] GA4 / Tag Manager
- [ ] unoptimized images hatao, WebP/AVIF
- [ ] Caching headers + Brotli
- [ ] Blog server-component render
- [ ] Lightspeed **Lighthouse 90+** target (mobile + desktop)

### ✅ Immediately
- [ ] `git add -A && git commit && git push` (working tree cleanup)

---

## 🚨 Quick Wins (Pehle Ye Karo)

1. `git commit/push` karo — abhi ka SEO kaam kahi kho na jaye.
2. `/hi/` hreflang remove yaa page banao — GSC me hreflang error band hoga.
3. Contact form ko real backend pe le jao — leads currently WhatsApp pe depend hain sirf.
4. Google indexed check karo: `site:eddinet.com` (Search Console) — new pages generate hone de.