export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-[180px] pb-[100px] overflow-hidden bg-black"
    >
      {/* Background with hero image + gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: "url('/hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-accent)]/5 via-transparent to-transparent" />
        <div className="absolute top-[-40%] right-[-20%] w-[600px] h-[600px] rounded-full bg-[var(--main-accent)]/10 blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-[50px] items-center max-[1024px]:grid-cols-1 max-[1024px]:text-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
              ⚡ Marketing thinks · Technology that acts · Under one roof
            </div>
            <h1 className="text-[3.5rem] font-extrabold leading-[1.15] mb-6 tracking-[-1px] text-white max-[768px]:text-[2.4rem]">
              The <span className="gradient-text">ROI-Focused</span> Digital Growth Partner in Delhi NCR
            </h1>
            {/* <p className="text-[1.2rem] text-white/60 mb-4 max-w-[620px] max-[1024px]:mx-auto">
              From Marketing to Technology. Marketing, technology and infrastructure engineered to work as one connected growth system.
            </p> */}
            <p className="text-[1rem] text-white/50 mb-9 max-w-[620px] max-[1024px]:mx-auto">
              With 5+ years of experience and 1,000+ successful projects, Eddinet is a trusted Digital Marketing & Software Agency in Delhi, helping businesses grow through SEO & Digital Marketing, Creative & Content, Web & Software, Mobile Apps, AI & Automation, and Cloud & DevOps. We connect these capabilities to turn digital activity into measurable business outcomes.
            </p>
            
            {/* Buttons */}
            <div className="flex gap-4 flex-wrap mb-10 max-[1024px]:justify-center">
              <button 
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] cursor-pointer transition-all duration-300 border-none outline-none text-white shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_-5px_rgba(var(--accent-rgb),0.6)]" 
                style={{ background: "var(--primary-gradient)" }}
              >
                🚀 Talk to a Digital Growth Expert
              </button>
              <a 
                href="/services" 
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] cursor-pointer transition-all duration-300 border border-white/15 outline-none no-underline bg-white/5 text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-[3px]"
              >
                Explore Our Services →
              </a>
            </div>

            {/* Capability strip */}
            <div className="flex items-center gap-8 pt-6 border-t border-white/10 max-[1024px]:justify-center">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[rgba(var(--accent-rgb),0.15)] text-[var(--main-accent)] flex items-center justify-center text-xl font-bold">
                  🎯
                </div>
                <div>
                  <strong className="block text-lg text-white">Full-Funnel</strong>
                  <span className="text-sm text-white/40">Marketing &amp; Growth</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[rgba(var(--accent-rgb),0.15)] text-[var(--main-accent)] flex items-center justify-center text-xl font-bold">
                  🛠️
                </div>
                <div>
                  <strong className="block text-lg text-white">Technology</strong>
                  <span className="text-sm text-white/40">Software · AI · Cloud · DevOps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Clean & Premium */}
          <div className="hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden">
            {/* Card Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--main-accent)]/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 text-sm bg-emerald-500/15 text-emerald-400 py-1 px-3 rounded-2xl font-semibold">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  One Connected Growth System
                </span>
                <span className="text-white/40 text-sm">Delhi NCR</span>
              </div>

              {/* Stat 1 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-4">
                <div className="text-sm text-white/40 mb-1.5">Visibility &amp; Acquisition</div>
                <div className="text-[1.05rem] font-bold text-white leading-snug">
                  SEO · AI SEO · Social Media · Paid Ads · Content
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-4">
                <div className="text-sm text-white/40 mb-1.5">Conversion &amp; Technology</div>
                <div className="text-[1.05rem] font-bold text-white leading-snug">
                  Web · eCommerce · Apps · Software · AI
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
                <div className="text-sm text-white/40 mb-1.5">Operations &amp; Reliability</div>
                <div className="text-[1.05rem] font-bold text-white leading-snug">
                  Cloud · DevOps · Hosting · Maintenance · Reputation
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-sm cursor-pointer transition-all duration-300 border border-white/15 outline-none bg-white/5 text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-[3px]">
Get A Custom Growth Plan Built Around Your Business
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 max-[1024px]:hidden z-10">
        <span className="text-[0.65rem] font-bold tracking-[3px] text-white/30 [writing-mode:vertical-rl] rotate-180">
          SCROLL
        </span>
        <div className="w-[1px] h-[80px] bg-gradient-to-b from-[var(--main-accent)] to-transparent relative">
          <div className="absolute top-0 left-0 w-full h-[25px] bg-[var(--main-accent)] animate-scroll-line" />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--main-accent)] opacity-100 animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--main-accent)] opacity-40" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--main-accent)] opacity-20" />
        </div>
      </div>
    </section>
  );
}