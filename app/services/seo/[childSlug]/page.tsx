import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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

  return (
    <>
      {/* 1. Hero Section */}
      <section className="pt-[150px] pb-[80px] overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-accent)]/5 via-transparent to-transparent" />
          <div className="absolute top-[-30%] right-[-15%] w-[500px] h-[500px] rounded-full bg-[var(--main-accent)]/10 blur-3xl" />
        </div>
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
          <nav className="mb-8 text-[0.85rem] text-[var(--text-dim)] flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Services</Link>
            <span>/</span>
            <Link href="/services/seo" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">SEO &amp; AI SEO</Link>
            <span>/</span>
            <span className="text-[var(--main-accent)]">{child.title}</span>
          </nav>

          <div className="grid grid-cols-[1.1fr_0.9fr] gap-[50px] items-center max-[1024px]:grid-cols-1">
            <div>
              <h1 className="text-[3rem] font-extrabold leading-[1.1] mb-5 text-[var(--text-main)] max-[768px]:text-[2.2rem]">
                {child.heroHeading.replace(" in Delhi NCR", "")}{" "}
                <span className="gradient-text">in Delhi NCR</span>
              </h1>
              <p className="text-[var(--text-muted)] text-[1.12rem] leading-relaxed mb-8 max-w-[600px]">
                {child.heroSubheading}
              </p>
              <div className="flex gap-4 flex-wrap mb-6">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]" style={{ background: "var(--primary-gradient)" }}>
                  Talk to a Specialist
                </Link>
                <Link href="/case-studies" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]">
                  View Case Studies
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-6 border-t border-[var(--border-color)] max-[768px]:flex-wrap">
                <div>
                  <strong className="block text-xl text-[var(--text-main)]">Delhi NCR</strong>
                  <span className="text-sm text-[var(--text-dim)]">Plus India &amp; global clients</span>
                </div>
                <div>
                  <strong className="block text-xl text-[var(--text-main)]">100%</strong>
                  <span className="text-sm text-[var(--text-dim)]">Results-driven approach</span>
                </div>
              </div>
            </div>
            <div className="bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-2xl p-6 relative overflow-hidden shadow-[var(--shadow-lg)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--main-accent)]/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <ContactForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Introduction (Long-form content with primary keyword in first 100 words) */}
      <section className="py-[80px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[2.2rem] font-extrabold leading-[1.15] mb-6 text-[var(--text-main)] max-[768px]:text-[1.7rem]">
              What is <span className="gradient-text">{child.title}</span> and Why Does It Matter?
            </h2>
            <div className="text-[var(--text-muted)] text-[1.05rem] leading-[1.9] space-y-5">
              {child.detailedDescription.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problem & Solution */}
      <section className="py-[80px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="grid grid-cols-[0.4fr_0.6fr] gap-[60px] items-center max-[1024px]:grid-cols-1">
            <div>
              <span className="inline-block py-1.5 px-4 rounded-full bg-[rgba(var(--accent-rgb),0.08)] text-[var(--main-accent)] font-bold text-[0.8rem] mb-4">
                The Challenge
              </span>
              <h2 className="text-[2.2rem] font-extrabold leading-[1.15] mb-5 text-[var(--text-main)] max-[768px]:text-[1.7rem]">
                Why Most Businesses Struggle with{" "}
                <span className="gradient-text">{child.title}</span>
              </h2>
            </div>
            <div>
              <p className="text-[var(--text-muted)] text-[1.05rem] leading-[1.8] mb-6">
                {child.problemStatement}
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]" style={{ background: "var(--primary-gradient)" }}>
                Get a Free {child.title} Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who Needs This Service (H2) */}
      <section className="py-[80px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="grid grid-cols-[0.55fr_0.45fr] gap-[60px] items-start max-[1024px]:grid-cols-1">
            <div>
              <h2 className="text-[2.2rem] font-extrabold leading-[1.15] mb-5 text-[var(--text-main)] max-[768px]:text-[1.7rem]">
                <span className="gradient-text">{child.whoNeedsThis.heading}</span>
              </h2>
              <p className="text-[var(--text-muted)] text-[1.05rem] leading-[1.8] mb-8">
                {child.whoNeedsThis.description}
              </p>
            </div>
            <div className="space-y-4">
              {child.whoNeedsThis.points.map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(var(--accent-rgb),0.08)] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[var(--main-accent)] font-bold text-[0.85rem]">✓</span>
                  </div>
                  <p className="text-[var(--text-main)] text-[0.95rem] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Metrics / Stats */}
      <section className="py-[60px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="grid grid-cols-4 gap-6 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
            {child.metrics.map((m, i) => (
              <div key={i} className="text-center bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
                <div className="text-[2.2rem] font-extrabold gradient-text mb-2">{m.value}</div>
                <p className="text-[var(--text-muted)] text-[0.85rem] font-medium">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Core Capabilities & Features (H2) */}
      <section className="py-[80px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              What&apos;s Included in Our{" "}
              <span className="gradient-text">{child.title}</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              Every capability is designed to move the needle on your {child.title.toLowerCase()} performance — not just fill a report.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 max-[768px]:grid-cols-1">
            {child.features.map((feature, i) => (
              <div key={i} className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(var(--accent-rgb),0.35)] hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.12)]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[0.95rem] font-extrabold shrink-0 text-[var(--on-primary)] shadow-[0_8px_25px_rgba(var(--accent-rgb),0.25)]" style={{ background: "var(--primary-gradient)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-[1.1rem] font-bold text-[var(--text-main)] mb-2">{feature.title}</h3>
                    <p className="text-[var(--text-muted)] text-[0.9rem] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Key Benefits (H2) */}
      <section className="py-[80px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              Key Benefits of{" "}
              <span className="gradient-text">{child.title}</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              Tangible outcomes that directly impact your business growth and online visibility.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
            {child.benefits.map((benefit, i) => (
              <div key={i} className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(var(--accent-rgb),0.35)]">
                <div className="w-12 h-12 rounded-xl bg-[rgba(var(--accent-rgb),0.08)] flex items-center justify-center mb-4">
                  <span className="text-[var(--main-accent)] text-[1.4rem]">📈</span>
                </div>
                <h3 className="text-[1.05rem] font-bold text-[var(--text-main)] mb-2">{benefit.title}</h3>
                <p className="text-[var(--text-muted)] text-[0.88rem] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Industry Use Cases (H2) */}
      <section className="py-[80px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              Industries That Benefit from{" "}
              <span className="gradient-text">{child.title}</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              {child.title} delivers measurable results across diverse sectors and business models.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
            {child.industries.map((industry, i) => (
              <div key={i} className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(var(--accent-rgb),0.35)]">
                <h3 className="text-[1.05rem] font-bold text-[var(--text-main)] mb-2">{industry.name}</h3>
                <p className="text-[var(--text-muted)] text-[0.88rem] leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Why Choose Us (H2) */}
      <section className="py-[80px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              <span className="gradient-text">{child.whyChooseUs.heading.replace("Eddinet for ", "")}</span>{" "}
              with Eddinet
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
            {child.whyChooseUs.points.map((point, i) => (
              <div key={i} className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(var(--accent-rgb),0.35)]">
                <div className="w-11 h-11 rounded-xl bg-[rgba(var(--accent-rgb),0.08)] flex items-center justify-center mb-4">
                  <span className="text-[var(--main-accent)] text-[1.2rem] font-extrabold">✓</span>
                </div>
                <p className="text-[var(--text-main)] text-[0.95rem] font-semibold leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Process / How It Works (H2) */}
      <section className="py-[80px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              How We Execute{" "}
              <span className="gradient-text">{child.title}</span> Projects
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              An outcome-led process, from first conversation to continuous improvement.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[30px] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
            {child.process.steps.map((step, i) => (
              <div key={i} className="relative p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1 overflow-hidden">
                <div className="absolute -top-3 -right-2 text-[4.5rem] font-extrabold leading-none opacity-[0.06] select-none">{step.num}</div>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center text-[1.05rem] font-extrabold mb-4 text-[var(--on-primary)] shadow-[0_8px_25px_rgba(var(--accent-rgb),0.25)]" style={{ background: "var(--primary-gradient)" }}>
                  {step.num}
                </div>
                <h3 className="text-[1.15rem] font-bold text-[var(--text-main)] mb-2.5">{step.title}</h3>
                <p className="text-[var(--text-muted)] text-[0.92rem] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Social Proof — Case Study + Testimonials */}
      <section className="py-[80px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              Real Impact, <span className="gradient-text">Real Revenue</span>
            </h2>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-10 mb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--main-accent)]/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[rgba(var(--accent-rgb),0.08)] text-[var(--main-accent)] font-bold text-[0.8rem] mb-4">Case Study</span>
              <h3 className="text-[1.6rem] font-extrabold text-[var(--text-main)] mb-3">{child.caseStudy.title}</h3>
              <div className="inline-block py-2 px-5 rounded-xl bg-[rgba(var(--green-accent-rgb),0.1)] text-[var(--green-accent)] font-extrabold text-[1.3rem] mb-4">{child.caseStudy.metric}</div>
              <p className="text-[var(--text-muted)] text-[1rem] leading-relaxed max-w-[700px]">{child.caseStudy.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 max-[768px]:grid-cols-1">
            {child.testimonials.map((t, i) => (
              <div key={i} className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 relative">
                <div className="text-[2.5rem] leading-none mb-4 opacity-20">&ldquo;</div>
                <p className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed mb-6 italic">{t.review}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[0.85rem] text-[var(--on-primary)]" style={{ background: "var(--primary-gradient)" }}>
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

      {/* 12. Cross-Linking Hub (Internal Linking) */}
      <section className="py-[80px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              Synergistic <span className="gradient-text">Growth Systems</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              {child.title.toLowerCase()} works best as part of an integrated growth strategy. Explore how these services connect.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
            {child.crossLinks.map((link, i) => (
              <Link key={i} href={link.slug} className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] no-underline">
                <h3 className="text-[1.1rem] font-bold text-[var(--text-main)] mb-2">{link.title}</h3>
                <p className="text-[var(--text-muted)] text-[0.85rem] leading-relaxed mb-4">{link.description}</p>
                <span className="text-[var(--main-accent)] font-bold text-[0.85rem]">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FAQ Accordion with Schema */}
      <section className="py-[80px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[820px] mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              Frequently Asked Questions About{" "}
              <span className="gradient-text">{child.title}</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {child.faqs.map((f, i) => (
              <details key={i} className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-md)] overflow-hidden" open={i === 0}>
                <summary className="py-[22px] px-7 font-bold text-[1.02rem] cursor-pointer select-none list-none flex items-center justify-between gap-4 text-[var(--text-main)] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-[1.3rem] text-[var(--main-accent)] transition-transform duration-300 group-open:rotate-45 shrink-0">+</span>
                </summary>
                <div className="px-7 pb-[22px] text-[var(--text-muted)] text-[0.95rem] leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 14. CTA */}
      <section className="py-[80px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="border border-[rgba(var(--accent-rgb),0.3)] rounded-3xl py-[60px] px-10 text-center relative overflow-hidden" style={{ background: "var(--cta-bg)" }}>
            <h2 className="text-[2.6rem] font-extrabold mb-4 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              Ready to Build Your <span className="gradient-text">{child.title}</span> Strategy?
            </h2>
            <p className="text-[1.12rem] text-[var(--text-muted)] max-w-[600px] mx-auto mb-8">
              Book a free 30-minute consultation. We&apos;ll identify how {child.title.toLowerCase()} fits into your growth system — with no commitment required.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]" style={{ background: "var(--primary-gradient)" }}>
                Talk to a Digital Growth Expert
              </Link>
              <a href="https://wa.me/917042840441" target="_blank" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] hover:-translate-y-[3px]">
                Chat on WhatsApp
              </a>
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
