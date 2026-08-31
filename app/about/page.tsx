import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, processSteps, whyFeatures } from "@/data/site";
import { industries } from "@/data/industries";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About Eddinet - Digital Growth, Marketing & Technology Partner",
  description:
    "Eddinet is an outcome-led digital growth partner in Delhi NCR - combining SEO, paid media, content, web, apps, software, AI and cloud into one connected growth system for businesses.",
  alternates: { canonical: "https://eddinet.com/about" },
};

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "1,000+", label: "Projects Delivered" },
  { value: "50+", label: "Team Members" },
  { value: "98%", label: "Client Retention" },
];

const team = [
  { role: "SEO & AI Strategists", desc: "Google & Meta certified experts driving organic growth." },
  { role: "Performance Marketers", desc: "Data-obsessed media buyers optimizing every ad rupee." },
  { role: "Full-Stack Developers", desc: "React, Next.js & WordPress engineers building blazing-fast sites." },
  { role: "Creative Designers", desc: "Visual storytellers crafting high-converting brand identities." },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Eddinet",
  url: site.url,
  logo: "https://eddinet.com/eddinet-logo.png",
  description: site.tagline,
  email: site.email,
  telephone: "+91-70428-40441",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Okhla Industrial Estate, Phase I",
    addressLocality: "New Delhi",
    postalCode: "110020",
    addressCountry: "IN",
  },
  sameAs: Object.values(site.social).filter(Boolean),
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-[150px] pb-[70px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-25%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--main-accent)]/8 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-12%] w-[500px] h-[500px] rounded-full bg-[var(--purple-accent)]/8 blur-3xl" />
        </div>
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
          <div className="grid grid-cols-[1fr_0.9fr] gap-[50px] items-center max-[1024px]:grid-cols-1">
            <div>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-5">
                About Eddinet
              </div>
              <h1 className="text-[3rem] font-extrabold leading-[1.13] mb-5 text-[var(--text-main)] max-[768px]:text-[2.15rem]">
                A Digital Growth Partner Built Around <span className="gradient-text">Outcomes</span>
              </h1>
              <p className="text-[var(--text-muted)] text-[1.12rem] leading-relaxed mb-8 max-w-[640px]">
                Eddinet brings marketing, technology and infrastructure together as one connected growth
                system - so every service you invest in supports the same business objective.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
                  style={{ background: "var(--primary-gradient)" }}
                >
                  Work With Us
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]"
                >
                  See Our Work
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-color)]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Eddinet team collaborating in office"
                  width={800}
                  height={560}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-md)] p-5 shadow-[var(--shadow-lg)] backdrop-blur-xl max-[600px]:relative max-[600px]:-bottom-0 max-[600px]:-left-0 max-[600px]:mt-4">
                <div className="text-[2rem] font-extrabold gradient-text">7+ Years</div>
                <div className="text-[0.85rem] text-[var(--text-muted)]">Delivering Digital Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="grid grid-cols-4 gap-6 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
            {stats.map((s, i) => (
              <div
                key={i}
                className="text-center bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-md)] py-8 px-5 transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1"
              >
                <div className="text-[2.2rem] font-extrabold gradient-text mb-1">{s.value}</div>
                <div className="text-[0.85rem] text-[var(--text-muted)] font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 pt-[70px]">
          <div className="max-w-[820px]">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
              Our Story
            </div>
            <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-5 text-[var(--text-main)] max-[768px]:text-[2rem]">
              Why Eddinet Exists
            </h2>
            <p className="text-[var(--text-muted)] text-[1.08rem] leading-[1.85] mb-5">
              Businesses rarely need one isolated digital service. They need the right combination of
              visibility, acquisition, conversion, technology and ongoing operations. Eddinet brings these
              capabilities together so marketing and technology can support the same business objective.
            </p>
            <p className="text-[var(--text-muted)] text-[1.05rem] leading-[1.85] mb-8">
              Search visibility connects with content and paid media; campaigns connect with high-converting
              websites and eCommerce platforms; applications and software connect with cloud infrastructure
              and DevOps; and every digital asset stays supported after launch. Our approach is outcome-led:
              understand the business, identify the growth constraint, select the right services, build the
              required systems, measure performance and continuously improve.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10 max-[768px]:grid-cols-1">
            {whyFeatures.map((f, i) => (
              <div
                key={i}
                className="relative p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1"
              >
                <div className="absolute -top-3 -right-2 text-[4rem] font-extrabold leading-none opacity-[0.06] select-none">
                  {f.num}
                </div>
                <div className="w-12 h-12 rounded-xl bg-[var(--tag-bg)] border border-[var(--tag-border)] flex items-center justify-center text-[1.2rem] mb-4">
                  {["🧩", "📈", "🔁", "📊", "🎯", "🌱"][i]}
                </div>
                <h3 className="text-[1.12rem] font-bold text-[var(--text-main)] mb-2">{f.title}</h3>
                <p className="text-[var(--text-muted)] text-[0.9rem] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
              How We Work
            </div>
            <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[2rem]">
              Why Clients Stay With Eddinet
            </h2>
            <p className="text-[var(--text-muted)] text-[1.1rem] max-w-[650px] mx-auto">
              Every engagement runs on the same outcome-led process across marketing and technology.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[30px] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
            {processSteps.map((s, i) => (
              <div
                key={i}
                className="relative p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute -top-3 -right-2 text-[4.5rem] font-extrabold leading-none opacity-[0.06] select-none">
                  {s.num}
                </div>
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-[1.05rem] font-extrabold mb-4 text-[var(--on-primary)] shadow-[0_8px_25px_rgba(var(--accent-rgb),0.25)]"
                  style={{ background: "var(--primary-gradient)" }}
                >
                  {s.num}
                </div>
                <h3 className="text-[1.15rem] font-bold text-[var(--text-main)] mb-2.5">{s.title}</h3>
                <p className="text-[var(--text-muted)] text-[0.92rem] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
              Expertise Across Roles
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              The Team Behind the <span className="gradient-text">System</span>
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-6 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
            {team.map((t, i) => (
              <div
                key={i}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-md)] p-6 text-center transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-full mx-auto flex items-center justify-center font-extrabold text-[0.95rem] text-[var(--on-primary)] mb-4"
                  style={{ background: "var(--primary-gradient)" }}
                >
                  {t.role.split(" ")[0][0]}
                  {t.role.split(" ")[1]?.[0] ?? t.role.split(" ")[0][1] ?? ""}
                </div>
                <div className="text-[0.95rem] font-bold text-[var(--text-main)] mb-1">{t.role}</div>
                <div className="text-[0.8rem] text-[var(--text-muted)]">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
              Industries We Serve
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              Solutions Built Around <span className="gradient-text">How Industries Buy</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind, i) => (
              <Link
                key={i}
                href={`/industries/${ind.slug}`}
                className="inline-flex items-center gap-2 py-2.5 px-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] text-[0.9rem] font-semibold transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-0.5 no-underline"
              >
                <span className="text-[1rem]">{ind.icon}</span>
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
              What Clients Say
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 max-[768px]:grid-cols-1">
            {testimonials.slice(0, 2).map((t, i) => (
              <div
                key={i}
                className="testimonial-quotes bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-8 relative transition-all duration-300 hover:border-[var(--hover-line)] hover:-translate-y-1"
              >
                <p className="text-[var(--text-muted)] text-[0.95rem] leading-[1.7] italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="bg-[var(--stat-box-bg)] border border-dashed border-[rgba(var(--accent-rgb),0.3)] rounded-[var(--radius-sm)] px-4 py-3 mb-5">
                  <div className="text-[0.72rem] uppercase tracking-wider text-[var(--main-accent)] font-bold mb-0.5">
                    {t.service}
                  </div>
                  <div className="text-[0.85rem] text-[var(--text-main)] font-semibold">{t.outcome}</div>
                </div>
                <div className="flex items-center gap-3.5 pt-5 border-t border-[var(--border-color)]">
                  <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center font-extrabold text-[0.85rem] text-[var(--on-primary)] shrink-0" style={{ background: "var(--primary-gradient)" }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[0.95rem] font-bold text-[var(--text-main)]">{t.name}</div>
                    <div className="text-[0.8rem] text-[var(--text-dim)]">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[100px]">
        <div className="max-w-[var(--container-max)] mx-auto px-5">
          <div className="rounded-3xl border border-[rgba(var(--accent-rgb),0.3)] py-[56px] px-8 text-center relative overflow-hidden" style={{ background: "var(--cta-bg)" }}>
            <h2 className="text-[2.2rem] font-extrabold mb-3 text-[var(--text-main)] max-[768px]:text-[1.7rem]">
              Let&apos;s Build Your Digital Growth System
            </h2>
            <p className="text-[1.05rem] text-[var(--text-muted)] max-w-[560px] mx-auto mb-7">
              Book a free 30-minute consultation to understand what&apos;s constraining your growth and how
              we&apos;d approach it.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
                style={{ background: "var(--primary-gradient)" }}
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}