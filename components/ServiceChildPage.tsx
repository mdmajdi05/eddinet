import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Industries from "@/components/Industries";
import AboutSection from "@/components/AboutSection";
import LineClampedText from "@/components/LineClampedText";
import { services } from "@/data/services";
import { site } from "@/data/contact";

// Normalised content view shared by every service child page
// (/services/seo/<slug> and /services/<category>/<slug>).
export interface ChildServiceView {
  title: string;
  slug: string;
  heroHeading: string;
  heroSubheading: string;
  image: string;
  detailedDescription: string;
  features: { title: string; description: string }[];
  featuresHeading?: string;
  featuresDescription?: string;
  process: {
    heading: string;
    description?: string;
    steps: { num: string; title: string; description: string }[];
  };
  benefits: { title: string; description: string }[];
  benefitsHeading?: string;
  benefitsDescription?: string;
  metrics: { value: string; label: string }[];
  whyChooseUs: { heading: string; description?: string; points: string[] };
  testimonials: { name: string; designation: string; review: string }[];
  faqs: { q: string; a: string }[];
  crossLinks: { title: string; slug: string; description: string }[];
}

interface ServiceChildComponentProps {
  child: ChildServiceView;
  category: { title: string; href: string };
  canonicalUrl: string;
}

export default function ServiceChildPage({
  child,
  category,
  canonicalUrl,
}: ServiceChildComponentProps) {
  const serviceName = child.title.split("(")[0].trim();
  const introParas = child.detailedDescription.split("\n\n");
  const heroSuffixMatch = child.heroHeading.match(/\s+(in (?:Delhi NCR|India))$/);
  const heroPrefix = heroSuffixMatch
    ? child.heroHeading.slice(0, heroSuffixMatch.index)
    : child.heroHeading;
  const heroSuffix = heroSuffixMatch ? heroSuffixMatch[1] : "";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eddinet.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://eddinet.com/services" },
      { "@type": "ListItem", position: 3, name: category.title, item: `https://eddinet.com${category.href}` },
      { "@type": "ListItem", position: 4, name: child.title, item: canonicalUrl },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: child.title,
    name: `${child.title} Services in Delhi NCR`,
    description: child.detailedDescription,
    url: canonicalUrl,
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

  const crossImage = (slug: string) =>
    services.find((s) => `/services/${s.slug}` === slug)?.image;

  return (
    <>
      {/* =========================================================
          1. HERO — split with framed image + floating metric chips
      ========================================================= */}
      <section className="relative pt-[120px] pb-[90px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-accent)]/5 via-transparent to-transparent" />
          <div className="absolute top-[-25%] right-[-15%] w-[560px] h-[560px] rounded-full bg-[var(--main-accent)]/10 blur-3xl animate-drift" />
          <div className="absolute bottom-[-35%] left-[-10%] w-[480px] h-[480px] rounded-full bg-purple-500/10 blur-3xl animate-drift-slow" />
          <div className="absolute top-[30%] left-[30%] w-[260px] h-[260px] rounded-full bg-[var(--main-accent)]/5 blur-3xl animate-pulse-slow" />
        </div>

        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
          <nav className="mb-5 text-[0.85rem] text-[var(--text-dim)] flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Home</Link>
            <span className="text-[var(--text-dim)]/60">/</span>
            <Link href="/services" className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">Services</Link>
            <span className="text-[var(--text-dim)]/60">/</span>
            <Link href={category.href} className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300">{category.title}</Link>
            <span className="text-[var(--text-dim)]/60">/</span>
            <span className="text-[var(--main-accent)]">{child.title}</span>
          </nav>

          <div className="grid grid-cols-[1.2fr_0.8fr] gap-12 items-center max-[1024px]:grid-cols-1">
            <div>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-5">
                ⚡ Eddinet {serviceName} Team
              </div>
              <h1 className="text-[3rem] font-extrabold leading-[1.08] mb-5 text-[var(--text-main)] tracking-[-1px] max-[768px]:text-[2.2rem]">
                {heroPrefix}
                {heroSuffix && (
                  <>
                    {" "}
                    <span className="gradient-text">{heroSuffix}</span>
                  </>
                )}
              </h1>
              <p className="text-[var(--text-muted)] text-[1.08rem] leading-relaxed mb-9 max-w-[600px] whitespace-pre-line">
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

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--panel-bg)] shadow-[var(--shadow-xl)]">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={child.image}
                    alt={child.title}
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.05]"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,25,0.85)] via-[rgba(11,15,25,0.3)] to-transparent" />
                  <div className="absolute bottom-4 left-5 inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-[rgba(11,15,25,0.6)] backdrop-blur-md border border-white/15 text-[0.72rem] font-bold text-white">
                    ⚡ {serviceName} Delivery Team
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
        </div>
      </section>

      {/* =========================================================
          2. ABOUT — from detailedDescription / docx about copy
      ========================================================= */}
      <AboutSection
        paragraphs={introParas}
        image={child.image}
        gradientWord={serviceName}
      />

      {/* =========================================================
          3. WHAT'S INCLUDED — service cards grid
      ========================================================= */}
      <section className="py-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              Our Services
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
              {child.featuresHeading ?? (
                <>
                  The Complete <span className="gradient-text">{serviceName}</span> Services
                </>
              )}
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              {child.featuresDescription ?? `Everything our ${serviceName.toLowerCase()} services cover — engineered to work as one connected system.`}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[1024px]:grid-cols-1">
            {child.features.map((feature, i) => (
              <div key={i} className="group relative grid grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-transparent hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.15)]">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                  background: "var(--card-edge-gradient)",
                  padding: "1px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }} />
                <div className="absolute -top-4 -right-1 text-[3.6rem] font-extrabold leading-none opacity-[0.05] select-none">{String(i + 1).padStart(2, "0")}</div>
                <div className="p-4 sm:p-5 flex items-center bg-[var(--bg-card)]">
                  <div className="relative w-full rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)]">
                    <Image
                      src={child.image}
                      alt={feature.title}
                      width={800}
                      height={450}
                      className="w-full h-auto object-contain block"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      unoptimized
                    />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 flex items-center justify-center text-[1.15rem] rounded-xl bg-gradient-to-br from-[var(--main-accent)] to-[rgba(var(--accent-rgb),0.5)] shadow-[0_8px_25px_rgba(var(--accent-rgb),0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                        {["🕸️", "🗺️", "✍️", "🔗", "📊", "🛡️", "📱", "🧠", "⚡", "🌐"][i % 10]}
                      </div>
                      <span className="text-[0.7rem] font-extrabold text-[var(--main-accent)] bg-[rgba(11,15,25,0.7)] border border-[var(--border-color)] rounded-full px-2.5 py-1">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 p-7 flex flex-col justify-center">
                  <h3 className="text-[1.1rem] font-extrabold text-[var(--text-main)] mb-2.5">{feature.title}</h3>
                  <p className="text-[var(--text-muted)] text-[0.88rem] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. PROCESS — horizontal timeline with gradient spine
      ========================================================= */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              Our Process
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
              How We Execute <span className="gradient-text">{serviceName}</span> Projects
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              {child.process.description ?? "An outcome-led process, from first conversation to continuous improvement."}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-[28px] h-[2px] bg-gradient-to-r from-transparent via-[rgba(var(--accent-rgb),0.5)] to-transparent max-[1024px]:hidden" />

            <div className="grid grid-cols-4 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
              {child.process.steps.map((step, i) => (
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
                    <p className="relative z-10 text-[var(--text-muted)] text-[0.88rem] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. WHAT YOU CAN EXPECT — phases + outcomes
      ========================================================= */}
      <section className="py-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              What You Can Expect
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
              {child.benefitsHeading ?? (
                <>
                  Outcomes Built Into <span className="gradient-text">Every Engagement</span>
                </>
              )}
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              {child.benefitsDescription ?? "A clear roadmap with accountability at every stage — so expectations and reality stay aligned."}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 mb-12 max-[768px]:grid-cols-1">
            {[
              { phase: "Month 1–2", title: "Foundation", desc: "Full audit, critical fixes and strategy locked in — blockers cleared fast.", icon: "🔍" },
              { phase: "Month 3–4", title: "Momentum", desc: "First ranking lifts and qualified traffic movement become visible.", icon: "📈" },
              { phase: "Month 5+", title: "Compounding", desc: "Authority compounds and cost per lead keeps falling as visibility grows.", icon: "🚀" },
            ].map((e, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(var(--accent-rgb),0.25)]">
                <div className="absolute inset-0 opacity-95" style={{ background: "var(--primary-gradient)" }} />
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                <div className="relative z-10 text-[var(--on-primary)]">
                  <div className="text-[1.6rem] mb-2">{e.icon}</div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider opacity-80">{e.phase}</span>
                  <h3 className="text-[1.15rem] font-extrabold mb-1.5">{e.title}</h3>
                  <p className="text-[0.82rem] leading-relaxed opacity-85">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
            {child.benefits.map((benefit, i) => (
              <div key={i} className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-transparent hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.15)]">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                  background: "var(--card-edge-gradient)",
                  padding: "1px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }} />
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[var(--main-accent)]/0 blur-2xl group-hover:bg-[var(--main-accent)]/10 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-13 h-13 min-h-13 flex items-center justify-center text-[1.5rem] rounded-xl bg-gradient-to-br from-[var(--main-accent)] to-[rgba(var(--accent-rgb),0.5)] shadow-[0_8px_25px_rgba(var(--accent-rgb),0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {["📈", "💰", "⏱️", "🎯", "🛡️", "🌍"][i % 6]}
                    </div>
                    <span className="w-8 h-8 rounded-full bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.3)] text-[var(--green-accent)] text-[0.8rem] font-bold flex items-center justify-center shrink-0">✓</span>
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
          6. WHY CHOOSE US — The Eddinet Edge card
      ========================================================= */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              Why Choose Us
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
              <span className="gradient-text">{child.whyChooseUs.heading}</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[680px] mx-auto">
              {child.whyChooseUs.description ??
                `${serviceName.toLowerCase()} in Delhi NCR is crowded with agencies that sell tactics. Eddinet sells a connected system — strategy, technical execution, intent-led content and transparent reporting engineered to turn search visibility into revenue.`}
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-[rgba(var(--accent-rgb),0.25)] bg-[var(--panel-bg)] shadow-[var(--shadow-lg)]">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--main-accent)] via-transparent to-purple-500 opacity-50" />
            <div className="grid grid-cols-[0.42fr_0.58fr] max-[1024px]:grid-cols-1">
              <div className="relative p-9 max-[1024px]:pb-0 border-r border-[var(--border-color)] max-[1024px]:border-r-0 bg-[var(--bg-card)]">
                <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[rgba(var(--accent-rgb),0.08)] border border-[rgba(var(--accent-rgb),0.2)] rounded-3xl text-[var(--main-accent)] text-[0.78rem] font-bold uppercase tracking-wider mb-5">
                  ✦ The Eddinet Edge
                </div>
                <h3 className="text-[1.5rem] font-extrabold leading-snug mb-4 text-[var(--text-main)] tracking-[-0.3px] max-[768px]:text-[1.3rem]">
                  What sets our {serviceName.toLowerCase()} apart
                </h3>
                <LineClampedText text={introParas[1] ?? introParas[0]} lines={6} />

                <div className="grid grid-cols-2 gap-3 mb-7 max-[480px]:grid-cols-1">
                  {child.metrics.map((m, i) => (
                    <div key={i} className="group relative rounded-2xl p-4 text-center overflow-hidden bg-[var(--panel-bg)] border border-[var(--border-color)] transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(var(--accent-rgb),0.3)]">
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--main-accent)] via-transparent to-purple-500 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 text-[1.4rem] font-extrabold leading-none gradient-text animate-gradient-x mb-1.5 max-[768px]:text-[1.2rem]">{m.value}</div>
                      <div className="relative z-10 text-[var(--text-muted)] text-[0.72rem] font-medium leading-snug">{m.label}</div>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2.5 py-3 px-6 rounded-full font-bold text-[0.9rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]" style={{ background: "var(--primary-gradient)" }}>
                  Get a free {serviceName} audit →
                </Link>
              </div>

              <div className="relative p-9">
                <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.25)] text-[var(--green-accent)] text-[0.68rem] font-bold uppercase tracking-wider mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-accent)] animate-pulse-dot" />
                  Why businesses stay with Eddinet
                </span>
                <div className="grid grid-cols-2 gap-3.5 max-[640px]:grid-cols-1">
                  {child.whyChooseUs.points.map((point, i) => (
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

      {/* =========================================================
          7. CLIENT REVIEWS — voices from real engagements
      ========================================================= */}
      <section className="py-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              Client Reviews
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

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
          8. INDUSTRIES WE SERVE — reused homepage section
      ========================================================= */}
      <Industries />

      {/* =========================================================
          9. FAQ — enhanced accordion
      ========================================================= */}
      <section className="py-[90px]">
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
          10. EXPLORE MORE — related growth systems
      ========================================================= */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              Think Bigger
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
              Synergistic <span className="gradient-text">Growth Systems</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              {serviceName.toLowerCase()} works best as part of an integrated growth strategy. Explore how these services connect.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
            {child.crossLinks.map((link, i) => (
              <Link key={i} href={link.slug} className="group relative rounded-[var(--radius-lg)] bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden no-underline transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.15)]">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--main-accent)] via-transparent to-purple-500 opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="relative h-[145px] overflow-hidden">
                  <Image
                    src={crossImage(link.slug) ?? child.image}
                    alt={link.title}
                    width={600}
                    height={350}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-[rgba(11,15,25,0.25)] to-transparent" />
                </div>
                <div className="relative z-10 p-7 pt-6">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(var(--accent-rgb),0.08)] flex items-center justify-center text-[1.1rem] mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-[rgba(var(--accent-rgb),0.15)]">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          11. CONTACT — talk to a specialist
      ========================================================= */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)] relative overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] w-[420px] h-[420px] rounded-full bg-[var(--main-accent)]/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-35%] left-[-10%] w-[380px] h-[380px] rounded-full bg-purple-500/8 blur-3xl pointer-events-none" />
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
              Start Today
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
              Let&apos;s Build Your <span className="gradient-text">{serviceName}</span> Win
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[600px] mx-auto">
              Free 30-minute strategy call — no commitment, no jargon, just a clear plan to grow.
            </p>
          </div>

          <div className="grid grid-cols-[0.4fr_0.6fr] gap-8 items-start max-[1024px]:grid-cols-1">
            <div className="relative rounded-3xl p-8 overflow-hidden bg-[var(--panel-bg)] border border-[var(--border-color)] shadow-[var(--shadow-lg)]">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--main-accent)] via-transparent to-purple-500 opacity-50" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[rgba(var(--accent-rgb),0.08)] border border-[rgba(var(--accent-rgb),0.2)] text-[var(--main-accent)] text-[0.78rem] font-bold uppercase tracking-wider mb-5">
                  📞 Talk to a {serviceName} Specialist
                </span>
                <h3 className="text-[1.4rem] font-extrabold text-[var(--text-main)] mb-3">
                  Prefer to talk first?
                </h3>
                <p className="text-[var(--text-muted)] text-[0.92rem] leading-relaxed mb-7">
                  Reach us on any channel below — we respond within 2 business hours on weekdays.
                </p>

                <ul className="space-y-4 mb-7">
                  <li className="flex items-start gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center text-[1.05rem] shrink-0">📱</span>
                    <div>
                      <p className="text-[var(--text-main)] font-semibold text-[0.9rem]">Call Us</p>
                      {site.phones.map((p) => (
                        <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-[var(--text-muted)] text-[0.85rem] hover:text-[var(--main-accent)] transition-colors duration-300">{p}</a>
                      ))}
                      <span className="text-[var(--text-dim)] text-[0.75rem]">{site.hours}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center text-[1.05rem] shrink-0">💬</span>
                    <div>
                      <p className="text-[var(--text-main)] font-semibold text-[0.9rem]">WhatsApp</p>
                      <a href={site.whatsapp} target="_blank" className="block text-[var(--text-muted)] text-[0.85rem] hover:text-[var(--main-accent)] transition-colors duration-300">Chat with our team instantly</a>
                      <span className="text-[var(--text-dim)] text-[0.75rem]">Quick replies on business hours</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center text-[1.05rem] shrink-0">✉️</span>
                    <div>
                      <p className="text-[var(--text-main)] font-semibold text-[0.9rem]">Email</p>
                      <a href={`mailto:${site.email}`} className="block text-[var(--text-muted)] text-[0.85rem] hover:text-[var(--main-accent)] transition-colors duration-300">{site.email}</a>
                      <span className="text-[var(--text-dim)] text-[0.75rem]">For proposals &amp; project briefs</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center text-[1.05rem] shrink-0">🏢</span>
                    <div>
                      <p className="text-[var(--text-main)] font-semibold text-[0.9rem]">Visit Us</p>
                      <p className="text-[var(--text-muted)] text-[0.85rem]">{site.address}</p>
                      <span className="text-[var(--text-dim)] text-[0.75rem]">{site.addressNote}</span>
                    </div>
                  </li>
                </ul>

                <a href={site.whatsapp} target="_blank" className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-full font-bold text-[0.92rem] no-underline transition-all duration-300 bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] hover:-translate-y-[3px]">
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* =========================================================
          12. CTA — animated gradient-border box
      ========================================================= */}
      <section className="py-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="relative rounded-3xl py-[64px] px-10 text-center overflow-hidden border border-[rgba(var(--accent-rgb),0.3)] shadow-[var(--shadow-lg)] max-[640px]:px-6" style={{ background: "var(--cta-bg)" }}>
            <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-[var(--main-accent)]/10 blur-3xl animate-drift-slow pointer-events-none" />
            <div className="absolute bottom-[-40%] right-[-10%] w-[380px] h-[380px] rounded-full bg-purple-500/10 blur-3xl animate-drift pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-6">
                Free 30-Minute Strategy Call
              </div>
              <h2 className="text-[2.6rem] font-extrabold mb-4 text-[var(--text-main)] tracking-[-0.5px] max-[768px]:text-[1.9rem]">
                Ready to Build Your <span className="gradient-text">{serviceName}</span> Strategy?
              </h2>
              <p className="text-[1.12rem] text-[var(--text-muted)] max-w-[600px] mx-auto mb-9">
                Book a free 30-minute consultation. We&apos;ll identify how {serviceName.toLowerCase()} fits into your growth system — with no commitment required.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_-5px_rgba(var(--accent-rgb),0.6)]" style={{ background: "var(--primary-gradient)" }}>
                  Talk to a Digital Growth Expert
                </Link>
                <a href={site.whatsapp} target="_blank" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] hover:-translate-y-[3px]">
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