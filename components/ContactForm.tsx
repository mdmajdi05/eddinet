"use client";
import { useState } from "react";
import { site } from "@/data/contact";

const inputCls =
  "w-full py-2 px-4 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-xl text-[var(--text-main)] font-[inherit] text-[0.92rem] outline-none transition-all duration-300 focus:border-[var(--main-accent)] focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.15)] focus:bg-[var(--input-bg-focus)]";

const fullInputCls =
  "w-full py-3 px-4 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-main)] font-[inherit] text-[0.95rem] outline-none transition-all duration-300 focus:border-[var(--main-accent)] focus:bg-[var(--input-bg-focus)]";

const serviceOptions = [
  "Full Digital Growth (Marketing + Technology)",
  "SEO & AI SEO",
  "Google & Meta Ads / PPC",
  "Social Media Marketing",
  "Content Marketing",
  "Website & eCommerce Development",
  "Mobile App / Software & AI",
  "Cloud, Hosting & DevOps",
  "Maintenance & Support",
  "Reputation Management",
];

export default function ContactForm({
  compact = false,
  serviceLabel = "Service(s) Needed",
}: {
  compact?: boolean;
  serviceLabel?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(serviceOptions[1]);
  const [message, setMessage] = useState("");

  function openWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    const lines = [
      "*New Enquiry - Eddinet*",
      "==================================",
      `*Name:* ${name.trim()}`,
      `*Phone:* ${phone.trim()}`,
      email.trim() ? `*Email:* ${email.trim()}` : "",
      company.trim() ? `*Company:* ${company.trim()}` : "",
      `*Service Needed:* ${service}`,
      message.trim() ? `*Message:* ${message.trim()}` : "",
      "",
      "===================================",
      "Sent from the Eddinet website",
    ].filter(Boolean);

    const url = `${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank");
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

  if (compact) {
    return (
      <form onSubmit={openWhatsApp} className="flex flex-col pt-3.5">
        <div className="space-y-2.5">
          <div className="grid grid-cols-2 gap-2.5 max-[600px]:grid-cols-1">
            <div>
              <label className="block text-[0.78rem] font-semibold mb-1.5 text-[var(--text-muted)]">Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rahul Sharma"
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-[0.78rem] font-semibold mb-1.5 text-[var(--text-muted)]">Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={site.phone}
                className={inputCls}
              />
            </div>
          </div>

          <div>
            <label className="block text-[0.78rem] font-semibold mb-1.5 text-[var(--text-muted)]">Email Address *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className={inputCls}
            />
          </div>

          <div>
            <label className="block text-[0.78rem] font-semibold mb-1.5 text-[var(--text-muted)]">{serviceLabel}</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={inputCls}
            >
              {serviceOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="mt-3.5 w-full inline-flex items-center justify-center gap-2.5 py-3 px-7 rounded-full font-bold text-[0.95rem] transition-all duration-300 border-none outline-none text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.45)] hover:-translate-y-[2px] hover:shadow-[0_15px_30px_-5px_rgba(var(--accent-rgb),0.6)] disabled:opacity-60"
          style={{ background: "var(--primary-gradient)" }}
        >
          {sending ? "Opening WhatsApp..." : "Talk to a Growth Expert"}
          {!sending && <span className="text-[1.1rem] leading-none">→</span>}
        </button>

        <div className="mt-3 pt-3 border-t border-[var(--border-color)] flex items-center justify-center gap-5 text-[0.72rem] text-[var(--text-dim)]">
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[var(--green-accent)]">✓</span> 2-hour response
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[var(--main-accent)]">🔒</span> 100% private
          </span>
        </div>
      </form>
    );
  }

  return (
    <form
      onSubmit={openWhatsApp}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className={fullInputCls}
          />
        </div>
        <div>
          <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Phone / WhatsApp *</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={site.phone}
            className={fullInputCls}
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Email Address *</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={fullInputCls}
        />
      </div>

      <div className="mb-5">
        <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Company Name</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="e.g. Your Brand Pvt. Ltd."
          className={fullInputCls}
        />
      </div>

      <div className="mb-5">
        <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">{serviceLabel}</label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={fullInputCls}
        >
          {serviceOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className="mb-7">
        <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Message / Website URL</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fullInputCls} min-h-[110px]`}
          placeholder="Tell us about your business goals and current challenges..."
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-7 rounded-full font-bold text-[0.98rem] transition-all duration-300 border-none outline-none text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_-5px_rgba(var(--accent-rgb),0.6)] disabled:opacity-60"
        style={{ background: "var(--primary-gradient)" }}
      >
        {sending ? "Opening WhatsApp..." : "Submit & Get a Growth Proposal"}
        {!sending && <span>→</span>}
      </button>

      <p className="text-[0.75rem] text-[var(--text-dim)] mt-4 text-center">
        Your details go straight to our team on WhatsApp. We respond within 2 business hours.
      </p>
    </form>
  );
}