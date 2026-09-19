import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioGrid from "@/components/PortfolioGrid";
import { projectCategories } from "@/data/portfolio";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = projectCategories.find(
    (c) => c.key === category
  );

  if (!cat) {
    return {
      title: "Portfolio | Eddinet",
    };
  }

  return {
    title: `${cat.label} Portfolio | Eddinet`,
    description: `Browse ${cat.label} projects delivered by Eddinet.`,
    alternates: {
      canonical: `https://eddinet.com/portfolio/${cat.key}`,
    },
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
    return notFound();
  }

  return (
    <main className="pt-[125px] pb-[100px]">

      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">

        <PortfolioGrid
          initialCategory={cat.key}
          hideControls
        />

      </div>

    </main>
  );
}