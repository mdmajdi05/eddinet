import type { NextConfig } from "next";
import { serviceRedirects } from "./data/service-redirects";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,

  // ── Redirects ────────────────────────────────────────────────────────────
  //  IMPORTANT: purane service child slugs (jo Google me already indexed the)
  //  ko naye slugs par permanent redirect karna zaroori hai. Warna purane URLs
  //  404 ho jaate hain aur Google ke paas naye URLs tak pahunchne ka koi
  //  signal nahi rehta => "Discovered - currently not indexed".
  //
  //  Saare old -> new service redirects `data/service-redirects.ts` me hain
  //  (`npm run redirects:check` / `npm run redirects:sync` se maintain hote
  //  hain). Inhe kabhi delete na karo.
  //
  //  Plus host canonicalisation: www → apex.
  async redirects() {
    return [
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

