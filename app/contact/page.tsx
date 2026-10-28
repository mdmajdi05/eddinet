import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import AdaptiveLines from "@/components/AdaptiveLines";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/data/site/contact";
import { balancedGrid } from "@/lib/process-grid";
import { socialMetadata } from "@/lib/social-metadata";

export const metadata: Metadata = {
  title: "Contact Eddinet | Talk to Our Digital Marketing Team",
  description:
    "Have a project in mind? Contact Eddinet for SEO, PPC, web and app development. Share your goals and our team will get back to you shortly.",
  alternates: { canonical: "https://eddinet.com/contact" },
  ...socialMetadata({
    title: "Contact Eddinet | Talk to Our Digital Marketing Team",
    description:
      "Have a project in mind? Contact Eddinet for SEO, PPC, web and app development. Share your goals and our team will get back to you shortly.",
    url: "https://eddinet.com/contact",
  }),
};

const socialLinks = [
  { label: "Instagram", href: site.social.instagram },
  { label: "Facebook", href: site.social.facebook },
  { label: "LinkedIn", href: site.social.linkedin },
].filter((s): s is { label: string; href: string } => s.href !== "");

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
    note: site.hours,
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
  ...(socialLinks.length
    ? [
        {
          icon: "🌐",
          title: "Follow Us",
          lines: [
            <div key="soc" className="flex flex-wrap gap-2 pt-0.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-color)] text-[0.82rem] font-semibold text-[var(--text-main)] hover:text-[var(--main-accent)] hover:border-[rgba(var(--accent-rgb),0.5)] transition-colors duration-300 no-underline"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>,
          ],
          note: "Follow our work and growth playbooks",
        },
      ]
    : []),
];

const steps = [
  ["You share your goals", "Tell us where your business is growing and what's in the way."],
  ["We diagnose the constraint", "We look at visibility, conversion, technology and operations to find the true bottleneck."],
  ["You get a clear plan", "A recommended combination of services, priorities and expected outcomes - no jargon."],
];

//  Contact page ka schema — pehle ye page par KOI JSON-LD nahi tha.
//  Local SEO / "Delhi NCR" map pack ke liye ContactPoint + ContactPage
//  + ProfessionalService zaroori hota hai.
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Eddinet",
  description:
    "Talk to Eddinet for a free 30-minute growth consultation - SEO, AI SEO, paid media, web, software, AI and cloud services from Delhi NCR.",
  url: "https://eddinet.com/contact",
  mainEntity: {
    "@type": "ProfessionalService",
    "@id": `${site.url}#organization`,
    name: site.name,
    description: site.tagline,
    url: site.url,
    logo: "https://eddinet.com/images/brand/eddinet-logo.webp",
    image: "https://eddinet.com/opengraph-image.webp",
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...site.postalAddress,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Delhi NCR" },
      { "@type": "Country", name: "India" },
    ],
    // Geo coordinates map pin se match karte hain (Okhla Phase I, New Delhi).
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.531672,
      longitude: 77.274183,
    },
    hasMap: "https://www.google.com/maps/search/?api=1&query=Okhla+Industrial+Estate+Phase+1%2C+New+Delhi%2C+Delhi+110020",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        email: site.email,
        contactType: "sales",
        areaServed: ["Delhi NCR", "India"],
        availableLanguage: ["en", "hi"],
      },
    ],
    sameAs: [
      site.social.linkedin,
      site.social.facebook,
      site.social.instagram,
    ].filter(Boolean),
  },
};

export default function ContactPage() {
  const stepsGrid = balancedGrid(steps.length, {
    base: 3,
    gapClass: "cgrid-gap-6",
    stages: [{ bp: 768, maxCols: 1 }],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <section className="relative pt-[150px] pb-[60px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-25%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--main-accent)]/8 blur-3xl" />
        </div>
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10 text-center">
          <Breadcrumbs
            className="mb-5 justify-center"
            items={[
              { label: "Home", href: "/" },
              { label: "Contact Us" },
            ]}
          />
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-5">
            Contact Us
          </div>
          <h1 className="text-[3rem] font-extrabold leading-[1.13] mb-5 text-[var(--text-main)] max-[768px]:text-[2.15rem]">
            Let&apos;s Build Your <span className="gradient-text">Growth System</span>
          </h1>
          <AdaptiveLines
            className="text-[var(--text-muted)] text-[1.12rem] leading-relaxed max-w-[680px] mx-auto mb-9"
            text="Tell us about your business and the outcome you're chasing. In a free 30-minute consultation we'll identify your growth constraint and show you how marketing and technology can work as one system."
          />
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

      {/* =========================================================
          MAP — Google Maps embed (Eddinet, Okhla, New Delhi)
          Local SEO ke liye important: page ka apna physical location
          visible hona chahiye + "Get directions" link.
          Coordinates layout ke `geo.position` meta se match karti hain.
          ========================================================= */}
      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="grid grid-cols-[0.85fr_1.15fr] gap-8 items-center max-[1024px]:grid-cols-1">
            <div>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-4">
                Find Us
              </div>
              <h2 className="text-[2.1rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[1.7rem]">
                Visit Our <span className="gradient-text">Okhla Office</span>
              </h2>
              <p className="text-[var(--text-muted)] text-[1rem] leading-relaxed mb-5">
                {site.address}
              </p>
              <p className="text-[var(--text-dim)] text-[0.88rem] mb-6">
                {site.addressNote} · {site.hours}
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Okhla+Industrial+Estate+Phase+1%2C+New+Delhi%2C+Delhi+110020"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.92rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
                style={{ background: "var(--primary-gradient)" }}
              >
                🗺️ Get Directions
              </a>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.45)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.9027761721527!2d77.27418345935152!3d28.531672483757887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce179b9bda92f%3A0x4b88e3485182808!2sEddinet%20%7C%20Digital%20Marketing%20Agency%20in%20Delhi!5e0!3m2!1sen!2sin!4v1792579234819!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Eddinet office location on Google Maps - Okhla Industrial Estate Phase 1, New Delhi"
                className="w-full h-full min-h-[320px] max-[768px]:min-h-[260px] block"
              />
            </div>
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
          <div className={stepsGrid}>
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