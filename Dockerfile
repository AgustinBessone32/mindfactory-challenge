FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY public ./public
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]