"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-10 text-center">
        <div className="text-[2.8rem] mb-4">✅</div>
        <h3 className="text-[1.4rem] font-extrabold mb-2 text-[var(--text-main)]">Thank you! Your request has been submitted.</h3>
        <p className="text-[var(--text-muted)] text-[0.95rem]">
          The Eddinet team will reach out to you within 2 hours on business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-9"
    >
      <h3 className="text-[1.4rem] font-extrabold mb-1 text-[var(--text-main)]">Tell Us About Your Business</h3>
      <p className="text-[var(--text-muted)] text-[0.88rem] mb-7">
        We&apos;ll identify your growth constraint and recommend the right combination of services.
      </p>

      <div className="grid grid-cols-2 gap-5 max-[600px]:grid-cols-1 mb-5">
        <div>
          <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Full Name *</label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            className="w-full py-3 px-4 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-main)] font-[inherit] text-[0.95rem] outline-none transition-all duration-300 focus:border-[var(--main-accent)] focus:bg-[var(--input-bg-focus)]"
          />
        </div>
        <div>
          <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Phone / WhatsApp *</label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="w-full py-3 px-4 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-main)] font-[inherit] text-[0.95rem] outline-none transition-all duration-300 focus:border-[var(--main-accent)] focus:bg-[var(--input-bg-focus)]"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Email Address *</label>
        <input
          type="email"
          required
          placeholder="you@company.com"
          className="w-full py-3 px-4 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-main)] font-[inherit] text-[0.95rem] outline-none transition-all duration-300 focus:border-[var(--main-accent)] focus:bg-[var(--input-bg-focus)]"
        />
      </div>

      <div className="mb-5">
        <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Company Name</label>
        <input
          type="text"
          placeholder="e.g. Your Brand Pvt. Ltd."
          className="w-full py-3 px-4 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-main)] font-[inherit] text-[0.95rem] outline-none transition-all duration-300 focus:border-[var(--main-accent)] focus:bg-[var(--input-bg-focus)]"
        />
      </div>

      <div className="mb-5">
        <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Service(s) Needed</label>
        <select className="w-full py-3 px-4 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-main)] font-[inherit] text-[0.95rem] outline-none transition-all duration-300 focus:border-[var(--main-accent)] focus:bg-[var(--input-bg-focus)]">
          <option>Full Digital Growth (Marketing + Technology)</option>
          <option>SEO &amp; AI SEO</option>
          <option>Google &amp; Meta Ads / PPC</option>
          <option>Social Media Marketing</option>
          <option>Content Marketing</option>
          <option>Website &amp; eCommerce Development</option>
          <option>Mobile App / Software &amp; AI</option>
          <option>Cloud, Hosting &amp; DevOps</option>
          <option>Maintenance &amp; Support</option>
          <option>Reputation Management</option>
        </select>
      </div>

      <div className="mb-7">
        <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Message / Website URL</label>
        <textarea
          className="w-full py-3 px-4 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-main)] font-[inherit] text-[0.95rem] outline-none transition-all duration-300 focus:border-[var(--main-accent)] focus:bg-[var(--input-bg-focus)] min-h-[110px]"
          placeholder="Tell us about your business goals and current challenges..."
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-7 rounded-full font-bold text-[0.98rem] transition-all duration-300 border-none outline-none text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_-5px_rgba(var(--accent-rgb),0.6)]"
        style={{ background: "var(--primary-gradient)" }}
      >
        Submit &amp; Get a Growth Proposal
      </button>

      <p className="text-[0.75rem] text-[var(--text-dim)] mt-4 text-center">
        We respond within 2 business hours. Your details stay private.
      </p>
    </form>
  );
}