// ============================================================================
//  FILE: lib/chat/text.ts  (CHATBOT — TEXT HELPERS)
//  Chhote text utilities jo intent/knowledge search dono use karte hain.
//  Yahan Hinglish normalisation, typo tolerance aur name/phone extraction bhi
//  hai — isi se bot "samajhdar" lagta hai.
// ============================================================================

/** Common words jo search me noise banate hain — ignore. */
export const STOP_WORDS = new Set([
  "the", "and", "for", "you", "your", "yours", "our", "ours", "with", "without",
  "what", "which", "who", "why", "when", "where", "how", "does", "do", "did",
  "can", "could", "would", "should", "are", "is", "was", "were", "will", "be",
  "about", "from", "into", "that", "this", "these", "those", "have", "has", "had",
  "any", "all", "not", "but", "get", "got", "make", "made", "use", "using", "used",
  "out", "much", "many", "need", "want", "tell", "give", "show", "help", "please",
  "there", "here", "they", "them", "work", "works", "working", "thing", "things",
  "some", "just", "also", "very", "more", "most", "like", "than", "then",
  // Hinglish filler words (matlab search me nahi aane chahiye).
  "kya", "hai", "hain", "ho", "hoga", "ka", "ki", "ke", "ko", "me", "mein",
  "par", "se", "ek", "yeh", "ye", "wo", "woh", "kuch", "bhi", "toh", "to",
  "karo", "kar", "karna", "sakte", "sakta", "sakti", "mujhe", "mai", "main",
  "aap", "aapka", "aapki", "hum", "hamara", "hamari", "apna", "apni", "batao",
  "bataiye", "batado", "bata", "chalo", "abhi", "bahut", "thoda", "aur", "ya",
]);

/**
 * Roman-Hinglish words -> English canonical token.
 * Isse "kitna paisa lagega" bhi pricing entry se match ho jaata hai.
 */
const HINGLISH_ALIASES: Record<string, string> = {
  kitna: "price", kitne: "price", kitni: "price", kimat: "price", keemat: "price",
  paisa: "price", paise: "price", rupaye: "price", rupees: "price", rate: "price",
  chahiye: "need", chaiye: "need", chahie: "need", chahiya: "need",
  kaam: "work", kaamkaj: "work",
  samay: "time", waqt: "time", der: "time",
  jaldi: "urgent", turant: "urgent", fatafat: "urgent",
  namaste: "hello", namaskar: "hello", namaskaar: "hello",
  dhanyavad: "thanks", dhanyawad: "thanks", shukriya: "thanks", shukria: "thanks",
  madad: "help", sahayata: "help",
  insaan: "human", aadmi: "human", vyakti: "human",
  dukaan: "store", vyapar: "business", business: "business",
  website: "website", site: "website",
  taiyar: "ready", shuru: "start", shuruaat: "start",
};

/** Devanagari ya common Roman-Hinglish markers. */
const HINGLISH_WORDS = new Set([
  "kya", "hai", "haan", "nahi", "kitna", "kitne", "kaise", "kaisa", "chahiye",
  "chaiye", "mujhe", "aap", "hum", "mera", "meri", "naam", "kaam", "paisa",
  "paise", "batao", "bataiye", "madad", "shukriya", "dhanyavad", "namaste",
  "namaskar", "karo", "kar", "sakte", "sakta", "waqt", "samay", "jaldi",
  "taiyar", "dukaan", "vyapar", "accha", "acha", "theek", "thik", "bhai",
]);

/** "I'm looking for SEO" ko naam na samjhe — in words par reject karte hain. */
const NAME_BLACKLIST = new Set([
  "looking", "interested", "searching", "planning", "trying", "thinking",
  "using", "working", "from", "here", "ready", "not", "just", "new", "the",
  "a", "an", "this", "that", "my", "your", "seo", "ads", "website", "marketing",
  "app", "software", "price", "cost", "help", "consultation", "quote",
]);

/** Service-related words — inhe naam mat samjho. */
const SERVICE_HINTS = [
  "seo", "marketing", "ads", "ppc", "website", "web", "app", "software",
  "cloud", "hosting", "design", "logo", "content", "price", "cost", "quote",
  "consultation", "help", "service", "ecommerce", "shopify", "wordpress",
];

/** Text ko lowercase + clean spaces me badlo (Hinglish punctuation safe). */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\u2018\u2019\u02BC]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function isHinglish(text: string): boolean {
  if (/[\u0900-\u097F]/.test(text)) return true;
  const words = normalizeText(text).split(/[^\p{L}\p{N}+]+/u).filter(Boolean);
  return words.some((w) => HINGLISH_WORDS.has(w));
}

/**
 * Text ko meaningful words me todta hai (lowercase, punctuation hataya,
 * stop-words + chhote words ignore, Hinglish aliases expand).
 */
