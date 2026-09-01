import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies - Real Work, Real Outcomes",
  description:
    "Eddinet case studies across SEO, AI SEO, paid media, local search and web - showing the challenge, strategy, execution and measurable outcome behind each engagement.",
  alternates: { canonical: "https://eddinet.com/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-[170px] pb-[70px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
            Case Studies
          </div>
          <h1 className="text-[3rem] font-extrabold leading-[1.15] mb-4 text-[var(--text-main)] max-[768px]:text-[2.2rem]">
            Real Work. <span className="gradient-text">Real Outcomes.</span>
          </h1>
          <p className="text-[var(--text-muted)] text-[1.15rem] max-w-[680px] mx-auto">
            How strategy performs against a real budget, a real market and a real competitor set - documented challenge to outcome.
          </p>
        </div>
      </section>

      <section className="pb-[100px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          {caseStudies.length === 0 ? (
            <div className="max-w-[640px] mx-auto text-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-12">
              <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center text-[1.6rem] mb-6" style={{ background: "var(--primary-gradient)" }}>
                🛡️
              </div>
              <h2 className="text-[1.6rem] font-extrabold text-[var(--text-main)] mb-3">Verified Results Only</h2>
              <p className="text-[var(--text-muted)] text-[1rem] leading-relaxed">
                We publish only genuine, permission-based case studies with verifiable outcomes. We never
                invent statistics, client names or results. Case studies for our recent work are being
                prepared with client approval and will appear here as they are verified.
              </p>
              <div className="flex justify-center gap-4 flex-wrap mt-7">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] hover:-translate-y-[3px]"
                  style={{ background: "var(--primary-gradient)" }}
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
              {caseStudies.map((c, i) => (
                <Link
                  key={i}
                  href={`/case-studies/${c.slug}`}
                  className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] no-underline flex flex-col"
                >
                  <div className="h-52 relative overflow-hidden">
                    <Image
                      src={c.image}
                      alt={`${c.client} case study`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,25,0.9)] to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="text-[0.75rem] uppercase tracking-wider text-[var(--main-accent)] font-bold mb-1">{c.tag}</div>
                      <div className="text-[1.15rem] font-bold text-white">{c.client}</div>
                      <div className="text-[0.8rem] text-white/60">{c.industry}</div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-[var(--text-muted)] text-[0.88rem] leading-relaxed mb-4 line-clamp-3">{c.summary}</p>
                    <div className="mt-auto pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                      <span className="text-[1.6rem] font-extrabold gradient-text">{c.metric}</span>
                      <span className="inline-flex items-center gap-2 text-[var(--main-accent)] font-bold text-[0.85rem]">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}