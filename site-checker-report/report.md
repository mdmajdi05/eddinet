# Site Checker Report

- **Date:** 2026-10-07T06:57:12.640Z
- **Base URL:** http://localhost:3999
- **Errors:** 0 · **Warnings:** 86 · **Info:** 0

## ✅ OK `broken-links` — Broken links (internal links + assets)

_Har crawled page ke internal <a href> links aur assets (img/js/css) resolve hone chahiye — 4xx/5xx/timeout = broken._

No issues.

## ✅ OK `not-found` — 404 / soft-404 detection

_Sitemap/crawl me jo URLs hain unhe 404 nahi hona chahiye. Ek random bogus URL 404 dena chahiye — 200 aaya to soft-404 hai (bad for SEO). 5xx bhi error._

No issues.

## ⚠️ WARN `thin-content` — Thin content (kam content wale pages)

_<main>/<article>/<body> se nikala gaya visible text word-count threshold se neeche ho to thin content warning. Near-duplicate pages bhi flag hote hain._

| Severity | Message | Path |
|---|---|---|
| warning | Thin content: "Case Studies - Real Work, Real Outcomes" has only 78 words (min 250) | `/case-studies` |
| warning | Thin content: "Software & SaaS Portfolio \| Eddinet" has only 40 words (min 250) | `/portfolio/software-saas` |
| warning | Thin content: "eCommerce & D2C Portfolio \| Eddinet" has only 40 words (min 250) | `/portfolio/ecommerce` |
| warning | Thin content: "Websites & Portals Portfolio \| Eddinet" has only 64 words (min 250) | `/portfolio/websites` |
| warning | Thin content: "AI & Automation Portfolio \| Eddinet" has only 34 words (min 250) | `/portfolio/ai-automation` |
| warning | Thin content: "Mobile Apps Portfolio \| Eddinet" has only 23 words (min 250) | `/portfolio/mobile-apps` |
| warning | Thin content: "SEO Portfolio \| Eddinet" has only 39 words (min 250) | `/portfolio/seo` |
| warning | Thin content: "Paid Media & Social Portfolio \| Eddinet" has only 46 words (min 250) | `/portfolio/paid-media` |
| warning | Thin content: "Content & Design Portfolio \| Eddinet" has only 43 words (min 250) | `/portfolio/content-design` |
| warning | Thin content: "Maintenance & Reputation Portfolio \| Eddinet" has only 33 words (min 250) | `/portfolio/support-reputation` |
| warning | Thin content: "Cloud, Hosting & DevOps Portfolio \| Eddinet" has only 28 words (min 250) | `/portfolio/cloud-devops` |

## ✅ OK `sitemap` — Sitemap updated & valid

_/sitemap.xml (ya configured path) parse hota hai, har URL 200 deta hai, koi 404 nahi, crawl ke important pages sitemap me hain, aur lastmod stale nahi._

No issues.

## ✅ OK `llms-txt` — llms.txt updated & valid

_/llms.txt available hai, kam se kam configured size ka hai, required paths cover karta hai, aur andar ke internal links 200 dete hain._

No issues.

## ✅ OK `breadcrumbs` — Breadcrumbs valid & present

_Depth ≥ 2 ke pages par BreadcrumbList JSON-LD required hai (config se), positions sequential honi chahiye, first item Home ho, aur breadcrumb links 200 dein._

No issues.

## ⚠️ WARN `page-issues` — Page-level issues (title/meta/H1/canonical)

_Har 200 page par: unique title (length band me), meta description (band me), exactly one H1, canonical present + self-referencing, html lang, no noindex, OG tags._

