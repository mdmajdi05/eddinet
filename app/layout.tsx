import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://eddinet.com/"),
  title: "Eddinet | Digital Growth, Marketing & Technology Partner in Delhi NCR",
  description:
    "Eddinet is a Delhi NCR digital growth, marketing and technology partner offering SEO, AI SEO, social media, PPC, content, web, eCommerce, apps, software, AI, cloud, DevOps, hosting and support services.",
  alternates: {
    canonical: "https://eddinet.com/",
  },
  openGraph: {
    title: "Eddinet | Digital Growth, Marketing & Technology Partner in Delhi NCR",
    description:
      "Eddinet is a Delhi NCR digital growth, marketing and technology partner offering SEO, AI SEO, social media, PPC, content, web, eCommerce, apps, software, AI, cloud, DevOps, hosting and support services.",
    url: "https://eddinet.com/",
    siteName: "Eddinet",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eddinet | Digital Growth, Marketing & Technology Partner in Delhi NCR",
    description:
      "Eddinet is a Delhi NCR digital growth, marketing and technology partner offering SEO, AI SEO, social media, PPC, content, web, eCommerce, apps, software, AI, cloud, DevOps, hosting and support services.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Eddinet",
  url: "https://eddinet.com/",
  logo: "https://eddinet.com/eddinet-logo.png",
  email: "contact@eddinet.com",
  telephone: "+91 70428 40441",
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
    <html lang="en" data-theme="cyan" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var a=localStorage.getItem("du-accent")||"cyan";var m=localStorage.getItem("du-mode")||"dark";var t=m==="dark"?a:a+"-light";document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`,
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
