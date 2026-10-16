import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  htmlSitemapLinks,
  htmlSitemapTotal,
  type HtmlSitemapLink,
} from "@/data/site/html-sitemap";
import { balancedGrid } from "@/lib/process-grid";

/** Ek page par kitne links — speed + readability ke liye. */
const PAGE_SIZE = 200;

export const metadata: Metadata = {
  title: "HTML Sitemap - All Pages",
  description:
    "Browse every page on Eddinet - services, service sub-pages, blog articles, portfolio categories and company pages - in one organised, paginated HTML sitemap.",
  alternates: { canonical: "https://eddinet.com/sitemap-html" },
};

/** Page-number window: 1 … 4 5 6 … 20 (ellipsis ke saath). */
function buildPageNumbers(current: number, total: number): (number | "…")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "…")[] = [1];
  if (current > 3) pages.push("…");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("…");
  pages.push(total);

  return pages;
}

/** Page 1 ke liye clean URL, baaki ke liye ?page=N. */
function pageHref(page: number): string {
  return page <= 1 ? "/sitemap-html" : `/sitemap-html?page=${page}`;
}

export default async function HtmlSitemapPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const params = await searchParams;
  const raw = Array.isArray(params.page) ? params.page[0] : params.page;
  const requested = Number.parseInt(raw ?? "1", 10);

  const totalPages = Math.max(1, Math.ceil(htmlSitemapTotal / PAGE_SIZE));
  const currentPage = Number.isFinite(requested)
    ? Math.min(Math.max(1, requested), totalPages)
    : 1;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const pageLinks: HtmlSitemapLink[] = htmlSitemapLinks.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );
  const showingFrom = htmlSitemapTotal === 0 ? 0 : startIndex + 1;
  const showingTo = startIndex + pageLinks.length;
  const pageNumbers = buildPageNumbers(currentPage, totalPages);

  return (
    <>
      <section className="pt-[170px] pb-[50px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <Breadcrumbs
            className="mb-5"
            items={[{ label: "Home", href: "/" }, { label: "Sitemap" }]}
          />
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
            Sitemap
          </div>
          <h1 className="text-[3rem] font-extrabold leading-[1.15] mb-4 text-[var(--text-main)] max-[768px]:text-[2.2rem]">
            HTML <span className="gradient-text">Sitemap</span>
          </h1>
          <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[720px] leading-relaxed">
            Every page on Eddinet in one place - services, service sub-pages,
            blog articles, portfolio categories and company pages. For speed,
            links are split across pages of {PAGE_SIZE} and shown in a grid.
          </p>
          <p className="text-[var(--text-dim)] text-[0.9rem] mt-4">
            Showing{" "}
            <span className="font-bold text-[var(--text-main)]">
              {showingFrom}–{showingTo}
            </span>{" "}
            of{" "}
            <span className="font-bold text-[var(--text-main)]">
              {htmlSitemapTotal}
            </span>{" "}
            pages
            {totalPages > 1 && (
              <>
                {" "}
                · Page{" "}
                <span className="font-bold text-[var(--text-main)]">
                  {currentPage}
                </span>{" "}
                of {totalPages}
              </>
            )}
          </p>
        </div>
      </section>

      <section className="pb-[60px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <ul className={balancedGrid(pageLinks.length, { base: 3, gapClass: "cgrid-gap-3", stages: [{ bp: 1024, maxCols: 2 }, { bp: 640, maxCols: 1 }], extra: "list-none p-0 m-0" })}>
            {pageLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex h-full flex-col gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 no-underline transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] hover:-translate-y-[2px]"
                >
                  <span className="inline-flex w-fit items-center rounded-full border border-[var(--tag-border)] bg-[var(--tag-bg)] px-2.5 py-0.5 text-[0.66rem] font-semibold uppercase tracking-wider text-[var(--main-accent)]">
                    {link.group}
                  </span>
                  <span className="text-[0.92rem] font-semibold leading-snug text-[var(--text-main)] transition-colors duration-300 group-hover:text-[var(--main-accent)]">
                    {link.label}
                  </span>
                  <span className="mt-auto truncate text-[0.74rem] text-[var(--text-dim)]">
                    {link.href}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {htmlSitemapTotal === 0 && (
            <p className="text-center text-[var(--text-muted)] py-16">
              No pages found.
            </p>
          )}

          {totalPages > 1 && (
            <nav
              aria-label="Sitemap pagination"
              className="mt-10 flex flex-wrap items-center justify-center gap-2"
            >
              {currentPage > 1 ? (
                <Link
                  href={pageHref(currentPage - 1)}
                  rel="prev"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-2 text-[0.85rem] font-semibold text-[var(--text-muted)] no-underline transition-all duration-300 hover:border-[var(--border-hover)] hover:text-[var(--main-accent)]"
                >
                  ← Prev
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-color)] px-4 py-2 text-[0.85rem] font-semibold text-[var(--text-dim)] opacity-50">
                  ← Prev
                </span>
              )}

              {pageNumbers.map((item, i) =>
                item === "…" ? (
                  <span
                    key={`ellipsis-${i}`}
                    className="px-2 text-[var(--text-dim)]"
                  >
                    …
                  </span>
                ) : (
                  <Link
                    key={item}
                    href={pageHref(item)}
                    aria-current={item === currentPage ? "page" : undefined}
                    className={
                      item === currentPage
                        ? "inline-flex min-w-[40px] items-center justify-center rounded-full px-4 py-2 text-[0.85rem] font-bold text-[var(--on-primary)] no-underline"
                        : "inline-flex min-w-[40px] items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-2 text-[0.85rem] font-semibold text-[var(--text-muted)] no-underline transition-all duration-300 hover:border-[var(--border-hover)] hover:text-[var(--main-accent)]"
                    }
                    style={
                      item === currentPage
                        ? { background: "var(--primary-gradient)" }
                        : undefined
                    }
                  >
                    {item}
                  </Link>
                ),
              )}

              {currentPage < totalPages ? (
                <Link
                  href={pageHref(currentPage + 1)}
                  rel="next"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-2 text-[0.85rem] font-semibold text-[var(--text-muted)] no-underline transition-all duration-300 hover:border-[var(--border-hover)] hover:text-[var(--main-accent)]"
                >
                  Next →
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-color)] px-4 py-2 text-[0.85rem] font-semibold text-[var(--text-dim)] opacity-50">
                  Next →
                </span>
              )}
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
