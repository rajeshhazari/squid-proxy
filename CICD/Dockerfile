FROM node:10-alpine as build
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.14-alpine

COPY --from=build /usr/src/app/build/ /usr/share/nginx/html
COPY nginx.config /etc/nginx/conf.d/default.conf