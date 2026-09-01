import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { NewsletterForm, LiveStatus, BackToTop } from "@/components/footer-extras";

const keyServices = services.filter((s) =>
  ["seo", "ads-ppc", "social-media-marketing", "web-development", "ecommerce", "software-ai", "mobile-app-development", "cloud-devops"].includes(s.slug)
);

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

const socials = [
  { label: "X", handle: "Twitter", href: site.social.twitter },
  { label: "LinkedIn", handle: "LinkedIn", href: site.social.linkedin },
  { label: "Facebook", handle: "Facebook", href: site.social.facebook },
  { label: "Instagram", handle: "Instagram", href: site.social.instagram },
  { label: "YouTube", handle: "YouTube", href: site.social.youtube },
];

const icons: Record<string, string> = {
  X: "𝕏",
  LinkedIn: "in",
  Facebook: "f",
  Instagram: "◉",
  YouTube: "▶",
};

export default function Footer() {
  return (
    <footer className="relative bg-[var(--footer-bg)] text-[var(--chrome-text)] pt-[0px] pb-[30px] mt-[60px] overflow-hidden">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(var(--accent-rgb),0.6)] to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-30%] left-[-10%] w-[520px] h-[520px] rounded-full bg-[rgba(var(--accent-rgb),0.07)] blur-3xl" />
        <div className="absolute bottom-[-35%] right-[-12%] w-[560px] h-[560px] rounded-full bg-[var(--purple-accent)]/12 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[var(--container-max)] mx-auto px-5">

        <div className="border-b border-white/[0.06] py-[64px] grid grid-cols-[1.1fr_0.9fr] gap-10 items-center max-[1024px]:grid-cols-1">
          <div>
            <div className="inline-flex items-center gap-2 py-1.5 px-3.5 mb-4 rounded-full text-[0.72rem] font-bold uppercase tracking-widest border bg-white/[0.03] border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-accent)] animate-pulse" />
              <span className="text-[var(--main-accent)]">Growth Insights, Monthly</span>
            </div>
            <h3 className="text-[2rem] font-extrabold leading-[1.2] mb-2 max-[768px]:text-[1.6rem]">
              Get the playbooks we ship to <span className="gradient-text">growth clients</span>
            </h3>
            <p className="text-[var(--chrome-text-muted)] text-[0.98rem] max-w-[520px]">
              One practical email a month - no fluff, no spam. How to rank, convert and scale with the
              systems Eddinet actually runs.
            </p>
          </div>
          <div className="max-w-[480px] justify-self-end w-full max-[1024px]:justify-self-start">
            <NewsletterForm />
            <p className="text-[var(--chrome-text-muted)] text-[0.8rem] mt-3 flex items-center gap-2">
              <span className="text-[var(--green-accent)]">✓</span> Practical, no fluff · Unsubscribe anytime
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10 py-[64px] max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
          <div className="col-span-4 max-[1024px]:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image src="/eddinet-logo.png" alt="Eddinet" width={320} height={88} className="h-[80px] w-auto object-contain" />
            </Link>
            <p className="text-[var(--chrome-text-muted)] text-[0.95rem] leading-relaxed mt-5 max-w-[340px]">
              {site.tagline}. We design, build and run the systems that grow businesses - from
              visibility to software.
            </p>

            <div className="flex items-center gap-2 mt-6">
              <span className="text-[#FACC15] text-[0.9rem] tracking-tight">★</span>
              <span className="text-white/70 text-[0.85rem] font-semibold">Outcome-led digital growth partner</span>
              <span className="text-white/35 text-[0.8rem]">· Delhi NCR</span>
            </div>

            <div className="flex items-center gap-2.5 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.handle}
                  className="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[0.95rem] font-bold text-white/70 transition-all duration-300 hover:-translate-y-[3px] hover:text-[var(--on-primary)] hover:border-transparent hover:[background:var(--primary-gradient)] no-underline"
                >
                  {icons[s.label]}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-3 max-[1024px]:col-span-1">
            <h4 className="flex items-center gap-2 text-[0.82rem] font-extrabold uppercase tracking-[0.15em] text-[var(--chrome-text-muted)] mb-6">
              <span className="w-1 h-4 rounded-full" style={{ background: "var(--primary-gradient)" }} />
              Services
            </h4>
            <ul className="flex flex-col gap-3.5">
              {keyServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-2 text-[0.92rem] text-[var(--chrome-text-muted)] transition-all duration-300 hover:text-[var(--main-accent)] no-underline hover:translate-x-1"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[var(--main-accent)]">→</span>
                    {s.footerLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="group flex items-center gap-2 text-[0.92rem] font-bold text-[var(--main-accent)] no-underline hover:translate-x-1 transition-all duration-300">
                  <span>→</span> View all services
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 max-[1024px]:col-span-1">
            <h4 className="flex items-center gap-2 text-[0.82rem] font-extrabold uppercase tracking-[0.15em] text-[var(--chrome-text-muted)] mb-6">
              <span className="w-1 h-4 rounded-full" style={{ background: "var(--primary-gradient)" }} />
              Company
            </h4>
            <ul className="flex flex-col gap-3.5">
              {companyLinks.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="group flex items-center gap-2 text-[0.92rem] text-[var(--chrome-text-muted)] transition-all duration-300 hover:text-[var(--main-accent)] no-underline hover:translate-x-1"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[var(--main-accent)]">→</span>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-3 max-[1024px]:col-span-2">
            <h4 className="flex items-center gap-2 text-[0.82rem] font-extrabold uppercase tracking-[0.15em] text-[var(--chrome-text-muted)] mb-6">
              <span className="w-1 h-4 rounded-full" style={{ background: "var(--primary-gradient)" }} />
              Talk to Us
            </h4>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 mb-4">
              <p className="text-white/55 text-[0.8rem] mb-0.5">📍 {site.address}</p>
              <LiveStatus />
            </div>

            <div className="flex flex-col gap-2.5 mb-4">
              {site.phones.map((ph) => (
                <a
                  key={ph}
                  href={`tel:${ph.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2.5 text-[0.95rem] font-semibold text-[var(--chrome-text-muted)] hover:text-[var(--main-accent)] transition-colors duration-300 no-underline"
                >
                  <span className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[0.8rem]">☎</span>
                  {ph}
                </a>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 text-[0.95rem] font-semibold text-[var(--chrome-text-muted)] hover:text-[var(--main-accent)] transition-colors duration-300 no-underline"
              >
                <span className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[0.8rem]">✉</span>
                {site.email}
              </a>
            </div>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 py-3 px-5 rounded-full font-bold text-[0.9rem] no-underline transition-all duration-300 bg-[#25D366] text-white hover:bg-[#20ba5a] hover:-translate-y-[2px] shadow-[0_10px_30px_rgba(37,211,102,0.25)]"
            >
              <span className="text-[1.05rem]">WhatsApp</span> →
            </a>
          </div>
        </div>

        <div className="border-y border-white/[0.06] py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34D399]" />
            </span>
            <span className="text-[0.85rem] font-bold text-white/80">Digital growth partner</span>
            <span className="text-white/30 text-[0.8rem]">· marketing · technology · infrastructure</span>
          </div>
          <div className="flex items-center gap-3 text-white/35 text-[0.8rem]">
            <span>New Delhi, IN</span>
            <span className="w-1 h-1 rounded-full bg-white/25" />
            <span>Mon – Sat</span>
            <span className="w-1 h-1 rounded-full bg-white/25" />
            <span>10:00 – 19:00 IST</span>
          </div>
        </div>

        <div aria-hidden className="relative select-none pointer-events-none text-center leading-none pt-[64px] overflow-hidden">
          <div
            className="text-[clamp(3.5rem,13vw,11rem)] font-extrabold tracking-tight"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.06)",
              color: "transparent",
            }}
          >
            EDDINET
          </div>
        </div>

        <div className="mt-[30px] pt-5 flex items-center justify-between gap-4 flex-wrap text-white/35 text-[0.82rem]">
          <div>© 2026 {site.name}. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="no-underline text-white/35 hover:text-[var(--main-accent)] transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/terms" className="no-underline text-white/35 hover:text-[var(--main-accent)] transition-colors duration-300">
              Terms
            </Link>
            <span className="flex items-center gap-1.5">
              Made with <span className="text-[var(--main-accent)]">♥</span> in New Delhi
            </span>
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}