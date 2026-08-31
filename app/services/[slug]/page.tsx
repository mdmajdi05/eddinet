import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  servicePages,
  getServiceBySlug,
  faqsByService,
  relatedServices,
  type Service,
} from "@/data/services";
import { processSteps } from "@/data/site";

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) return {};
  return {
    title: `${s.title} Services in Delhi NCR`,
    description: s.desc,
    alternates: { canonical: `https://eddinet.com/services/${s.slug}` },
    openGraph: {
      title: `${s.title} Services in Delhi NCR | Eddinet`,
      description: s.desc,
      url: `https://eddinet.com/services/${s.slug}`,
    },
  };
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) notFound();

  const faqs = faqsByService[s.slug] ?? [];
  const related = (relatedServices[s.slug] ?? [])
    .map(getServiceBySlug)
    .filter((x): x is Service => Boolean(x));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eddinet.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://eddinet.com/services" },
      { "@type": "ListItem", position: 3, name: s.title, item: `https://eddinet.com/services/${s.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.title,
    name: `${s.title} Services`,
    description: s.desc,
    url: `https://eddinet.com/services/${s.slug}`,
    provider: {
      "@type": "Organization",
      name: "Eddinet",
      url: "https://eddinet.com/",
      logo: "https://eddinet.com/eddinet-logo.png",
    },
    areaServed: { "@type": "AdministrativeArea", name: "Delhi NCR" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.title,
      itemListElement: s.allItems.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };

  return (
    <>
      <section className="pt-[150px] pb-[80px] overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-accent)]/5 via-transparent to-transparent" />
          <div className="absolute top-[-30%] right-[-15%] w-[500px] h-[500px] rounded-full bg-[var(--main-accent)]/10 blur-3xl" />
        </div>

        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8 text-[0.85rem] text-[var(--text-dim)] flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Services</Link>
            <span>/</span>
            <span className="text-[var(--main-accent)]">{s.title}</span>
          </nav>

          <div className="grid grid-cols-[1.1fr_0.9fr] gap-[50px] items-center max-[1024px]:grid-cols-1">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--main-accent)] to-[rgba(var(--accent-rgb),0.6)] flex items-center justify-center text-[2rem] mb-6 shadow-[0_8px_25px_rgba(var(--accent-rgb),0.35)]">
                {s.icon}
              </div>
              <h1 className="text-[3rem] font-extrabold leading-[1.1] mb-5 text-[var(--text-main)] max-[768px]:text-[2.2rem]">
                {s.title} <span className="gradient-text">Services in Delhi NCR</span>
              </h1>
              <p className="text-[var(--text-muted)] text-[1.12rem] leading-relaxed mb-8 max-w-[600px]">
                {s.desc}
              </p>
              <div className="flex gap-4 flex-wrap mb-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
                  style={{ background: "var(--primary-gradient)" }}
                >
                  Talk to a Specialist
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]"
                >
                  View Case Studies
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-6 border-t border-[var(--border-color)] max-[768px]:flex-wrap">
                <div>
                  <strong className="block text-xl text-[var(--text-main)]">{s.allItems.length}+</strong>
                  <span className="text-sm text-[var(--text-dim)]">Sub-services available</span>
                </div>
                <div>
                  <strong className="block text-xl text-[var(--text-main)]">Delhi NCR</strong>
                  <span className="text-sm text-[var(--text-dim)]">Plus India &amp; global clients</span>
                </div>
              </div>
            </div>

            <div className="bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-2xl p-8 relative overflow-hidden shadow-[var(--shadow-lg)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--main-accent)]/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 text-sm bg-[rgba(16,185,129,0.15)] text-[var(--green-accent)] py-1 px-3 rounded-2xl font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--green-accent)" }} />
                  How it fits your growth system
                </span>
                <p className="text-[var(--text-muted)] text-[0.98rem] leading-relaxed mb-6">
                  {s.title} is one part of a connected system. It performs best when planned alongside the marketing, technology and operations it needs to support - which is exactly how Eddinet approaches every engagement.
                </p>
                <div className="flex flex-col gap-3">
                  {processSteps.slice(0, 4).map((p, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[var(--inset-bg)] border border-[var(--border-color)] rounded-xl px-4 py-3">
                      <span className="w-8 h-8 rounded-lg bg-[rgba(var(--accent-rgb),0.15)] text-[var(--main-accent)] flex items-center justify-center text-[0.8rem] font-extrabold shrink-0">
                        {p.num}
                      </span>
                      <span className="text-[var(--text-main)] text-[0.9rem] font-semibold">{p.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-[80px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              What&apos;s Included in <span className="gradient-text">{s.title}</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              Every engagement is scoped around your business outcome. These are the capabilities we bring to {s.title.toLowerCase()} projects.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 max-[600px]:grid-cols-1">
            {s.allItems.map((item, j) => (
              <div
                key={j}
                id={slugify(item)}
                className="flex items-center gap-3 py-3 px-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] transition-all duration-300 hover:border-[rgba(var(--accent-rgb),0.3)] hover:bg-[var(--bg-card-hover)] scroll-mt-28"
              >
                <div className="w-8 h-8 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center shrink-0">
                  <span className="text-[var(--main-accent)] font-bold text-[0.75rem]">✓</span>
                </div>
                <span className="text-[0.92rem] text-[var(--text-main)] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-[80px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              How We Run <span className="gradient-text">{s.title}</span> Projects
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              An outcome-led process, from first conversation to continuous improvement.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[30px] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
            {processSteps.map((step, i) => (
              <div key={i} className="relative p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1 overflow-hidden">
                <div className="absolute -top-3 -right-2 text-[4.5rem] font-extrabold leading-none opacity-[0.06] select-none">{step.num}</div>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center text-[1.05rem] font-extrabold mb-4 text-[var(--on-primary)] shadow-[0_8px_25px_rgba(var(--accent-rgb),0.25)]" style={{ background: "var(--primary-gradient)" }}>
                  {step.num}
                </div>
                <h3 className="text-[1.15rem] font-bold text-[var(--text-main)] mb-2.5">{step.title}</h3>
                <p className="text-[var(--text-muted)] text-[0.92rem] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-[80px]">
          <div className="w-full max-w-[820px] mx-auto px-5">
            <div className="text-center mb-10">
              <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
                {s.title} - <span className="gradient-text">FAQs</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map((f, i) => (
                <details key={i} className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-md)] overflow-hidden" open={i === 0}>
                  <summary className="py-[22px] px-7 font-bold text-[1.02rem] cursor-pointer select-none list-none flex items-center justify-between gap-4 text-[var(--text-main)] [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-[1.3rem] text-[var(--main-accent)] transition-transform duration-300 group-open:rotate-45 shrink-0">+</span>
                  </summary>
                  <div className="px-7 pb-[22px] text-[var(--text-muted)] text-[0.95rem] leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-[80px] bg-[var(--strip-bg)] border-t border-[var(--border-color)]">
          <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
                Related <span className="gradient-text">Services</span>
              </h2>
              <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
                These capabilities work best alongside {s.title.toLowerCase()} as part of one system.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] no-underline"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[1.6rem]">{r.icon}</span>
                    <h3 className="text-[1.1rem] font-bold text-[var(--text-main)]">{r.title}</h3>
                  </div>
                  <p className="text-[var(--text-muted)] text-[0.85rem] leading-relaxed mb-4 line-clamp-3">{r.desc}</p>
                  <span className="text-[var(--main-accent)] font-bold text-[0.85rem]">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-[80px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="border border-[rgba(var(--accent-rgb),0.3)] rounded-3xl py-[60px] px-10 text-center relative overflow-hidden" style={{ background: "var(--cta-bg)" }}>
            <h2 className="text-[2.6rem] font-extrabold mb-4 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              Ready to Build Your {s.title} Strategy?
            </h2>
            <p className="text-[1.12rem] text-[var(--text-muted)] max-w-[600px] mx-auto mb-8">
              Book a free 30-minute consultation. We&apos;ll identify how {s.title.toLowerCase()} fits into your growth system - with no commitment required.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
                style={{ background: "var(--primary-gradient)" }}
              >
                Talk to a Digital Growth Expert
              </Link>
              <a href="https://wa.me/917042840441" target="_blank" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] hover:-translate-y-[3px]">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}