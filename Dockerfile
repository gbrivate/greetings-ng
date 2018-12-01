FROM nginx:alpine
ENV PORT 8080
EXPOSE 8080
WORKDIR /usr/share/nginx/html
CMD ["npm run", "prod"]
COPY dist/ .
