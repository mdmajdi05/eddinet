import { servicePages } from "@/data/services/services";
import { seoChildServices } from "@/data/services/child/seo-child-services";
import { generatedChildServices } from "@/data/services/child/generated-child-services";
import { insights } from "@/data/blog/blog";
import { caseStudies } from "@/data/portfolio/case-studies";
import { projectCategories } from "@/data/portfolio/portfolio";
import { site } from "@/data/site/contact";
import { buildMetaDescription } from "@/lib/meta-description";

export const dynamic = "force-static";

const base = site.url.replace(/\/$/, "");

export async function GET() {
  const sections: string[] = [];

  sections.push(`# ${site.name}\n`);
  sections.push(`> ${site.tagline}. Based in Delhi NCR, serving clients in 12+ countries.`);
  sections.push(
    `>\n> **Contact:** ${site.phone} · ${site.email} · ${site.address} · Hours: ${site.hours}`,
  );
  sections.push("");
  sections.push(
    "Eddinet is a digital growth, marketing and technology partner offering SEO, AI SEO, social media marketing, ads & PPC, design, web development, eCommerce, mobile apps, custom software, AI solutions, cloud & DevOps, hosting & migration, maintenance & support, reputation management and content services in India and globally.",
  );
  sections.push(
    `> **Full long-form content** (complete service copy, process, FAQs, articles): ${base}/llms-full.txt`,
  );
  sections.push("");

  // ── KEY FACTS ────────────────────────────────────────────────────────────
  // AI answer engines ko chahiye hota hai: kitne services, kaun-sa process,
  // kahan hai, kaise kaam karta hai. Ye block machine-readable facts deta hai.
  sections.push("## Key Facts\n");
  sections.push(`- **Name:** ${site.name}`);
  sections.push(`- **Website:** ${base}`);
  sections.push(`- **Type:** Digital marketing & software agency`);
  sections.push(`- **Head office:** ${site.address}`);
  sections.push(`- **Region served:** Delhi NCR, India, and clients in 12+ countries`);
  sections.push(`- **Phone / WhatsApp:** ${site.phone}`);
  sections.push(`- **Email:** ${site.email}`);
  sections.push(`- **Working hours:** ${site.hours}`);
  sections.push(`- **Service categories:** ${servicePages.length}`);
  sections.push(
    `- **Individual service pages:** ${seoChildServices.length + generatedChildServices.length}`,
  );
  sections.push(`- **Published articles:** ${insights.length}`);
  sections.push(`- **Portfolio categories:** ${projectCategories.length}`);
  sections.push("");
  sections.push(
    "**Core capability areas:** " +
      servicePages.map((s) => s.title).join(", ") +
      ".",
  );
  sections.push("");
  sections.push(
    "**How the work runs:** strategy and audit → intent and research → build and implementation → launch and tracking → compounding optimisation. Engagements run on a connected growth system rather than isolated deliverables, with reporting tied to leads and pipeline instead of vanity rankings.",
  );
  sections.push("");

  sections.push("## Core Pages\n");
  const core: [string, string][] = [
    ["/", "Home — services overview, results and testimonials"],
    ["/about", "About Eddinet — company story, mission and stats"],
    ["/services", `All services — ${servicePages.length} capability areas`],
    ["/portfolio", "Client portfolio and projects"],
    ["/case-studies", "Published case studies"],
    ["/blog", "Blog — insights and guides"],
    ["/contact", "Contact and consultation booking"],
    ["/sitemap-html", "HTML sitemap — every page listed on one page"],
    ["/privacy-policy", "Privacy policy"],
    ["/terms", "Terms and conditions"],
  ];
  for (const [path, desc] of core) {
    sections.push(`- [${desc.split(" — ")[0]} | ${site.name}](${base}${path}): ${desc}`);
  }

  sections.push("");
  sections.push("## Services\n");
  for (const s of servicePages) {
    sections.push(`### ${s.title}\n`);
    sections.push(
      `- [${s.title} | Full service page](${base}/services/${s.slug}): ${buildMetaDescription(s.desc)}`,
    );

    if (s.slug === "seo" && seoChildServices.length) {
      for (const c of seoChildServices) {
        sections.push(
          `  - [${c.title}](${base}/services/seo/${c.slug}): ${c.metaDescription}`,
        );
        if (c.problemStatement) {
          sections.push(`    - Problem solved: ${c.problemStatement}`);
        }
        if (c.whoNeedsThis?.points?.length) {
          sections.push(`    - Who it is for: ${c.whoNeedsThis.points.join("; ")}`);
        }
        if (c.caseStudy) {
          sections.push(
            `    - Proof: ${c.caseStudy.title} — ${c.caseStudy.metric}. ${c.caseStudy.description}`,
          );
        }
        if (c.faqs?.length) {
          for (const f of c.faqs) {
            sections.push(`    - Q: ${f.q} A: ${f.a}`);
          }
        }
      }
    } else {
      const children = generatedChildServices.filter((c) => c.categorySlug === s.slug);
      for (const c of children) {
        sections.push(
          `  - [${c.title}](${base}/services/${s.slug}/${c.slug}): ${c.metaDescription}`,
        );
      }
    }
    sections.push("");
  }

  sections.push("## Blog\n");
  for (const p of insights) {
    sections.push(`- [${p.title}](${base}/blog/${p.slug}): ${p.excerpt}`);
  }
  sections.push("");
  sections.push("## Case Studies\n");
  if (caseStudies.length) {
    for (const cs of caseStudies) {
      sections.push(`- [${cs.client} — ${cs.tag}](${base}/case-studies/${cs.slug}): ${cs.summary}`);
    }
  } else {
    sections.push(
      "- No case studies published yet. Contact us for proof of work: " + site.email,
    );
  }
  sections.push("");
  sections.push("## Portfolio\n");
  for (const c of projectCategories) {
    sections.push(
      `- [${c.label} projects](${base}/portfolio/${c.key}): Client work in ${c.label.toLowerCase()}`,
    );
  }
  sections.push("");

  const body = sections.join("\n");
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
