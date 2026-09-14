"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { site } from "@/data/contact";

interface QuotePopupProps {
  service: string;
  onClose: () => void;
}

export default function QuotePopup({ service, onClose }: QuotePopupProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }
    setError("");

    const lines = [
      "*New Quote Request - Eddinet*",
      "==================================",
      "*Service Selected:* " + service,
      "",
      `*Name:* ${name.trim()}`,
      `*Phone:* ${phone.trim()}`,
      email.trim() ? `*Email:* ${email.trim()}` : "",
      details.trim() ? `*Project Details:* ${details.trim()}` : "",
      "",
      "===================================",
      "Sent from the Eddinet website",
    ].filter(Boolean);

    const url = `${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank");
  };

  const inputCls =
    "w-full rounded-xl bg-[var(--panel-bg)] border border-[var(--border-color)] px-4 py-3 text-[0.92rem] text-[var(--text-main)] outline-none transition-colors duration-300 placeholder:text-[var(--text-dim)] focus:border-[var(--main-accent)]";

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-[var(--shadow-xl)] overflow-hidden animate-[quotePop_0.35s_ease-out]">
        <div className="h-1.5 w-full" style={{ background: "var(--primary-gradient)" }} />

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--panel-bg)] border border-[var(--border-color)] transition-colors duration-300 cursor-pointer"
        >
          ✕
        </button>

        <div className="p-7">
          <div className="flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.72rem] font-semibold uppercase tracking-wider mb-4 w-fit">
            Get a Free Quote
          </div>

          <h3 className="text-[1.45rem] font-extrabold text-[var(--text-main)] mb-1">
            Let's talk about your project
          </h3>
          <p className="text-[var(--text-muted)] text-[0.88rem] leading-relaxed mb-6">
            Service selected: <span className="font-bold text-[var(--main-accent)]">{service}</span>
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name *"
              className={inputCls}
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone / WhatsApp Number *"
              className={inputCls}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email (optional)"
              className={inputCls}
            />
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={4}
              placeholder="Tell us briefly about your project (optional)"
              className={`${inputCls} resize-none`}
            />

            {error && (
              <p className="text-[0.8rem] font-semibold text-red-400 -mt-1">{error}</p>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_-5px_rgba(var(--accent-rgb),0.6)] cursor-pointer"
              style={{ background: "var(--primary-gradient)" }}
            >
              Send to WhatsApp <span>💬</span>
            </button>

            <p className="text-[0.72rem] text-[var(--text-dim)] text-center">
              Your details go straight to our team on WhatsApp. No spam, guaranteed.
            </p>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}