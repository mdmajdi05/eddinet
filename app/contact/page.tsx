import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us - Talk to a Digital Growth Expert",
  description:
    "Contact Eddinet in Okhla, New Delhi for a free 30-minute growth consultation. Call, WhatsApp or submit the form - we respond within 2 business hours.",
  alternates: { canonical: "https://eddinet.com/contact" },
};

const channels = [
  {
    icon: "📱",
    title: "Call Us",
    lines: site.phones.map((p) => (
      <a
        key={p}
        href={`tel:${p.replace(/\s/g, "")}`}
        className="block text-[var(--text-main)] font-semibold text-[0.95rem] hover:text-[var(--main-accent)] transition-colors duration-300"
      >
        {p}
      </a>
    )),
    note: "Mon - Sat: 10:00 AM - 7:00 PM",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    lines: [
      <a
        key="wa"
        href={site.whatsapp}
        target="_blank"
        className="block text-[var(--text-main)] font-semibold text-[0.95rem] hover:text-[var(--main-accent)] transition-colors duration-300"
      >
        Chat with our team
      </a>,
    ],
    note: "Quick replies on business hours",
  },
  {
    icon: "✉️",
    title: "Email",
    lines: [
      <a
        key="mail"
        href={`mailto:${site.email}`}
        className="block text-[var(--text-main)] font-semibold text-[0.95rem] hover:text-[var(--main-accent)] transition-colors duration-300"
      >
        {site.email}
      </a>,
    ],
    note: "For proposals & project briefs",
  },
  {
    icon: "🏢",
    title: "Visit Us",
    lines: [
      <span key="addr" className="block text-[var(--text-main)] font-semibold text-[0.95rem]">
        {site.address}
      </span>,
    ],
    note: "Near ESI Hospital, Okhla Phase I",
  },
];

const steps = [
  ["You share your goals", "Tell us where your business is growing and what's in the way."],
  ["We diagnose the constraint", "We look at visibility, conversion, technology and operations to find the true bottleneck."],
  ["You get a clear plan", "A recommended combination of services, priorities and expected outcomes - no jargon."],
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-[150px] pb-[60px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-25%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--main-accent)]/8 blur-3xl" />
        </div>
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-5">
            Contact Us
          </div>
          <h1 className="text-[3rem] font-extrabold leading-[1.13] mb-5 text-[var(--text-main)] max-[768px]:text-[2.15rem]">
            Let&apos;s Build Your <span className="gradient-text">Growth System</span>
          </h1>
          <p className="text-[var(--text-muted)] text-[1.12rem] leading-relaxed max-w-[680px] mx-auto mb-9">
            Tell us about your business and the outcome you&apos;re chasing. In a free 30-minute consultation
            we&apos;ll identify your growth constraint and show you how marketing and technology can work as one
            system.
          </p>
          <div className="flex items-center justify-center gap-9 flex-wrap">
            {["Free 30-minute consultation", "Response within 2 business hours", "No commitment required"].map((f) => (
              <span key={f} className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-[var(--text-main)]">
                        <span className="w-5 h-5 rounded-full bg-[rgba(var(--accent-rgb),1)] text-white flex items-center justify-center text-[0.7rem] font-extrabold">
                  ✓
                </span>
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[100px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="grid grid-cols-[1.15fr_0.85fr] gap-8 items-start max-[1024px]:grid-cols-1">
            <ContactForm />

            <aside className="flex flex-col gap-6">
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-7">
                <h2 className="text-[1.15rem] font-extrabold text-[var(--text-main)] mb-5">
                  Talk to Us Directly
                </h2>
                <div className="flex flex-col">
                  {channels.map((ch, i) => (
                    <div key={ch.title} className={`flex gap-4 py-4 ${i !== channels.length - 1 ? "border-b border-[var(--border-color)]" : "pb-0"}`}>
                      <div className="w-11 h-11 rounded-xl bg-[rgba(var(--accent-rgb),1)] flex items-center justify-center text-[1.25rem] shrink-0">
                        {ch.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[0.75rem] uppercase tracking-wider text-[var(--text-dim)] font-bold mb-1">{ch.title}</div>
                        {ch.lines}
                        <div className="text-[0.78rem] text-[var(--text-dim)] mt-0.5">{ch.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.92rem] no-underline transition-all duration-300 bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] hover:-translate-y-[1px]"
                >
                  💬 Chat Now on WhatsApp
                </a>
              </div>

              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(var(--accent-rgb),1)] flex items-center justify-center text-[1.25rem] shrink-0">🕑</div>
                  <h2 className="text-[1.05rem] font-extrabold text-[var(--text-main)]">Office Hours</h2>
                </div>
                <p className="text-[var(--text-muted)] text-[0.92rem] mb-4">{site.hours}</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(var(--accent-rgb),1)] flex items-center justify-center text-[1.25rem] shrink-0">🏢</div>
                  <div>
                    <div className="text-[0.75rem] uppercase tracking-wider text-[var(--text-dim)] font-bold mb-0.5">Our Office</div>
                    <p className="text-[var(--text-main)] text-[0.92rem] font-semibold">{site.addressNote}</p>
                  </div>
                </div>
              </div>

              <div className="border border-[rgba(var(--accent-rgb),0.3)] rounded-2xl p-7" style={{ background: "var(--cta-bg)" }}>
                <h2 className="text-[1.05rem] font-extrabold text-[var(--text-main)] mb-2">
                  Prefer Help Choosing a Service First?
                </h2>
                <p className="text-[var(--text-muted)] text-[0.88rem] mb-4">
                  Explore the full range of capabilities, then come back with your shortlist.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full font-bold text-[0.85rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)]"
                >
                  View All Services →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-[100px] bg-[var(--strip-bg)] border-y border-[var(--border-color)] bg-none">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 pt-[60px]">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
              What Happens Next
            </div>
            <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
              How the <span className="gradient-text">Consultation</span> Works
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6 max-[768px]:grid-cols-1">
            {steps.map(([t, d], i) => (
              <div
                key={i}
                className="relative p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1"
              >
                <div className="absolute -top-3 -right-2 text-[4rem] font-extrabold leading-none opacity-[0.06] select-none">
                  0{i + 1}
                </div>
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-[1.05rem] font-extrabold mb-4 text-[var(--on-primary)]"
                  style={{ background: "var(--primary-gradient)" }}
                >
                  {i + 1}
                </div>
                <h3 className="text-[1.15rem] font-bold text-[var(--text-main)] mb-2">{t}</h3>
                <p className="text-[var(--text-muted)] text-[0.9rem] leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}