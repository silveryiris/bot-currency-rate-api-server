FROM node:slim

WORKDIR /usr/src/app

COPY package*json ./

RUN npm ci

COPY . .

EXPOSE 5566

CMD ["npm", "run", "serve"]
