import type { NextConfig } from "next";
import { serviceRedirects } from "./data/service-redirects";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,

  // ── Redirects ────────────────────────────────────────────────────────────
  //  Slug-migration (old → new) redirects hata diye gaye hain: site fresh hai,
  //  koi external backlink/legacy URL nahi, aur sabhi internal links, sitemap
  //  + canonical already NEW slugs use karte hain. Isliye purane slug kisi bhi
  //  link graph me nahi hain aur unke liye redirect ki zarurat nahi.
  //
  //  Sirf host canonicalisation bacha hai:
  //  www → apex. Nginx sirf HTTP → HTTPS karta hai (`$host` ki wajah se www
  //  reh jaata hai), isliye https://www.eddinet.com/* ek hi content do URL pe
  //  live reh jaata tha. Ye redirect (middleware/proxy se bhi pehle chalta hai)
  //  ek hi baar me sab variants ko apex pe consolidate karta hai.
  async redirects() {
    return [
      // Auto-generated slug-migration redirects (old service URL -> new URL).
      // `npm run redirects:sync` se maintain hote hain.
      ...serviceRedirects,
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.eddinet.com" }],
        destination: "https://eddinet.com/:path*",
        permanent: true, // 308 Permanent — search engines ko permanent consolidation signal
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value:
              "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
