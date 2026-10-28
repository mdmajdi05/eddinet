import { insights } from "@/data/blog/blog";
import { site } from "@/data/site/contact";

// ============================================================================
//  /feed.xml  — RSS 2.0 feed (blog posts)
//
//  Kaun use karta hai:
//    - News aggregators (Google News, Flipboard, Feedly, Inoreader)
//    - Readers / feed readers
//    - Search engines ko "fresh content" signal
//
//  `<link rel="alternate" type="application/rss+xml">` layout ke <head> me hai,
//  to browsers + crawlers dono feed discover kar lete hain.
//
//  Posts `data/blog/blog.ts` se aati hain — ek hi source of truth.
// ============================================================================

export const dynamic = "force-static";

const base = site.url.replace(/\/$/, "");

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Blog content me markdown-style links hoti hain: "[label](/blog/slug)".
 * RSS readers markdown nahi samajhte — isliye unhe real <a> anchors me badal
 * dete hain (CDATA ke andar HTML valid hai).
 */
function mdLinks(value: string): string {
  return value.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_m, label: string, href: string) => `<a href="${href}">${label}</a>`,
  );
}

export async function GET() {
  const items = insights.map((post) => {
    const url = `${base}/blog/${post.slug}`;
    const published = new Date(post.date);
    const pubDate = Number.isNaN(published.getTime())
      ? new Date().toUTCString()
      : published.toUTCString();

    const body = post.sections
      .map((section) => {
        const heading = section.heading ? `<h2>${esc(section.heading)}</h2>` : "";
        const paragraphs = section.paragraphs
          .map((p) => `<p>${mdLinks(esc(p))}</p>`)
          .join("\n");
        const table = section.table
          ? `<table><caption>${esc(section.table.caption ?? "")}</caption><thead><tr>${section.table.headers
              .map((h) => `<th>${esc(h)}</th>`)
              .join("")}</tr></thead><tbody>${section.table.rows
              .map(
                (row) =>
                  `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`,
              )
              .join("")}</tbody></table>`
          : "";
        return `${heading}\n${paragraphs}\n${table}`;
      })
      .join("\n");

    return `    <item>
      <title>${esc(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${esc(post.category)}</category>
      <description>${esc(post.excerpt)}</description>
      <content:encoded><![CDATA[${body}]]></content:encoded>
    </item>`;
  });

  const newest = insights[0]?.date
    ? new Date(insights[0].date)
    : new Date();
  const lastBuildDate = Number.isNaN(newest.getTime())
    ? new Date().toUTCString()
    : newest.toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${esc(site.name)} Blog — Marketing, SEO & Technology Insights</title>
    <link>${base}/blog</link>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Practical thinking on SEO, AI search, paid media, content, web development, eCommerce, AI and cloud from ${esc(site.name)}, a digital growth and technology agency in Delhi NCR.</description>
    <language>en-in</language>
    <copyright>${esc(site.name)}</copyright>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Next.js</generator>
    <managingEditor>${esc(site.email)} (${esc(site.name)})</managingEditor>
    <webMaster>${esc(site.email)} (${esc(site.name)})</webMaster>
${items.join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
