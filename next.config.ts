import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  // www → apex canonicalisation.
  // Nginx sirf HTTP → HTTPS karta hai (`$host` ki wajah se www reh jaata hai),
  // isliye https://www.eddinet.com/* pe page 200 OK serve hota tha — ek hi
  // content do URL pe live. Ye redirect (middleware/proxy se bhi pehle chalta
  // hai) ek hi baar me sab variants ko apex pe consolidate karta hai.
  async redirects() {
    return [
      // Duplicate child page consolidate karna.
      // /services/ecommerce/ecommerce-seo aur /services/seo/ecommerce-seo dono
      // ka metaTitle + H1 ek tha ("eCommerce SEO Services in Delhi NCR") aur
      // body bhi lagbhag same. SEO wala page original aur topical hai, isliye
      // eCommerce wala usi par permanent redirect hai. Ye rule pehle aata hai
      // taaki www host ke saath bhi sirf EK redirect hop lage.
      {
        source: "/services/ecommerce/ecommerce-seo",
        destination: "/services/seo/ecommerce-seo",
        permanent: true,
      },
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
    ];
  },
};

export default nextConfig;
