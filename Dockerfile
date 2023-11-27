FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
 
# ========================================

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY --from=build-stage /app/dist/npvet-frontend/ .
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
