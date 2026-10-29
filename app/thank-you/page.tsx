import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/data/site/contact";

// Thank-you page sirf form submit ke baad dikhta hai — search results me
// iska koi value nahi (thin/duplicate content). Isliye noindex, lekin
// follow: true taaki link juice internal pages tak pahunche.
export const metadata: Metadata = {
  title: "Thank You - Request Received | Eddinet",
  description:
    "Thanks for reaching out to Eddinet. Your request is with our team - we respond within 2 business hours on working days.",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

const steps = [
  {
    title: "We review your brief",
    text: "Our strategists read every detail you shared - goals, current challenges and the services you're considering.",
  },
  {
    title: "We reach out within 2 hours",
    text: "A growth expert calls or messages you on WhatsApp to understand your business and book a free 30-minute consultation.",
  },
  {
    title: "You get a clear plan",
    text: "After the call you receive a recommended combination of services, priorities and expected outcomes - no jargon.",
  },
];

const quickLinks = [
  {
    href: "/services",
    label: "Explore Our Services",
    text: "SEO, paid media, web, software, AI and cloud - see how they work as one growth system.",
  },
  {
    href: "/case-studies",
    label: "Read Case Studies",
    text: "Real projects, real numbers - see the outcomes we've delivered for businesses like yours.",
  },
  {
    href: "/blog",
    label: "Browse Insights",
    text: "Practical playbooks on SEO, AI search, ads and conversion - read while you wait for our call.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      {/* ---------------------------------------------------------------
          HERO - confirmation
      --------------------------------------------------------------- */}
      <section className="relative pt-[150px] pb-[70px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-30%] right-[-10%] w-[520px] h-[520px] rounded-full bg-[var(--main-accent)]/8 blur-3xl" />
          <div className="absolute bottom-[-40%] left-[-10%] w-[420px] h-[420px] rounded-full bg-[var(--main-accent)]/5 blur-3xl" />
        </div>

        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10 text-center">
          <Breadcrumbs
            className="mb-5 justify-center"
            items={[{ label: "Home", href: "/" }, { label: "Thank You" }]}
          />

          <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-[2.3rem] text-white shadow-[0_15px_35px_-10px_rgba(var(--accent-rgb),0.6)]"
            style={{ background: "var(--primary-gradient)" }}
            aria-hidden
          >
            ✓
          </div>

          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-5">
            Request Received
          </div>

          <h1 className="text-[3rem] font-extrabold leading-[1.13] mb-5 text-[var(--text-main)] max-[768px]:text-[2.15rem]">
            Thank You - We&apos;ve Got Your <span className="gradient-text">Request</span>
          </h1>

          <p className="text-[var(--text-muted)] text-[1.12rem] leading-relaxed max-w-[680px] mx-auto mb-9">
            Your details are with the Eddinet team. A growth expert will reach out within
            2 business hours to understand your goals and show you the fastest path forward.
          </p>

          <div className="flex items-center justify-center gap-9 flex-wrap">
            {["Response within 2 business hours", "Mon - Sat, 10 AM - 7 PM", "No commitment required"].map((f) => (
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

      {/* ---------------------------------------------------------------
          WHAT HAPPENS NEXT
      --------------------------------------------------------------- */}
      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-[2rem] font-extrabold leading-[1.2] text-[var(--text-main)] max-[768px]:text-[1.6rem]">
              What Happens <span className="gradient-text">Next</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1"
              >
                <div aria-hidden="true" className="absolute -top-3 -right-2 text-[4rem] font-extrabold leading-none opacity-[0.06] select-none decorative-number" data-number={`0${i + 1}`} />
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-[1.05rem] font-extrabold mb-4 text-[var(--on-primary)]"
                  style={{ background: "var(--primary-gradient)" }}
                >
                  {i + 1}
                </div>
                <h3 className="text-[1.15rem] font-bold text-[var(--text-main)] mb-2">{step.title}</h3>
                <p className="text-[var(--text-muted)] text-[0.9rem] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          WHILE YOU WAIT - internal links (noindex page se bhi crawl path)
      --------------------------------------------------------------- */}
      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
              While You Wait
            </div>
            <h2 className="text-[2rem] font-extrabold leading-[1.2] text-[var(--text-main)] max-[768px]:text-[1.6rem]">
              Get a Head Start on Your <span className="gradient-text">Growth Plan</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] no-underline transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1"
              >
                <h3 className="text-[1.08rem] font-bold text-[var(--text-main)] mb-2 group-hover:text-[var(--main-accent)] transition-colors duration-300">
                  {link.label}
                </h3>
                <p className="text-[var(--text-muted)] text-[0.9rem] leading-relaxed mb-4">{link.text}</p>
                <span className="mt-auto text-[0.85rem] font-bold text-[var(--main-accent)]">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          DIRECT CONTACT - urgent queries
      --------------------------------------------------------------- */}
      <section className="pb-[100px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div
            className="border border-[rgba(var(--accent-rgb),0.3)] rounded-2xl p-8 max-[768px]:p-6"
            style={{ background: "var(--cta-bg)" }}
          >
            <div className="flex items-center justify-between gap-6 flex-wrap max-[768px]:justify-center max-[768px]:text-center">
              <div>
                <h2 className="text-[1.5rem] font-extrabold text-[var(--text-main)] mb-2 max-[768px]:text-[1.25rem]">
                  Need to Talk Right Now?
                </h2>
                <p className="text-[var(--text-muted)] text-[0.95rem] max-w-[560px]">
                  Your request is already with us - but if it&apos;s urgent, call or message us directly
                  and we&apos;ll pick it up immediately.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-wrap max-[768px]:justify-center">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-bold text-[0.88rem] no-underline transition-all duration-300 bg-[#25D366] text-[var(--whatsapp-on-green)] shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] hover:-translate-y-[1px]"
                >
                  💬 WhatsApp Us
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-bold text-[0.88rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)]"
                >
                  📱 {site.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-[var(--text-muted)] hover:text-[var(--main-accent)] no-underline transition-colors duration-300"
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