| Severity | Message | Path |
|---|---|---|
| warning | Meta description too long (192ch, max 170) on /services | `/services` |
| warning | Title too long (75ch, max 70): "About Eddinet \| Digital Marketing, Software, AI & Cloud Agency in Delhi NCR…" on /about | `/about` |
| warning | Meta description too long (203ch, max 170) on /about | `/about` |
| warning | Meta description too long (246ch, max 170) on /services/seo | `/services/seo` |
| warning | Meta description too long (203ch, max 170) on /services/social-media-marketing | `/services/social-media-marketing` |
| warning | Meta description too long (205ch, max 170) on /services/ads-ppc | `/services/ads-ppc` |
| warning | Meta description too long (224ch, max 170) on /services/design-creative | `/services/design-creative` |
| warning | Meta description too long (194ch, max 170) on /services/web-development | `/services/web-development` |
| warning | Meta description too long (190ch, max 170) on /services/ecommerce | `/services/ecommerce` |
| warning | Meta description too long (201ch, max 170) on /services/software-ai | `/services/software-ai` |
| warning | Meta description too long (208ch, max 170) on /services/maintenance-support | `/services/maintenance-support` |
| warning | Meta description too long (180ch, max 170) on /services/hosting-migration | `/services/hosting-migration` |
| warning | Meta description too long (188ch, max 170) on /services/reputation-management | `/services/reputation-management` |
| warning | Meta description too long (184ch, max 170) on /services/content | `/services/content` |
| warning | Meta description too long (212ch, max 170) on /services/seo/ai-seo-generative-seo-service-in-delhi-ncr | `/services/seo/ai-seo-generative-seo-service-in-delhi-ncr` |
| warning | Meta description too long (196ch, max 170) on /services/seo/amazon-seo-services-in-delhi-ncr | `/services/seo/amazon-seo-services-in-delhi-ncr` |
| warning | Meta description too long (206ch, max 170) on /services/seo/b2b-seo-services-in-delhi-ncr | `/services/seo/b2b-seo-services-in-delhi-ncr` |
| warning | Meta description too long (172ch, max 170) on /services/seo/ecommerce-seo-services-in-delhi-ncr | `/services/seo/ecommerce-seo-services-in-delhi-ncr` |
| warning | Meta description too long (216ch, max 170) on /services/seo/enterprise-seo-services-in-delhi-ncr | `/services/seo/enterprise-seo-services-in-delhi-ncr` |
| warning | Meta description too long (213ch, max 170) on /services/seo/international-seo-services-in-delhi-ncr | `/services/seo/international-seo-services-in-delhi-ncr` |
| warning | Meta description too long (220ch, max 170) on /services/seo/lead-generation-seo-services-in-india | `/services/seo/lead-generation-seo-services-in-india` |
| warning | Meta description too long (212ch, max 170) on /services/seo/local-seo-services-in-delhi-ncr | `/services/seo/local-seo-services-in-delhi-ncr` |
| warning | Meta description too long (203ch, max 170) on /services/seo/programmatic-seo-services-in-delhi-ncr | `/services/seo/programmatic-seo-services-in-delhi-ncr` |
| warning | Meta description too long (174ch, max 170) on /services/seo/shopify-seo-services-in-delhi-ncr | `/services/seo/shopify-seo-services-in-delhi-ncr` |
| warning | Meta description too long (204ch, max 170) on /services/seo/technical-seo-services-in-delhi-ncr | `/services/seo/technical-seo-services-in-delhi-ncr` |
| warning | Meta description too long (236ch, max 170) on /services/content/blog-content-services-in-delhi-ncr | `/services/content/blog-content-services-in-delhi-ncr` |
| warning | Meta description too long (258ch, max 170) on /services/content/campaign-content-services-in-delhi-ncr | `/services/content/campaign-content-services-in-delhi-ncr` |
| warning | Meta description too long (250ch, max 170) on /services/content/case-study-writing-services-in-delhi-ncr | `/services/content/case-study-writing-services-in-delhi-ncr` |
| warning | Meta description too long (259ch, max 170) on /services/content/content-audit-services-in-delhi-ncr | `/services/content/content-audit-services-in-delhi-ncr` |
| warning | Meta description too long (261ch, max 170) on /services/content/content-marketing-services-in-delhi-ncr | `/services/content/content-marketing-services-in-delhi-ncr` |
| warning | Meta description too long (239ch, max 170) on /services/content/content-refresh-services-in-delhi-ncr | `/services/content/content-refresh-services-in-delhi-ncr` |
| warning | Meta description too long (251ch, max 170) on /services/content/content-strategy-services-in-delhi-ncr | `/services/content/content-strategy-services-in-delhi-ncr` |
| warning | Meta description too long (241ch, max 170) on /services/content/email-content-services-in-delhi-ncr | `/services/content/email-content-services-in-delhi-ncr` |
| warning | Meta description too long (234ch, max 170) on /services/content/landing-page-copy-services-in-delhi-ncr | `/services/content/landing-page-copy-services-in-delhi-ncr` |
| warning | Meta description too long (239ch, max 170) on /services/content/seo-content-services-in-delhi-ncr | `/services/content/seo-content-services-in-delhi-ncr` |
| warning | Meta description too long (253ch, max 170) on /services/content/social-content-services-in-delhi-ncr | `/services/content/social-content-services-in-delhi-ncr` |
| warning | Meta description too long (238ch, max 170) on /services/content/website-content-services-in-delhi-ncr | `/services/content/website-content-services-in-delhi-ncr` |
| warning | Meta description too long (193ch, max 170) on /services/design-creative/graphic-design-services-in-delhi-ncr | `/services/design-creative/graphic-design-services-in-delhi-ncr` |
| warning | Meta description too long (224ch, max 170) on /services/design-creative/presentation-design-services-in-delhi-ncr | `/services/design-creative/presentation-design-services-in-delhi-ncr` |
| warning | Meta description too long (264ch, max 170) on /services/ecommerce/ecommerce-migration-services-in-delhi-ncr | `/services/ecommerce/ecommerce-migration-services-in-delhi-ncr` |
| warning | Meta description too long (288ch, max 170) on /services/ecommerce/amazon-store-development-services-in-delhi-ncr | `/services/ecommerce/amazon-store-development-services-in-delhi-ncr` |
| warning | Meta description too long (274ch, max 170) on /services/ecommerce/marketplace-integration-services-in-delhi-ncr | `/services/ecommerce/marketplace-integration-services-in-delhi-ncr` |
| warning | Meta description too long (258ch, max 170) on /services/maintenance-support/application-maintenance-services-in-india | `/services/maintenance-support/application-maintenance-services-in-india` |
| warning | Meta description too long (261ch, max 170) on /services/maintenance-support/website-bug-fixing-services-in-india | `/services/maintenance-support/website-bug-fixing-services-in-india` |
| warning | Meta description too long (254ch, max 170) on /services/maintenance-support/emergency-website-support-services-in-india | `/services/maintenance-support/emergency-website-support-services-in-india` |
| warning | Meta description too long (260ch, max 170) on /services/maintenance-support/website-performance-monitoring-and-optimization-in-india | `/services/maintenance-support/website-performance-monitoring-and-optimization-in-india` |
| warning | Meta description too long (255ch, max 170) on /services/maintenance-support/website-disaster-recovery-services-in-india | `/services/maintenance-support/website-disaster-recovery-services-in-india` |
| warning | Meta description too long (251ch, max 170) on /services/maintenance-support/website-security-update-services-in-india | `/services/maintenance-support/website-security-update-services-in-india` |
| warning | Meta description too long (271ch, max 170) on /services/maintenance-support/website-security-monitoring-services-in-india | `/services/maintenance-support/website-security-monitoring-services-in-india` |
| warning | Meta description too long (258ch, max 170) on /services/maintenance-support/server-maintenance-services-in-india | `/services/maintenance-support/server-maintenance-services-in-india` |
| warning | Meta description too long (246ch, max 170) on /services/maintenance-support/website-uptime-monitoring-services-in-india | `/services/maintenance-support/website-uptime-monitoring-services-in-india` |
| warning | Meta description too long (254ch, max 170) on /services/maintenance-support/website-technical-support-services-in-india | `/services/maintenance-support/website-technical-support-services-in-india` |
| warning | Meta description too long (254ch, max 170) on /services/maintenance-support/website-backup-services-company-in-delhi | `/services/maintenance-support/website-backup-services-company-in-delhi` |
| warning | Meta description too long (258ch, max 170) on /services/maintenance-support/website-maintenance-services-in-india | `/services/maintenance-support/website-maintenance-services-in-india` |
| warning | Meta description too long (241ch, max 170) on /services/reputation-management/brand-reputation-management-services-in-india | `/services/reputation-management/brand-reputation-management-services-in-india` |
| warning | Meta description too long (284ch, max 170) on /services/reputation-management/business-listing-management-services-in-india | `/services/reputation-management/business-listing-management-services-in-india` |
| warning | Meta description too long (283ch, max 170) on /services/reputation-management/customer-feedback-management-services-in-india | `/services/reputation-management/customer-feedback-management-services-in-india` |
| warning | Meta description too long (262ch, max 170) on /services/reputation-management/digital-presence-management-services-in-india | `/services/reputation-management/digital-presence-management-services-in-india` |
| warning | Meta description too long (269ch, max 170) on /services/reputation-management/google-business-profile-management-services-in-india | `/services/reputation-management/google-business-profile-management-services-in-india` |
| warning | Meta description too long (259ch, max 170) on /services/reputation-management/google-review-management-services-in-india | `/services/reputation-management/google-review-management-services-in-india` |
| warning | Meta description too long (286ch, max 170) on /services/reputation-management/review-generation-services-in-india | `/services/reputation-management/review-generation-services-in-india` |
| warning | Meta description too long (274ch, max 170) on /services/reputation-management/online-reputation-management-services-in-india | `/services/reputation-management/online-reputation-management-services-in-india` |
| warning | Meta description too long (247ch, max 170) on /services/reputation-management/online-review-monitoring-services-in-india | `/services/reputation-management/online-review-monitoring-services-in-india` |
| warning | Meta description too long (309ch, max 170) on /services/social-media-marketing/linkedin-management-services-in-delhi-ncr | `/services/social-media-marketing/linkedin-management-services-in-delhi-ncr` |
| warning | Meta description too long (308ch, max 170) on /services/social-media-marketing/social-media-strategy-services-in-delhi-ncr | `/services/social-media-marketing/social-media-strategy-services-in-delhi-ncr` |
| warning | Meta description too long (308ch, max 170) on /services/web-development/custom-web-application-development-company-in-delhi | `/services/web-development/custom-web-application-development-company-in-delhi` |
| warning | Meta description too long (200ch, max 170) on /services/web-development/custom-website-design-services-in-delhi | `/services/web-development/custom-website-design-services-in-delhi` |
| warning | Meta description too long (292ch, max 170) on /services/web-development/landing-page-design-services-in-india | `/services/web-development/landing-page-design-services-in-india` |
| warning | Meta description too long (193ch, max 170) on /services/web-development/website-development-services-in-delhi | `/services/web-development/website-development-services-in-delhi` |
| warning | Meta description too long (207ch, max 170) on /services/web-development/shopify-development-company-in-delhi | `/services/web-development/shopify-development-company-in-delhi` |
| warning | Meta description too long (278ch, max 170) on /services/web-development/website-optimization-services-company-in-delhi | `/services/web-development/website-optimization-services-company-in-delhi` |
| warning | Meta description too long (280ch, max 170) on /services/web-development/website-redesign-services-in-india | `/services/web-development/website-redesign-services-in-india` |
| warning | Meta description too long (212ch, max 170) on /services/web-development/wordpress-development-company-in-delhi | `/services/web-development/wordpress-development-company-in-delhi` |
| warning | Meta description too short (49ch, min 50) on /portfolio/mobile-apps | `/portfolio/mobile-apps` |
| warning | Meta description too short (41ch, min 50) on /portfolio/seo | `/portfolio/seo` |
