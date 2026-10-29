import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import ChatLauncher from "@/components/chat/ChatLauncher";
import FacebookEvents from "@/components/FacebookEvents";
import { site, ORGANIZATION_ID } from "@/data/site/contact";
import { socialMetadata } from "@/lib/social-metadata";
import {
  megaMenuCategories,
  mobileServiceLinks,
  portfolioMenuCategories,
} from "@/data/services/nav-menu";

// Self-hosted font (next/font) — Google Fonts ka render-blocking external
// stylesheet hata diya, font ab build-time par self-host hota hai (preload +
// display: swap), jo LCP improve karta hai aur layout shift (CLS) zero karta hai.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://eddinet.com/"),
  title: "Eddinet | Digital Marketing & Web Development, Delhi NCR",
  description:
    "Eddinet is a Delhi NCR agency for SEO, Google Ads, social media, web and app development. See our work and talk to our team about your growth goals.",
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: site.name, url: site.url }],
  // Publisher / creator signals — brand name ek hi jagah se (site.name),
  // taaki har page par "Eddinet" hi publisher dikhe (koi alag spelling nahi).
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "https://eddinet.com/",
    languages: {
      "en-in": "https://eddinet.com/",
      "x-default": "https://eddinet.com/",
    },
  },
  verification: {
    google: "xCtFiK_TY-W1mnzQIx0XxwK_CdgtRyu6NP9TgpUS8LU",
    // Bing Webmaster Tools verification (pehle wala bing code hata diya gaya,
    // sirf yeh active hai abhi).
    other: {
      "msvalidate.01": "F6407E43872C87E0DD90E700E4DDEC40",
      // Meta (Facebook) domain verification — Business Settings → Brand safety
      // → Domains. Meta-tag method yahi meta tag render karta hai.
      "facebook-domain-verification": "z0rm57x3trm6kq0vn4z415icthsmre",
    },
  },
  manifest: "/ENDINET_EN_Favicons/site.webmanifest",
  icons: {
    icon: [
      { url: "/ENDINET_EN_Favicons/favicon.ico", sizes: "any" },
      { url: "/ENDINET_EN_Favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/ENDINET_EN_Favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/ENDINET_EN_Favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/ENDINET_EN_Favicons/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/ENDINET_EN_Favicons/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/ENDINET_EN_Favicons/apple-touch-icon.png" }],
  },
  ...socialMetadata({
    title: "Eddinet | Digital Marketing & Web Development, Delhi NCR",
    description:
      "Eddinet is a Delhi NCR agency for SEO, Google Ads, social media, web and app development. See our work and talk to our team about your growth goals.",
    url: "https://eddinet.com/",
  }),
  other: {
    language: "English",
    "content-language": "en-IN",
    referrer: "strict-origin-when-cross-origin",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": site.name,
    "geo.region": "IN-DL",
    "geo.placename": "Delhi NCR",
    "geo.position": "28.531672;77.274183",
    ICBM: "28.6139, 77.2090",
  },
};

//  Ek hi business entity poore site par. /contact ka ProfessionalService
//  isi @id ko reference karta hai — duplicate/conflicting entities nahi bante.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": ORGANIZATION_ID,
  name: site.name,
  description: site.tagline,
  url: site.url,
  logo: "https://eddinet.com/images/brand/eddinet-logo.webp",
  image: "https://eddinet.com/opengraph-image.webp",
  email: site.email,
  telephone: site.phone,
  // Social profiles — khali link ho to JSON-LD me nahi aana chahiye,
  // warna Google "invalid profile URL" flag kar deta hai.
  sameAs: [
    site.social.linkedin,
    site.social.facebook,
    site.social.instagram,
  ].filter((url) => url.trim() !== ""),
  priceRange: "₹₹",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
    { "@type": "Country", name: "India" },
  ],
  // Sales contact — phone/email + service area (Delhi NCR + poora India).
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    email: site.email,
    contactType: "sales",
    areaServed: ["Delhi NCR", "India"],
    availableLanguage: ["en", "hi"],
  },
  openingHours: "Mo-Sa 10:00-19:00",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "10:00",
    closes: "19:00",
  },
  address: {
    "@type": "PostalAddress",
    ...site.postalAddress,
  },
  // Map pin / GBP se match karta hua location.
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.531672,
    longitude: 77.274183,
  },
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=Okhla+Industrial+Estate+Phase+1%2C+New+Delhi%2C+Delhi+110020",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  alternateName: `${site.name} - Digital Marketing & Software Agency`,
  url: "https://eddinet.com/",
  description:
    "Digital marketing & software agency in Delhi NCR - SEO, AI SEO, ads, content, web, apps, software, AI, cloud and reputation management.",
  inLanguage: "en-IN",
  // Site search — Google ko batata hai ki users yahin search kar sakte hain
  // (blog me ?q= query support hai).
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://eddinet.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: "https://eddinet.com/images/brand/eddinet-logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="red" suppressHydrationWarning className={jakarta.variable}>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=localStorage.getItem("du-mode")||"dark";document.documentElement.setAttribute("data-theme",m==="dark"?"red":"red-light");}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://datafa.st" />
        {/* GTM aur Meta Pixel third-party scripts hain — connection setup pehle
            ho jaye taaki network waterfall chhota rahe (LCP/TBT par asar). */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        {/* RSS feed — news aggregators + feed readers ke liye discovery. */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Eddinet Blog — Marketing, SEO & Technology Insights"
          href="https://eddinet.com/feed.xml"
        />
        {/* AI crawlers / answer engines ke liye llms.txt (index + full copy). */}
        <link
          rel="alternate"
          type="text/markdown"
          title="Eddinet — llms.txt"
          href="https://eddinet.com/llms.txt"
        />
        <link
          rel="alternate"
          type="text/markdown"
          title="Eddinet — llms-full.txt"
          href="https://eddinet.com/llms-full.txt"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) — body ke theek baad, JS band users ke liye */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVHR352P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Google Tag Manager (container: GTM-TVHR352P)
            afterInteractive => pehle page ko interactive hone deta hai, phir GTM
            load hota hai. Isse LCP/TBT par koi asar nahi padta (head me blocking
            loader se behtar). */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TVHR352P');`,
          }}
        />
        <Script
          id="datafast"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
          data-website-id="dfid_v6xdyebpgTQWzxC5pXdiH"
          data-domain="eddinet.com"
        />
        {/* Facebook (Meta) Pixel — base code (pixel id: 1648474986812826).
            GTM jaisa hi afterInteractive: page interactive hone ke baad load hota
            hai, isliye LCP/TBT par asar nahi padta. fbq() calls tab tak queue me
            rehti hain jab tak script load na ho jaaye. */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1648474986812826');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=1648474986812826&ev=PageView&noscript=1"
          />
        </noscript>
        {/* Meta Pixel events: SPA route changes (PageView/ViewContent), phone /
            WhatsApp / email clicks (Contact) aur forms (Lead/Subscribe).
            Base snippet sirf first load par PageView bhejta hai — isliye landing
            skip hota hai, koi double count nahi. */}
        <FacebookEvents />
        <ThemeProvider>
          <Header
            megaMenuCategories={megaMenuCategories}
            mobileServiceLinks={mobileServiceLinks}
            portfolioMenuCategories={portfolioMenuCategories}
          />
          <main>{children}</main>
          <Footer />
          <FloatingContactWidget />
          <ChatLauncher />
        </ThemeProvider>
      </body>
    </html>
  );
}
