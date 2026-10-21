# Eddinet Website — Developer TODO & SEO/Technical Audit

> File: `developer.md` — यह document बताता है कि website में क्या है, क्या missing है,
> क्या करना चाहिए, errors/problems क्या हैं aur solutions क्या हैं।
> Last updated: 21 Oct 2026

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
| sitemap.xml (176 pages) | ✅ Done | `app/sitemap.ts` |
| robots.txt | ✅ Done | `app/robots.ts` |
| 138 child service pages | ✅ Done | `data/services/child/generated-child-services.ts` |
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

### 2.3 Blog — sirf 5 posts + koई categories/tags/pagination nahi
- **Problem:** `data/blog/blog.ts` me sirf 5 articles. Blog SEO ke liye kamzoor.
- **Todo:**
  - Minimum 10–15 quality posts likhna (1 post per week target).
  - `category`, `tags`, `readingTime` fields add karo `data/blog/blog.ts`.
  - Category/tag listing pages banao: `app/blog/[category]/page.tsx`.
  - Pagination/sort banao blog index pe.
- **Reference:** `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `data/blog/blog.ts`

### 2.4 RSS Feed — ✅ Done
- `app/feed.xml/route.ts` ban gaya — RSS 2.0, `data/blog/blog.ts` se 1:1 aata hai.
- Layout ke `<head>` me `<link rel="alternate" type="application/rss+xml" href="/feed.xml">` bhi add hai.
- News aggregators (Google News, Flipboard, Feedly) + feed readers dono discover kar lete hain.

### 2.5 Blog OG images — generic
- **Problem:** har blog post generic `opengraph-image.png` use karta hai (`app/blog/[slug]/page.tsx`).
- **Solution:** per-post `baseURL/og-blog-{slug}.png` banao (ya post ke image ka og:image set karo).
- **Note:** BlogPosting JSON-LD me `image` ab post ki apni image hai (2.6 done) — sirf social card image generic hai.

### 2.6 Blog JSON-LD me `image` aur `mainEntity` fields — ✅ Done
- `app/blog/[slug]/page.tsx` ke BlogPosting schema me ab: `image`, `datePublished` (ISO 8601), `dateModified`,
  `wordCount`, `articleSection`, `keywords`, `inLanguage`, `publisher.logo` + `author.logo`.
- Blog index (`/blog`) pe `Blog` + `CollectionPage` + `ItemList` JSON-LD bhi add hai.

### 2.7 Local SEO Schema — ✅ Done
- `app/contact/page.tsx` me `ContactPage` + `ProfessionalService` JSON-LD add hai —
  address (Okhla Phase I, New Delhi 110020), telephone, email, `openingHoursSpecification`,
  `areaServed` (Delhi NCR + India), `contactPoint` (sales), `sameAs`.
- Ye geo tags (`geo.region`, `geo.position`) ke saath milkar "Delhi NCR" local pack me help karega.

### 2.8 WebSite SearchAction schema — ✅ Done (layout me add ho gaya)
- **Fix:** `app/layout.tsx` ke `websiteSchema` me `potentialAction` add kiya:
  `"potentialAction": { "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https://eddinet.com/blog?q={search_term_string}" }, "query-input": "required name=search_term_string" }`

### 2.9 Portfolio/Case-study images — remote Unsplash
- **Problem:** `data/portfolio/portfolio.ts` ke 62 projects saari Unsplash remote images hain. Google/Pagespeed pe weight + slow.
- **Solution:** local `public/images/portfolio/` me thumbnails banao aur `data/site/images.ts` registry se connect karo.

### 2.10 Website speed / Core Web Vitals
- ~~**Problem:** saare `<Image>` pe `unoptimized` hai (18 files) → Next image optimizer off hai, koi WebP/AVIF/resize nahi.~~ — ✅ FIXED (ab koi `unoptimized` prop nahi; `next.config.ts` me avif/webp formats on)
- **Solution:** `unoptimized` hatao, `sizes` attribute do, `format` detect karo. „next/image” apne aap WebP/AVIF banata hai.
- **Todo:** Lighthouse run karo (desktop + mobile), FCP/LCP/CLS optimize karo.

---

## 🟠 3. Content Kaam — Missing / Khali

| Cheez | Status | Reference | Kya karna |
|---|---|---|---|
| **Case studies** | ❌ Empty | `data/portfolio/case-studies.ts` | 3–5 real case studies add karo (permission ke baad). Abhi `/case-studies` blank page hai aur saare CTA usi pe le jaate hain. |
| **Testimonials** | ❌ Empty | `data/home/home.ts` (line 150) | Client reviews add karo (screenshot/verified). Homepage pe testimonial section abhi nahi dikhta. |
| **Social links** | ❌ Empty | `data/site/contact.ts` | LinkedIn/Facebook/Instagram/X/YouTube URLs daalo — Footer me abhi blank hain. |
| **Portfolio URLs** | ⚠️ Placeholder | `data/portfolio/portfolio.ts` | Bahut saare project URLs recycled placeholder domains hain → asli client websites daalo (ya section aise show karo jo fix ho). |
| **Blog** | ⚠️ 5 posts | `data/blog/blog.ts` | 15+ posts (badha kar 30+). |
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
- **Reference:** `components/ContactForm.tsx`, `components/footer-extras.tsx`, `components/QuotePopup.tsx`

### 4.3 Blog page client-side render — ✅ FIXED
- ~~**Problem:** Blog article body (`app/blog/[slug]/page-client.tsx`) client-rendered hai → crawl slow + SEO weak.~~
- **Fix:** Poora article ab Server Component (`app/blog/[slug]/page.tsx`) me render hota hai; sirf chhote interactive leaves client hain (`reading-progress.tsx`, `share.tsx`, `sidebar-message-form.tsx`). `page-client.tsx` delete.
- **Related perf fixes (bade wins):**
  - Header mega-menus ka bhaari data (138 child pages) client se hata kar server par (`data/services/nav-menu.ts`) — layout chunk **1073 KB → 28.6 KB**.
  - Google Fonts external link → `next/font` self-host (render-blocking request khatam, CLS zero).
  - GTM head-blocking loader → `next/script` `afterInteractive`.
  - Logo/nav images ke `sizes`/aspect fixes.

### 4.4 GZIP/Brotli + caching headers — ✅ DONE
- ~~**Problem:** `next.config.ts` me abhi sirf X-Robots-Tag hai.~~
- **Fix:** Static assets (images/fonts) ke liye `Cache-Control: public, max-age=2592000, stale-while-revalidate=86400` add ho gaya. Next.js core JS/CSS par hashed-immutable caching already hoti hai.
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

### 4.8 About page 999 lines inline
- `app/about/page.tsx` bahut bada hai - koi problem nahi, lekin maintain ke liye `data/about/about.ts` ka use karo.

---

## 🟢 5. Setup / Commands (References)

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npx tsc --noEmit   # type check
npm start          # production serve (after build)
npm run serve      # standalone serve (Dockerfile-style, copies static+public)
```

