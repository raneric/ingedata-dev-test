# ---------- Stage 1: Install dependencies ----------
FROM node:24-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

# ---------- Stage 3: Runtime ----------
FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=deps /app ./

USER node

EXPOSE 3000

CMD ["node", "src/server.js"]