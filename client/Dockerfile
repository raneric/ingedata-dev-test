FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ARG VITE_API_URL

RUN VITE_API_URL=$VITE_API_URL npm run build

FROM nginx:alpine AS production

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/default.conf /etc/nginx/conf.d/

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]