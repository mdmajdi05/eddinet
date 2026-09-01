const commitments = [
  {
    icon: "🎯",
    title: "Outcome-Led From Day One",
    desc: "Every engagement starts by defining the outcome it must produce — leads, transactions, retention, efficiency or brand growth — and is measured against that, not against vanity metrics.",
  },
  {
    icon: "🔗",
    title: "One Connected System",
    desc: "Marketing, creative, web, apps, software, AI and cloud are planned as part of one system, so nothing is handed off to separate vendors with competing objectives.",
  },
  {
    icon: "📊",
    title: "Transparent Reporting",
    desc: "You see exactly how spend, activity and performance map to business outcomes. We report in business terms and explain every decision, not just the wins.",
  },
  {
    icon: "🛡️",
    title: "Verified Results Only",
    desc: "We publish only outcomes we can verify and we never invent statistics or client stories. When results are shared publicly, they are real and permission-based.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-[100px]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            Our Commitments
          </div>
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            How We Build <span className="purple-gradient-text">Trust</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[1.1rem] max-w-[680px] mx-auto mb-10">
            Long-term partnerships are built on transparency, execution and honest reporting — not inflated promises. Here is what every Eddinet partnership is held to.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {commitments.map((c, i) => (
            <div
              key={i}
              className="testimonial-quotes bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-8 relative transition-all duration-300 hover:border-[var(--hover-line)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--tag-bg)] border border-[var(--tag-border)] flex items-center justify-center text-[1.4rem] mb-5">
                {c.icon}
              </div>
              <h4 className="text-[1.1rem] font-bold text-[var(--text-main)] mb-3">{c.title}</h4>
              <p className="text-[var(--text-muted)] text-[0.95rem] leading-[1.7]">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
