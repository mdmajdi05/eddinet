import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services/services";
import { site } from "@/data/site/contact";
import { IMG } from "@/data/site/images";
import { NewsletterForm, LiveStatus, BackToTop } from "@/components/footer-extras";

const keyServices = services.filter((s) =>
  ["seo", "ads-ppc", "social-media-marketing", "web-development", "ecommerce", "software-ai", "mobile-app-development", "cloud-devops"].includes(s.slug)
);

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Sitemap", href: "/sitemap-html" },
];

const socials = [
  { label: "LinkedIn", handle: "LinkedIn", href: site.social.linkedin },
  { label: "Facebook", handle: "Facebook", href: site.social.facebook },
  { label: "Instagram", handle: "Instagram", href: site.social.instagram },
  { label: "X", handle: "Twitter", href: site.social.twitter },
  { label: "YouTube", handle: "YouTube", href: site.social.youtube },
  // Jo link set nahi hai (empty) wo render hi mat karo - warna href="#" dead link banega
].filter((s) => Boolean(s.href));

// Proper brand glyphs (official Simple Icons paths) — pehle text/emoji the
// (in, f, ◉, 𝕏, ▶) jo platforms se relate nahi karte the.
const SOCIAL_PATHS: Record<string, string> = {
  LinkedIn:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  Facebook:
    "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  Instagram:
    "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
  X: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  YouTube:
    "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
};

function SocialIcon({ label }: { label: string }) {
  const d = SOCIAL_PATHS[label];
  if (!d) return null;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

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
              <Image src={IMG.brand.eddinetLogo.src} alt="Eddinet" width={320} height={88} className="h-[80px] w-auto object-contain" />
            </Link>
            <p className="text-[var(--chrome-text-muted)] text-[0.95rem] leading-relaxed mt-5 max-w-[340px]">
              {site.tagline}. We design, build and run the systems that grow businesses - from
              visibility to software.
            </p>

            <div className="flex items-center gap-2 mt-6">
              <span className="text-[#FACC15] text-[0.9rem] tracking-tight">★</span>
              <span className="text-white/70 text-[0.85rem] font-semibold">Outcome-led digital growth partner</span>
              <span className="text-white/60 text-[0.8rem]">· Delhi NCR</span>
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
                  <SocialIcon label={s.label} />
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

        <div className="border-y border-white/[0.06] py-5 flex items-center justify-between gap-4 flex-wrap max-[768px]:flex-col max-[768px]:items-start">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34D399]" />
              </span>
              <span className="text-[0.85rem] font-bold text-white/80">Digital growth partner</span>
              <span className="text-white/60 text-[0.8rem]">· marketing · technology · infrastructure</span>
            </div>
            <div className="flex items-center gap-3 text-white/60 text-[0.8rem]">
              <span>New Delhi, IN</span>
              <span className="w-1 h-1 rounded-full bg-white/25" />
              <span>Mon – Sat</span>
              <span className="w-1 h-1 rounded-full bg-white/25" />
              <span>10:00 – 19:00 IST</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 max-[768px]:items-start">
            <div className="text-white/60 text-[0.82rem]">© 2026 {site.name}. All rights reserved.</div>
            <div className="flex items-center gap-5 text-white/60 text-[0.82rem]">
              <Link href="/privacy-policy" className="no-underline text-white/60 hover:text-[var(--main-accent)] transition-colors duration-300">
                Privacy
              </Link>
              <Link href="/terms" className="no-underline text-white/60 hover:text-[var(--main-accent)] transition-colors duration-300">
                Terms
              </Link>
              <span className="flex items-center gap-1.5">
                Made with <span className="text-[var(--main-accent)]">♥</span> in New Delhi
              </span>
              <BackToTop />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}