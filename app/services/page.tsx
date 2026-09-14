import type { Metadata } from "next";
import Link from "next/link";
import ServicesExplorer from "@/components/ServicesExplorer";
import ContactForm from "@/components/ContactForm";
import { servicePages } from "@/data/services";
import { processSteps } from "@/data/home";

export const metadata: Metadata = {
  title: "Digital Growth, Marketing & Technology Services in Delhi NCR",
  description:
    "Explore Eddinet's services - SEO & AI SEO, social media, ads & PPC, content, design, web, eCommerce, mobile apps, software & AI, cloud & DevOps, hosting, maintenance and reputation management.",
  alternates: { canonical: "https://eddinet.com/services" },
};

const totalCapabilities = servicePages.reduce((n, s) => n + s.allItems.length, 0);

const catLabel = (cat: string) =>
  servicePages.find((s) => s.cat === cat)?.tabLabel ?? cat;

const systemLayers = [
  {
    icon: "📈",
    title: "Marketing & Visibility",
    desc: "Get found by the right audience and build demand - search, social, paid media and content working on one strategy.",
    cats: ["seo", "social", "ads", "content"],
    accent: "#00F2FE",
  },
  {
    icon: "🎨",
    title: "Design & Conversion",
    desc: "Turn attention into action - brand, creative and websites engineered to convert and built to be SEO-ready from day one.",
    cats: ["design", "web", "ecommerce"],
    accent: "#F472B6",
  },
  {
    icon: "🤖",
    title: "Technology & Infrastructure",
    desc: "The software, apps and cloud systems that carry your business - custom products, AI and reliable, scalable infrastructure.",
    cats: ["mobile", "software", "cloud", "hosting"],
    accent: "#A78BFA",
  },
  {
    icon: "🛡️",
    title: "Support & Reputation",
    desc: "Protect and maintain what you've built - ongoing maintenance, monitoring and reputation that keeps trust compounding.",
    cats: ["maintenance", "reputation"],
    accent: "#34D399",
  },
];

const howToStart = [
  {
    num: "01",
    icon: "🎯",
    title: "Start with the outcome",
    desc: "Tell us what you want to achieve - leads, transactions, retention or efficiency. We recommend only the capabilities that move that number.",
  },
  {
    num: "02",
    icon: "🔗",
    title: "Everything works as one system",
    desc: "SEO connects with content and paid media, campaigns connect with high-converting websites, and software and AI connect with cloud and DevOps. No hand-offs, no gaps.",
  },
  {
    num: "03",
    icon: "📅",
    title: "Free 30-minute consultation",
    desc: "A no-commitment call to identify your growth constraint, understand what's blocking it, and agree the right combination of services to fix it.",
  },
];

