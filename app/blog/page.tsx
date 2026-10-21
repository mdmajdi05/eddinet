import type { Metadata } from "next";
import { insights } from "@/data/blog/blog";
import { site } from "@/data/site/contact";
import AdaptiveLines from "@/components/AdaptiveLines";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogExplorer, { type BlogCardPost } from "@/components/blog/BlogExplorer";
import { socialMetadata } from "@/lib/social-metadata";

const BLOG_DESCRIPTION =
  "Eddinet blog on SEO, AI search, Google and Meta ads, social media, content, web development, eCommerce, AI, cloud and digital growth.";

export const metadata: Metadata = {
  title: "Blog - Practical Thinking on Marketing and Technology",
  description: BLOG_DESCRIPTION,
  alternates: { canonical: "https://eddinet.com/blog" },
  ...socialMetadata({
    title: "Blog - Practical Thinking on Marketing and Technology",
    description: BLOG_DESCRIPTION,
    url: "https://eddinet.com/blog",
  }),
};

// Blog index ka JSON-LD — Google ko batata hai ki ye ek collection page hai aur
// usme kaunse posts hain (position order me). Har post ka URL + ISO date.
const blogSchema = {
  "@context": "https://schema.org",
  "@type": ["Blog", "CollectionPage"],
  name: "Eddinet Blog - Practical Thinking on Marketing and Technology",
  description: BLOG_DESCRIPTION,
  url: "https://eddinet.com/blog",
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: "https://eddinet.com/images/brand/eddinet-logo.webp",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: insights.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: post.title,
      url: `https://eddinet.com/blog/${post.slug}`,
      item: `https://eddinet.com/blog/${post.slug}`,
      datePublished: new Date(post.date).toISOString(),
    })),
  },
};

export default function BlogPage() {
  // Sirf card ke liye zarooti fields client component ko bhejte hain —
  // pura article content (sections/paragraphs) RSC payload me nahi jaata.
  const blogCards: BlogCardPost[] = insights.map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    categoryColor: p.categoryColor,
    label: p.label,
    excerpt: p.excerpt,
    image: p.image,
    date: p.date,
    readTime: p.readTime,
  }));

  return (
    <>
      <section className="pt-[170px] pb-[70px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 text-center">
          <Breadcrumbs
            className="mb-5 justify-center"
            items={[
              { label: "Home", href: "/" },
              { label: "Blog" },
            ]}
          />
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
            Blog
          </div>
          <h1 className="text-[3rem] font-extrabold leading-[1.15] mb-4 text-[var(--text-main)] max-[768px]:text-[2.2rem]">
            Practical Thinking on <span className="gradient-text">Marketing and Technology</span>
          </h1>
          <AdaptiveLines
            className="text-[var(--text-muted)] text-[1.15rem] max-w-[680px] mx-auto"
            text="What we're seeing and testing across SEO, paid media, content, web, eCommerce and technology - written to be useful, whether or not you become a client."
          />
        </div>
      </section>

      <section className="pb-[100px]">
        <BlogExplorer posts={blogCards} />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
    </>
  );
}