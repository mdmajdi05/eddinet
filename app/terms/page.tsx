import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Eddinet website and services.",
  alternates: { canonical: "https://eddinet.com/terms" },
};

const sections: { h: string; p: string[] }[] = [
  {
    h: "1. Acceptance of Terms",
    p: [
      "By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the website. Where you engage Eddinet for services, the specific terms of that engagement will be set out in a separate agreement.",
    ],
  },
  {
    h: "2. Services",
    p: [
      "Eddinet provides digital marketing, creative, web development, software, technology and related services. The scope, deliverables, timelines and fees for any engagement are defined in a written proposal or agreement between Eddinet and the client.",
    ],
  },
  {
    h: "3. Website Content",
    p: [
      "The content on this website is provided for general information only. Case studies, statistics and testimonials are published in good faith based on actual client engagements. They are provided to illustrate the nature of our work and do not constitute a guarantee of specific results for any future engagement.",
    ],
  },
  {
    h: "4. Intellectual Property",
    p: [
      "All content on this website, including text, graphics, logos and design, is the property of Eddinet or its licensors and is protected by applicable copyright and intellectual property laws. You may not reproduce or republish website content without prior written permission.",
    ],
  },
  {
    h: "5. Limitation of Liability",
    p: [
      "The website is provided on an 'as is' basis. Eddinet is not liable for any indirect, incidental or consequential damages arising from the use of the website or reliance on its content.",
    ],
  },
  {
    h: "6. Third-Party Links",
    p: [
      "The website may contain links to third-party websites. We are not responsible for the content or practices of those sites and recommend reviewing their own terms and policies.",
    ],
  },
  {
    h: "7. Governing Law",
    p: [
      "These Terms of Service are governed by the laws of India, and any disputes are subject to the exclusive jurisdiction of the courts of Delhi.",
    ],
  },
  {
    h: "8. Contact",
    p: [
      "For questions about these terms, contact us at contact@eddinet.com or call +91 70428 40441.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="pt-[160px] pb-[100px]">
      <div className="w-full max-w-[820px] mx-auto px-5">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
          Legal
        </div>
        <h1 className="text-[2.5rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[2rem]">
          Terms of Service
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