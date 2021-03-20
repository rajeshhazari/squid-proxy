FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
RUN mkdir /app
RUN chmod 755 /app
COPY --from=build-stage /app/dist/ /app
#COPY nginx.config /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf