import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  seoChildServices,
  getSeoChildBySlug,
} from "@/data/seo-child-services";
import { mergeDocxChildContent } from "@/data/docx-content";
import { seoFeatureImages } from "@/data/seo-feature-images";
import ServiceChildPage from "@/components/ServiceChildPage";

export function generateStaticParams() {
  return seoChildServices.map((c) => ({ childSlug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ childSlug: string }>;
}): Promise<Metadata> {
  const { childSlug } = await params;
  const baseChild = getSeoChildBySlug(childSlug);
  if (!baseChild) return {};
  const child = mergeDocxChildContent(childSlug, baseChild);
  const canonical = `https://eddinet.com/services/seo/${child.slug}`;
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

export default async function SeoChildPage({
  params,
}: {
  params: Promise<{ childSlug: string }>;
}) {
  const { childSlug } = await params;
  const baseChild = getSeoChildBySlug(childSlug);
  if (!baseChild) notFound();
  const child = mergeDocxChildContent(childSlug, baseChild);

  const featureImages = seoFeatureImages[child.slug] ?? {};
  const childWithImages = {
    ...child,
    features: child.features.map((feature) => ({
      ...feature,
      image: featureImages[feature.title] ?? child.image,
    })),
  };

  return (
    <ServiceChildPage
      child={childWithImages}
      category={{ title: "SEO & AI SEO", href: "/services/seo" }}
      canonicalUrl={`https://eddinet.com/services/seo/${child.slug}`}
    />
  );
}