import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { servicePages, getServiceBySlug } from "@/data/services";
import { getCategoryPageContent } from "@/data/service-page-content";
import { site } from "@/data/contact";
import ContactForm from "@/components/ContactForm";
import AboutSection from "@/components/AboutSection";
import LineClampedText from "@/components/LineClampedText";
import SectionHeader from "@/components/SectionHeader";

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getCategoryPageContent(slug);
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `https://eddinet.com/services/${slug}` },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://eddinet.com/services/${slug}`,
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
  const content = getCategoryPageContent(slug);
  if (!content) notFound();

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      {/* 1. HERO */}
      <section className="relative flex items-center pt-[100px] pb-[60px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-accent)]/5 via-transparent to-transparent" />
          <div className="absolute top-[-25%] right-[-15%] w-[560px] h-[560px] rounded-full bg-[var(--main-accent)]/10 blur-3xl animate-drift" />
          <div className="absolute bottom-[-35%] left-[-10%] w-[480px] h-[480px] rounded-full bg-purple-500/10 blur-3xl animate-drift-slow" />
        </div>

        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
          <nav className="mb-4 text-[0.85rem] text-[var(--text-dim)] flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Home</Link>
            <span className="text-[var(--text-dim)]/60">/</span>
            <Link href="/services" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Services</Link>
            <span className="text-[var(--text-dim)]/60">/</span>
            <span className="text-[var(--main-accent)]">{content.title}</span>
          </nav>

          <div className="grid grid-cols-[1.3fr_0.7fr] gap-10 items-center max-[1024px]:grid-cols-1">
            <div>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
                ⚡ Eddinet {content.title} Team
              </div>
              <h1 className="text-[3rem] font-extrabold leading-[1.08] mb-4 text-[var(--text-main)] tracking-[-1px] max-[768px]:text-[2.2rem]">
                {content.heroGradient ? (
                  <>
                    {content.heroLead}{" "}
                    <span className="gradient-text">{content.heroGradient}</span>
                  </>
                ) : (
                  <span className="gradient-text">{content.heroHeading}</span>
                )}
              </h1>
              <p className="text-[var(--text-muted)] text-[1.08rem] leading-relaxed mb-6 max-w-[600px] whitespace-pre-line">
                {content.heroSubheading}
              </p>
              <div className="flex gap-4 flex-wrap mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
                  style={{ background: "var(--primary-gradient)" }}
                >
                  🚀 Talk to a Specialist
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]"
                >
                  View Case Studies
                </Link>
              </div>
              <div className="flex items-center gap-7 pt-6 border-t border-[var(--border-color)] max-[768px]:flex-wrap max-[768px]:gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(var(--accent-rgb),0.12)] text-[var(--main-accent)] flex items-center justify-center text-[1.1rem] shrink-0">🗺️</div>
                  <div>
                    <strong className="block text-[0.95rem] text-[var(--text-main)]">Delhi NCR + Global</strong>
                    <span className="text-[0.75rem] text-[var(--text-dim)]">{content.allItemsCount}+ sub-services, clients in 12+ countries</span>
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

            <div className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--panel-bg)] shadow-[var(--shadow-xl)]">
              <div className="relative h-[210px] overflow-hidden">
                <Image
                  src={s.image}
                  alt={content.title}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.05]"
                  unoptimized
                />
                <div className="absolute bottom-4 left-5 inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-[rgba(11,15,25,0.6)] backdrop-blur-md border border-white/15 text-[0.72rem] font-bold text-white">
                  ⚡ {content.title} Delivery Team
                </div>
              </div>

              <div className="relative px-5 pb-5">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--main-accent)]/15 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <ContactForm compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT */}
      <AboutSection
        paragraphs={content.about}
        image={s.image}
        gradientWord={content.title}
      />

      {/* 3. WHAT'S INCLUDED */}
      <section className="py-[80px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            title={<>Our Services in <span className="gradient-text">{content.title}</span></>}
            description="Every engagement is scoped around your business outcome. These are the services we deliver for {content.title.toLowerCase()} projects."
          />
          <div className="grid grid-cols-2 gap-6 max-[1024px]:grid-cols-1">
            {content.services.map((item, j) => {
              const cardClasses =
                "group relative grid grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(var(--accent-rgb),0.35)] hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.12)] scroll-mt-28";

              const btnClasses =
                "mt-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full font-bold text-[0.85rem] no-underline self-start text-[var(--main-accent)] border border-[rgba(var(--accent-rgb),0.3)] bg-[rgba(var(--accent-rgb),0.06)] transition-all duration-300 hover:text-[var(--on-primary)] hover:border-transparent hover:[background:var(--primary-gradient)] hover:shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:gap-3 group/btn";

              const imageBlock = (
                <div className="p-4 sm:p-5 flex items-center bg-[var(--bg-card)]">
                  <div className="relative w-full rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={450}
                      className="w-full h-auto object-contain block"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      unoptimized
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-black/60 text-white/90 text-[0.7rem] font-bold z-10">
                      ✓ Core Service
                    </span>
                  </div>
                </div>
              );

              const contentBlock = (
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[1.05rem] text-[var(--text-main)] font-bold leading-snug mb-2">{item.title}</h3>
                  <p className="text-[var(--text-muted)] text-[0.88rem] leading-relaxed mb-5">
                    {item.description}
                  </p>
                  {item.href ? (
                    <span className="mt-auto self-start inline-flex items-center gap-2 font-bold text-[0.88rem] text-[var(--main-accent)] hover:gap-3 transition-all duration-300 group/btn">
                      Learn More
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </span>
                  ) : (
                    <Link href="/contact" className={btnClasses}>
                      Contact Us
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </Link>
                  )}
                </div>
              );

              return item.href ? (
                <Link
                  key={j}
                  href={item.href!}
                  id={slugify(item.title)}
                  className={`${cardClasses} no-underline`}
                >
                  {imageBlock}
                  {contentBlock}
                </Link>
              ) : (
                <div key={j} id={slugify(item.title)} className={cardClasses}>
                  {imageBlock}
                  {contentBlock}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            chip="Our Process"
            title={<>How We Execute <span className="gradient-text">{content.title}</span> Projects</>}
            description="An outcome-led process, from first conversation to continuous improvement."
            spacing="lg"
          />

          <div className="relative max-[1024px]:hidden">
            <div className="absolute left-0 right-0 top-[28px] h-[2px] bg-gradient-to-r from-transparent via-[rgba(var(--accent-rgb),0.5)] to-transparent" />
          </div>

          <div className="grid grid-cols-4 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
            {content.process.steps.map((step, i) => (
              <div key={i} className="group relative pt-16 max-[1024px]:pt-0">
                <div className="absolute top-0 left-0 max-[1024px]:static max-[1024px]:mb-4">
                  <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-[1.05rem] font-extrabold text-[var(--on-primary)] shadow-[0_10px_25px_rgba(var(--accent-rgb),0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" style={{ background: "var(--primary-gradient)" }}>
                    {step.num}
                    <div className="absolute inset-0 rounded-2xl border border-[rgba(var(--accent-rgb),0.5)] animate-ring-pulse" />
                  </div>
                </div>

                <div className="relative p-6 rounded-2xl h-full bg-[var(--bg-card)] border border-[var(--border-color)] transition-all duration-300 group-hover:border-[var(--border-hover)] group-hover:-translate-y-1 overflow-hidden">
                  <div className="absolute -top-3 -right-2 text-[4rem] font-extrabold leading-none opacity-[0.06] select-none">{step.num}</div>
                  <h3 className="relative z-10 text-[1.1rem] font-extrabold text-[var(--text-main)] mb-2.5">{step.title}</h3>
                  <p className="relative z-10 text-[var(--text-muted)] text-[0.88rem] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KEY BENEFITS */}
      <section className="py-[80px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            chip="Why It Works"
            title={<>Key <span className="gradient-text">Benefits</span></>}
            description={`The compounding advantages of a properly engineered ${content.title.toLowerCase()} channel.`}
          />
          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
            {content.benefits.map((benefit, i) => (
              <div key={i} className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-transparent hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.15)]">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 flex items-center justify-center text-[1.4rem] rounded-xl bg-gradient-to-br from-[var(--main-accent)] to-[rgba(var(--accent-rgb),0.5)] shadow-[0_8px_25px_rgba(var(--accent-rgb),0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {["📈", "🤖", "💰", "⚡", "🎯"][i % 5]}
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

      {/* 6. WHY CHOOSE US */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            chip="Why Choose Us"
            title={<span className="gradient-text">{content.whyChooseUs.heading}</span>}
            description="Experience the difference of one connected team — strategy, execution and reporting aligned to a single business goal."
          />

          <div className="relative rounded-3xl overflow-hidden border border-[rgba(var(--accent-rgb),0.25)] bg-[var(--panel-bg)] shadow-[var(--shadow-lg)]">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--main-accent)] via-transparent to-purple-500 opacity-50" />
            <div className="grid grid-cols-[0.42fr_0.58fr] max-[1024px]:grid-cols-1">
              <div className="relative p-9 max-[1024px]:pb-0 border-r border-[var(--border-color)] max-[1024px]:border-r-0 bg-[var(--bg-card)]">
                <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[rgba(var(--accent-rgb),0.08)] border border-[rgba(var(--accent-rgb),0.2)] rounded-3xl text-[var(--main-accent)] text-[0.78rem] font-bold uppercase tracking-wider mb-5">
                  ✦ The Eddinet Edge
                </div>
                <h3 className="text-[1.5rem] font-extrabold leading-snug mb-4 text-[var(--text-main)] tracking-[-0.3px] max-[768px]:text-[1.3rem]">
                  What sets our {content.title.toLowerCase()} apart
                </h3>
                <LineClampedText text={content.about[1] ?? content.about[0] ?? ""} lines={6} />

                <div className="grid grid-cols-2 gap-3 mb-7 max-[480px]:grid-cols-1">
                  {[{ value: "12+", label: "Service Categories" }, { value: "1,000+", label: "Projects Delivered" }, { value: "5+", label: "Years Experience" }, { value: "98%", label: "Client Retention" }].map((m, i) => (
                    <div key={i} className="group relative rounded-2xl p-4 text-center overflow-hidden bg-[var(--panel-bg)] border border-[var(--border-color)] transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(var(--accent-rgb),0.3)]">
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--main-accent)] via-transparent to-purple-500 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 text-[1.4rem] font-extrabold leading-none gradient-text animate-gradient-x mb-1.5 max-[768px]:text-[1.2rem]">{m.value}</div>
                      <div className="relative z-10 text-[var(--text-muted)] text-[0.72rem] font-medium leading-snug">{m.label}</div>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2.5 py-3 px-6 rounded-full font-bold text-[0.9rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]" style={{ background: "var(--primary-gradient)" }}>
                  Get a free {content.title.toLowerCase()} audit →
                </Link>
              </div>

              <div className="relative p-9">
                <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.25)] text-[var(--green-accent)] text-[0.68rem] font-bold uppercase tracking-wider mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-accent)] animate-pulse-dot" />
                  Why businesses stay with Eddinet
                </span>
                <div className="grid grid-cols-2 gap-3.5 max-[640px]:grid-cols-1">
                  {content.whyChooseUs.points.map((point, i) => (
                    <div key={i} className="group relative rounded-2xl p-5 overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(var(--accent-rgb),0.3)]">
                      <div className="absolute -top-3 -right-1 text-[2.6rem] font-extrabold leading-none opacity-[0.05] select-none">{String(i + 1).padStart(2, "0")}</div>
                      <div className="relative z-10">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="w-9 h-9 rounded-xl flex items-center justify-center text-[1rem] shrink-0 text-[var(--on-primary)] shadow-[0_6px_16px_rgba(var(--accent-rgb),0.25)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" style={{ background: "var(--primary-gradient)" }}>
                            {["🎯", "🧩", "📊", "🏆", "🧠", "🤝"][i % 6]}
                          </span>
                          <h4 className="text-[var(--text-main)] text-[0.95rem] font-bold leading-snug pt-0.5">
                            {point.split(":")[0]}
                          </h4>
                          <span className="ml-auto text-[0.62rem] font-extrabold text-[var(--main-accent)] uppercase tracking-wider">{`0${i + 1}`}</span>
                        </div>
                        <p className="text-[var(--text-muted)] text-[0.85rem] leading-relaxed">
                          {point.split(":").slice(1).join(":").trim()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-[80px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            chip="Client Reviews"
            title={<>What Our <span className="gradient-text">Clients Say</span></>}
          />
          <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
            {content.testimonials.map((t, i) => (
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

      {/* 8. FAQ */}
      {content.faqs.length > 0 && (
        <section className="py-[80px]">
          <div className="w-full max-w-[820px] mx-auto px-5">
            <SectionHeader
              title={<>{content.title} - <span className="gradient-text">FAQs</span></>}
            />
            <div className="flex flex-col gap-4">
              {content.faqs.map((f, i) => (
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

      {/* 9. RELATED SERVICES */}
      {content.related.length > 0 && (
        <section className="py-[80px] bg-[var(--strip-bg)] border-t border-[var(--border-color)]">
          <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
            <SectionHeader
              title={<>Related <span className="gradient-text">Services</span></>}
              description={`These services work best alongside ${content.title.toLowerCase()} as part of one system.`}
            />
            <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
              {content.related.map((r) => (
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

      {/* 10. CTA */}
      <section className="py-[80px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="border border-[rgba(var(--accent-rgb),0.3)] rounded-3xl py-[60px] px-10 text-center relative overflow-hidden max-[640px]:px-6" style={{ background: "var(--cta-bg)" }}>
            <h2 className="text-[2.6rem] font-extrabold mb-4 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              Ready to Build Your {content.title} Strategy?
            </h2>
            <p className="text-[1.12rem] text-[var(--text-muted)] max-w-[600px] mx-auto mb-8">
              Book a free 30-minute consultation. We&apos;ll identify how {content.title.toLowerCase()} fits into your growth system - with no commitment required.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
                style={{ background: "var(--primary-gradient)" }}
              >
                Talk to a Digital Growth Expert
              </Link>
              <a href={site.whatsapp} target="_blank" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] hover:-translate-y-[3px]">
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
      {content.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}