FROM node:14 as builder
COPY ["package.json", "package-lock.json", "/usr/src/"]
WORKDIR /usr/src
RUN npm install
COPY [".", "/usr/src/"]
RUN npm run build


FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/build /usr/share/nginx/html