export function contentWords(text: string, minLength = 3): string[] {
  return text
    .toLowerCase()
    .split(/[^\p{L}\p{N}+]+/u)
    .map((w) => HINGLISH_ALIASES[w] ?? w)
    .filter((w) => w.length >= minLength && !STOP_WORDS.has(w));
}

/** Content words ka unique set (knowledge base keywords ke liye). */
export function keywordsFrom(text: string): string[] {
  return Array.from(new Set(contentWords(text)));
}

/** Simple Levenshtein distance — chhoti typos (recieve/receive) handle karne ke liye. */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const prev = new Array<number>(b.length + 1);
  const curr = new Array<number>(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;

  for (let i = 1; i <= a.length; i++) {
    curr[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    for (let j = 0; j <= b.length; j++) prev[j] = curr[j];
  }
  return prev[b.length];
}

/**
 * Do tokens match karte hain? exact, prefix (>=4 chars) ya 1-2 char typo.
 * Isse "marketng" / "pricng" jaise messages bhi samajh aate hain.
 */
export function tokenMatches(query: string, target: string): boolean {
  if (!query || !target) return false;
  if (query === target) return true;

  // Prefix match sirf tab jab dono thode lambe hon (seo -> search nahi hona chahiye).
  const shorter = query.length <= target.length ? query : target;
  const longer = query.length <= target.length ? target : query;
  if (shorter.length >= 4 && longer.startsWith(shorter)) return true;

  // Typos: 4-7 letters par 1 edit, bade words par 2. 3-letter words
  // (seo, ads, app) sirf exact/prefix match karte hain taaki false
  // positives na banein.
  const allowed = longer.length >= 4 ? Math.min(2, Math.floor(longer.length / 4)) : 0;
  return allowed > 0 && levenshtein(query, target) <= allowed;
}

/** Deterministic variation — same turn par same reply, par repeat nahi. */
export function pick<T>(items: readonly T[], seed: number): T {
  return items[Math.abs(seed) % items.length];
}

/** Title-case a name ("rahul sharma" -> "Rahul Sharma"), Devanagari safe. */
function titleCaseName(name: string): string {
  return name
    .split(/\s+/)
    .map((w) =>
      /[\u0900-\u097F]/.test(w) ? w : w.charAt(0).toUpperCase() + w.slice(1),
    )
    .join(" ");
}

/** Kya text ek naam jaisa lagta hai? (typing mistakes aur sentences reject). */
export function isLikelyName(text: string): boolean {
  const cleaned = text
    .replace(/^(my name is|i am|i'm|this is|mera naam)\s+/i, "")
    .replace(/\s+hai$/i, "")
    .replace(/[.!]+$/g, "")
    .trim();

  if (!cleaned || cleaned.length > 40) return false;
  if (/[?]/.test(cleaned)) return false;

  const words = cleaned.split(/\s+/);
  if (words.length > 3) return false;

  const lower = cleaned.toLowerCase();
  if (words.some((w) => NAME_BLACKLIST.has(w.toLowerCase()))) return false;
  if (SERVICE_HINTS.some((hint) => lower.includes(hint))) return false;

  return /^[\p{L}][\p{L}'.-]*(?:\s+[\p{L}][\p{L}'.-]*){0,2}$/u.test(cleaned);
}

/** "my name is Rahul", "I'm Rahul", "mera naam Rahul hai" se naam nikalo. */
export function extractName(text: string): string | null {
  const patterns = [
    /\bmy name is\s+([\p{L}][\p{L}'.-]*(?:\s+[\p{L}][\p{L}'.-]*){0,2})/iu,
    /\bmera naam\s+([\p{L}][\p{L}'.-]*(?:\s+[\p{L}][\p{L}'.-]*){0,2})\s+hai\b/iu,
    /\bi(?:'m| am)\s+([\p{L}][\p{L}'.-]*(?:\s+[\p{L}][\p{L}'.-]*){0,1})/iu,
    /\bthis is\s+([\p{L}][\p{L}'.-]*(?:\s+[\p{L}][\p{L}'.-]*){0,1})/iu,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (!match) continue;
    const candidate = match[1].trim();
    if (isLikelyName(candidate)) return titleCaseName(candidate);
  }

  if (isLikelyName(text)) return titleCaseName(text.replace(/[.!]+$/g, "").trim());
  return null;
}

/** Phone/WhatsApp number (10-13 digits) nikalo — optional. */
export function extractPhone(text: string): string | null {
  const match = text.match(/(\+?\d[\d\s().-]{8,}\d)/);
  if (!match) return null;
  const digits = match[1].replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) return null;
  return match[1].trim();
}

/** Kya message ek sawaal hai? (lead flow ke beech bhi jawab dena hai) */
export function isQuestion(text: string): boolean {
  const q = normalizeText(text);
  if (!q) return false;
  if (q.includes("?")) return true;
  return /^(what|why|how|when|where|who|which|can|could|do|does|is|are|will|should|kya|kaise|kaun|kab|kahan|kitna|kitne)\b/.test(q);
}