### 🛡️ Site Checker — mandatory build-time check

Har **build ke baad** AI agent ko yeh run karna hai (rule: hard requirement):

```bash
npm run check:site
```

- Checker project bahar hai: `../site-checker/` (eddinet-next se independent, kisi bhi project pe chal sakta hai).
- Config: `site-checker.config.json` (baseUrl, thresholds, kaunse rules on/off).
- Server khud start/stop karta hai (`scripts/serve-standalone.mjs`), crawl ~170 pages + assets, phir rules lagata hai:
  `broken-links`, `not-found` (soft-404), `thin-content`, `sitemap` (coverage/freshness), `llms-txt`, `breadcrumbs`, `page-issues`.
- Report: `site-checker-report/report.md` + `report.json` (console pe bhi summary).
- `failOn: "error"` → koi bhi error issue ho to exit code 1 (CI/build fail). Warnings report me rehti hain.
- Exit codes: `0` pass, `1` issues found, `2` fatal (server/crawl fail) — agent ko in teeno ko decode karna hai.

**Naya rule add karna ho:** `../site-checker/src/rules/<id>.mjs` me ek file banao (`{ id, title, description, defaultSeverity, check(ctx) }`), auto-load ho jayega. Details: `../site-checker/README.md`.


**Yeh files kaam ke liye:**
- Meta/SEO → `app/layout.tsx`
- Headers (X-Robots-Tag) → `next.config.ts`
- Sitemap → `app/sitemap.ts`
- robots.txt → `app/robots.ts`
- llms.txt → `app/llms.txt/route.ts`
- Blog content → `data/blog/blog.ts`
- Service pages content → `data/services/service-page-content.ts`, `data/services/child/generated-child-services.ts`
- Contact info → `data/site/contact.ts`
- Images registry → `data/site/images.ts` + `public/images/`
- Portfolio → `data/portfolio/portfolio.ts`
- Homepage content (faqs/testimonials) → `data/home/home.ts`

---

## 🤖 5.1 Chatbot — Eddy (site-wide AI assistant)

