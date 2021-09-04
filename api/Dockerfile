FROM node:16

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn set version latest

RUN yarn install --production

COPY . ./
EXPOSE 3000

CMD [ "yarn", "startServer" ]