FROM node:15.3.0-alpine as builder

ENV WEBSITE_HOME=/srv/website

WORKDIR ${WEBSITE_HOME}
COPY . ${WEBSITE_HOME}

RUN npm install
RUN npm run build --prod

FROM nginx:1.19.5-alpine

COPY --from=builder /srv/website/dist/Website /usr/share/nginx/html