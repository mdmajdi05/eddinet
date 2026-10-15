// ============================================================================
//  FILE: data/service-redirects.ts
//  AUTO-GENERATED SERVICE SLUG REDIRECTS (permanent / HTTP 308)
//
//  WORKFLOW — jab bhi kisi service child page ka `slug` badala jaye:
//    1. `data/services/child/<category>/<file>.ts` me naya `slug:` likho.
//    2. `npm run redirects:check` chalao — dry-run jo batata hai kaunse purane
//       slug naye slug pe redirect hone chahiye (kuch bhi write nahi hota).
//    3. `npm run redirects:sync` chalao — ye har purane slug ke liye permanent
//       (308) redirect automatic is file ke AUTO block me append kar deta hai
//       aur `scripts/slug-baseline.json` ko current slugs par update kar deta hai.
//    4. Commit karo. Script dobara chalane par kuch nahi badalta (idempotent).
//
//  `// AUTO-REDIRECTS-START` aur `// AUTO-REDIRECTS-END` ke beech ke entries
//  sirf `scripts/sync-slug-redirects.mjs` likhta hai — inhe manually edit na
//  karo, warna script unhe parse/dedupe nahi kar payegi.
//
//  Entry format: { source, destination, permanent: true } => Next.js 308.
// ============================================================================

export interface SlugRedirect {
  source: string;
  destination: string;
  permanent: boolean;
}

export const serviceRedirects: SlugRedirect[] = [
  // AUTO-REDIRECTS-START
  // AUTO-REDIRECTS-END
];
