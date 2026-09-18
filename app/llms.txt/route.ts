import { servicePages } from "@/data/services";
import { seoChildServices } from "@/data/seo-child-services";
import { generatedChildServices } from "@/data/generated-child-services";
import { industries } from "@/data/industries";
import { insights } from "@/data/blog";
import { caseStudies } from "@/data/case-studies";
import { site } from "@/data/contact";

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
  sections.push("");

  sections.push("## Core Pages\n");
  const core: [string, string][] = [
    ["/", "Home — services overview, results and testimonials"],
    ["/about", "About Eddinet — company story, mission and stats"],
    ["/services", "All services — 13 capability areas"],
    ["/industries", "All industries served"],
    ["/portfolio", "Client portfolio and projects"],
    ["/case-studies", "Published case studies"],
    ["/blog", "Blog — insights and guides"],
    ["/contact", "Contact and consultation booking"],
    ["/privacy-policy", "Privacy policy"],
    ["/terms", "Terms and conditions"],
  ];
  for (const [path, desc] of core) sections.push(`- [${desc.split(" — ")[0]} | ${site.name}](${base}${path}): ${desc}`);

  sections.push("");
  sections.push("## Services\n");
  for (const s of servicePages) {
    sections.push(`### ${s.title}\n`);
    sections.push(`- [${s.title} | Full service page](${base}/services/${s.slug}): ${s.desc}`);

    if (s.slug === "seo" && seoChildServices.length) {
      for (const c of seoChildServices) {
        sections.push(`  - [${c.title}](${base}/services/seo/${c.slug}): ${c.heroSubheading}`);
      }
    } else {
      const children = generatedChildServices.filter((c) => c.categorySlug === s.slug);
      for (const c of children) {
        sections.push(`  - [${c.item}](${base}/services/${s.slug}/${c.slug}): ${c.metaDescription}`);
      }
    }
    sections.push("");
  }

  sections.push("## Industries\n");
  for (const i of industries) {
    sections.push(`- [${i.name}](${base}/industries/${i.slug}): ${i.blurb}`);
  }
  sections.push("");

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
    sections.push("- No case studies published yet. Contact us for proof of work: " + site.email);
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