import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import PortfolioGrid from "@/components/PortfolioGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  portfolioProjects,
  projectCategories,
} from "@/data/portfolio/portfolio";
import { portfolioCategoryContent } from "@/data/portfolio/category-content";
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
  const categoryContent = portfolioCategoryContent[cat.key];

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

        {categoryContent && (
          <section className="mt-16 pt-12 border-t border-[var(--border-color)]">
            <div className="max-w-[920px]">
              <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[var(--main-accent)] text-[0.75rem] font-bold uppercase tracking-wider mb-4">
                About this work
              </span>
              <h2 className="text-[2rem] font-extrabold leading-[1.15] text-[var(--text-main)] mb-5 max-[768px]:text-[1.6rem]">
                {categoryContent.introHeading}
              </h2>
              <div className="space-y-4">
                {categoryContent.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[var(--text-muted)] text-[1rem] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-[var(--text-main)] text-[1.05rem] font-bold mb-3">
                  What this work typically includes
                </h3>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2 max-[640px]:grid-cols-1">
                  {categoryContent.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[var(--text-muted)] text-[0.92rem] leading-relaxed"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.42rem] w-1.5 h-1.5 rounded-full bg-[var(--main-accent)] shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={categoryContent.serviceHref}
                className="mt-8 inline-flex items-center gap-2 py-3 px-6 rounded-full font-bold text-[0.9rem] no-underline text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] transition-all duration-300 hover:-translate-y-[2px]"
                style={{ background: "var(--primary-gradient)" }}
              >
                {categoryContent.serviceLabel}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </section>
        )}

      </div>

    </main>
    </>
  );
}
