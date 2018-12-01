FROM nginx:alpine
ENV PORT 8080
EXPOSE 8080
WORKDIR /usr/share/nginx/html
COPY dist/ .
CMD ["npm run", "prod"]
