FROM node:10

WORKDIR /usr/src

COPY package*.json ./

RUN yarn

COPY /buid .

EXPOSE 3000

CMD ["yarn", "start"]
