"use client";
import { useState } from "react";
import { homeFaqs } from "@/data/faqs";

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="py-[100px]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            Got Questions?
          </div>
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[1.1rem] max-w-[650px] mx-auto mb-10">
            Everything you need to know about partnering with Eddinet.
          </p>
        </div>
        <div className="max-w-[800px] mx-auto flex flex-col gap-4">
          {homeFaqs.map((f, i) => (
            <div
              key={i}
              className={`bg-[var(--bg-card)] border rounded-[var(--radius-md)] overflow-hidden transition-all duration-300 ${
                active === i ? "border-[rgba(var(--accent-rgb),0.3)]" : "border-[var(--border-color)]"
              }`}
            >
              <div
                className="py-[22px] px-7 font-bold text-[1.05rem] flex items-center justify-between cursor-pointer select-none text-[var(--text-main)]"
                onClick={() => setActive(active === i ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className={`text-[1.3rem] transition-transform duration-300 text-[var(--main-accent)] ${
                  active === i ? "faq-toggle-rotate" : ""
                }`}>+</span>
              </div>
              <div className={`overflow-hidden text-[var(--text-muted)] text-[0.95rem] leading-relaxed transition-all duration-300 ${
                active === i ? "max-h-[200px] px-7 pb-[22px]" : "max-h-0 px-7"
              }`}>
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
