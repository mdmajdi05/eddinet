import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Blog - Practical Thinking on Marketing and Technology",
  description:
    "Eddinet blog on SEO, AI search, Google and Meta ads, social media, content, web development, eCommerce, AI, cloud and digital growth.",
  alternates: { canonical: "https://eddinet.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-[170px] pb-[70px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
            Blog
          </div>
          <h1 className="text-[3rem] font-extrabold leading-[1.15] mb-4 text-[var(--text-main)] max-[768px]:text-[2.2rem]">
            Practical Thinking on <span className="gradient-text">Marketing and Technology</span>
          </h1>
          <p className="text-[var(--text-muted)] text-[1.15rem] max-w-[680px] mx-auto">
            What we&apos;re seeing and testing across SEO, paid media, content, web, eCommerce and technology - written to be useful, whether or not you become a client.
          </p>
        </div>
      </section>

      <section className="pb-[100px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {insights.map((b) => (
            <Link
              key={b.slug}
              href={`/blog/${b.slug}`}
              className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-[6px] hover:shadow-[0_15px_35px_rgba(var(--accent-rgb),0.1)] no-underline flex flex-col"
            >
              <div className="h-48 relative overflow-hidden">
                <Image src={b.image} alt={b.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 py-1 px-3 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm rounded-2xl text-[0.75rem] font-semibold text-[var(--main-accent)]">
                  {b.label}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div className={`text-[0.7rem] uppercase tracking-[1.5px] font-bold ${b.categoryColor}`}>{b.category}</div>
                  <div className="text-[0.72rem] text-[var(--text-dim)]">{b.readTime}</div>
                </div>
                <h2 className="text-[1.15rem] font-bold mb-2.5 leading-[1.3] text-[var(--text-main)]">{b.title}</h2>
                <p className="text-[var(--text-muted)] text-[0.85rem] leading-relaxed mb-4 line-clamp-3">{b.excerpt}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[var(--main-accent)] font-bold text-[0.85rem]">Read Article →</span>
                  <span className="text-[0.75rem] text-[var(--text-dim)]">{b.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}