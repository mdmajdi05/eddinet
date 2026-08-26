export default function CTA() {
  return (
    <section className="py-[80px]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div
           className="border border-[rgba(var(--accent-rgb),0.3)] rounded-3xl py-[60px] px-10 text-center relative overflow-hidden transition-[background,border-color] duration-400 ease-in-out"
           style={{ background: "var(--cta-bg)" }}
        >
          <h2 className="text-[2.8rem] font-extrabold mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            Ready To Dominate Your Market Online?
          </h2>
          <p className="text-[1.15rem] text-[var(--text-muted)] max-w-[600px] mx-auto mb-8">
            Book a free 30-minute growth consultation with our Delhi marketing team today. No commitment required.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] cursor-pointer transition-all duration-300 border-none outline-none text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_-5px_rgba(var(--accent-rgb),0.6)]" style={{ background: "var(--primary-gradient)" }}>
              Get Your Free Growth Audit
            </button>
            <a href="https://wa.me/917042840441" target="_blank" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] cursor-pointer transition-all duration-300 border-none outline-none no-underline bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] hover:-translate-y-[3px]">
              Chat Directly on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
