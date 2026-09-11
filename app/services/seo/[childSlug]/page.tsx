import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  seoChildServices,
  getSeoChildBySlug,
} from "@/data/seo-child-services";
import ContactForm from "@/components/ContactForm";

export function generateStaticParams() {
  return seoChildServices.map((c) => ({ childSlug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ childSlug: string }>;
}): Promise<Metadata> {
  const { childSlug } = await params;
  const child = getSeoChildBySlug(childSlug);
  if (!child) return {};
  return {
    title: child.metaTitle,
    description: child.metaDescription,
    alternates: {
      canonical: `https://eddinet.com/services/seo/${child.slug}`,
    },
    openGraph: {
      title: child.metaTitle,
      description: child.metaDescription,
      url: `https://eddinet.com/services/seo/${child.slug}`,
    },
  };
}

function HighlightTitle({ text, keyword }: { text: string; keyword: string }) {
  if (!keyword) return <>{text}</>;
  const esc = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${esc})`, "ig"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === keyword.toLowerCase() ? (
          <mark key={i} className="keyword-mark">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default async function SeoChildPage({
  params,
}: {
  params: Promise<{ childSlug: string }>;
}) {
  const { childSlug } = await params;
  const child = getSeoChildBySlug(childSlug);
  if (!child) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eddinet.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://eddinet.com/services" },
      { "@type": "ListItem", position: 3, name: "SEO & AI SEO", item: "https://eddinet.com/services/seo" },
      { "@type": "ListItem", position: 4, name: child.title, item: `https://eddinet.com/services/seo/${child.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: child.title,
    name: `${child.title} Services in Delhi NCR`,
    description: child.detailedDescription,
    url: `https://eddinet.com/services/seo/${child.slug}`,
    provider: {
      "@type": "Organization",
      name: "Eddinet",
      url: "https://eddinet.com/",
      logo: "https://eddinet.com/eddinet-logo.png",
    },
    areaServed: { "@type": "AdministrativeArea", name: "Delhi NCR" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: child.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const introParas = child.detailedDescription.split("\n\n");

  return (
    <>
      {/* =========================================================
          1. HERO — split with framed image + floating metric chips
      ========================================================= */}
      <section className="relative pt-[150px] pb-[90px] overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-accent)]/5 via-transparent to-transparent" />
          <div className="absolute top-[-25%] right-[-15%] w-[560px] h-[560px] rounded-full bg-[var(--main-accent)]/10 blur-3xl animate-drift" />
          <div className="absolute bottom-[-35%] left-[-10%] w-[480px] h-[480px] rounded-full bg-purple-500/10 blur-3xl animate-drift-slow" />
          <div className="absolute top-[30%] left-[30%] w-[260px] h-[260px] rounded-full bg-[var(--main-accent)]/5 blur-3xl animate-pulse-slow" />
        </div>

        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-10 text-[0.85rem] text-[var(--text-dim)] flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Home</Link>
            <span className="text-[var(--text-dim)]/60">/</span>
            <Link href="/services" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Services</Link>
            <span className="text-[var(--text-dim)]/60">/</span>
            <Link href="/services/seo" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">SEO &amp; AI SEO</Link>
            <span className="text-[var(--text-dim)]/60">/</span>
            <span className="text-[var(--main-accent)]">{child.title}</span>
          </nav>

          <div className="grid grid-cols-[1.2fr_0.8fr] gap-12 items-center max-[1024px]:grid-cols-1">
            {/* Left copy */}
            <div>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-5">
                ⚡ Eddinet {child.title} Team
              </div>
              <h1 className="text-[3rem] font-extrabold leading-[1.08] mb-5 text-[var(--text-main)] tracking-[-1px] max-[768px]:text-[2.2rem]">
                {child.heroHeading.replace(" in Delhi NCR", "")}{" "}
                <span className="gradient-text">in Delhi NCR</span>
              </h1>
              <p className="text-[var(--text-muted)] text-[1.08rem] leading-relaxed mb-9 max-w-[600px]">
                {child.heroSubheading}
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_-5px_rgba(var(--accent-rgb),0.6)]" style={{ background: "var(--primary-gradient)" }}>
                  🚀 Talk to a Specialist
                </Link>
                <Link href="/case-studies" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]">
                  View Case Studies
                </Link>
              </div>

              {/* Trust strip */}
              <div className="flex items-center gap-7 pt-6 border-t border-[var(--border-color)] max-[768px]:flex-wrap max-[768px]:gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(var(--accent-rgb),0.12)] text-[var(--main-accent)] flex items-center justify-center text-[1.1rem] shrink-0">🗺️</div>
                  <div>
                    <strong className="block text-[0.95rem] text-[var(--text-main)]">Delhi NCR + Global</strong>
                    <span className="text-[0.75rem] text-[var(--text-dim)]">Clients in 12+ countries</span>
                  </div>
                </div>
                <div className="w-px h-10 bg-[var(--border-color)]" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(var(--accent-rgb),0.12)] text-[var(--main-accent)] flex items-center justify-center text-[1.1rem] shrink-0">📊</div>
                  <div>
                    <strong className="block text-[0.95rem] text-[var(--text-main)]">5+ Years · 1,000+ Projects</strong>
                    <span className="text-[0.75rem] text-[var(--text-dim)]">Results-driven, data-led</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--panel-bg)] shadow-[var(--shadow-xl)]">
                {/* Image */}
                <div className="relative h-[200px]">
                  <Image
                    src={child.image}
                    alt={child.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Tag */}
                  <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-[rgba(0,0,0,0.5)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] text-[0.7rem] font-bold text-white/90">
                    <span className="w-2 h-2 rounded-full bg-[var(--green-accent)] animate-pulse-dot" />
                    {child.title} Strategy · Eddinet
                  </div>
                </div>

                {/* Form body */}
                <div className="relative px-5 pb-5">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--main-accent)]/15 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <ContactForm compact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. OVERVIEW — editorial split with keyword spotlight panel
      ========================================================= */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)] relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-8%] w-[360px] h-[360px] rounded-full bg-[var(--main-accent)]/5 blur-3xl pointer-events-none" />
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              Over the Hood
            </div>
            <h2 className="text-[2.3rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.8rem]">
              What is <span className="gradient-text">{child.title}</span> and Why Does It Matter?
            </h2>
            <p className="text-[var(--text-muted)] text-[1.02rem] max-w-[640px] mx-auto">
              A plain-English breakdown of what {child.title.toLowerCase()} actually involves — and the signal it sends to Google and to your buyers.
            </p>
          </div>

          {/* Lead card — In Plain Words */}
          <div className="relative rounded-2xl overflow-hidden bg-[var(--panel-bg)] border border-[var(--border-color)] shadow-[var(--shadow-lg)] mb-5">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--main-accent)] via-transparent to-purple-500 opacity-50" />
            <div className="absolute top-[-40%] right-[-5%] w-[260px] h-[260px] rounded-full bg-[var(--main-accent)]/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[rgba(var(--accent-rgb),0.08)] border border-[rgba(var(--accent-rgb),0.2)] text-[var(--main-accent)] text-[0.78rem] font-bold uppercase tracking-wider">
                  📘 In Plain Words
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-accent)] animate-pulse-dot" />
              </div>
              <p className="text-[var(--text-muted)] text-[1.06rem] leading-[1.9]">
                <HighlightTitle text={introParas[0]} keyword={child.title} />
              </p>
            </div>
          </div>

            {/* Quick-read explainer cards */}
          <div className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
            {introParas.slice(1).map((para, i) => {
              const labels = [
                { tag: "Deeper Dive", icon: "🔍" },
                { tag: "How It Works", icon: "⚙️" },
                { tag: "What That Means", icon: "🎯" },
                { tag: "The Bottom Line", icon: "📈" },
              ][i % 4];
              return (
                <div key={i} className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-transparent hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.12)]">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                    background: "var(--card-edge-gradient)",
                    padding: "1px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <span className="inline-flex items-center gap-2.5">
                        <span className="w-9 h-9 rounded-xl bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center text-[1.05rem] shrink-0">{labels.icon}</span>
                        <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[var(--text-dim)]">{labels.tag}</span>
                      </span>
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[var(--on-primary)] shadow-[0_6px_16px_rgba(var(--accent-rgb),0.25)]" style={{ background: "var(--primary-gradient)" }}>
                        {String(i + 2).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-[var(--text-muted)] text-[0.97rem] leading-[1.85]">
                      <HighlightTitle text={para} keyword={child.title} />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. PROBLEM → SOLUTION — split confrontation card
      ========================================================= */}
      <section className="py-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              The Shift
            </div>
            <h2 className="text-[2.3rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.8rem]">
              From Being Ignored to <span className="gradient-text">Being Impossible to Ignore</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.02rem] max-w-[620px] mx-auto">
              The gap between where most businesses sit and where {child.title.toLowerCase()} takes them.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-0 max-[900px]:grid-cols-1 relative">
            {/* Problem card */}
            <div className="relative p-9 bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.22)] rounded-l-3xl max-[900px]:rounded-t-3xl max-[900px]:rounded-b-none max-[900px]:text-center">
              <div className="absolute -top-4 left-8 py-1.5 px-4 rounded-full bg-[rgba(239,68,68,0.12)] border border-[rgba(239,68,68,0.3)] text-[#F87171] text-[0.7rem] font-bold uppercase tracking-wider">
                Without Eddinet
              </div>
              <div className="mt-6 mb-6 w-12 h-12 rounded-2xl bg-[rgba(239,68,68,0.12)] flex items-center justify-center text-[1.4rem] max-[900px]:mx-auto">⚠️</div>
              <h3 className="text-[1.35rem] font-extrabold text-[var(--text-main)] mb-4">The Problem</h3>
              <p className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed">
                {child.problemStatement}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 max-[900px]:justify-center">
                {["Page 2+ for keyword", "Zero lead velocity", "Fragmented tactics"].map((tag) => (
                  <span key={tag} className="py-1.5 px-3.5 rounded-full bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] text-[#F87171] text-[0.72rem] font-semibold">
                    ✕ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Solution card */}
            <div className="relative p-9 bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.22)] rounded-r-3xl max-[900px]:rounded-b-3xl max-[900px]:rounded-t-none max-[900px]:text-center">
              <div className="absolute -top-4 right-8 py-1.5 px-4 rounded-full bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.3)] text-[#34D399] text-[0.7rem] font-bold uppercase tracking-wider">
                With Eddinet
              </div>
              <div className="mt-6 mb-6 w-12 h-12 rounded-2xl bg-[rgba(16,185,129,0.12)] flex items-center justify-center text-[1.4rem] max-[900px]:mx-auto">🚀</div>
              <h3 className="text-[1.35rem] font-extrabold text-[var(--text-main)] mb-4">The Turnaround</h3>
              <p className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed">
                We replace guesswork with a connected {child.title.toLowerCase()} system — technical health first, intent-led content, authority that compounds and reporting tied to revenue, not vanity metrics.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 max-[900px]:justify-center">
                {["Compounding authority", "Intent-led content", "Revenue reporting"].map((tag) => (
                  <span key={tag} className="py-1.5 px-3.5 rounded-full bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] text-[#34D399] text-[0.72rem] font-semibold">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Center bridge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[var(--panel-bg)] border border-[var(--border-color)] flex items-center justify-center shadow-[var(--shadow-lg)] z-10">
              <span className="text-[var(--main-accent)] text-[1.3rem] font-extrabold">→</span>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]" style={{ background: "var(--primary-gradient)" }}>
              Get a Free {child.title} Audit →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. WHO NEEDS THIS — bento tiles with varied spans
      ========================================================= */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              Is This You?
            </div>
            <h2 className="text-[2.3rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.8rem]">
              <span className="gradient-text">{child.whoNeedsThis.heading}</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.02rem] max-w-[660px] mx-auto">
              {child.whoNeedsThis.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
            {child.whoNeedsThis.points.map((point, i) => {
              const spanClass =
                i % 4 === 3
                  ? "col-span-2 max-[1024px]:col-span-1"
                  : i % 4 === 1
                  ? "md:row-span-1"
                  : "";
              return (
                <div
                  key={i}
                  className={`group relative ${spanClass} rounded-2xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-hover)] hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.1)]`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[var(--main-accent)]/0 blur-2xl group-hover:bg-[var(--main-accent)]/10 transition-all duration-500" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[1.25rem] shrink-0 text-[var(--on-primary)] shadow-[0_8px_20px_rgba(var(--accent-rgb),0.25)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ background: "var(--primary-gradient)" }}>
                      {["🎯", "🏢", "⚡", "📈", "🌐", "🛒"][i % 6]}
                    </div>
                    <p className="text-[var(--text-main)] text-[0.97rem] font-semibold leading-relaxed pt-1">{point}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. METRICS — full-bleed gradient band with big numbers
      ========================================================= */}
      <section className="py-[70px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--cta-bg)" }} />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(var(--accent-rgb),0.12),transparent_60%)]" />
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
          <div className="relative grid grid-cols-4 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-2">
            {child.metrics.map((m, i) => (
              <div key={i} className="relative text-center py-8 px-4">
                {/* Pulse ring */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-[rgba(var(--accent-rgb),0.5)] animate-ring-pulse" />
                <div className="text-[3rem] font-extrabold leading-none gradient-text animate-gradient-x mb-3 max-[768px]:text-[2.3rem]">
                  {m.value}
                </div>
                <p className="text-[var(--text-muted)] text-[0.85rem] font-medium max-w-[180px] mx-auto">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. WHAT'S INCLUDED — spotlight feature rows
      ========================================================= */}
      <section className="py-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              What&apos;s Included
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
              Inside Your <span className="gradient-text">{child.title}</span> Engagement
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              Every capability engineered to move the needle on {child.title.toLowerCase()} performance — not just fill a report.
            </p>
          </div>

          <div className="flex flex-col">
            {child.features.map((feature, i) => (
              <div
                key={i}
                className={`group relative grid grid-cols-[auto_1fr] gap-6 py-9 px-7 items-center max-[768px]:grid-cols-1 ${
                  i !== child.features.length - 1 ? "border-b border-[var(--border-color)]" : ""
                } ${i % 2 === 1 ? "bg-[var(--bg-card)] rounded-2xl my-1" : ""}`}
              >
                {/* Number rail */}
                <div className="relative flex flex-col items-center self-stretch justify-center w-14 shrink-0 max-[768px]:hidden">
                  <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-[1.1rem] font-extrabold text-[var(--on-primary)] shadow-[0_10px_25px_rgba(var(--accent-rgb),0.3)] transition-transform duration-500 group-hover:scale-110" style={{ background: "var(--primary-gradient)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i !== child.features.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-[rgba(var(--accent-rgb),0.5)] to-transparent my-3" />
                  )}
                </div>

                {/* Content */}
                <div className="grid grid-cols-[1fr_0.35fr] gap-6 items-center max-[900px]:grid-cols-1">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 min-[769px]:hidden rounded-xl flex items-center justify-center text-[var(--on-primary)] text-[1.05rem] font-extrabold" style={{ background: "var(--primary-gradient)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-[1.28rem] font-extrabold text-[var(--text-main)] leading-snug">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed max-w-[640px]">
                      {feature.description}
                    </p>
                  </div>

                  {/* Result chip */}
                  <div className="justify-self-end max-[900px]:justify-self-start">
                    <div className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-[rgba(var(--accent-rgb),0.06)] border border-[rgba(var(--accent-rgb),0.15)] text-[var(--main-accent)] text-[0.78rem] font-bold tracking-wide">
                      ✓ Included
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          7. BENEFITS — gradient-icon tile wall
      ========================================================= */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)] relative overflow-hidden">
        <div className="absolute bottom-[-25%] left-[-8%] w-[420px] h-[420px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              The Payoff
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
              Key Benefits of <span className="gradient-text">{child.title}</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              Tangible outcomes that directly impact your business growth and online visibility.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
            {child.benefits.map((benefit, i) => (
              <div key={i} className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-transparent hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.15)]">
                {/* Gradient edge on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                  background: "var(--card-edge-gradient)",
                  padding: "1px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }} />
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[var(--main-accent)]/0 blur-2xl group-hover:bg-[var(--main-accent)]/10 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-13 h-13 min-h-13 mb-5">
                    <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[var(--main-accent)] to-[rgba(var(--accent-rgb),0.5)] flex items-center justify-center text-[1.5rem] shadow-[0_8px_25px_rgba(var(--accent-rgb),0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      {["📈", "💰", "⏱️", "🎯", "🛡️", "🌍"][i % 6]}
                    </div>
                  </div>
                  <h3 className="text-[1.08rem] font-extrabold text-[var(--text-main)] mb-2">{benefit.title}</h3>
                  <p className="text-[var(--text-muted)] text-[0.88rem] leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          8. INDUSTRIES — auto-scroll marquee chips
      ========================================================= */}
      <section className="py-[90px] overflow-hidden">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              Built For Your Sector
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
              Industries That Benefit from <span className="gradient-text">{child.title}</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[620px] mx-auto">
              {child.title} delivers measurable results across diverse sectors and business models.
            </p>
          </div>
        </div>

        {/* Marquee track */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-dark)] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-dark)] to-transparent z-10" />
          <div className="flex animate-marquee overflow-hidden w-max">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 gap-4 pr-4">
                {child.industries.map((industry, i) => (
                  <span key={`${dup}-${i}`} className="flex items-center gap-4 py-4 px-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1 shrink-0">
                    <span className="text-[1.3rem]">{[`🏦`, `🛍️`, `⚕️`, `🏗️`, `🎓`, `🏨`][i % 6]}</span>
                    <span>
                      <strong className="block text-[0.95rem] text-[var(--text-main)] whitespace-nowrap">{industry.name}</strong>
                      <span className="text-[0.72rem] text-[var(--text-dim)] whitespace-nowrap block max-w-[240px] truncate">{industry.description}</span>
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          9. WHY CHOOSE US — anchored feature + checklist
      ========================================================= */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)] relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[var(--main-accent)]/5 blur-3xl pointer-events-none" />
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
          <div className="grid grid-cols-[0.45fr_0.55fr] gap-[56px] items-start max-[1024px]:grid-cols-1">
            {/* Left anchor card */}
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
                The Eddinet Edge
              </div>
              <h2 className="text-[2.2rem] font-extrabold leading-[1.15] mb-5 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.7rem]">
                <span className="gradient-text">{child.whyChooseUs.heading.replace("Eddinet for ", "")}</span>{" "}
                with Eddinet
              </h2>
              <p className="text-[var(--text-muted)] text-[0.98rem] leading-relaxed mb-7">
                Agencies report tasks. We engineer outcomes. That single difference changes what {child.title.toLowerCase()} can return for you.
              </p>

              <div className="relative rounded-3xl p-8 overflow-hidden bg-[var(--panel-bg)] border border-[rgba(var(--accent-rgb),0.25)] shadow-[var(--shadow-lg)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--main-accent)]/15 rounded-full blur-2xl animate-float-slow" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[2rem]">💎</span>
                    <span className="text-[0.75rem] font-bold uppercase tracking-wider text-[var(--text-dim)]">Why businesses stay with us</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {[
                      { k: "5+", v: "Years in the game" },
                      { k: "1,000+", v: "Projects shipped" },
                      { k: "12+", v: "Countries served" },
                      { k: "2 hrs", v: "Typical response time" },
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center justify-between gap-4 py-3 px-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                        <span className="text-[1.15rem] font-extrabold gradient-text">{stat.k}</span>
                        <span className="text-[var(--text-muted)] text-[0.82rem]">{stat.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right checklist */}
            <div className="grid grid-cols-2 gap-5 max-[640px]:grid-cols-1">
              {child.whyChooseUs.points.map((point, i) => (
                <div key={i} className="group flex items-start gap-4 p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)]">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[rgba(var(--accent-rgb),0.2)] group-hover:scale-110">
                    <span className="text-[var(--main-accent)] font-extrabold text-[0.95rem]">✓</span>
                  </div>
                  <p className="text-[var(--text-main)] text-[0.92rem] font-semibold leading-relaxed mt-1">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          10. PROCESS — horizontal timeline with gradient spine
      ========================================================= */}
      <section className="py-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              Our Execution Roadmap
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
              How We Execute <span className="gradient-text">{child.title}</span> Projects
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              An outcome-led process, from first conversation to continuous improvement.
            </p>
          </div>

          <div className="relative">
            {/* Gradient spine */}
            <div className="absolute left-0 right-0 top-[28px] h-[2px] bg-gradient-to-r from-transparent via-[rgba(var(--accent-rgb),0.5)] to-transparent max-[1024px]:hidden" />

            <div className="grid grid-cols-4 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
              {child.process.steps.map((step, i) => (
                <div key={i} className="group relative pt-16 max-[1024px]:pt-0">
                  {/* Node */}
                  <div className="absolute top-0 left-0 max-[1024px]:static max-[1024px]:mb-4">
                    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-[1.05rem] font-extrabold text-[var(--on-primary)] shadow-[0_10px_25px_rgba(var(--accent-rgb),0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" style={{ background: "var(--primary-gradient)" }}>
                      {step.num}
                      <div className="absolute inset-0 rounded-2xl border border-[rgba(var(--accent-rgb),0.5)] animate-ring-pulse" />
                    </div>
                  </div>

                  <div className="relative p-6 rounded-2xl h-full bg-[var(--bg-card)] border border-[var(--border-color)] transition-all duration-300 group-hover:border-[var(--border-hover)] group-hover:-translate-y-1 overflow-hidden">
                    <div className="absolute -top-3 -right-2 text-[4rem] font-extrabold leading-none opacity-[0.06] select-none">{step.num}</div>
                    <h3 className="relative z-10 text-[1.1rem] font-extrabold text-[var(--text-main)] mb-2.5">{step.title}</h3>
                    <p className="relative z-10 text-[var(--text-muted)] text-[0.88rem] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          11. SOCIAL PROOF — case study dashboard + testimonial cards
      ========================================================= */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              Proof, Not Promises
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
              Real Impact, <span className="gradient-text">Real Revenue</span>
            </h2>
          </div>

          {/* Case study dashboard */}
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--panel-bg)] shadow-[var(--shadow-lg)] mb-10">
            <div className="absolute top-[-30%] right-[-10%] w-[360px] h-[360px] bg-[var(--main-accent)]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[-30%] left-[-10%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl" />
            <div className="relative z-10 grid grid-cols-[0.34fr_0.66fr] gap-8 p-10 max-[900px]:grid-cols-1">
              {/* Metric block */}
              <div className="flex flex-col justify-center items-center text-center rounded-2xl bg-[rgba(var(--green-accent-rgb),0.06)] border border-[rgba(var(--green-accent-rgb),0.2)] px-6 py-10">
                <span className="py-1 px-3.5 rounded-full bg-[rgba(var(--green-accent-rgb),0.12)] border border-[rgba(var(--green-accent-rgb),0.25)] text-[var(--green-accent)] text-[0.7rem] font-bold uppercase tracking-wider mb-5">
                  Client Result
                </span>
                <div className="text-[2.6rem] font-extrabold leading-none gradient-text animate-gradient-x mb-3">{child.caseStudy.metric}</div>
                <p className="text-[var(--text-dim)] text-[0.85rem]">from a {child.title.toLowerCase()} engagement</p>
              </div>
              {/* Description */}
              <div className="flex flex-col justify-center">
                <span className="inline-block py-1.5 px-4 rounded-full bg-[rgba(var(--accent-rgb),0.08)] text-[var(--main-accent)] font-bold text-[0.78rem] mb-4 self-start">Case Study</span>
                <h3 className="text-[1.7rem] font-extrabold text-[var(--text-main)] mb-4 max-[768px]:text-[1.4rem]">{child.caseStudy.title}</h3>
                <p className="text-[var(--text-muted)] text-[1rem] leading-relaxed">{child.caseStudy.description}</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
            {child.testimonials.map((t, i) => (
              <div key={i} className="relative p-8 rounded-2xl bg-[var(--panel-bg)] border border-[var(--border-color)] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(var(--accent-rgb),0.3)]">
                <div className="absolute top-5 right-7 text-[4rem] font-extrabold leading-none text-[var(--main-accent)] opacity-10 select-none">&ldquo;</div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-[var(--main-accent)] text-[0.95rem]">★</span>
                  ))}
                </div>
                <p className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed mb-7">{t.review}</p>
                <div className="flex items-center gap-3.5 pt-5 border-t border-[var(--border-color)]">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-[0.85rem] text-[var(--on-primary)] shadow-[0_8px_20px_rgba(var(--accent-rgb),0.3)]" style={{ background: "var(--primary-gradient)" }}>
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-[var(--text-main)] font-bold text-[0.9rem]">{t.name}</p>
                    <p className="text-[var(--text-dim)] text-[0.8rem]">{t.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          12. CROSS-LINKS — gradient-top cards
      ========================================================= */}
      <section className="py-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              Think Bigger
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
              Synergistic <span className="gradient-text">Growth Systems</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              {child.title.toLowerCase()} works best as part of an integrated growth strategy. Explore how these services connect.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
            {child.crossLinks.map((link, i) => (
              <Link key={i} href={link.slug} className="group relative rounded-[var(--radius-lg)] bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden p-7 no-underline transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.15)]">
                {/* Gradient top edge */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--main-accent)] via-transparent to-purple-500 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-xl bg-[rgba(var(--accent-rgb),0.08)] flex items-center justify-center text-[1.3rem] mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-[rgba(var(--accent-rgb),0.15)]">
                  {["🔗", "🤖", "🛍️", "💬", "📢", "⚙️"][i % 6]}
                </div>
                <h3 className="text-[1.12rem] font-extrabold text-[var(--text-main)] mb-2">{link.title}</h3>
                <p className="text-[var(--text-muted)] text-[0.85rem] leading-relaxed mb-5">{link.description}</p>
                <span className="inline-flex items-center gap-2 text-[var(--main-accent)] font-bold text-[0.85rem] no-underline">
                  <span className="relative">
                    Explore
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--main-accent)] transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          13. FAQ — enhanced accordion
      ========================================================= */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[820px] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              Common Questions
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
              Frequently Asked Questions About{" "}
              <span className="gradient-text">{child.title}</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {child.faqs.map((f, i) => (
              <details key={i} className="group bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[rgba(var(--accent-rgb),0.25)]" open={i === 0}>
                <summary className="py-[22px] px-7 font-bold text-[1.02rem] cursor-pointer select-none list-none flex items-center justify-between gap-4 text-[var(--text-main)] [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[0.8rem] font-extrabold text-[var(--on-primary)]" style={{ background: "var(--primary-gradient)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </span>
                  <span className="w-8 h-8 shrink-0 rounded-full border border-[var(--border-color)] text-[var(--main-accent)] flex items-center justify-center text-[1.1rem] transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <div className="px-7 pb-[22px] text-[var(--text-muted)] text-[0.95rem] leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          14. CTA — animated gradient-border box
      ========================================================= */}
      <section className="py-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="relative rounded-3xl py-[64px] px-10 text-center overflow-hidden border border-[rgba(var(--accent-rgb),0.3)] shadow-[var(--shadow-lg)]" style={{ background: "var(--cta-bg)" }}>
            <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-[var(--main-accent)]/10 blur-3xl animate-drift-slow pointer-events-none" />
            <div className="absolute bottom-[-40%] right-[-10%] w-[380px] h-[380px] rounded-full bg-purple-500/10 blur-3xl animate-drift pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-6">
                Free 30-Minute Strategy Call
              </div>
              <h2 className="text-[2.6rem] font-extrabold mb-4 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
                Ready to Build Your <span className="gradient-text">{child.title}</span> Strategy?
              </h2>
              <p className="text-[1.12rem] text-[var(--text-muted)] max-w-[600px] mx-auto mb-9">
                Book a free 30-minute consultation. We&apos;ll identify how {child.title.toLowerCase()} fits into your growth system — with no commitment required.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_-5px_rgba(var(--accent-rgb),0.6)]" style={{ background: "var(--primary-gradient)" }}>
                  Talk to a Digital Growth Expert
                </Link>
                <a href="https://wa.me/917042840441" target="_blank" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] hover:-translate-y-[3px]">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}