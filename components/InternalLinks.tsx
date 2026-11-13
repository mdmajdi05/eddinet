import Link from "next/link";
import { internalLinkPlan } from "@/data/seo/internal-links";

interface InternalLinksProps {
  /** Path of the page rendering the block, e.g. "/services/seo/local-seo-services-in-delhi-ncr". */
  source: string;
  title?: string;
  description?: string;
  /** Optional cap (the plan already caps each source page). */
  limit?: number;
}

/**
 * "Related pages" block driven by the internal linking plan.
 *
 * WHY THIS EXISTS
 * ---------------
 * The GSC export shows ~117 URLs stuck at "Discovered - currently not
 * indexed". Most of them are only reachable through the sitemap and the mega
 * menu, so Google knows the URL but never gets enough crawl signal to fetch
 * it. This block turns the plan (indexed page -> non-indexed page) into real
 * server-rendered <a> elements, giving every target an inbound path from an
 * already-indexed page with descriptive anchor text.
 *
 * The data lives in data/seo/internal-links.ts and is generated from
 * eddinet-internal-linking-plan.xlsx.
 */
export default function InternalLinks({
  source,
  title = "Related pages",
  description = "Recommended next reads from our team - services, guides and work connected to this topic.",
  limit,
}: InternalLinksProps) {
  const links = (internalLinkPlan[source] ?? []).slice(
    0,
    limit ?? Number.POSITIVE_INFINITY,
  );

  if (links.length === 0) return null;

  return (
    <section
      aria-label={title}
      className="py-[70px] border-t border-[var(--border-color)]"
    >
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="max-w-[720px] mb-7">
          <h2 className="text-[1.6rem] font-extrabold text-[var(--text-main)] tracking-[-0.3px] mb-2 max-[768px]:text-[1.35rem]">
            {title}
          </h2>
          <p className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed">
            {description}
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 max-[768px]:grid-cols-1 list-none p-0 m-0">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex items-start gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(var(--accent-rgb),0.4)]"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 text-[var(--main-accent)] text-[0.95rem] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
                <span className="min-w-0">
                  <span className="block text-[var(--text-main)] text-[0.92rem] font-semibold leading-snug group-hover:text-[var(--main-accent)] transition-colors">
                    {link.label}
                  </span>
                  <span className="mt-1 block text-[0.7rem] uppercase tracking-wider font-bold text-[var(--text-dim)]">
                    {link.kind}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
