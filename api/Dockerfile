FROM node:20.10-alpine3.19

WORKDIR /app
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install

COPY . .

CMD ["yarn", "start"]
