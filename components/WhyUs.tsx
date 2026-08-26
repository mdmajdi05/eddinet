import Image from "next/image";

const features = [
  {
    num: "01",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    title: "Guaranteed ROI-Focused Approach",
    desc: "We don't just track vanity metrics like impressions; we measure leads, sales conversions, and customer lifetime value.",
  },
  {
    num: "02",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    title: "Dedicated Account Managers",
    desc: "Every client gets a single point of contact and direct access to Google & Meta certified marketing strategists.",
  },
  {
    num: "03",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    title: "100% Transparent Weekly Reporting",
    desc: "No hidden costs or mysterious reports. Get weekly breakdown dashboards on ad spend, leads, and ranking progress.",
  },
  {
    num: "04",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80",
    title: "7+ Years Industry Experience",
    desc: "Having launched successful campaigns across Healthcare, Real Estate, E-Commerce, and Tech since 2019.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="about"
      className="py-[100px] transition-[background] duration-400 ease-in-out"
      style={{ background: "var(--whyus-glow)" }}
    >
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            Why Eddinet
          </div>
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            Why Leading Brands <span className="purple-gradient-text">Trust Us</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[1.1rem] max-w-[650px] mx-auto mb-10">
            We combine creative excellence with algorithmic precision to deliver measurable business revenue.
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
