FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

FROM node:20-alpine

WORKDIR /app

COPY --from=build /app /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0

EXPOSE 3000

CMD [ "node", "src/server.js" ]