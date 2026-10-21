import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Default — sab allow. Koi crawl-budget block nahi.
        userAgent: "*",
        allow: "/",
        disallow: ["/api"],
      },
      {
        // AI / LLM crawlers explicitly allow.
        //
        // ChatGPT (GPTBot / OAI-SearchBot), Claude (ClaudeBot / anthropic-ai),
        // Perplexity, Google AI Overviews + Gemini (Google-Extended / GoogleOther),
        // Copilot (Bingbot), Apple Intelligence, Meta AI, Amazon, Mistral, Cohere.
        //
        // Ye explicit stanza wildcard se functionally same hai — par isse
        // future me AI training bot aur AI search bot ko alag-alag manage
        // karna possible hota hai (e.g. training bot block karna, search bot
        // allow rakhna).
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "GoogleOther",
          "Bingbot",
          "Applebot",
          "Applebot-Extended",
          "meta-externalagent",
          "meta-externalfetcher",
          "Amazonbot",
          "Amazonbot-Image",
          "CCBot",
          "Bytespider",
          "DuckAssistBot",
          "MistralAI-User",
          "cohere-ai",
          "YouBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://eddinet.com/sitemap.xml",
    host: "https://eddinet.com",
  };
}
