import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve - Strategy Built Around Your Business",
  description:
    "Eddinet builds digital growth strategies by industry context - real estate, healthcare, eCommerce, edtech, hospitality, B2B, SaaS, manufacturing, fintech and more.",
  alternates: { canonical: "https://eddinet.com/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-[170px] pb-[70px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
            Industries
          </div>
          <h1 className="text-[3rem] font-extrabold leading-[1.15] mb-4 text-[var(--text-main)] max-[768px]:text-[2.2rem]">
            Strategy Shaped by the <span className="gradient-text">Business</span>, Not a Template
          </h1>
          <p className="text-[var(--text-muted)] text-[1.15rem] max-w-[680px] mx-auto">
            A real estate developer, a healthcare provider and a D2C brand don&apos;t compete for attention the same way. These are the industries where Eddinet builds by context rather than applying one framework everywhere.
          </p>
        </div>
      </section>

      <section className="pb-[100px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1 no-underline"
              >
                <span className="text-[2rem] mb-4 block group-hover:scale-110 transition-transform duration-300">{ind.icon}</span>
                <h2 className="text-[1.2rem] font-bold text-[var(--text-main)] mb-2">{ind.name}</h2>
                <p className="text-[var(--text-muted)] text-[0.88rem] leading-relaxed mb-4 line-clamp-3">{ind.blurb}</p>
                <span className="text-[var(--main-accent)] font-bold text-[0.85rem]">Explore Strategy →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}