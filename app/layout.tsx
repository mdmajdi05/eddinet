import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/contact";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://eddinet.com/"),
  title: "Digital Marketing & Software Agency Delhi NCR | Eddinet",
  description:
    "Eddinet is a leading digital marketing & software agency in Delhi NCR, offering SEO, web & app development, and branding. Get a free consultation today.",
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Eddinet" }],
  alternates: {
    canonical: "https://eddinet.com/",
    languages: {
      "en-in": "https://eddinet.com/",
      "x-default": "https://eddinet.com/",
    },
  },
  verification: {
    google: "xCtFiK_TY-W1mnzQIx0XxwK_CdgtRyu6NP9TgpUS8LU",
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
  openGraph: {
    title: "Digital Marketing & Software Agency Delhi NCR | Eddinet",
    description:
      "Eddinet is a leading digital marketing & software agency in Delhi NCR, offering SEO, web & app development, and branding. Get a free consultation today.",
    url: "https://eddinet.com/",
    siteName: "Eddinet",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://eddinet.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Eddinet - Digital Marketing & Software Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Software Agency Delhi NCR | Eddinet",
    description:
      "Eddinet is a leading digital marketing & software agency in Delhi NCR, offering SEO, web & app development, and branding. Get a free consultation today.",
    images: ["https://eddinet.com/opengraph-image.png"],
  },
  other: {
    language: "English",
    "content-language": "en-IN",
    referrer: "strict-origin-when-cross-origin",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Eddinet",
    "geo.region": "IN-DL",
    "geo.placename": "Delhi NCR",
    "geo.position": "28.6139;77.2090",
    ICBM: "28.6139, 77.2090",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Eddinet",
  url: "https://eddinet.com/",
  logo: "https://eddinet.com/ENDINET_EN_Favicons/favicon-512x512.png",
  email: "contact@eddinet.com",
  telephone: site.phone,
  priceRange: "$$",
  areaServed: ["Delhi NCR", "India"],
  openingHours: "Mo-Sa 10:00-19:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Okhla Industrial Estate, Phase I",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110020",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="red" suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=localStorage.getItem("du-mode")||"dark";document.documentElement.setAttribute("data-theme",m==="dark"?"red":"red-light");}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
