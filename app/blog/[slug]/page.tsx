import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { insights, getInsightBySlug } from "@/data/blog";
import { site } from "@/data/contact";
import PageClient from "./page-client";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) return {};
  const publishedTime = new Date(post.date).toISOString();
  return {
    title: post.title,
    description: post.excerpt,
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: site.name }],
    alternates: { canonical: `https://eddinet.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://eddinet.com/blog/${post.slug}`,
      type: "article",
      locale: "en_IN",
      siteName: site.name,
      publishedTime,
      modifiedTime: publishedTime,
      authors: [site.name],
      images: [
        {
          url: "https://eddinet.com/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Eddinet - Digital Marketing & Software Agency",
        },
      ],
    },
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `https://eddinet.com/blog/${post.slug}`,
  };

  return (
    <>
      <PageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}