import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import PortfolioGrid from "@/components/PortfolioGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  portfolioProjects,
  projectCategories,
} from "@/data/portfolio/portfolio";
import { resolvePortfolioRedirect } from "@/lib/content-fallback";
import { socialMetadata } from "@/lib/social-metadata";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return projectCategories.map((category) => ({ category: category.key }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = projectCategories.find(
    (c) => c.key === category
  );

  if (!cat) {
    return {
      title: "Portfolio | Eddinet",
      description:
        "Browse Eddinet's portfolio of websites, eCommerce stores, software, SaaS, AI, mobile apps, SEO and digital growth projects.",
      alternates: { canonical: "https://eddinet.com/portfolio" },
      robots: { index: false, follow: false },
    };
  }

  const title = `${cat.label} Portfolio | Eddinet`;
  const description = `Browse ${cat.label} projects delivered by Eddinet in Delhi NCR - real websites, apps, software and campaigns built to convert.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://eddinet.com/portfolio/${cat.key}`,
    },
    ...socialMetadata({
      title,
      description,
      url: `https://eddinet.com/portfolio/${cat.key}`,
    }),
  };
}

export default async function PortfolioCategoryPage({
  params,
}: Props) {
  const { category } = await params;
  const cat = projectCategories.find(
    (c) => c.key === category
  );

  if (!cat) {
    const fallback = resolvePortfolioRedirect(category);
    if (fallback) permanentRedirect(fallback);
    notFound();
  }

  const categoryUrl = `https://eddinet.com/portfolio/${cat.key}`;

  // Category ke projects hi list banate hain - list khud data se aati
  // hai, isliye koi category bina projects ke bhi valid JSON deta hai
  // (itemListElement khaali ho jayega, crash nahi hoga).
  const categoryProjects = portfolioProjects.filter(
    (p) => p.category === cat.key
  );

  // COLLECTIONPAGE + ITEMLIST SCHEMA
  // Category page ek collection hai - uske projects ki list se
  // linked. CollectionPage page ko, ItemList uske contents ko
  // represent karta hai.
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${categoryUrl}#page`,
    name: `${cat.label} Portfolio | Eddinet`,
    url: categoryUrl,
    description: `Browse ${cat.label} projects delivered by Eddinet in Delhi NCR - real websites, apps, software and campaigns built to convert.`,
    mainEntity: { "@id": `${categoryUrl}#list` },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${categoryUrl}#list`,
    name: `${cat.label} Projects`,
    itemListElement: categoryProjects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      description: p.summary,
      url: p.url ? p.url : categoryUrl,
    })),
  };

  return (
    <>
      {/* JSON-LD: category collection + uske projects ki list */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="pt-[125px] pb-[100px]">

      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Portfolio", href: "/portfolio" },
            { label: cat.label },
          ]}
        />

        <div className="mt-8">
          <PortfolioGrid
            initialCategory={cat.key}
            hideControls
          />
        </div>

      </div>

    </main>
    </>
  );
}
