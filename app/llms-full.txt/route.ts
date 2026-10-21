import { servicePages } from "@/data/services/services";
import { seoChildServices } from "@/data/services/child/seo-child-services";
import { generatedChildServices } from "@/data/services/child/generated-child-services";
import { insights } from "@/data/blog/blog";
import { caseStudies } from "@/data/portfolio/case-studies";
import { projectCategories } from "@/data/portfolio/portfolio";
import { site } from "@/data/site/contact";

// ============================================================================
//  /llms-full.txt  — long-form version of llms.txt
//
//  llms.txt   = index (short descriptions + links)
//  llms-full.txt = poori copy — detailed descriptions, features, process,
//                   benefits, testimonials, FAQs, blog posts, case studies.
//
//  AI crawlers (ChatGPT, Perplexity, Claude, Google AI Overviews) short
//  index se start karte hain aur detail chahiye to full version par aate
//  hain. Isliye dono ek hi data source se bante hain — kabhi out-of-sync
//  nahi honge.
// ============================================================================

export const dynamic = "force-static";

const base = site.url.replace(/\/$/, "");

export async function GET() {
  const out: string[] = [];

  out.push(`# ${site.name} — Full Content`);
  out.push("");
  out.push(
    `> ${site.tagline}. Full long-form content for AI retrieval. Index: ${base}/llms.txt`,
  );
  out.push(
    `>\n> **Contact:** ${site.phone} · ${site.email} · ${site.address} · Hours: ${site.hours}`,
  );
  out.push("");

  // ── SERVICES ─────────────────────────────────────────────────────────────
  out.push("## Service Pages (full content)\n");

  for (const s of servicePages) {
    out.push(`### ${s.title}`);
    out.push("");
    out.push(`URL: ${base}/services/${s.slug}`);
    out.push("");
    out.push(s.desc);
    out.push("");

    const children =
      s.slug === "seo"
        ? seoChildServices.map((c) => ({
            slug: c.slug,
            title: c.title,
            body: c as unknown as Record<string, unknown>,
          }))
        : generatedChildServices
            .filter((c) => c.categorySlug === s.slug)
            .map((c) => ({
              slug: c.slug,
              title: c.title,
              body: c as unknown as Record<string, unknown>,
            }));

    for (const child of children) {
      out.push(`#### ${child.title}`);
      out.push("");
      out.push(`URL: ${base}/services/${s.slug}/${child.slug}`);
      out.push("");

      const b = child.body as {
        metaDescription?: string;
        problemStatement?: string;
        detailedDescription?: string;
        heroSubheading?: string;
        features?: { title: string; description: string }[];
        featuresHeading?: string;
        benefits?: { title: string; description: string }[];
        benefitsHeading?: string;
        process?: {
          heading: string;
          steps: { num: string; title: string; description: string }[];
        };
        whoNeedsThis?: { heading: string; description?: string; points: string[] };
        whyChooseUs?: { heading: string; description?: string; points: string[] };
        caseStudy?: { title: string; metric: string; description: string };
        testimonials?: { name: string; designation: string; review: string }[];
        faqs?: { q: string; a: string }[];
        industries?:
          | { heading: string; description?: string; items: { title: string; description: string }[] }
          | { name: string; description: string }[];
      };

      if (b.metaDescription) out.push(b.metaDescription);
      if (b.problemStatement) {
        out.push("");
        out.push(`**The problem.** ${b.problemStatement}`);
      }
      if (b.detailedDescription) {
        out.push("");
        out.push(b.detailedDescription);
      }

      if (b.features?.length) {
        out.push("");
        out.push(`**${b.featuresHeading ?? "What's included"}.**`);
        for (const f of b.features) out.push(`- ${f.title} — ${f.description}`);
      }

      if (b.process?.steps?.length) {
        out.push("");
        out.push(`**${b.process.heading}.**`);
        for (const st of b.process.steps) {
          out.push(`${st.num}. ${st.title} — ${st.description}`);
        }
      }

      if (b.whoNeedsThis) {
        out.push("");
        out.push(`**${b.whoNeedsThis.heading}.**`);
        if (b.whoNeedsThis.description) out.push(b.whoNeedsThis.description);
        for (const p of b.whoNeedsThis.points) out.push(`- ${p}`);
      }

      if (b.benefits?.length) {
        out.push("");
        out.push(`**${b.benefitsHeading ?? "Benefits"}.**`);
        for (const bn of b.benefits) out.push(`- ${bn.title} — ${bn.description}`);
      }

      if (b.whyChooseUs) {
        out.push("");
        out.push(`**${b.whyChooseUs.heading}.**`);
        if (b.whyChooseUs.description) out.push(b.whyChooseUs.description);
        for (const p of b.whyChooseUs.points) out.push(`- ${p}`);
      }

      if (b.caseStudy) {
        out.push("");
        out.push(
          `**Case study.** ${b.caseStudy.title} — ${b.caseStudy.metric}. ${b.caseStudy.description}`,
        );
      }

      if (b.testimonials?.length) {
        out.push("");
        out.push("**Client reviews.**");
        for (const t of b.testimonials) {
          out.push(`- ${t.name}, ${t.designation}: "${t.review}"`);
        }
      }

      if (b.faqs?.length) {
        out.push("");
        out.push("**FAQ.**");
        for (const f of b.faqs) out.push(`- Q: ${f.q}\n  A: ${f.a}`);
      }

      if (b.industries && (Array.isArray(b.industries) ? b.industries.length : b.industries.items.length)) {
        out.push("");
        if (Array.isArray(b.industries)) {
          out.push("**Industries served.**");
          for (const i of b.industries) {
            out.push(`- ${i.name} — ${i.description}`);
          }
        } else {
          out.push(`**${b.industries.heading}.**`);
          if (b.industries.description) out.push(b.industries.description);
          for (const i of b.industries.items) {
            out.push(`- ${i.title} — ${i.description}`);
          }
        }
      }

      out.push("");
    }
  }

  // ── BLOG ─────────────────────────────────────────────────────────────────
  out.push("## Blog Posts (full content)\n");
  for (const p of insights) {
    out.push(`### ${p.title}`);
    out.push("");
    out.push(`URL: ${base}/blog/${p.slug}`);
    out.push(`Published: ${p.date} · Category: ${p.category} · ${p.readTime}`);
    out.push("");
    out.push(p.excerpt);
    out.push("");
    for (const sec of p.sections ?? []) {
      out.push(`**${sec.heading}**`);
      out.push("");
      for (const para of sec.paragraphs ?? []) {
        out.push(para);
        out.push("");
      }
    }
  }

  // ── CASE STUDIES ─────────────────────────────────────────────────────────
  out.push("## Case Studies (full content)\n");
  if (caseStudies.length) {
    for (const cs of caseStudies) {
      out.push(`### ${cs.client} — ${cs.tag}`);
      out.push("");
      out.push(`URL: ${base}/case-studies/${cs.slug}`);
      out.push("");
      out.push(cs.summary);
      out.push("");
    }
  } else {
    out.push("No case studies published yet.");
    out.push("");
  }

  // ── PORTFOLIO ────────────────────────────────────────────────────────────
  out.push("## Portfolio Categories\n");
  for (const c of projectCategories) {
    out.push(`- [${c.label}](${base}/portfolio/${c.key})`);
  }
  out.push("");

  const body = out.join("\n");
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
