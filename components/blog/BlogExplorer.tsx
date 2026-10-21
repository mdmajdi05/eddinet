"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { balancedGrid } from "@/lib/process-grid";

// ============================================================================
//  FILE: components/blog/BlogExplorer.tsx
//
//  /blog index ka interactive part — search + sort + category filter.
//
//  Page (app/blog/page.tsx) server component hi rehta hai (metadata, JSON-LD,
//  sitemap). Sirf grid + controls client hain.
//
//  Post ka full content (sections/paragraphs) client ko kabhi nahi jata —
//  sirf card ke liye zarooti fields bhejte hain, isliye RSC payload chhota
//  rehta hai.
// ============================================================================

export interface BlogCardPost {
  slug: string;
  title: string;
  category: string;
  categoryColor: string;
  label: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

type SortKey = "newest" | "oldest" | "az" | "za";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "newest", label: "Newest first" },
  { key: "oldest", label: "Oldest first" },
  { key: "az", label: "Title (A–Z)" },
  { key: "za", label: "Title (Z–A)" },
];

/** "October 21, 2026" → timestamp. */
function postTime(date: string): number {
  const t = new Date(date).getTime();
  return Number.isNaN(t) ? 0 : t;
}

export default function BlogExplorer({ posts }: { posts: BlogCardPost[] }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("newest");
  const [category, setCategory] = useState("all");

  // Category chips — sirf wahi categories jo posts me maujood hain.
  const categories = useMemo(() => {
    const seen: string[] = [];
    for (const p of posts) if (!seen.includes(p.category)) seen.push(p.category);
    return seen;
  }, [posts]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = posts.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (!q) return true;
      // Title + excerpt + category + label — sab search karo.
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.label.toLowerCase().includes(q)
      );
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "oldest":
          return postTime(a.date) - postTime(b.date);
        case "az":
          return a.title.localeCompare(b.title);
        case "za":
          return b.title.localeCompare(a.title);
        case "newest":
        default:
          return postTime(b.date) - postTime(a.date);
      }
    });

    return list;
  }, [posts, query, sort, category]);

  const filtered = query.trim() !== "" || category !== "all";

  return (
    <>
      {/* =========================================================
          CONTROLS — search + sort + category chips
          ========================================================= */}
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5 mb-10">
        <div className="relative rounded-2xl border border-[var(--border-color)] bg-[var(--chip-bg)] p-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            {/* SEARCH */}
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-dim)] text-[0.95rem]">
                🔍
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles by title, topic or category…"
                aria-label="Search blog articles"
                className="w-full py-3 pl-11 pr-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] text-[0.95rem] outline-none transition-colors duration-300 placeholder:text-[var(--text-dim)] focus:border-[rgba(var(--accent-rgb),0.5)]"
              />
            </div>

            {/* SORT */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="blog-sort"
                className="text-[0.75rem] font-semibold uppercase tracking-wider text-[var(--text-dim)] shrink-0"
              >
                Sort
              </label>
              <select
                id="blog-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="py-3 pl-4 pr-9 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] text-[0.9rem] font-medium outline-none cursor-pointer transition-colors duration-300 focus:border-[rgba(var(--accent-rgb),0.5)]"
              >
                {SORTS.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* CATEGORY CHIPS */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            {[{ key: "all", label: "All articles" }, ...categories.map((c) => ({ key: c, label: c }))].map(
              (c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setCategory(c.key)}
                  aria-pressed={category === c.key}
                  className={`
                    py-2 px-4 rounded-xl
                    text-[0.8rem] font-semibold
                    cursor-pointer
                    border
                    transition-all
                    duration-300
                    ${
                      category === c.key
                        ? "text-[var(--on-primary)] border-transparent shadow-[0_6px_20px_rgba(var(--accent-rgb),0.25)]"
                        : "bg-transparent border-transparent text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text-main)]"
                    }
                  `}
                  style={category === c.key ? { background: "var(--primary-gradient)" } : undefined}
                >
                  {c.label}
                </button>
              ),
            )}

            <span className="ml-auto flex items-center gap-3 text-[0.78rem] text-[var(--text-dim)]">
              {visible.length} of {posts.length} article{posts.length === 1 ? "" : "s"}
              {filtered && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCategory("all");
                  }}
                  className="py-1.5 px-3 rounded-full cursor-pointer border border-[var(--border-color)] bg-transparent text-[0.75rem] font-semibold text-[var(--text-muted)] transition-all duration-300 hover:text-[var(--main-accent)] hover:border-[rgba(var(--accent-rgb),0.4)]"
                >
                  Clear filters
                </button>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          GRID
          ========================================================= */}
      {visible.length > 0 ? (
        <div
          className={balancedGrid(visible.length, {
            base: 3,
            gapClass: "cgrid-gap-6",
            stages: [
              { bp: 1024, maxCols: 2 },
              { bp: 768, maxCols: 1 },
            ],
            extra: "w-full max-w-[var(--container-max)] mx-auto px-5",
          })}
        >
          {visible.map((b) => (
            <Link
              key={b.slug}
              href={`/blog/${b.slug}`}
              className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-[6px] hover:shadow-[0_15px_35px_rgba(var(--accent-rgb),0.1)] no-underline flex flex-col"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 py-1 px-3 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm rounded-2xl text-[0.75rem] font-semibold text-[var(--main-accent)]">
                  {b.label}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`text-[0.7rem] uppercase tracking-[1.5px] font-bold ${b.categoryColor}`}
                  >
                    {b.category}
                  </div>
                  <div className="text-[0.72rem] text-[var(--text-dim)]">{b.readTime}</div>
                </div>
                <h2 className="text-[1.15rem] font-bold mb-2.5 leading-[1.3] text-[var(--text-main)]">
                  {b.title}
                </h2>
                <p className="text-[var(--text-muted)] text-[0.85rem] leading-relaxed mb-4 line-clamp-3">
                  {b.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[var(--main-accent)] font-bold text-[0.85rem]">
                    Read Article →
                  </span>
                  <span className="text-[0.75rem] text-[var(--text-dim)]">{b.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] px-6 py-14 text-center">
            <div className="text-[2.5rem] mb-3">🔍</div>
            <h2 className="text-[1.25rem] font-extrabold text-[var(--text-main)] mb-2">
              No articles found
            </h2>
            <p className="text-[var(--text-muted)] text-[0.95rem] mb-6 max-w-[460px] mx-auto">
              {query.trim()
                ? `“${query.trim()}” se koi article match nahi hua. Dusre keyword try karo ya filter hata do.`
                : "Is category me abhi koi article nahi hai. Dusri category dekho."}
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full font-bold text-[0.9rem] cursor-pointer border-none no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
              style={{ background: "var(--primary-gradient)" }}
            >
              Clear filters
            </button>
          </div>
        </div>
      )}

      {/* Server-rendered post cards — Next.js client components ko bhi SSR
          karta hai, to crawler ko saare posts initial HTML me dikhte hain.
          Sirf filter/sort ke baad list badalta hai. */}
      {filtered && (
        <span className="sr-only" aria-live="polite">
          Showing {visible.length} articles
        </span>
      )}
    </>
  );
}
