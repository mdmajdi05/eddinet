import Image from "next/image";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "1,000+", label: "Projects Delivered" },
  { value: "50+", label: "Team Members" },
  { value: "98%", label: "Client Retention" },
];

const team = [
  { role: "SEO & AI Strategists", desc: "Google & Meta certified experts driving organic growth." },
  { role: "Performance Marketers", desc: "Data-obsessed media buyers optimizing every ad rupee." },
  { role: "Full-Stack Developers", desc: "React, Next.js & WordPress engineers building blazing-fast sites." },
  { role: "Creative Designers", desc: "Visual storytellers crafting high-converting brand identities." },
];

export default function About() {
  return (
    <section id="about" className="py-[100px]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-[50px] items-center max-[1024px]:grid-cols-1 max-[1024px]:text-center">
          <div className="relative">
            <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-color)] relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Eddinet team collaborating in office"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-md)] p-5 backdrop-blur-xl shadow-[var(--shadow-lg)] max-[1024px:relative max-[1024px]:-bottom-0 max-[1024px]:-right-0 max-[1024px]:mt-4 max-[1024px]:mx-auto max-[1024px]:max-w-[300px]">
              <div className="text-[2rem] font-extrabold gradient-text">7+ Years</div>
              <div className="text-[0.85rem] text-[var(--text-muted)]">Delivering Digital Excellence</div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
              About Eddinet
            </div>
            <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
              We Are a <span className="gradient-text">Performance-First</span> Digital Agency
            </h2>
            <p className="text-[var(--text-muted)] text-[1.1rem] leading-relaxed mb-6">
              Founded in 2019 in Okhla, New Delhi, Eddinet is a full-service digital growth agency helping startups, D2C brands, and enterprise businesses scale profitably through data-driven SEO, high-ROI performance marketing, and conversion-focused web development.
            </p>
            <p className="text-[var(--text-muted)] text-[1.05rem] leading-relaxed mb-8">
              Our multidisciplinary team of 50+ certified strategists, marketers, and engineers combines creative storytelling with algorithmic precision to deliver measurable business revenue &mdash; not vanity metrics.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {team.map((t, i) => (
                <div key={i} className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-md)] p-4 text-left transition-all duration-300 hover:border-[var(--border-hover)]">
                  <div className="text-[0.9rem] font-bold text-[var(--text-main)] mb-1">{t.role}</div>
                  <div className="text-[0.8rem] text-[var(--text-muted)]">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-[60px] max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
          {stats.map((s, i) => (
            <div key={i} className="text-center bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-md)] py-7 px-5 transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1">
              <div className="text-[2.2rem] font-extrabold gradient-text mb-1">{s.value}</div>
              <div className="text-[0.85rem] text-[var(--text-muted)] font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
