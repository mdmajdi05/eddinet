"use client";

import { useState } from "react";
import { Mail, Send, CircleCheck, Phone, User } from "lucide-react";
import { site } from "@/data/site/contact";

const inputCls =
  "w-full bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg pl-9 pr-3 py-2 text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] outline-none focus:border-[var(--main-accent)] focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.2)] transition-all duration-200";

export default function SidebarMessageForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) return;
    setSending(true);
    const lines = [
      "*New Blog Enquiry - Eddinet*",
      "==================================",
      `*Name:* ${name.trim()}`,
      `*Phone:* ${phone.trim()}`,
      email.trim() ? `*Email:* ${email.trim()}` : "",
      message.trim() ? `*Message:* ${message.trim()}` : "",
      "",
      "===================================",
      "Sent from the Eddinet blog",
    ].filter(Boolean);
    const url = `${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank");
    setSending(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="rounded-2xl border border-[rgba(var(--accent-rgb),0.3)] bg-[var(--bg-card)] p-6 text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center mb-3">
          <CircleCheck className="w-6 h-6 text-[var(--main-accent)]" />
        </div>
        <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
          WhatsApp Opened!
        </h3>
        <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-4">
          Your message is pre-filled for our team. Just hit Send.
        </p>
        <button
          onClick={() => {
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
            setSuccess(false);
          }}
          className="text-xs font-semibold text-[var(--main-accent)] hover:underline cursor-pointer bg-transparent border-0"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      data-fb-event="Lead"
      data-fb-form="blog-sidebar"
      className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden"
    >
      <div className="w-full bg-gradient-to-r from-red-600 to-red-500 px-5 py-4">
        <h4 className="text-base font-extrabold text-white">
          Contact Us
        </h4>
      </div>
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-dim)] pointer-events-none" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputCls}
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-dim)] pointer-events-none" />
            <input
              type="tel"
              placeholder="Mobile"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputCls}
            />
          </div>
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-dim)] pointer-events-none" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputCls}
          />
        </div>

        <div>
          <textarea
            rows={2}
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] outline-none focus:border-[var(--main-accent)] focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.2)] transition-all duration-200 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold text-[var(--on-primary)] transition-all duration-300 disabled:opacity-60 cursor-pointer"
          style={{ background: "var(--primary-gradient)" }}
        >
          {sending ? "Opening WhatsApp..." : "Send Message"}
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
