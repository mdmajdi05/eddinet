"use client";
import { useState } from "react";
import { site } from "@/data/contact";

const fieldCls =
  "w-full py-3 px-4 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg text-[var(--text-main)] font-[inherit] text-[0.95rem] outline-none transition-all duration-300 focus:border-[var(--main-accent)] focus:bg-[var(--input-bg-focus)]";

export default function ConsultModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("SEO & Organic Growth");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    const lines = [
      "*New Strategy Call Request - Eddinet*",
      "==================================",
      `*Name:* ${name.trim()}`,
      `*Phone:* ${phone.trim()}`,
      `*Service Needed:* ${service}`,
      message.trim() ? `*Message:* ${message.trim()}` : "",
      "",
      "===================================",
      "Sent from the Eddinet website",
    ].filter(Boolean);

    const url = `${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank");

    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); setName(""); setPhone(""); setMessage(""); }, 2000);
  }

  return (
    <div
      className={`fixed inset-0 bg-[var(--overlay-bg)] backdrop-blur-sm z-[2000] flex justify-center overflow-y-auto transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-[var(--modal-bg)] border border-[var(--border-color)] rounded-[20px] w-[90%] max-w-[500px] p-9 relative shadow-[var(--shadow-xl)] my-6 max-h-[90vh] overflow-y-auto max-[480px]:p-6">
        <button className="absolute top-5 right-5 bg-transparent border-none text-[var(--text-muted)] text-[1.5rem] cursor-pointer" onClick={onClose}>✕</button>
        <h3 className="text-[1.5rem] font-extrabold mb-2 text-[var(--text-main)]">Book Your Free Strategy Call</h3>
        <p className="text-[var(--text-muted)] text-[0.85rem] mb-5">Fill out your details and our agency specialist will call you within 2 hours.</p>
        {submitted ? (
          <div className="text-center py-[30px]">
            <div className="text-[2.5rem] mb-3">✅</div>
            <p className="font-bold text-[1.1rem] text-[var(--text-main)]">Dhanyawad! Request submit ho gayi hai.</p>
            <p className="text-[0.9rem] text-[var(--text-muted)] mt-2">Eddinet team jaldi hi aapko contact karegi.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Full Name *</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={fieldCls} placeholder="e.g. Rahul Sharma" required />
            </div>
            <div className="mb-5">
              <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Phone Number *</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={fieldCls} placeholder={site.phone} required />
            </div>
            <div className="mb-5">
              <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Service Needed</label>
              <select value={service} onChange={(e) => setService(e.target.value)} className={fieldCls}>
                <option>SEO &amp; Organic Growth</option>
                <option>Google &amp; Meta Ads</option>
                <option>Website Development</option>
                <option>Full 360 Digital Marketing</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block text-[0.85rem] font-semibold mb-2 text-[var(--text-muted)]">Message / Website URL</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} className={`${fieldCls} resize-vertical min-h-[90px]`} placeholder="Tell us about your business goals..." />
            </div>
            <button type="submit" disabled={sending} className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] cursor-pointer transition-all duration-300 border-none outline-none text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_-5px_rgba(var(--accent-rgb),0.6)] w-full disabled:opacity-60" style={{ background: "var(--primary-gradient)" }}>
              {sending ? "Opening WhatsApp..." : "Submit & Get Proposal"}
              {!sending && <span>→</span>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}