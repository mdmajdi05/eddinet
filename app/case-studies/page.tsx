import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/portfolio/case-studies";
import { balancedGrid } from "@/lib/process-grid";
import AdaptiveLines from "@/components/AdaptiveLines";
import Breadcrumbs from "@/components/Breadcrumbs";
import { socialMetadata } from "@/lib/social-metadata";

export const metadata: Metadata = {
  title: "Case Studies | Eddinet Digital Marketing Results",
  description:
    "See how Eddinet helps brands grow through SEO, paid media, content and web. Read our case studies and what we did for each client.",
  alternates: { canonical: "https://eddinet.com/case-studies" },
  ...socialMetadata({
    title: "Case Studies | Eddinet Digital Marketing Results",
    description:
      "See how Eddinet helps brands grow through SEO, paid media, content and web. Read our case studies and what we did for each client.",
    url: "https://eddinet.com/case-studies",
  }),
};

// COLLECTIONPAGE + ITEMLIST SCHEMA
// Case studies page ek collection hai - har case study apni detail page se
// linked hai. List abhi khaali bhi ho sakti hai (jab tak verified case
// studies publish nahi hote), isliye itemListElement map se banti hai:
// empty list par bhi valid JSON banta hai, crash nahi hota.
const caseStudiesCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://eddinet.com/case-studies#page",
  name: "Eddinet Case Studies",
  url: "https://eddinet.com/case-studies",
  description:
    "See how Eddinet helps brands grow through SEO, paid media, content and web. Read our case studies and what we did for each client.",
  mainEntity: { "@id": "https://eddinet.com/case-studies#list" },
};

const caseStudiesItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://eddinet.com/case-studies#list",
  name: "Eddinet Case Studies",
  itemListElement: caseStudies.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.client} Case Study`,
    description: c.summary,
    url: `https://eddinet.com/case-studies/${c.slug}`,
  })),
};

// Har case study ke andar kya hota hai - ye 4 blocks same order me
// publish hote hain, taaki reader ko pata ho ki kya expect karna hai.
const caseStudyIncludes = [
  {
    title: "Challenge",
    desc: "The specific business problem we were hired to remove, with the baseline numbers that made it urgent - where demand was leaking, which competitors held the ranking, and what the client had already tried without a result.",
  },
  {
    title: "Strategy",
    desc: "The plan we agreed before starting work: the channel mix, the positioning, the pages, campaigns or product changes we intended to make, and the one metric we committed to moving.",
  },
  {
    title: "Execution",
    desc: "The build itself - pages shipped, campaigns launched, content published, code deployed, integrations connected - written so a non-technical reader can follow what actually changed in the business.",
  },
  {
    title: "Outcome",
    desc: "The measured result after the agreed period, with the reporting window stated clearly - plus the trade-offs we hit and what we would do differently if we ran the same engagement again.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* JSON-LD: case studies collection + uski list */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesCollectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesItemListSchema) }}
      />

      <section className="pt-[170px] pb-[70px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 text-center">
          <Breadcrumbs
            className="mb-5 justify-center"
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies" },
            ]}
          />
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
            Case Studies
          </div>
          <h1 className="text-[3rem] font-extrabold leading-[1.15] mb-4 text-[var(--text-main)] max-[768px]:text-[2.2rem]">
            Real Work. <span className="gradient-text">Real Outcomes.</span>
          </h1>
          <AdaptiveLines
            className="text-[var(--text-muted)] text-[1.15rem] max-w-[680px] mx-auto"
            text="How strategy performs against a real budget, a real market and a real competitor set - documented challenge to outcome."
          />
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="pb-[80px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="max-w-[860px] mx-auto text-center mb-14">
            <h2 className="text-[2.1rem] font-extrabold leading-[1.15] mb-5 text-[var(--text-main)] max-[768px]:text-[1.6rem]">
              What We Document, <span className="gradient-text">Every Time</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] leading-relaxed mb-4">
              Every case study here is written for one reader: a business owner
              deciding whether Eddinet can deliver. Each one starts with the
              constraint we were hired to remove - the flat pipeline, the lost
              page-one rankings, the store that stopped converting - and then
              follows the same four steps from there.
            </p>
            <p className="text-[var(--text-muted)] text-[1.05rem] leading-relaxed">
              We publish with client permission only, and every number on this
              page has been checked by the client before it went live. Where a
              result depends on a market, a budget range or a reporting window,
              we state that instead of rounding it up. It makes the page slower
              to fill, and it is the only version we are willing to publish.
            </p>
          </div>

          <div className={balancedGrid(caseStudyIncludes.length, { base: 2, gapClass: "cgrid-gap-6", stages: [{ bp: 768, maxCols: 1 }] })}>
            {caseStudyIncludes.map((item, i) => (
              <div
                key={item.title}
                className="p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[rgba(var(--accent-rgb),0.12)] flex items-center justify-center text-[var(--main-accent)] font-extrabold text-[0.82rem] shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[1.1rem] font-extrabold text-[var(--text-main)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-muted)] text-[0.92rem] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-[860px] mx-auto mt-12 text-center">
            <p className="text-[var(--text-muted)] text-[0.98rem] leading-relaxed">
              Not every project becomes a case study. To publish one we need a
              baseline to compare against, a result the client is comfortable
              having attributed to the work, and enough detail to be useful to
              someone running a similar business. Work that is still in progress,
              or where the client needs the numbers kept private, stays in a
              client report instead.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-[100px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          {caseStudies.length === 0 ? (
            <div className="max-w-[640px] mx-auto text-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-12 max-[640px]:p-6">
              <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center text-[1.6rem] mb-6" style={{ background: "var(--primary-gradient)" }}>
                🛡️
              </div>
              <h2 className="text-[1.6rem] font-extrabold text-[var(--text-main)] mb-3">Verified Results Only</h2>
              <p className="text-[var(--text-muted)] text-[1rem] leading-relaxed">
                We publish only genuine, permission-based case studies with verifiable outcomes. We never
                invent statistics, client names or results. Case studies for our recent work are being
                prepared with client approval and will appear here as they are verified.
              </p>
              <div className="flex justify-center gap-4 flex-wrap mt-7">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] hover:-translate-y-[3px]"
                  style={{ background: "var(--primary-gradient)" }}
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          ) : (
            <div className={balancedGrid(caseStudies.length, { base: 3, gapClass: "cgrid-gap-6", stages: [{ bp: 1024, maxCols: 2 }, { bp: 768, maxCols: 1 }] })}>
              {caseStudies.map((c, i) => (
                <Link
                  key={i}
                  href={`/case-studies/${c.slug}`}
                  className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] no-underline flex flex-col"
                >
                  <div className="h-52 relative overflow-hidden">
                    <Image
                      src={c.image}
                      alt={`${c.client} case study`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,25,0.9)] to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="text-[0.75rem] uppercase tracking-wider text-[var(--main-accent)] font-bold mb-1">{c.tag}</div>
                      <div className="text-[1.15rem] font-bold text-white">{c.client}</div>
                      <div className="text-[0.8rem] text-white/60">{c.industry}</div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-[var(--text-muted)] text-[0.88rem] leading-relaxed mb-4 line-clamp-3">{c.summary}</p>
                    <div className="mt-auto pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                      <span className="text-[1.6rem] font-extrabold gradient-text">{c.metric}</span>
                      <span className="inline-flex items-center gap-2 text-[var(--main-accent)] font-bold text-[0.85rem]">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}