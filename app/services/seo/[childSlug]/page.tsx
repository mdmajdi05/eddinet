import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { seoChildServices, getSeoChildBySlug } from "@/data/services/child/seo-child-services";
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
  const child = getSeoChildBySlug(childSlug);
  if (!child) return {};
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
  const child = getSeoChildBySlug(childSlug);
  if (!child) notFound();

  return (
    <ServiceChildPage
      child={child}
      category={{ title: "SEO & AI SEO", href: "/services/seo" }}
      canonicalUrl={`https://eddinet.com/services/seo/${child.slug}`}
    />
  );
}