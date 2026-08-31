import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { site } from "@/data/site";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  if (!c) return {};
  return {
    title: `${c.client} Case Study - ${c.tag}`,
    description: c.summary,
    alternates: { canonical: `https://eddinet.com/case-studies/${c.slug}` },
    openGraph: {
      title: `${c.client} Case Study | Eddinet`,
      description: c.summary,
      url: `https://eddinet.com/case-studies/${c.slug}`,
    },
  };
}

const blocks: { key: string; label: string }[] = [
  { key: "challenge", label: "Challenge" },
  { key: "strategy", label: "Strategy" },
  { key: "execution", label: "Execution" },
  { key: "outcome", label: "Outcome" },
];

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  if (!c) notFound();

  const content: Record<string, string> = {
    challenge: c.challenge,
    strategy: c.strategy,
    execution: c.execution,
    outcome: c.outcome,
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${c.client} Case Study`,
    description: c.summary,
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `https://eddinet.com/case-studies/${c.slug}`,
  };

  return (
    <>
      <section className="pt-[150px] pb-[60px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <nav className="mb-8 text-[0.85rem] text-[var(--text-dim)] flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Case Studies</Link>
            <span>/</span>
            <span className="text-[var(--main-accent)]">{c.client}</span>
          </nav>

          <div className="grid grid-cols-[1.1fr_0.9fr] gap-[50px] items-center max-[1024px]:grid-cols-1">
            <div>
              <div className="text-[0.78rem] uppercase tracking-wider text-[var(--main-accent)] font-bold mb-3">{c.tag} · {c.industry}</div>
              <h1 className="text-[3rem] font-extrabold leading-[1.12] mb-4 text-[var(--text-main)] max-[768px]:text-[2.2rem]">
                {c.client}
              </h1>
              <p className="text-[var(--text-muted)] text-[1.12rem] leading-relaxed mb-8 max-w-[620px]">{c.summary}</p>
              <div className="flex items-center gap-8 pt-6 border-t border-[var(--border-color)]">
                <div>
                  <div className="text-[2.2rem] font-extrabold gradient-text">{c.metric}</div>
                  <div className="text-[0.85rem] text-[var(--text-dim)]">{c.metricLabel}</div>
                </div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  {c.services.map((s) => (
                    <span key={s} className="py-1.5 px-3.5 rounded-full bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[0.78rem] font-semibold text-[var(--main-accent)]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[var(--border-color)]">
              <Image
                src={c.image}
                alt={`${c.client} case study`}
                width={900}
                height={560}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[90px]">
        <div className="w-full max-w-[820px] mx-auto px-5 flex flex-col gap-10">
          {blocks.map((b) => (
            <div key={b.key}>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-lg bg-[rgba(var(--accent-rgb),0.12)] text-[var(--main-accent)] flex items-center justify-center font-extrabold text-[0.85rem]">
                  {String(blocks.indexOf(b) + 1).padStart(2, "0")}
                </span>
                <h2 className="text-[1.6rem] font-extrabold text-[var(--text-main)]">{b.label}</h2>
              </div>
              <p className="text-[var(--text-muted)] text-[1rem] leading-[1.85]">{content[b.key]}</p>
            </div>
          ))}

          <div className="mt-4 rounded-2xl p-8 border border-[rgba(var(--accent-rgb),0.3)] text-center" style={{ background: "var(--cta-bg)" }}>
            <h2 className="text-[1.8rem] font-extrabold mb-3 text-[var(--text-main)]">Want Outcomes Like This?</h2>
            <p className="text-[var(--text-muted)] text-[0.98rem] mb-6">
              Talk to the Eddinet team about how we&apos;d approach your business.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] hover:-translate-y-[3px]"
                style={{ background: "var(--primary-gradient)" }}
              >
                Talk to a Digital Growth Expert
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}