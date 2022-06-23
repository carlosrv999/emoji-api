FROM node:16-slim
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN chown -R node:node /home/node/app
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "index.js" ]