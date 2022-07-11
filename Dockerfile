FROM node:16

LABEL org.opencontainers.image.source="ghcr.io/be-ch/tilbudstracker.git"

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn set version stable
RUN yarn plugin import version
RUN yarn plugin import workspace-tools
RUN yarn version apply --all
COPY . ./
EXPOSE 3000

WORKDIR /app/api
RUN yarn workspaces focus --production

CMD [ "yarn", "startServer" ]