export default function ServicesIndexPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative pt-[150px] pb-[70px] overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-[-25%] left-[-10%] w-[520px] h-[520px] rounded-full bg-[var(--main-accent)]/10 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-12%] w-[520px] h-[520px] rounded-full bg-[var(--purple-accent)]/10 blur-3xl" />
        </div>

        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
          <div className="text-center max-w-[880px] mx-auto">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-6">
              Our Services
            </div>

            <h1 className="text-[clamp(2.6rem,5.2vw,4.2rem)] font-extrabold leading-[1.08] mb-6 text-[var(--text-main)]">
              One Growth System,{" "}
              <span className="gradient-text">Thirteen Capabilities</span>
            </h1>

            <p className="text-[var(--text-muted)] text-[1.15rem] leading-relaxed max-w-[700px] mx-auto mb-9">
              Visibility, acquisition, conversion, technology and operations -
              engineered to work as one connected system for your business, not
              a menu of isolated services.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full font-bold text-[0.98rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
                style={{ background: "var(--primary-gradient)" }}
              >
                Get a Free Growth Plan
              </Link>
              <Link
                href="#explore"
                className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full font-bold text-[0.98rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]"
              >
                Explore All Capabilities
              </Link>
            </div>

            <div className="flex items-center justify-center gap-12 max-[600px]:flex-col max-[600px]:gap-5">
              <div>
                <strong className="block text-[2rem] font-extrabold gradient-text leading-none">13</strong>
                <span className="text-sm text-[var(--text-dim)] mt-1 block">Capability areas</span>
              </div>
              <div className="w-px h-12 bg-[var(--border-color)] max-[600px]:w-28 max-[600px]:h-px" />
              <div>
                <strong className="block text-[2rem] font-extrabold gradient-text leading-none">{totalCapabilities}+</strong>
                <span className="text-sm text-[var(--text-dim)] mt-1 block">Sub-services</span>
              </div>
              <div className="w-px h-12 bg-[var(--border-color)] max-[600px]:w-28 max-[600px]:h-px" />
              <div>
                <strong className="block text-[2rem] font-extrabold gradient-text leading-none">6</strong>
                <span className="text-sm text-[var(--text-dim)] mt-1 block">Process steps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SYSTEM LAYERS ================= */}
      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-[2.3rem] font-extrabold leading-[1.12] mb-3 text-[var(--text-main)] max-[768px]:text-[1.8rem]">
              One System, <span className="gradient-text">Four Layers</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[620px] mx-auto">
              Every service fits into a connected growth system - each layer
              feeds the next, so nothing operates in isolation.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-5 max-[1050px]:grid-cols-2 max-[600px]:grid-cols-1">
            {systemLayers.map((layer, i) => (
              <div
                key={layer.title}
                className="group relative p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-300 hover:border-[rgba(var(--accent-rgb),0.35)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(var(--accent-rgb),0.1)]"
              >
                <div
                  className="absolute top-0 left-0 h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${layer.accent}, transparent)` }}
                />
                <span className="absolute top-5 right-6 text-[0.8rem] font-extrabold text-[var(--text-dim)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[var(--tag-bg)] border border-[var(--tag-border)] flex items-center justify-center text-[1.35rem] mb-5 transition-transform duration-300 group-hover:scale-110">
                  {layer.icon}
                </div>
                <h3 className="text-[1.15rem] font-extrabold text-[var(--text-main)] mb-2">{layer.title}</h3>
                <p className="text-[var(--text-muted)] text-[0.88rem] leading-relaxed mb-5">{layer.desc}</p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {layer.cats.map((c) => (
                    <span
                      key={c}
                      className="py-1 px-2.5 rounded-lg bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[0.7rem] font-semibold text-[var(--main-accent)]"
                    >
                      {catLabel(c)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPLORER ================= */}
      <section
        id="explore"
        className="border-y border-[var(--border-color)] bg-[var(--bg-card)] py-[90px] scroll-mt-20"
      >
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-5">
              The Full Capability Map
            </div>
            <h2 className="text-[2.3rem] font-extrabold leading-[1.12] mb-3 text-[var(--text-main)] max-[768px]:text-[1.8rem]">
              Explore Every <span className="gradient-text">Capability Area</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[640px] mx-auto">
              Pick a layer or jump straight into a capability to see exactly
              what we build inside it.
            </p>
          </div>
          <ServicesExplorer />
        </div>
      </section>

      {/* ================= HOW TO START ================= */}
      <section className="py-[90px]">
        <div className="max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-5">
              How to Start
            </div>
            <h2 className="text-[2.3rem] font-extrabold leading-[1.12] mb-3 text-[var(--text-main)] max-[768px]:text-[1.8rem]">
              Simple to Begin, <span className="gradient-text">Built to Last</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 max-[768px]:grid-cols-1">
            {howToStart.map((f) => (
              <div
                key={f.num}
                className="relative p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1"
              >
                <span className="absolute top-6 right-7 text-[2rem] font-extrabold text-[rgba(var(--accent-rgb),0.12)]">
                  {f.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[rgba(var(--accent-rgb),0.12)] flex items-center justify-center text-[1.35rem] mb-4">
                  {f.icon}
                </div>
                <h3 className="text-[1.15rem] font-bold text-[var(--text-main)] mb-2">{f.title}</h3>
                <p className="text-[var(--text-muted)] text-[0.9rem] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section
        id="process"
        className="border-y border-[var(--border-color)] bg-[var(--bg-card)] py-[90px] scroll-mt-20"
      >
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-5">
              How It Works
            </div>
            <h2 className="text-[2.3rem] font-extrabold leading-[1.12] mb-3 text-[var(--text-main)] max-[768px]:text-[1.8rem]">
              From First Call to <span className="gradient-text">Compounding Growth</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[620px] mx-auto">
              Six steps, one consistent approach - so the system keeps improving
              long after the work ships.
            </p>
          </div>

          <div className="relative grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
            <div className="absolute top-9 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[rgba(var(--accent-rgb),0.35)] to-transparent hidden max-[900px]:hidden" />
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="group relative p-7 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-[var(--radius-lg)] transition-all duration-300 hover:border-[rgba(var(--accent-rgb),0.35)] hover:-translate-y-1.5"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-[0.95rem] font-extrabold text-[var(--on-primary)] shadow-[0_8px_25px_rgba(var(--accent-rgb),0.25)] transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "var(--primary-gradient)" }}
                  >
                    {step.num}
                  </div>
                  <div className="w-px h-10 bg-[var(--border-color)]" />
                  <span className="text-[0.78rem] font-bold text-[var(--text-dim)]">
                    Step {step.num}
                  </span>
                </div>
                <h3 className="text-[1.15rem] font-extrabold text-[var(--text-main)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--text-muted)] text-[0.9rem] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA + FORM ================= */}
      <section className="py-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="grid grid-cols-[1fr_0.95fr] gap-12 items-start max-[1024px]:grid-cols-1">
            <div>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-5">
                Free Consultation
              </div>
              <h2 className="text-[2.4rem] font-extrabold leading-[1.12] mb-4 text-[var(--text-main)] max-[768px]:text-[1.85rem]">
                Not Sure Which Services{" "}
                <span className="gradient-text">Your Business Needs?</span>
              </h2>
              <p className="text-[var(--text-muted)] text-[1.05rem] leading-relaxed mb-8 max-w-[540px]">
                Most businesses need a combination, not a single service. Start
                with a free 30-minute call and get a clear recommendation - with
                no commitment required.
              </p>

              <div className="flex flex-col gap-4 mb-9">
                {[
                  "Free 30-minute strategy call",
                  "Clear capability recommendation",
                  "No commitment, no obligation",
                  "Reply within 2 business hours",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[rgba(var(--accent-rgb),0.12)] flex items-center justify-center shrink-0">
                      <span className="text-[var(--main-accent)] text-[0.85rem] font-bold">✓</span>
                    </span>
                    <span className="text-[var(--text-main)] text-[0.98rem] font-semibold">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full font-bold text-[0.98rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
                  style={{ background: "var(--primary-gradient)" }}
                >
                  Talk to a Digital Growth Expert
                </Link>
                <a
                  href="https://wa.me/917042840441"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] hover:-translate-y-[3px]"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div
              className="relative rounded-[var(--radius-lg)] p-[1px] max-[1024px]:max-w-xl max-[1024px]:mx-auto"
              style={{ background: "var(--card-edge-gradient)" }}
            >
              <div className="rounded-[calc(var(--radius-lg)-1px)] overflow-hidden bg-[var(--panel-bg)]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}