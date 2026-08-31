import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { industries, getIndustryBySlug } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustryBySlug(slug);
  if (!ind) return {};
  return {
    title: `${ind.name} Digital Growth & Marketing Services in Delhi NCR`,
    description: ind.blurb,
    alternates: { canonical: `https://eddinet.com/industries/${ind.slug}` },
    openGraph: {
      title: `${ind.name} Digital Growth | Eddinet`,
      description: ind.blurb,
      url: `https://eddinet.com/industries/${ind.slug}`,
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = getIndustryBySlug(slug);
  if (!ind) notFound();

  const relatedCases = caseStudies.filter((c) => c.industrySlug === ind.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${ind.name} digital growth and marketing`,
    description: ind.blurb,
    provider: { "@type": "Organization", name: "Eddinet", url: "https://eddinet.com/" },
    areaServed: { "@type": "AdministrativeArea", name: "Delhi NCR" },
  };

  return (
    <>
      <section className="pt-[150px] pb-[60px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <nav className="mb-8 text-[0.85rem] text-[var(--text-dim)] flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Industries</Link>
            <span>/</span>
            <span className="text-[var(--main-accent)]">{ind.name}</span>
          </nav>

          <div className="max-w-[820px]">
            <div className="text-[3rem] mb-5 inline-block">{ind.icon}</div>
            <h1 className="text-[3rem] font-extrabold leading-[1.12] mb-4 text-[var(--text-main)] max-[768px]:text-[2.2rem]">
              {ind.name} Digital Growth <span className="gradient-text">in Delhi NCR</span>
            </h1>
            <p className="text-[var(--text-muted)] text-[1.12rem] leading-relaxed mb-8">{ind.blurb}</p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
                style={{ background: "var(--primary-gradient)" }}
              >
                Talk to Our {ind.short} Team
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[80px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              What We Typically <span className="gradient-text">Build for {ind.short}</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5 max-[768px]:grid-cols-1">
            {ind.focuses.map((f, i) => (
              <div key={i} className="flex items-center gap-3 py-4 px-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] transition-all duration-300 hover:border-[rgba(var(--accent-rgb),0.3)]">
                <div className="w-8 h-8 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center shrink-0">
                  <span className="text-[var(--main-accent)] font-bold text-[0.75rem]">✓</span>
                </div>
                <span className="text-[0.95rem] text-[var(--text-main)] font-medium">{f}</span>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-[var(--text-muted)] text-[1.02rem] leading-[1.85] max-w-[820px] mx-auto text-center">
              No two businesses in {ind.name.toLowerCase()} buy, sell or convert the same way. That&apos;s why every Eddinet engagement starts with the specifics of your business model, audience, competitive intensity and buying journey - and only then selects the services, channels and technology that fit. The result is a growth system built around how your customers actually decide, not a template applied across accounts.
            </p>
          </div>

          {relatedCases.length > 0 && (
            <div className="mt-16">
              <div className="text-center mb-10">
                <h2 className="text-[2.2rem] font-extrabold leading-[1.2] mb-2 text-[var(--text-main)] max-[768px]:text-[1.7rem]">
                  Related <span className="gradient-text">Case Study</span>
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
                {relatedCases.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/case-studies/${c.slug}`}
                    className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] no-underline flex flex-col"
                  >
                    <div className="h-44 relative overflow-hidden">
                      <Image src={c.image} alt={`${c.client} case study`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,25,0.9)] to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <div className="text-[0.75rem] uppercase tracking-wider text-[var(--main-accent)] font-bold mb-1">{c.tag}</div>
                        <div className="text-[1.1rem] font-bold text-white">{c.client}</div>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-[var(--text-muted)] text-[0.85rem] leading-relaxed mb-4 line-clamp-3">{c.summary}</p>
                      <span className="mt-auto inline-flex items-center gap-2 text-[var(--main-accent)] font-bold text-[0.85rem]">
                        Read Case Study →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="pb-[100px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="border border-[rgba(var(--accent-rgb),0.3)] rounded-3xl py-[60px] px-10 text-center relative overflow-hidden" style={{ background: "var(--cta-bg)" }}>
            <h2 className="text-[2.6rem] font-extrabold mb-4 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              Let&apos;s Design Your {ind.short} Growth Strategy
            </h2>
            <p className="text-[1.12rem] text-[var(--text-muted)] max-w-[600px] mx-auto mb-8">
              Book a free 30-minute consultation to understand what&apos;s constraining your growth and how we&apos;d approach it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
              style={{ background: "var(--primary-gradient)" }}
            >
              Talk to a Digital Growth Expert
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}