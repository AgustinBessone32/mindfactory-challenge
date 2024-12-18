FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY public ./public
COPY prisma ./prisma


RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000
CMD ["npm", "run", "dev"]