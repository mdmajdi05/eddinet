import Image from "next/image";

const results = [
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80",
    tag: "Google Ads Campaign",
    client: "Bliss & Burn Brand",
    metric: "250 Conversions",
    label: "Generated in first 5 weeks of launch",
    note: "Scaled ad spend while keeping CPA 38% below industry average.",
  },
  {
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=500&q=80",
    tag: "Google Ads Lead Gen",
    client: "OK Tire Calgary",
    metric: "650+ Monthly Leads",
    label: "Scaled from 0 in under 4 months",
    note: "Dominating local search results for automotive repair services.",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    tag: "Organic SEO Campaign",
    client: "TGC Institute",
    metric: "7.96M Impressions",
    label: "47.9K clicks via high-intent organic search",
    note: "#1 ranking for primary competitive educational keywords.",
  },
];

export default function Results() {
  return (
    <section id="portfolio" className="py-[100px]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            Case Studies
          </div>
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            Real Clients. <span className="gradient-text">Verified Results.</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[1.1rem] max-w-[650px] mx-auto mb-10">
            Actual metrics achieved for our partners across Google Ads and SEO campaigns.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {results.map((r, i) => (
            <div
              key={i}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)]"
            >
              <div className="h-44 relative overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.client}
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
                    {r.client}
                  </div>
                </div>
              </div>
              <div className="p-[30px]">
                <div className="bg-[var(--stat-box-bg)] border border-dashed border-[rgba(var(--accent-rgb),0.3)] p-4 rounded-[var(--radius-md)] mb-4 transition-all duration-300">
                  <div className="text-[1.8rem] font-extrabold text-[var(--text-main)]">{r.metric}</div>
                  <div className="text-[0.85rem] text-[var(--text-muted)]">{r.label}</div>
                </div>
                <p className="text-[0.85rem] text-[var(--text-muted)]">{r.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
