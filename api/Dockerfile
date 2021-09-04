FROM node:16

LABEL org.opencontainers.image.source="https://github.com/BE-CH/tilbudstracker"

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn set version latest

RUN yarn install --production

COPY . ./
EXPOSE 3000

CMD [ "yarn", "startServer" ]