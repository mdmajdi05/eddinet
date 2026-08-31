import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { insights, getInsightBySlug } from "@/data/insights";
import { site } from "@/data/site";

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
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://eddinet.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://eddinet.com/blog/${post.slug}`,
      type: "article",
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
      <section className="pt-[150px] pb-[60px]">
        <div className="w-full max-w-[820px] mx-auto px-5">
          <nav className="mb-8 text-[0.85rem] text-[var(--text-dim)] flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Blog</Link>
            <span>/</span>
            <span className="text-[var(--main-accent)]">{post.category}</span>
          </nav>
          <div className={`text-[0.75rem] uppercase tracking-[1.5px] font-bold mb-3 ${post.categoryColor}`}>{post.category}</div>
          <h1 className="text-[2.8rem] font-extrabold leading-[1.15] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            {post.title}
          </h1>
          <p className="text-[var(--text-muted)] text-[1.1rem] leading-relaxed mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-[0.85rem] text-[var(--text-dim)] pb-8 border-b border-[var(--border-color)]">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>By Eddinet Team</span>
          </div>
        </div>
      </section>

      <section className="pb-[60px]">
        <div className="w-full max-w-[820px] mx-auto px-5">
          <div className="mb-10 rounded-2xl overflow-hidden border border-[var(--border-color)]">
            <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full h-auto object-cover" unoptimized />
          </div>
          <div className="flex flex-col gap-9">
            {post.sections.map((sec, i) => (
              <div key={i}>
                {sec.heading && (
                  <h2 className="text-[1.6rem] font-extrabold leading-tight text-[var(--text-main)] mb-3">{sec.heading}</h2>
                )}
                {sec.paragraphs.map((p, j) => (
                  <p key={j} className="text-[var(--text-muted)] text-[1rem] leading-[1.85] mb-4">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-8 border border-[rgba(var(--accent-rgb),0.3)] text-center" style={{ background: "var(--cta-bg)" }}>
            <h2 className="text-[1.7rem] font-extrabold mb-3 text-[var(--text-main)]">Want This Applied to Your Business?</h2>
            <p className="text-[var(--text-muted)] text-[0.98rem] mb-6">
              Talk to the Eddinet team about building this into your growth system.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] hover:-translate-y-[3px]"
                style={{ background: "var(--primary-gradient)" }}
              >
                Talk to a Digital Growth Expert
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]"
              >
                Browse All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}