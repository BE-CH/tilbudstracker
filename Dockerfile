FROM node:16

WORKDIR /app
ENV YARN_IGNORE_NODE=1
COPY package.json ./
COPY yarn.lock ./
RUN yarn set version stable
RUN yarn version apply --all
COPY . ./
EXPOSE 3000

WORKDIR /app/api
RUN yarn workspaces focus --production

CMD [ "yarn", "startServer" ]