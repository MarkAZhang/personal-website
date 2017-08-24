FROM node:8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY .eslintrc.json ./
COPY *.js ./
COPY postcss.config.js ./
COPY front-end front-end
COPY back-end back-end
COPY migrations migrations
COPY .env.prod ./
COPY .babelrc ./

RUN npm run build:backend
RUN npm run build:frontend

EXPOSE 3000
