const industries = [
  { icon: "💳", name: "Fintech" },
  { icon: "🏥", name: "Healthcare" },
  { icon: "🛍️", name: "E-Commerce" },
  { icon: "🏗️", name: "Real Estate" },
  { icon: "🎓", name: "EdTech" },
  { icon: "🚚", name: "Logistics" },
  { icon: "💻", name: "SaaS & Technology" },
  { icon: "🏨", name: "Hospitality & Travel" },
  { icon: "🚗", name: "Automotive" },
  { icon: "⚖️", name: "Legal & Law Firms" },
  { icon: "🏭", name: "Manufacturing" },
  { icon: "💪", name: "Fitness & Wellness" },
  { icon: "🛒", name: "FMCG & Retail" },
  { icon: "🎬", name: "Media & Entertainment" },
  { icon: "📡", name: "Telecommunications" },
  { icon: "🛡️", name: "Insurance" },
  { icon: "🌾", name: "Agriculture & Food" },
  { icon: "💼", name: "Professional Services" },
];

export default function Industries() {
  return (
    <section
      id="clients"
      className="py-[100px] bg-black border-y border-white/10"
    >
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            Domain Expertise
          </div>
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-white max-[768px]:text-[2rem]">
            Industries We <span className="gradient-text">Specialize In</span>
          </h2>
          <p className="text-white/60 text-[1.1rem] max-w-[650px] mx-auto mb-10">
            Proven digital growth strategies across complex, high-competition sectors.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-4 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="group py-7 px-4 rounded-xl bg-white/5 border border-white/10 text-center transition-all duration-300 hover:bg-white/10 hover:border-[var(--main-accent)] hover:-translate-y-[6px] hover:shadow-[0_12px_30px_rgba(var(--accent-rgb),0.15)]"
            >
              <span className="text-[2rem] mb-2.5 block group-hover:scale-110 transition-transform duration-300">
                {ind.icon}
              </span>
              <span className="text-[0.9rem] font-bold text-white/70 group-hover:text-white transition-colors duration-300">
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}