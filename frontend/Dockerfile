FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

ARG VITE_PUBLIC_BACKEND_URL
ENV VITE_PUBLIC_BACKEND_URL=$VITE_PUBLIC_BACKEND_URL

RUN npm run build

FROM nginx:1.30-alpine AS server

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8800