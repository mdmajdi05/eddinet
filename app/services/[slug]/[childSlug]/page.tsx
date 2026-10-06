import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  generatedChildServices,
  getGeneratedChildByCategoryAndSlug,
  getCategoryBySlug,
} from "@/data/services/child/generated-child-services";
import ServiceChildPage from "@/components/ServiceChildPage";

export function generateStaticParams() {
  return generatedChildServices.map((c) => ({
    slug: c.categorySlug,
    childSlug: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; childSlug: string }>;
}): Promise<Metadata> {
  const { slug, childSlug } = await params;
  const child = getGeneratedChildByCategoryAndSlug(slug, childSlug);
  if (!child) return {};
  const canonical = `https://eddinet.com/services/${slug}/${child.slug}`;
  return {
    title: child.metaTitle,
    description: child.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: child.metaTitle,
      description: child.metaDescription,
      url: canonical,
    },
  };
}

export default async function GeneratedChildPage({
  params,
}: {
  params: Promise<{ slug: string; childSlug: string }>;
}) {
  const { slug, childSlug } = await params;
  const child = getGeneratedChildByCategoryAndSlug(slug, childSlug);
  if (!child) notFound();

  const category = getCategoryBySlug(slug);

  return (
    <ServiceChildPage
      child={child}
      category={{
        title: category?.title ?? child.categoryTitle,
        href: `/services/${slug}`,
      }}
      canonicalUrl={`https://eddinet.com/services/${slug}/${child.slug}`}
    />
  );
}