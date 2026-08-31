import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-[100px]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            Portfolio
          </div>
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            Our Recent <span className="gradient-text">Digital Growth Work</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[1.1rem] max-w-[650px] mx-auto mb-10">
            A snapshot of what we build, run and improve for clients across SEO, paid media, content, web and technology.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {caseStudies.map((r, i) => (
            <Link
              key={i}
              href={`/case-studies/${r.slug}`}
              className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.15)] no-underline flex flex-col"
            >
              <div
                className="absolute inset-0 rounded-[var(--radius-lg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "var(--card-edge-gradient)",
                  padding: "1px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              <div className="relative">
                <div className="h-[210px] relative overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.client}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,25,1)] via-[rgba(11,15,25,0.35)] to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <div className="text-[0.75rem] uppercase tracking-wider text-[var(--main-accent)] font-bold mb-1">
                      {r.tag}
                    </div>
                    <div className="text-[1.25rem] font-bold text-white leading-tight">{r.client}</div>
                  </div>
                </div>

                <div className="p-5 pt-4">
                  <div className="flex items-center gap-2 flex-wrap mb-3">
                    {r.services.slice(0, 2).map((sv, j) => (
                      <span
                        key={j}
                        className="py-1 px-2.5 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] text-[0.7rem] font-semibold text-[var(--main-accent)]"
                      >
                        {sv}
                      </span>
                    ))}
                  </div>
                  <p className="text-[var(--text-muted)] text-[0.85rem] leading-relaxed mb-4 line-clamp-3">{r.summary}</p>

                  <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[1.4rem] font-extrabold gradient-text">{r.metric}</div>
                      <div className="text-[0.75rem] text-[var(--text-muted)]">{r.metricLabel}</div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[var(--main-accent)] font-bold text-[0.85rem] transition-all duration-300 group-hover:gap-3 shrink-0">
                      View Project <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_-5px_rgba(var(--accent-rgb),0.6)]"
            style={{ background: "var(--primary-gradient)" }}
          >
            View Full Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}