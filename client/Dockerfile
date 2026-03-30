FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine AS production

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our Nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Add security headers
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]