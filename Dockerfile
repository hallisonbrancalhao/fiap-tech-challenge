FROM node:20-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --cache .npm --prefer-offline

COPY . .

EXPOSE 4200

RUN ["npm", "run", "start:dev"]
