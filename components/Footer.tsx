import Link from "next/link";
import Image from "next/image";
import { footerServices } from "@/data/services";

const svcs = footerServices;
const comp = ["About Us", "Case Studies", "Industries", "Testimonials", "Insights", "FAQs", "Call Support"];
const contacts = [
  "📞 +91 70428 40441",
  "📞 +91 92895 93792",
  "✉️ contact@eddinet.com",
  "🕒 Mon - Sat: 10:00 AM - 7:00 PM",
];

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] border-t border-[var(--border-color)] py-[80px] pb-[30px] mt-[60px] text-[var(--chrome-text)]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-[60px] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          <div>
            <Link href="/" className="flex items-center">
              <Image src="/eddinet-logo.png" alt="Eddinet" width={320} height={88} className="h-[88px] w-auto" />
            </Link>
            <p className="text-[var(--chrome-text-muted)] text-[0.95rem] my-4 max-w-[320px]">
              Delhi&apos;s premier ROI-focused digital marketing agency. Helping brands rank higher, convert better, and scale exponentially.
            </p>
            <p className="text-[var(--chrome-text-muted)] text-[0.95rem]">
              📍 Okhla Industrial Estate, Phase I, New Delhi - 110020
            </p>
          </div>
          <div>
            <h4 className="text-[1.1rem] font-bold mb-5 text-[var(--main-accent)]">Services</h4>
            <ul className="flex flex-col gap-3">
              {svcs.map((s, i) => (
                <li key={i}><a href="#services" className="text-[var(--chrome-text-muted)] text-[0.9rem] transition-all duration-300 hover:text-[var(--main-accent)] no-underline">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[1.1rem] font-bold mb-5 text-[var(--main-accent)]">Company</h4>
            <ul className="flex flex-col gap-3">
              {comp.map((c, i) => (
                <li key={i}><a href="#about" className="text-[var(--chrome-text-muted)] text-[0.9rem] transition-all duration-300 hover:text-[var(--main-accent)] no-underline">{c}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[1.1rem] font-bold mb-5 text-[var(--main-accent)]">Contact Us</h4>
            <ul className="flex flex-col gap-3">
              {contacts.map((c, i) => (
                <li key={i} className="text-[var(--chrome-text-muted)] text-[0.9rem]">{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--hairline)] pt-[30px] flex items-center justify-between text-[var(--text-dim)] text-[0.85rem] max-[768px]:flex-col max-[768px]:gap-3 max-[768px]:text-center">
          <div>© 2026 Eddinet. All Rights Reserved.</div>
          <div>Designed with modern HTML, CSS &amp; JS inline theme.</div>
        </div>
      </div>
    </footer>
  );
}
