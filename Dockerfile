FROM node:16-alpine AS build
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 4200

CMD /usr/src/app/node_modules/.bin/ng serve --configuration=production --host 0.0.0.0
