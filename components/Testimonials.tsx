const testimonials = [
  { text: "Eddinet transformed our organic traffic from near zero to 7.96M+ monthly impressions. Their SEO strategy alone generated more qualified leads than our entire paid ad budget.", name: "Rajesh Kumar", role: "Marketing Head, TGC Institute", initials: "RK" },
  { text: "The team delivered 250 conversions in just 5 weeks for our Google Ads campaign while keeping CPA 38% below industry average. Transparent reporting and proactive communication throughout.", name: "Sarah Anderson", role: "Founder, Bliss & Burn Brand", initials: "SA" },
  { text: "Our local search visibility went from page 3 to dominating Google Maps within 4 months. The 650+ monthly leads we now get have completely transformed our service business.", name: "Mike Thompson", role: "Owner, OK Tire Calgary", initials: "MT" },
  { text: "They don't just chase vanity metrics. Eddinet focuses on actual revenue and lead quality. Our cost per acquisition dropped 42% while conversions nearly doubled in 6 months.", name: "Neha Patel", role: "CEO, MedConnect Healthcare", initials: "NP" },
];

export default function Testimonials() {
  return (
    <section className="py-[100px]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            Testimonials
          </div>
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            What CTOs &amp; Founders <span className="purple-gradient-text">Say About Us</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[1.1rem] max-w-[650px] mx-auto mb-10">
            Long-term partnerships built on transparency, execution, and measurable results.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-quotes bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-8 relative transition-all duration-300 hover:border-[var(--hover-line)] hover:-translate-y-1"
            >
              <p className="text-[var(--text-muted)] text-[0.95rem] leading-[1.7] italic mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3.5 pt-5 border-t border-[var(--border-color)]">
                <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center font-extrabold text-[0.85rem] text-[var(--on-primary)] shrink-0" style={{ background: "var(--primary-gradient)" }}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-[0.95rem] font-bold text-[var(--text-main)]">{t.name}</div>
                  <div className="text-[0.8rem] text-[var(--text-dim)]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
