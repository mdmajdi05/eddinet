import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

const SITE_URL = "https://eddinet.com";

export default function Breadcrumbs({
  items,
  className = "mb-8",
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <nav
        className={`${className} text-[0.85rem] text-[var(--text-dim)] flex flex-wrap items-center gap-2`}
        aria-label="Breadcrumb"
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[var(--main-accent)] no-underline transition-colors duration-300"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--main-accent)]">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}