import Image from "next/image";

const features = [
  {
    num: "01",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    title: "Marketing + Technology Together",
    desc: "Campaigns, websites, applications and infrastructure are planned as connected parts of one system — not handed to separate vendors with separate goals.",
  },
  {
    num: "02",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    title: "ROI as the Starting Point",
    desc: "Services are selected according to the business outcome they need to support — leads, transactions, retention, efficiency or brand growth — rather than the other way around.",
  },
  {
    num: "03",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    title: "Full-Funnel Thinking",
    desc: "Organic, paid, content, creative, web and technology capabilities work together instead of operating as isolated activities with competing objectives.",
  },
  {
    num: "04",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80",
    title: "Data-Backed Decisions",
    desc: "Performance, search behaviour, user behaviour and business signals guide optimisation — so choices are based on evidence, not assumptions.",
  },
  {
    num: "05",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
    title: "Custom Strategy",
    desc: "The approach is shaped around your business model, audience, competitive landscape and buying journey — not a generic template applied to every client.",
  },
  {
    num: "06",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
    title: "Built for Long-Term Growth",
    desc: "The objective is sustainable visibility, reliable technology and measurable business value — not short-term vanity metrics that fade.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="py-[100px] transition-[background] duration-400 ease-in-out"
      style={{ background: "var(--whyus-glow)" }}
    >
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            Why Eddinet
          </div>
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            Growth Built as One <span className="purple-gradient-text">Connected System</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[1.1rem] max-w-[680px] mx-auto mb-10">
            Six principles guide how we plan, build and operate digital growth — so marketing and technology pull in the same direction.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[30px] mt-[50px] max-[1024px]:grid-cols-1">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex gap-5 p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] transition-all duration-300 hover:border-[var(--hover-line)] hover:-translate-y-1 overflow-hidden"
            >
              <div className="w-[120px] h-[120px] min-w-[120px] rounded-[var(--radius-md)] overflow-hidden relative">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  unoptimized
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[1.5rem] font-extrabold text-[var(--main-accent)] opacity-80">{f.num}</span>
                  <h4 className="text-[1.15rem] font-bold text-[var(--text-main)]">{f.title}</h4>
                </div>
                <p className="text-[var(--text-muted)] text-[0.95rem]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
