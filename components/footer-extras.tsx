"use client";
import { useEffect, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (/^\S+@\S+\.\S+$/.test(email)) setDone(true);
      }}
      className="w-full"
    >
      {done ? (
        <div className="flex items-center gap-2 py-3.5 px-5 rounded-xl bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.35)] text-[0.95rem] font-semibold text-[#86EFAC]">
          <span className="text-[#4ADE80]">✓</span> Thanks - you&apos;re on the list. Talk soon!
        </div>
      ) : (
        <div className="flex items-center gap-2 p-1.5 rounded-full border border-white/10 bg-white/[0.04] focus-within:border-[rgba(var(--accent-rgb),0.5)] focus-within:shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.15)] transition-all duration-300">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email for growth playbooks"
            className="flex-1 min-w-0 bg-transparent outline-none px-3.5 py-2 text-[0.9rem] text-white placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="shrink-0 inline-flex items-center gap-2 py-2.5 px-5 rounded-full font-bold text-[0.85rem] cursor-pointer transition-all duration-300 hover:opacity-90"
            style={{ background: "var(--primary-gradient)", color: "var(--on-primary)" }}
          >
            Subscribe <span>→</span>
          </button>
        </div>
      )}
    </form>
  );
}

export function LiveStatus() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const d = new Date();
    const day = d.getDay();
    const hours = d.getHours() + d.getMinutes() / 60;
    setOpen(day >= 1 && day <= 6 && hours >= 10 && hours < 19);
  }, []);

  if (open === null) return null;

  return (
    <span className="inline-flex items-center gap-2.5 py-1.5 px-3.5 rounded-full bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)] text-[0.8rem] font-bold">
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${open ? "bg-[#34D399]" : "bg-slate-400"}`}
        />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${open ? "bg-[#34D399]" : "bg-slate-400"}`} />
      </span>
      <span className={open ? "text-[#86EFAC]" : "text-slate-400"}>{open ? "Open now" : "Closed now"}</span>
      <span className="text-white/40 font-semibold">10:00 – 19:00 IST</span>
    </span>
  );
}

export function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full font-bold text-[0.8rem] cursor-pointer transition-all duration-300 border border-white/12 bg-white/[0.05] text-white hover:bg-[rgba(var(--accent-rgb),0.12)] hover:border-[rgba(var(--accent-rgb),0.5)] hover:-translate-y-[2px]"
    >
      Back to top <span className="text-[var(--main-accent)]">↑</span>
    </button>
  );
}