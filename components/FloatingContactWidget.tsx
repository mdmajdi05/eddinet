"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Mail, X } from "lucide-react";
import { site } from "@/data/site/contact";

// Eddinet ke contact details — sab kuch data/site/contact.ts se aata hai.
const WHATSAPP_NUMBER = site.phone.replace(/\D/g, "");
const PHONE_NUMBER = site.phone;
const EMAIL = site.email;

const WHATSAPP_MESSAGE =
  "Hi%20Eddinet%2C%20I%27m%20interested%20in%20your%20services.%20Can%20you%20share%20more%20details%3F";
const EMAIL_SUBJECT = "Service%20Inquiry%20-%20Eddinet";
const EMAIL_BODY =
  "Hi%20Eddinet%20Team%2C%0A%0AI%27m%20interested%20in%3A%0A%0A-%20Service%3A%0A-%20Timeline%3A%0A-%20Budget%3A%0A%0APlease%20get%20in%20touch.%0A%0AThanks";

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end gap-3">
      {isOpen && (
        <div className="bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-2xl shadow-[var(--shadow-xl)] p-4 w-72 mb-2">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-bold text-[var(--text-main)]">Contact Us</p>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 rounded-md bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors duration-200 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          <p className="text-xs text-[var(--text-muted)] mb-4 leading-relaxed">
            Talk to our team about SEO, ads, web &amp; app development, or
            branding. We usually reply within a few hours.
          </p>
          <div className="space-y-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[var(--whatsapp-accent-text)] hover:bg-[#25D366]/20 transition-transform duration-200 hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <div>
                <p className="text-xs font-semibold">WhatsApp</p>
                <p className="text-[10px] opacity-70">Chat instantly</p>
              </div>
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[var(--main-accent)] hover:bg-[var(--main-accent)]/15 transition-transform duration-200 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <div>
                <p className="text-xs font-semibold">Call Now</p>
                <p className="text-[10px] opacity-70">{PHONE_NUMBER}</p>
              </div>
            </a>
            <a
              href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}
              className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl bg-[#EA4335]/10 border border-[#EA4335]/20 text-[#EA4335] hover:bg-[#EA4335]/20 transition-transform duration-200 hover:scale-[1.02]"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <div>
                <p className="text-xs font-semibold">Email Us</p>
                <p className="text-[10px] opacity-70">{EMAIL}</p>
              </div>
            </a>
          </div>
        </div>
      )}
      <div className="relative">
        {showPulse && !isOpen && (
          <span className="absolute inset-0 rounded-full bg-[var(--main-accent)] animate-ping opacity-30" />
        )}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-14 h-14 rounded-full text-[var(--on-primary)] shadow-[var(--shadow-lg)] hover:scale-110 transition-transform duration-200 flex items-center justify-center cursor-pointer"
          style={{ background: "var(--primary-gradient)" }}
          aria-label={isOpen ? "Close contact menu" : "Contact us"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
