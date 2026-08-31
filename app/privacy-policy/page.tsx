import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Eddinet collects, uses and protects your personal information.",
  alternates: { canonical: "https://eddinet.com/privacy-policy" },
};

const sections: { h: string; p: string[] }[] = [
  {
    h: "1. Information We Collect",
    p: [
      "We collect information you provide directly, such as your name, phone number and email address when you submit a consultation request or contact us through our website. We also collect limited technical data - such as browser type, pages visited and approximate location - through standard analytics tools to understand how the website is used.",
    ],
  },
  {
    h: "2. How We Use Your Information",
    p: [
      "The information you provide is used to respond to your enquiry, schedule consultations, deliver the services you request and communicate about those services. Technical data is used to improve website performance, content and user experience.",
    ],
  },
  {
    h: "3. Sharing of Information",
    p: [
      "We do not sell your personal information. Information is only shared with trusted service providers who help us operate the website and deliver services, and only to the extent necessary for those purposes.",
    ],
  },
  {
    h: "4. Data Security",
    p: [
      "We apply reasonable administrative, technical and physical safeguards to protect your information. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    h: "5. Cookies & Analytics",
    p: [
      "Our website may use cookies and similar technologies to remember preferences and to measure site performance through analytics providers. You can control cookies through your browser settings.",
    ],
  },
  {
    h: "6. Your Choices",
    p: [
      "You may request access to, correction of, or deletion of the personal information we hold about you by contacting us at the details below. We will respond to reasonable requests within applicable timeframes.",
    ],
  },
  {
    h: "7. Contact Us",
    p: [
      "For any privacy-related questions, contact us at contact@eddinet.com or call +91 70428 40441. Our office is located at Okhla Industrial Estate, Phase I, New Delhi - 110020.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-[160px] pb-[100px]">
      <div className="w-full max-w-[820px] mx-auto px-5">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
          Legal
        </div>
        <h1 className="text-[2.5rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[2rem]">
          Privacy Policy
        </h1>
        <p className="text-[var(--text-muted)] mb-10">Last updated: August 2026</p>
        <div className="flex flex-col gap-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-[1.35rem] font-bold text-[var(--text-main)] mb-3">{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i} className="text-[var(--text-muted)] text-[0.98rem] leading-relaxed mb-3">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/" className="text-[var(--main-accent)] font-bold no-underline hover:underline">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}