"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  User,
  Link as LinkIcon,
  Mail,
  Send,
  CircleCheck,
  Phone,
} from "lucide-react";
import { insights } from "@/data/blog";
import { site } from "@/data/contact";
import { services, type Service } from "@/data/services";

// Blog category → related services mapping (right sidebar me form ke niche dikhta hai)
const RELATED_SERVICES: Record<string, string[]> = {
  "Search Engine Optimization": ["seo", "content", "web-development"],
  "Paid Ads & CRO": ["ads-ppc", "content", "seo"],
  "Tech & Development": ["web-development", "cloud-devops", "software-ai"],
};

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[55] h-[3px] bg-[var(--bg-dark)]/80">
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${progress * 100}%`,
          background: "var(--primary-gradient)",
        }}
      />
    </div>
  );
}

function useShareUrl() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const timer = requestAnimationFrame(() => setUrl(window.location.href));
    return () => cancelAnimationFrame(timer);
  }, []);
  return url;
}

function ShareBtn({
  href,
  icon,
  label,
  color,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] ${color} transition-all duration-200 hover:scale-110`}
      title={label}
    >
      {icon}
    </a>
  );
}

function LeftSidebar({ title }: { title: string }) {
  const shareUrl = useShareUrl();

  return (
    <aside className="hidden xl:flex flex-col items-center pt-2">
      <div
        data-sticky-sidebar
        className="sticky top-[110px] flex flex-col items-center gap-3"
      >
        <ShareBtn
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
          icon={
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          }
          label="Twitter"
          color="hover:text-[var(--main-accent)]"
        />
        <ShareBtn
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
          icon={
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          }
          label="LinkedIn"
          color="hover:text-[#0A66C2]"
        />
        <ShareBtn
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          icon={
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          }
          label="Facebook"
          color="hover:text-[#1877F2]"
        />
        <ShareBtn
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title)}%20${encodeURIComponent(shareUrl)}`}
          icon={
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          }
          label="WhatsApp"
          color="hover:text-[#25D366]"
        />
        <button
          onClick={() => navigator.clipboard?.writeText(window.location.href)}
          className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--main-accent)] hover:border-[rgba(var(--accent-rgb),0.4)] transition-all duration-200 hover:scale-110"
          title="Copy link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}

const inputCls =
  "w-full bg-[var(--input-bg)] border border-[var(--border-color)] rounded-lg pl-9 pr-3 py-2 text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] outline-none focus:border-[var(--main-accent)] focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.2)] transition-all duration-200";

function SidebarMessageForm() {
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

function RightSidebar({
  relatedPosts,
  relatedServices,
  title,
}: {
  relatedPosts: {
    slug: string;
    title: string;
    readTime: string;
    category: string;
  }[];
  relatedServices: {
    slug: string;
    icon: string;
    title: string;
  }[];
  title: string;
}) {
  const shareUrl = useShareUrl();

  return (
    <aside className="hidden xl:block w-[300px] flex-shrink-0">
      <div
        data-sticky-sidebar
        className="sticky top-[110px] space-y-8 overflow-y-auto"
      >
        <SidebarMessageForm />

        {relatedServices.length > 0 && (
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-dim)] mb-4">
              Related Services
            </h4>
            <div className="space-y-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block group"
                >
                  <div className="flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-3.5 transition-all duration-300 hover:border-[rgba(var(--accent-rgb),0.4)] hover:-translate-y-0.5">
                    <span className="text-lg leading-none">{s.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[var(--text-main)] group-hover:text-[var(--main-accent)] transition-colors leading-snug">
                        {s.title}
                      </p>
                      <p className="text-[10px] text-[var(--text-dim)] group-hover:text-[var(--text-muted)] transition-colors">
                        Explore service →
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--text-dim)] group-hover:text-[var(--main-accent)] group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {relatedPosts.length > 0 && (
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-dim)] mb-4">
              Related Articles
            </h4>
            <div className="space-y-4">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block group">
                  <p className="text-xs text-[var(--text-muted)] group-hover:text-[var(--main-accent)] transition-colors leading-relaxed line-clamp-2">
                    {rp.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-[var(--text-dim)]">
                      {rp.readTime} · {rp.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-xl bg-gradient-to-br from-[rgba(var(--accent-rgb),0.08)] to-transparent border border-[rgba(var(--accent-rgb),0.2)] p-5">
          <h4 className="text-sm font-semibold text-[var(--text-main)] mb-1.5">
            Stay ahead in digital growth
          </h4>
          <p className="text-[11px] text-[var(--text-muted)] leading-relaxed mb-4">
            Get weekly insights on SEO, AI search, ads and web strategy.
          </p>
          <Link href={`/contact`}>
            <button
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold text-[var(--on-primary)] transition-all duration-300 cursor-pointer"
              style={{ background: "var(--primary-gradient)" }}
            >
              <Mail className="w-3 h-3" />
              Subscribe
            </button>
          </Link>
        </div>

        <Link href={`/contact`} className="block group">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 text-center hover:border-[rgba(var(--accent-rgb),0.3)] transition-all duration-300">
            <p className="text-xs font-semibold text-[var(--text-main)] mb-1 group-hover:text-[var(--main-accent)] transition-colors">
              Need help growing?
            </p>
            <p className="text-[10px] text-[var(--text-muted)] leading-relaxed">
              Free consultation with our digital growth team.
            </p>
          </div>
        </Link>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 text-center">
          <p className="text-[10px] uppercase tracking-wider text-[var(--text-dim)] font-semibold mb-2">
            Share this article
          </p>
          <div className="flex items-center justify-center gap-2">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--main-accent)] transition-all"
              title="Twitter"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[#0A66C2] transition-all"
              title="LinkedIn"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[#1877F2] transition-all"
              title="Facebook"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title)}%20${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[#25D366] transition-all"
              title="WhatsApp"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const shareUrl = useShareUrl();
  const post = insights.find((i) => i.slug === slug);

  const relatedPosts = post
    ? insights.filter((i) => i.slug !== post.slug).slice(0, 3)
    : [];

  const relatedServices = post
    ? (RELATED_SERVICES[post.category] || ["seo", "content", "web-development"])
        .map((slug) => services.find((s) => s.slug === slug))
        .filter((s): s is Service => Boolean(s))
    : [];

  const relatedServicesForSidebar = relatedServices.map((s) => ({
    slug: s.slug,
    icon: s.icon,
    title: s.title,
  }));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-dark)] pt-[110px]">
        <div className="text-center px-4">
          <div>
            <h1 className="text-6xl font-black text-[var(--main-accent)] mb-4">
              404
            </h1>
            <p className="text-[var(--text-muted)] text-lg mb-8">
              Article not found. The page you are looking for does not exist or
              has been moved.
            </p>
            <Link href={`/blog`}>
              <button
                className="inline-flex items-center gap-2 py-3 px-6 rounded-2xl font-bold text-sm text-[var(--main-accent)] border border-[var(--main-accent)] transition-all duration-300 hover:bg-[rgba(var(--accent-rgb),0.1)] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-dark)]">
      <ReadingProgress />

      <div className="max-w-[1440px] mx-auto px-6 xl:px-10 pb-20">
        <div>
          <div>
            <nav
              className="flex flex-wrap items-center gap-2 text-[0.85rem] text-[var(--text-dim)] pt-[110px] mb-4"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/blog"
                className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="text-[var(--main-accent)] line-clamp-1">{post.title}</span>
            </nav>
            <Link
              href={`/blog`}
              className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--main-accent)] transition-transform duration-200 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span className="text-sm font-medium">Back to Blog</span>
            </Link>
          </div>

          <div className="flex gap-8 xl:gap-12 justify-center">
            <LeftSidebar title={post.title} />

            <main className="flex-1 min-w-0 max-w-3xl xl:max-w-[720px]">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.72rem] font-semibold uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-[var(--text-main)] mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-5 text-sm text-[var(--text-muted)] pb-5 border-b border-[var(--border-color)] mb-5">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[var(--main-accent)]" />
                  <span>{site.name} Team</span>
                </div>
                <span className="w-px h-4 bg-[var(--border-color)]/60" />
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--main-accent)]" />
                  <span>
                    {post.date} &middot; {post.readTime}
                  </span>
                </div>
              </div>

              <div className="flex xl:hidden items-center gap-3 pb-6 mb-6 border-b border-[var(--border-color)]">
                <span className="text-xs text-[var(--text-muted)] font-medium">
                  Share:
                </span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--main-accent)] transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[#0A66C2] transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <button
                  onClick={() =>
                    navigator.clipboard?.writeText(window.location.href)
                  }
                  className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--main-accent)] transition-all"
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                </button>
              </div>

              <div>
                {post.sections.map((sec, i) => (
                  <div key={i} className="mb-10">
                    {sec.heading && (
                      <h2 className="text-xl lg:text-2xl font-bold text-[var(--text-main)] mb-4">
                        {sec.heading}
                      </h2>
                    )}
                    {sec.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className="text-[var(--text-muted)] leading-relaxed mb-4 text-[1.05rem]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-[var(--border-color)]">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-[var(--main-accent)]" />
                  <span className="px-3 py-1 text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-card)] rounded-full border border-[var(--border-color)]">
                    {post.label}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-card)] rounded-full border border-[var(--border-color)]">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--border-color)]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-[var(--text-muted)] font-medium">
                    Share this article:
                  </span>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--main-accent)] hover:border-[rgba(var(--accent-rgb),0.4)] transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[#1877F2] hover:border-[#1877F2]/40 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title)}%20${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[#25D366] hover:border-[#25D366]/40 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      if (navigator.clipboard) {
                        navigator.clipboard.writeText(window.location.href);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--main-accent)] hover:border-[rgba(var(--accent-rgb),0.4)] transition-all"
                  >
                    <LinkIcon className="w-3.5 h-3.5" />
                    Copy Link
                  </button>
                </div>
              </div>

              {relatedPosts.length > 0 && (
                <div className="mt-16">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-[var(--main-accent)] text-sm font-semibold uppercase tracking-wider mb-3">
                      <span className="w-6 h-px bg-[var(--main-accent)]" />
                      Keep reading
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-[var(--text-main)] leading-tight">
                      Related Articles
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedPosts.map((rp) => (
                      <Link key={rp.slug} href={`/blog/${rp.slug}`}>
                        <div className="group p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[rgba(var(--accent-rgb),0.4)] transition-all duration-300 hover:-translate-y-1">
                          <div className={`text-[0.65rem] uppercase tracking-[1.5px] font-bold mb-3 ${rp.categoryColor}`}>
                            {rp.category}
                          </div>
                          <h3 className="font-bold text-sm leading-snug mb-2 text-[var(--text-main)] group-hover:text-[var(--main-accent)] transition-colors">
                            {rp.title}
                          </h3>
                          <p className="text-[var(--text-muted)] text-xs leading-relaxed line-clamp-2">
                            {rp.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mt-3">
                            <Clock className="w-3 h-3" />
                            <span>{rp.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-16 p-8 rounded-xl border border-[rgba(var(--accent-rgb),0.3)] bg-gradient-to-br from-[rgba(var(--accent-rgb),0.05)] to-transparent text-center">
                <h2 className="text-xl font-bold text-[var(--text-main)] mb-3">
                  Want This Applied to Your Business?
                </h2>
                <p className="text-[var(--text-muted)] text-sm mb-6 max-w-lg mx-auto">
                  Talk to the Eddinet team about building this into your growth
                  system. Free consultation, no obligation.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Link href={`/contact`}>
                    <button
                      className="inline-flex items-center justify-center gap-2 py-3 px-7 rounded-full font-bold text-sm text-[var(--on-primary)] transition-all duration-300 hover:-translate-y-[3px] cursor-pointer"
                      style={{ background: "var(--primary-gradient)" }}
                    >
                      Talk to a Growth Expert
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                  <Link href={`/blog`}>
                    <button className="inline-flex items-center justify-center gap-2 py-3 px-7 rounded-full font-bold text-sm border border-[var(--border-color)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px] transition-all duration-300 cursor-pointer">
                      Browse All Articles
                    </button>
                  </Link>
                </div>
              </div>
            </main>

            <RightSidebar relatedPosts={relatedPosts} relatedServices={relatedServicesForSidebar} title={post.title} />
          </div>
        </div>
      </div>
    </div>
  );
}