"use client";
import { useState } from "react";

export default function ConsultModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); }, 2000);
  }

  return (
    <div
      className={`fixed inset-0 bg-[var(--overlay-bg)] backdrop-blur-sm z-[2000] flex items-center justify-center transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-[var(--modal-bg)] border border-[var(--border-color)] rounded-[20px] w-[90%] max-w-[500px] p-9 relative shadow-[var(--shadow-xl)]">
        <button className="absolute top-5 right-5 bg-transparent border-none text-[var(--text-muted)] text-[1.5rem] cursor-pointer" onClick={onClose}>✕</button>
        <h3 className="text-[1.5rem] font-extrabold mb-2 text-[var(--text-main)]">Book Your Free Strategy Call</h3>
        <p className="text-[var(--text-muted)] text-[0.85rem] mb-5">Fill out your details and our agency specialist will call you within 2 hours.</p>
        {submitted ? (
          <div className="text-center py-[30px]">
            <div className="text-[2.5rem] mb-3">✅</div>
            <p className="font-bold text-[1.1rem] text-[var(--text-main)]">Dhanyawad! Request submit ho gayi hai.</p>
            <p className="text-[0.9rem] text-[var(--text-muted)] mt-2">Lucid Web team jaldi hi contact karegi.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Full Name *</label>
              <input type="text" className="w-full py-3 px-4 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-main)] font-[inherit] text-[0.95rem] outline-none transition-all duration-300 focus:border-[var(--main-accent)] focus:bg-[var(--input-bg-focus)]" placeholder="e.g. Rahul Sharma" required />
            </div>
            <div className="mb-5">
              <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Phone Number *</label>
              <input type="tel" className="w-full py-3 px-4 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-main)] font-[inherit] text-[0.95rem] outline-none transition-all duration-300 focus:border-[var(--main-accent)] focus:bg-[var(--input-bg-focus)]" placeholder="+91 98765 43210" required />
            </div>
            <div className="mb-5">
              <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Service Needed</label>
              <select className="w-full py-3 px-4 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-main)] font-[inherit] text-[0.95rem] outline-none transition-all duration-300 focus:border-[var(--main-accent)] focus:bg-[var(--input-bg-focus)]">
                <option>SEO &amp; Organic Growth</option>
                <option>Google &amp; Meta Ads</option>
                <option>Website Development</option>
                <option>Full 360 Digital Marketing</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Message / Website URL</label>
              <textarea className="w-full py-3 px-4 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-main)] font-[inherit] text-[0.95rem] outline-none transition-all duration-300 focus:border-[var(--main-accent)] focus:bg-[var(--input-bg-focus)] resize-vertical min-h-[90px]" placeholder="Tell us about your business goals..." />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] cursor-pointer transition-all duration-300 border-none outline-none text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_-5px_rgba(var(--accent-rgb),0.6)] w-full" style={{ background: "var(--primary-gradient)" }}>
              Submit &amp; Get Proposal
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
