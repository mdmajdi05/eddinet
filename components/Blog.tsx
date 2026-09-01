import Image from "next/image";
import Link from "next/link";
import { insights } from "@/data/insights";

export default function Blog() {
  return (
    <section className="py-[100px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            Insights
          </div>
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            Practical Thinking on <span className="gradient-text">Marketing &amp; Technology</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[1.1rem] max-w-[680px] mx-auto mb-10">
            We publish on SEO and AI search, paid media, social, content, web development, eCommerce, AI, cloud, DevOps and digital growth — written to answer real questions, not to fill pages.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {insights.slice(0, 3).map((b, i) => (
            <div
              key={i}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-[6px] hover:shadow-[0_15px_35px_rgba(var(--accent-rgb),0.1)]"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  unoptimized
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 py-1 px-3 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm rounded-2xl text-[0.75rem] font-semibold text-[var(--main-accent)]">
                  {b.label}
                </div>
              </div>
              <div className="p-6">
                <div className={`text-[0.7rem] uppercase tracking-[1.5px] font-bold mb-2 ${b.categoryColor} transition-all duration-300`}>
                  {b.category}
                </div>
                <h3 className="text-[1.15rem] font-bold mb-2.5 leading-[1.3] text-[var(--text-main)]">{b.title}</h3>
                <p className="text-[var(--text-muted)] text-[0.85rem] leading-relaxed mb-4">{b.excerpt}</p>
                <Link href={`/blog/${b.slug}`} className="text-[var(--main-accent)] font-bold text-[0.85rem] transition-all duration-300 hover:opacity-80">
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
