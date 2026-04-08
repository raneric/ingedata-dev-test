# ---------- Stage 1: Install dependencies ----------
FROM node:24-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

# ---------- Stage 3: Runtime ----------
FROM node:24-alpine AS runner

WORKDIR /app

ARG FRONTEND_HOST

ENV FRONTEND_HOST=$FRONTEND_HOST

ENV NODE_ENV=production

COPY --from=deps /app ./

USER node

EXPOSE 3000

CMD ["node", "--inspect=0.0.0.0:9229", "src/server.js"]