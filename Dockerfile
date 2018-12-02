FROM nginx:alpine

ENV PORT 8080

EXPOSE 8080

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY dist/ .