Site par floating chatbot (`components/chat/ChatLauncher.tsx`) har page par
layout se render hota hai. Ye **rule-based** hai (intents + knowledge base) —
koi backend/API key nahi chahiye, sab client-side chalta hai.

**Folder structure (best practice):**

| Layer | Kahan | Kya |
|---|---|---|
| Data (content) | `data/chat/bot.ts` | bot ka naam, greeting, quick replies, notification messages |
| Data (content) | `data/chat/intents.ts` | intent patterns (regex) + canned jawab |
| Data (training) | `data/chat/knowledge.ts` | poora knowledge base (Q/A + keywords + links) |
| Logic | `lib/chat/intent.ts` | `detectIntent()` — kaunsa intent match hua |
| Logic | `lib/chat/knowledge.ts` | `searchKnowledgeBase()` — best Q/A dhundta hai |
| Logic | `lib/chat/engine.ts` | `getBotReply()` — intent → KB → fallback |
| Logic | `lib/chat/text.ts` | text/keyword helpers (stop-words) |
| UI | `components/chat/*` | launcher, widget, messages, input, suggestions, 3D logo |

**"Training" kaise hoti hai (important):**
`data/chat/knowledge.ts` khud ka content nahi likhta — ye site ke asli data se
Q/A **generate** karta hai:
- `data/services/services.ts` → 13 service categories + 138 child services + 65 FAQs
- `data/home/home.ts` → home FAQs + process steps
- `data/industries/industries.ts` → industry Q/A
- `data/site/contact.ts` → phone/email/address/hours

Isliye jab bhi koi service ya FAQ edit karte ho, chatbot **apne aap re-train**
ho jaata hai. Sirf company/pricing/process jaise general jawab `knowledge.ts`
ke `MANUAL` array me hand-written hain.

**Naya general jawab add karna:** `data/chat/knowledge.ts` → `MANUAL` me entry.
**Naya intent add karna:** `lib/chat/types.ts` me `IntentId` add karo + `data/chat/intents.ts` me entry.

**Performance:** chat UI aur knowledge base **lazy** load hote hain — widget
sirf kholne par, aur engine/KB sirf pehla message bhejne par. Jo user chat use
nahi karta, uska main bundle bhaari nahi hota.

**Jawab me formatting:** `**bold**`, `- bullets`, aur `[label](/href)` links
(`components/chat/RichText.tsx` render karta hai).

**Look & theme (site jaisa):** poora chat UI site ke CSS variables se themed
hai — `--panel-bg`, `--bg-card-hover`, `--border-color`, `--text-main`,
`--text-muted`, `--text-dim`, `--main-accent`, `--accent-rgb`,
`--primary-gradient`, `--tag-bg`, `--input-bg`, `--shadow-xl`. Isliye dark aur
`red-light` (`html[data-theme="red-light"]`) dono me chat **automatically**
website jaisa dikhta hai — koi alag `.light` class ya hardcoded palette nahi.
Palette brand **red** hai (pehle indigo/purple tha). 3D robot logo
(`components/chat/ChatbotLogo.tsx` + `ChatbotLogo.module.css`) ka design aur
animations bilkul same hain, sirf uska accent color teal se red kar diya gaya
hai. Logo ke size scales `ChatBotLogo.tsx` ke `sizeScales` me hain
(`md` = launcher button, `sm` = header/message/notification avatar).

---

## 📋 6. Master TODO Checklist (Priority Wise)

### 🔴 Week 1 — SEO Crunch
- [ ] X-Robots-Tag verify (deploy ke baad) — `next.config.ts` ✅ done, deploy karo
- [ ] /hi/ hreflang — ✅ remove kiya (Hindi site aane pe wapas lagaana)
- [ ] Google Search Console: submit sitemap.xml + llms.txt ko fetch karo
- [x] LocalBusiness schema /contact pe add karo — ✅ `ContactPage` + `ProfessionalService` JSON-LD
- [x] Blog: har post ka own OG image + JSON-LD image — ✅ JSON-LD `image` done (social card image generic hai)
- [x] RSS feed.xml banao — ✅ `app/feed.xml/route.ts` + layout me `<link rel="alternate">`
- [ ] Suspicious 404 check: /hi/, /case-studies/*
- [ ] `npm run check:site` → 0 errors (site-checker, har build ke baad run karo)

### 🟠 Week 2 — Content
- [ ] 15+ blog posts (categories/tags ke saath)
- [ ] LinkedIn/Facebook/Instagram/X/Youtube URLs (data/site/contact.ts)
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