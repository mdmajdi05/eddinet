import type { Metadata } from "next";
import Link from "next/link";
import ServicesExplorer from "@/components/ServicesExplorer";
import { servicePages } from "@/data/services";

export const metadata: Metadata = {
  title: "Digital Growth, Marketing & Technology Services in Delhi NCR",
  description:
    "Explore Eddinet's services - SEO & AI SEO, social media, ads & PPC, content, design, web, eCommerce, mobile apps, software & AI, cloud & DevOps, hosting, maintenance and reputation management.",
  alternates: { canonical: "https://eddinet.com/services" },
};

const totalCapabilities = servicePages.reduce((n, s) => n + s.allItems.length, 0);

export default function ServicesIndexPage() {
  return (
    <>
      <section className="relative pt-[150px] pb-[70px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-25%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--main-accent)]/8 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-12%] w-[500px] h-[500px] rounded-full bg-[var(--purple-accent)]/8 blur-3xl" />
        </div>
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
          <div className="text-center max-w-[820px] mx-auto">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-5">
              Our Services
            </div>
            <h1 className="text-[3rem] font-extrabold leading-[1.13] mb-5 text-[var(--text-main)] max-[768px]:text-[2.15rem]">
              One Growth System, <span className="gradient-text">Thirteen Capabilities</span>
            </h1>
            <p className="text-[var(--text-muted)] text-[1.12rem] leading-relaxed max-w-[680px] mx-auto mb-10">
              Visibility, acquisition, conversion, technology and operations - engineered to work as one
              connected system for your business, not a menu of isolated services.
            </p>
            <div className="flex items-center justify-center gap-10 max-[600px]:flex-col max-[600px]:gap-4">
              <div>
                <strong className="block text-[1.6rem] font-extrabold gradient-text">13</strong>
                <span className="text-sm text-[var(--text-dim)]">Capability areas</span>
              </div>
              <div className="w-px h-10 bg-[var(--border-color)] max-[600px]:w-24 max-[600px]:h-px" />
              <div>
                <strong className="block text-[1.6rem] font-extrabold gradient-text">{totalCapabilities}+</strong>
                <span className="text-sm text-[var(--text-dim)]">Sub-services</span>
              </div>
              <div className="w-px h-10 bg-[var(--border-color)] max-[600px]:w-24 max-[600px]:h-px" />
              <div>
                <strong className="block text-[1.6rem] font-extrabold gradient-text">6</strong>
                <span className="text-sm text-[var(--text-dim)]">Outcome-led process steps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <ServicesExplorer />
        </div>
      </section>

      <section className="pb-[100px]">
        <div className="max-w-[var(--container-max)] mx-auto px-5">
          <div className="grid grid-cols-3 gap-6 max-[768px]:grid-cols-1">
            {[
              {
                icon: "🎯",
                title: "Start with the outcome",
                desc: "Tell us what you want to achieve - leads, transactions, retention or efficiency - and we'll recommend only the capabilities that move that number.",
              },
              {
                icon: "🔗",
                title: "Everything works as one system",
                desc: "SEO connects with content and paid media; campaigns connect with high-converting websites; software and AI connect with cloud and DevOps. No hand-offs, no gaps.",
              },
              {
                icon: "📅",
                title: "Free 30-minute consultation",
                desc: "A no-commitment call to identify your growth constraint, understand what's blocking it, and agree the right combination of services to fix it.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(var(--accent-rgb),0.12)] flex items-center justify-center text-[1.35rem] mb-4">
                  {f.icon}
                </div>
                <h2 className="text-[1.15rem] font-bold text-[var(--text-main)] mb-2">{f.title}</h2>
                <p className="text-[var(--text-muted)] text-[0.9rem] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-[rgba(var(--accent-rgb),0.3)] py-[54px] px-8 text-center relative overflow-hidden" style={{ background: "var(--cta-bg)" }}>
            <h2 className="text-[2.2rem] font-extrabold mb-3 text-[var(--text-main)] max-[768px]:text-[1.7rem]">
              Not Sure Which Services Your Business Needs?
            </h2>
            <p className="text-[1.05rem] text-[var(--text-muted)] max-w-[560px] mx-auto mb-7">
              Most businesses need a combination, not a single service. Start with a free 30-minute call and get a clear recommendation.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
                style={{ background: "var(--primary-gradient)" }}
              >
                Talk to a Digital Growth Expert
              </Link>
              <a
                href="https://wa.me/917042840441"
                target="_blank"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] hover:-translate-y-[3px]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}