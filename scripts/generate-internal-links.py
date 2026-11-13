#!/usr/bin/env python3
"""
Generate data/seo/internal-links.ts from the internal linking plan.

Usage:
    python scripts/generate-internal-links.py

Requires: openpyxl (pip install openpyxl)

The source workbook is data/seo/internal-linking-plan.xlsx. Old service slugs
are resolved through data/service-redirects.ts so every generated link points
at the live canonical URL instead of a 308 redirect.
"""

import os
import re
from collections import defaultdict

import openpyxl

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
XLSX = os.path.join(ROOT, "data", "seo", "internal-linking-plan.xlsx")
REDIRECTS = os.path.join(ROOT, "data", "service-redirects.ts")
OUT = os.path.join(ROOT, "data", "seo", "internal-links.ts")


def load_redirects():
    text = open(REDIRECTS, encoding="utf-8").read()
    return dict(
        re.findall(r'source:\s*"([^"]+)",\s*destination:\s*"([^"]+)"', text)
    )


def resolve(path, redirects):
    seen = set()
    while path in redirects and path not in seen:
        seen.add(path)
        path = redirects[path]
    return path


def path_of(url, redirects):
    return resolve(url.replace("https://eddinet.com", ""), redirects) or "/"


def kind(path):
    if path.startswith("/blog/"):
        return "Article"
    if path.startswith("/portfolio"):
        return "Portfolio"
    if path.startswith("/services/"):
        return "Service"
    if path == "/services":
        return "Services"
    return "Page"


def cap(source):
    if source == "/":
        return 12
    if source.startswith("/blog") or source.startswith("/portfolio"):
        return 8
    return 6


def main():
    redirects = load_redirects()
    wb = openpyxl.load_workbook(XLSX, data_only=True)
    rows = [
        r
        for r in wb["Link Plan"].iter_rows(min_row=2, values_only=True)
        if r[0] is not None
    ]

    order = {"P1": 0, "P2": 1, "P3": 2}
    plan = defaultdict(list)
    seen = defaultdict(set)

    for row in sorted(rows, key=lambda r: (order.get(r[1], 9), r[0])):
        source = path_of(row[3], redirects)
        target = path_of(row[2], redirects)
        anchor = (row[4] or "").strip()

        if not target or target == source:
            continue
        if target in seen[source] or len(plan[source]) >= cap(source):
            continue

        seen[source].add(target)
        plan[source].append((target, anchor, row[1]))

    lines = [
        "// AUTO-GENERATED from data/seo/internal-linking-plan.xlsx",
        "// Do not edit by hand. Regenerate with scripts/generate-internal-links.py",
        "//",
        "// The SEO plan maps every indexed page (source) to the non-indexed pages",
        "// (target) it should link to. Rendering these as real <a> elements gives",
        "// Google a crawl path to pages that are currently only discoverable via",
        "// the sitemap, which is the main cause of \"Discovered - currently not indexed\".",
        "",
        'export type InternalLinkKind = "Article" | "Portfolio" | "Service" | "Services" | "Page";',
        "",
        "export interface InternalLink {",
        "  href: string;",
        "  label: string;",
        "  kind: InternalLinkKind;",
        '  priority: "P1" | "P2" | "P3";',
        "}",
        "",
        "export const internalLinkPlan: Record<string, InternalLink[]> = {",
    ]

    for source in sorted(plan):
        lines.append(f'  "{source}": [')
        for target, anchor, priority in plan[source]:
            label = anchor.replace("\\", "\\\\").replace('"', '\\"')
            lines.append("    {")
            lines.append(f'      href: "{target}",')
            lines.append(f'      label: "{label}",')
            lines.append(f'      kind: "{kind(target)}",')
            lines.append(f'      priority: "{priority}",')
            lines.append("    },")
        lines.append("  ],")

    lines += ["};", ""]

    with open(OUT, "w", encoding="utf-8", newline="\n") as handle:
        handle.write("\n".join(lines))

    print(
        f"Wrote {OUT}: {len(plan)} source pages, "
        f"{sum(len(v) for v in plan.values())} links"
    )


if __name__ == "__main__":
    main()
