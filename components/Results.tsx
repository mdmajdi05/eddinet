import Image from "next/image";
import Link from "next/link";

const outcomes = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
    tag: "Visibility",
    title: "SEO & AI SEO",
    desc: "We define measurable visibility goals — qualified organic traffic, rankings on the keywords that matter, and presence in AI-generated answers — then report against them in business terms, not vanity metrics.",
  },
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80",
    tag: "Acquisition",
    title: "Paid Media & Content",
    desc: "Campaigns are planned around cost per acquisition and qualified lead volume, with content and landing pages built to convert. Every number is tied to a real, verifiable business outcome.",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
    tag: "Technology",
    title: "Web, Apps, Software & Cloud",
    desc: "From high-converting websites and eCommerce to software, AI, cloud and DevOps, technology is measured by reliability, performance and the conversion it enables — and supported long after launch.",
  },
];

export default function Results() {
  return (
    <section id="portfolio" className="py-[100px]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            How We Deliver Outcomes
          </div>
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            Measured by Business Results, <span className="gradient-text">Not Vanity Metrics</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[1.1rem] max-w-[680px] mx-auto mb-10">
            Every engagement defines the outcome it needs to produce up front. We report on the leads, transactions, retention, efficiency and brand growth that marketing and technology actually create — and we publish only verified results.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {outcomes.map((r, i) => (
            <div
              key={i}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)]"
            >
              <div className="h-44 relative overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,25,0.85)] to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-[0.75rem] uppercase tracking-wider text-[var(--main-accent)] font-bold mb-1">
                    {r.tag}
                  </div>
                  <div className="text-[1.1rem] font-bold text-white">
                    {r.title}
                  </div>
                </div>
              </div>
              <div className="p-[30px]">
                <p className="text-[0.9rem] text-[var(--text-muted)] leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full font-bold text-[0.95rem] transition-all duration-300 text-[var(--on-primary)] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_rgba(var(--accent-rgb),0.4)]"
            style={{ background: "var(--primary-gradient)" }}
          >
            Explore How We Work →
          </Link>
        </div>
      </div>
    </section>
  );
}
