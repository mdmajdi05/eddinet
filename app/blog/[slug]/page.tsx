import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Tag, User, Mail } from "lucide-react";
import { insights, getInsightBySlug, type Insight } from "@/data/blog/blog";
import { site, ORGANIZATION_ID } from "@/data/site/contact";
import { services, type Service } from "@/data/services/services";
import { resolveBlogRedirect } from "@/lib/content-fallback";
import { balancedGrid } from "@/lib/process-grid";
import { seoAlternates, socialMetadata } from "@/lib/social-metadata";
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
  "Digital Marketing": ["ads-ppc", "seo", "content"],
};

/** Brand logo — JSON-LD (publisher/author logo) me absolute URL chahiye. */
const LOGO_URL = "https://eddinet.com/images/brand/eddinet-logo.webp";

// ----------------------------------------------------------------------------
//  Inline content renderer (server-side)
//  WHY: kuch blog posts dusre articles ko cross-link karti hain. Data me link
//  plain markdown syntax me hai — "[label](/blog/slug)" — taaki content file
//  safe rahe (koi raw HTML nahi). Ye chhota parser usko real <Link> me badal
//  deta hai. Chat wala RichText component client-side hai, isliye article body
//  ko RSC (server component) hi rakhte hain — crawl performance ke liye.
// ----------------------------------------------------------------------------
const INLINE_LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;
/** Paragraph ke start me "- " → wo line ek bullet list item hai. */
const LIST_ITEM_RE = /^[-•*]\s+/;

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  INLINE_LINK_RE.lastIndex = 0;
  while ((match = INLINE_LINK_RE.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));

    const label = match[1];
    const href = match[2];
    nodes.push(
      <Link
        key={`${keyPrefix}-l-${i}`}
        href={href}
        className="text-[var(--main-accent)] hover:underline font-medium"
      >
        {label}
      </Link>,
    );

    last = INLINE_LINK_RE.lastIndex;
    i++;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/**
 * Section paragraphs → HTML. Consecutive "- " paragraphs ek <ul> banate hain,
 * baaki normal <p> rehte hain (purane posts bina bullet ke bilkul same rehte hain).
 */
function renderParagraphs(paragraphs: string[], keyPrefix: string): ReactNode[] {
  const blocks: ReactNode[] = [];
  let bullets: string[] = [];

  const flushBullets = () => {
    if (!bullets.length) return;
    const key = `${keyPrefix}-ul-${blocks.length}`;
    blocks.push(
      <ul
        key={key}
        className="list-disc pl-6 mb-5 space-y-2 text-[var(--text-muted)] leading-relaxed text-[1.05rem]"
      >
        {bullets.map((b, i) => (
          <li key={`${key}-${i}`}>{renderInline(b, `${key}-${i}`)}</li>
        ))}
      </ul>,
    );
    bullets = [];
  };

  paragraphs.forEach((p, idx) => {
    const trimmed = p.trim();
    if (LIST_ITEM_RE.test(trimmed)) {
      bullets.push(trimmed.replace(LIST_ITEM_RE, ""));
      return;
    }
    flushBullets();
    blocks.push(
      <p
        key={`${keyPrefix}-p-${idx}`}
        className="text-[var(--text-muted)] leading-relaxed mb-4 text-[1.05rem]"
      >
        {renderInline(p, `${keyPrefix}-p-${idx}`)}
      </p>,
    );
  });

  flushBullets();
  return blocks;
}

/**
 * Optional data table (e.g. CPC benchmarks). Mobile pe horizontal scroll,
 * taaki narrow screens par columns squeeze na hon.
 */
function renderTable(table: Insight["sections"][number]["table"], keyPrefix: string): ReactNode {
  if (!table) return null;
  return (
    <figure key={keyPrefix} className="mb-6">
      <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[var(--bg-card)]">
              {table.headers.map((h, i) => (
                <th
                  key={`${keyPrefix}-h-${i}`}
                  scope="col"
                  className="px-4 py-3 text-[0.7rem] font-bold uppercase tracking-wider text-[var(--main-accent)] border-b border-[var(--border-color)]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, r) => (
              <tr key={`${keyPrefix}-r-${r}`} className="border-b border-[var(--border-color)] last:border-b-0">
                {row.map((cell, c) => (
                  <td
                    key={`${keyPrefix}-r-${r}-c-${c}`}
                    className={
                      c === 0
                        ? "px-4 py-3 align-top font-semibold text-[var(--text-main)]"
                        : "px-4 py-3 align-top text-[var(--text-muted)]"
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.caption && (
        <figcaption className="mt-2 text-xs text-[var(--text-dim)]">
          {table.caption}
        </figcaption>
      )}
    </figure>
  );
}

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
  // SEO title/description post ke apne override se aata hai (keyword-focused chhota
  // title chahiye to `metaTitle`/`metaDescription` set karo) — warna article title/excerpt.
  const metaTitle = post.metaTitle ?? post.title;
  const metaDescription = post.metaDescription ?? post.excerpt;
  return {
    title: metaTitle,
    description: metaDescription,
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: `${site.name} Team`, url: "https://eddinet.com/about" }],
    ...seoAlternates(`https://eddinet.com/blog/${post.slug}`),
    ...socialMetadata({
      title: metaTitle,
      description: metaDescription,
      url: `https://eddinet.com/blog/${post.slug}`,
      type: "article",
      publishedTime,
      modifiedTime: publishedTime,
      authors: [`${site.name} Team`],
    }),
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
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-dim)] mb-4">
              Related Services
            </h3>
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
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-dim)] mb-4">
              Related Articles
            </h3>
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
          <h3 className="text-sm font-semibold text-[var(--text-main)] mb-1.5">
            Stay ahead in digital growth
          </h3>
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

  // Schema.org ko ISO 8601 chahiye — data me human-readable date ("October 21, 2026") hai.
  const publishedTime = new Date(post.date).toISOString();
  // Image local path hota hai ("/images/stock/...") — schema me absolute URL chahiye.
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `https://eddinet.com${post.image}`;
  // Approximate word count — headings + saare section paragraphs ke words.
  const wordCount = post.sections.reduce(
    (total, sec) =>
      total +
      (sec.heading ? sec.heading.split(/\s+/).filter(Boolean).length : 0) +
      sec.paragraphs.reduce(
        (sum, p) => sum + p.split(/\s+/).filter(Boolean).length,
        0,
      ) +
      (sec.table
        ? [...sec.table.headers, ...sec.table.rows.flat()].reduce(
            (sum, cell) => sum + cell.split(/\s+/).filter(Boolean).length,
            0,
          )
        : 0),
    0,
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: publishedTime,
    dateModified: publishedTime,
    wordCount,
    articleSection: post.category,
    keywords: [post.category, post.label].join(", "),
    inLanguage: "en-IN",
    // Byline page par "Eddinet Team" dikhta hai — schema me bhi wahi named
    // Person author rakhte hain (Organization ke bajaye), taaki E-E-A-T signal
    // visible byline se match kare. worksFor brand se link karta hai.
    author: {
      "@type": "Person",
      name: `${site.name} Team`,
      url: "https://eddinet.com/about",
      worksFor: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: site.name,
        url: site.url,
      },
    },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: site.name,
      url: site.url,
      logo: LOGO_URL,
    },
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
                      {renderParagraphs(sec.paragraphs, `sec-${i}`)}
                      {renderTable(sec.table, `sec-${i}-table`)}
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
                    <div className={balancedGrid(relatedPosts.length, { base: 3, gapClass: "cgrid-gap-6", stages: [{ bp: 768, maxCols: 1 }] })}>
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
