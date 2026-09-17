# ============================================================================
#  EDDINET — Dockerfile (Next.js standalone)
#
#  BUILD:
#      docker build -t eddinet .
#
#  RUN:
#      docker run -p 3000:3000 eddinet
#
#  NOTE: `output: "standalone"` next.config.ts me already on hai — ye
#  Docker image chhota rakhta hai (sirf production files).
# ============================================================================

# ---------- STAGE 1: deps (node_modules sirf is stage me) ----------
FROM node:22-alpine AS deps
WORKDIR /app

# package files pehle copy -> dependency cache layer efficient rahega
COPY package.json package-lock.json ./
RUN npm ci

# ---------- STAGE 2: build (compile + generate static pages) ----------
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# non-root user build me bhi use karein (best practice)
RUN npm run build

# ---------- STAGE 3: runner (final, lightweight) ----------
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# non-root user banao aur files usi ke paas rakho (security)
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# standalone build ki sirf zaroori files copy karo
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]