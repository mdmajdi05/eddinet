import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import { projectCategories } from "@/data/portfolio/portfolio";
import { socialMetadata } from "@/lib/social-metadata";

export const metadata: Metadata = {
  title: "Portfolio - Websites, Software & Digital Projects | Eddinet",
  description:
    "Explore Eddinet's portfolio of websites, eCommerce stores, software, SaaS, AI, mobile apps, SEO and digital growth projects.",
  alternates: {
    canonical: "https://eddinet.com/portfolio",
  },
  ...socialMetadata({
    title: "Portfolio - Websites, Software & Digital Projects | Eddinet",
    description:
      "Explore Eddinet's portfolio of websites, eCommerce stores, software, SaaS, AI, mobile apps, SEO and digital growth projects.",
    url: "https://eddinet.com/portfolio",
  }),
};

// COLLECTIONPAGE + ITEMLIST SCHEMA
// Portfolio index ek collection hai - 10 categories, har ek apni page par.
// ItemList se Google ko pata chalta hai ki index par kya kya hai aur
// har category ka apna URL kahan hai.
const portfolioCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://eddinet.com/portfolio#page",
  name: "Eddinet Portfolio",
  url: "https://eddinet.com/portfolio",
  description:
    "Explore Eddinet's portfolio of websites, eCommerce stores, software, SaaS, AI, mobile apps, SEO and digital growth projects.",
  mainEntity: { "@id": "https://eddinet.com/portfolio#list" },
};

const portfolioCategoryListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://eddinet.com/portfolio#list",
  name: "Eddinet Portfolio Categories",
  itemListElement: projectCategories.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.label,
    url: `https://eddinet.com/portfolio/${c.key}`,
  })),
};

export default function PortfolioPage() {
  return (
    <>
      {/* JSON-LD: portfolio collection + categories ki list */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioCollectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioCategoryListSchema) }}
      />

      <main className="pt-[125px] pb-[100px]">

      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Portfolio" },
          ]}
        />

        <PortfolioGrid />

      </div>

    </main>
    </>
  );
}