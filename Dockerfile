FROM node:8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY .eslintrc.json ./
COPY *.js ./
COPY postcss.config.js ./
COPY front-end front-end

RUN npm run build

CMD [ "npm", "start" ]

EXPOSE 3000