import { processSteps } from "@/data/site";

export default function Process() {
  return (
    <section className="py-[100px]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            How We Work
          </div>
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            An Outcome-Led <span className="gradient-text">Growth Process</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[1.1rem] max-w-[650px] mx-auto mb-10">
            Understand, identify the constraint, select the right services, build, measure and continuously improve.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[30px] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {processSteps.map((s, i) => (
            <div
              key={i}
              className="relative p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -top-3 -right-2 text-[4.5rem] font-extrabold leading-none opacity-[0.06] select-none">
                {s.num}
              </div>
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center text-[1.05rem] font-extrabold mb-4 text-[var(--on-primary)] shadow-[0_8px_25px_rgba(var(--accent-rgb),0.25)]"
                style={{ background: "var(--primary-gradient)" }}
              >
                {s.num}
              </div>
              <h4 className="text-[1.15rem] font-bold text-[var(--text-main)] mb-2.5">{s.title}</h4>
              <p className="text-[var(--text-muted)] text-[0.92rem] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}