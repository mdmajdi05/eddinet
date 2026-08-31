import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative pt-[180px] pb-[100px] overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--main-accent)]/5 via-transparent to-transparent" />
        <div className="absolute top-[-40%] right-[-20%] w-[600px] h-[600px] rounded-full bg-[var(--main-accent)]/10 blur-3xl" />
      </div>
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10 text-center">
        <div className="text-[6rem] font-extrabold gradient-text leading-none mb-4">404</div>
        <h1 className="text-[2.5rem] font-extrabold text-white mb-4 max-[768px]:text-[2rem]">
          Page Not Found
        </h1>
        <p className="text-white/60 text-[1.1rem] max-w-[560px] mx-auto mb-8">
          The page you are looking for does not exist or has moved. Let us get you back on track to building your digital growth system.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] transition-all duration-300 border-none outline-none text-[var(--on-primary)] no-underline shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
            style={{ background: "var(--primary-gradient)" }}
          >
            Back to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] transition-all duration-300 border border-white/15 outline-none no-underline bg-white/5 text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-[3px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}