import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Tag, User, Mail } from "lucide-react";
import { insights, getInsightBySlug } from "@/data/blog/blog";
import { site } from "@/data/site/contact";
import { services, type Service } from "@/data/services/services";
import { resolveBlogRedirect } from "@/lib/content-fallback";
import ReadingProgress from "./reading-progress";
import SidebarMessageForm from "./sidebar-message-form";
import {
  LeftSidebarShare,
  MobileShare,
  FooterShare,
  RightSidebarShareCard,
} from "./share";

// Blog category → related services mapping (right sidebar me form ke niche dikhta hai)
const RELATED_SERVICES: Record<string, string[]> = {
  "Search Engine Optimization": ["seo", "content", "web-development"],
  "Paid Ads & CRO": ["ads-ppc", "content", "seo"],
  "Tech & Development": ["web-development", "cloud-devops", "software-ai"],
};

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
          url: "https://eddinet.com/opengraph-image.webp",
          width: 1200,
          height: 630,
          alt: "Eddinet - Digital Marketing & Software Agency",
        },
      ],
    },
  };
}

function LeftSidebar({ title }: { title: string }) {
  return (
    <aside className="hidden xl:flex flex-col items-center pt-2">
      <LeftSidebarShare title={title} />
    </aside>
  );
}

function RightSidebar({
  relatedPosts,
  relatedServices,
  title,
}: {
  relatedPosts: {
    slug: string;
    title: string;
    readTime: string;
    category: string;
  }[];
  relatedServices: {
    slug: string;
    icon: string;
    title: string;
  }[];
  title: string;
}) {
  return (
    <aside className="hidden xl:block w-[300px] flex-shrink-0">
      <div
        data-sticky-sidebar
        className="sticky top-[110px] space-y-8 overflow-y-auto"
      >
        <SidebarMessageForm />

        {relatedServices.length > 0 && (
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-dim)] mb-4">
              Related Services
            </h4>
            <div className="space-y-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block group"
                >
                  <div className="flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-3.5 transition-all duration-300 hover:border-[rgba(var(--accent-rgb),0.4)] hover:-translate-y-0.5">
                    <span className="text-lg leading-none">{s.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[var(--text-main)] group-hover:text-[var(--main-accent)] transition-colors leading-snug">
                        {s.title}
                      </p>
                      <p className="text-[10px] text-[var(--text-dim)] group-hover:text-[var(--text-muted)] transition-colors">
                        Explore service →
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--text-dim)] group-hover:text-[var(--main-accent)] group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {relatedPosts.length > 0 && (
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-dim)] mb-4">
              Related Articles
            </h4>
            <div className="space-y-4">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block group">
                  <p className="text-xs text-[var(--text-muted)] group-hover:text-[var(--main-accent)] transition-colors leading-relaxed line-clamp-2">
                    {rp.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-[var(--text-dim)]">
                      {rp.readTime} · {rp.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-xl bg-gradient-to-br from-[rgba(var(--accent-rgb),0.08)] to-transparent border border-[rgba(var(--accent-rgb),0.2)] p-5">
          <h4 className="text-sm font-semibold text-[var(--text-main)] mb-1.5">
            Stay ahead in digital growth
          </h4>
          <p className="text-[11px] text-[var(--text-muted)] leading-relaxed mb-4">
            Get weekly insights on SEO, AI search, ads and web strategy.
          </p>
          <Link href={`/contact`}>
            <button
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold text-[var(--on-primary)] transition-all duration-300 cursor-pointer"
              style={{ background: "var(--primary-gradient)" }}
            >
              <Mail className="w-3 h-3" />
              Subscribe
            </button>
          </Link>
        </div>

        <Link href={`/contact`} className="block group">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 text-center hover:border-[rgba(var(--accent-rgb),0.3)] transition-all duration-300">
            <p className="text-xs font-semibold text-[var(--text-main)] mb-1 group-hover:text-[var(--main-accent)] transition-colors">
              Need help growing?
            </p>
            <p className="text-[10px] text-[var(--text-muted)] leading-relaxed">
              Free consultation with our digital growth team.
            </p>
          </div>
        </Link>

        <RightSidebarShareCard title={title} />
      </div>
    </aside>
  );
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) {
    const fallback = resolveBlogRedirect(slug);
    if (fallback) permanentRedirect(fallback);
    notFound();
  }

  const relatedPosts = insights.filter((i) => i.slug !== post.slug).slice(0, 3);

  const relatedServices = (
    RELATED_SERVICES[post.category] || ["seo", "content", "web-development"]
  )
    .map((s) => services.find((svc) => svc.slug === s))
    .filter((s): s is Service => Boolean(s));

  const relatedServicesForSidebar = relatedServices.map((s) => ({
    slug: s.slug,
    icon: s.icon,
    title: s.title,
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eddinet.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://eddinet.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title },
    ],
  };

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
      <div className="min-h-screen bg-[var(--bg-dark)]">
        <ReadingProgress />

        <div className="max-w-[1440px] mx-auto px-6 xl:px-10 pb-20">
          <div>
            <div>
              <nav
                className="flex flex-wrap items-center gap-2 text-[0.85rem] text-[var(--text-dim)] pt-[110px] mb-4"
                aria-label="Breadcrumb"
              >
                <Link
                  href="/"
                  className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300"
                >
                  Home
                </Link>
                <span>/</span>
                <Link
                  href="/blog"
                  className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300"
                >
                  Blog
                </Link>
                <span>/</span>
                <span className="text-[var(--main-accent)] line-clamp-1">{post.title}</span>
              </nav>
              <Link
                href={`/blog`}
                className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--main-accent)] transition-transform duration-200 mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                <span className="text-sm font-medium">Back to Blog</span>
              </Link>
            </div>

            <div className="flex gap-8 xl:gap-12 justify-center">
              <LeftSidebar title={post.title} />

              <main className="flex-1 min-w-0 max-w-3xl xl:max-w-[720px]">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.72rem] font-semibold uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-[var(--text-main)] mb-6">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-5 text-sm text-[var(--text-muted)] pb-5 border-b border-[var(--border-color)] mb-5">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[var(--main-accent)]" />
                    <span>{site.name} Team</span>
                  </div>
                  <span className="w-px h-4 bg-[var(--border-color)]/60" />
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[var(--main-accent)]" />
                    <span>
                      {post.date} &middot; {post.readTime}
                    </span>
                  </div>
                </div>

                <MobileShare title={post.title} />

                <div>
                  {post.sections.map((sec, i) => (
                    <div key={i} className="mb-10">
                      {sec.heading && (
                        <h2 className="text-xl lg:text-2xl font-bold text-[var(--text-main)] mb-4">
                          {sec.heading}
                        </h2>
                      )}
                      {sec.paragraphs.map((p, j) => (
                        <p
                          key={j}
                          className="text-[var(--text-muted)] leading-relaxed mb-4 text-[1.05rem]"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-[var(--border-color)]">
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag className="w-4 h-4 text-[var(--main-accent)]" />
                    <span className="px-3 py-1 text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-card)] rounded-full border border-[var(--border-color)]">
                      {post.label}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-card)] rounded-full border border-[var(--border-color)]">
                      {post.category}
                    </span>
                  </div>
                </div>

                <FooterShare title={post.title} />

                {relatedPosts.length > 0 && (
                  <div className="mt-16">
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 text-[var(--main-accent)] text-sm font-semibold uppercase tracking-wider mb-3">
                        <span className="w-6 h-px bg-[var(--main-accent)]" />
                        Keep reading
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-extrabold text-[var(--text-main)] leading-tight">
                        Related Articles
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      {relatedPosts.map((rp) => (
                        <Link key={rp.slug} href={`/blog/${rp.slug}`}>
                          <div className="group p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[rgba(var(--accent-rgb),0.4)] transition-all duration-300 hover:-translate-y-1">
                            <div className={`text-[0.65rem] uppercase tracking-[1.5px] font-bold mb-3 ${rp.categoryColor}`}>
                              {rp.category}
                            </div>
                            <h3 className="font-bold text-sm leading-snug mb-2 text-[var(--text-main)] group-hover:text-[var(--main-accent)] transition-colors">
                              {rp.title}
                            </h3>
                            <p className="text-[var(--text-muted)] text-xs leading-relaxed line-clamp-2">
                              {rp.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mt-3">
                              <Clock className="w-3 h-3" />
                              <span>{rp.readTime}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-16 p-8 rounded-xl border border-[rgba(var(--accent-rgb),0.3)] bg-gradient-to-br from-[rgba(var(--accent-rgb),0.05)] to-transparent text-center">
                  <h2 className="text-xl font-bold text-[var(--text-main)] mb-3">
                    Want This Applied to Your Business?
                  </h2>
                  <p className="text-[var(--text-muted)] text-sm mb-6 max-w-lg mx-auto">
                    Talk to the Eddinet team about building this into your growth
                    system. Free consultation, no obligation.
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <Link href={`/contact`}>
                      <button
                        className="inline-flex items-center justify-center gap-2 py-3 px-7 rounded-full font-bold text-sm text-[var(--on-primary)] transition-all duration-300 hover:-translate-y-[3px] cursor-pointer"
                        style={{ background: "var(--primary-gradient)" }}
                      >
                        Talk to a Growth Expert
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                    <Link href={`/blog`}>
                      <button className="inline-flex items-center justify-center gap-2 py-3 px-7 rounded-full font-bold text-sm border border-[var(--border-color)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px] transition-all duration-300 cursor-pointer">
                        Browse All Articles
                      </button>
                    </Link>
                  </div>
                </div>
              </main>

              <RightSidebar relatedPosts={relatedPosts} relatedServices={relatedServicesForSidebar} title={post.title} />
            </div>
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
