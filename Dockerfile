FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

RUN chmod -R ugo+w /home/node/app/node_modules

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

RUN npm install --save swagger-ui-express sharp jsonwebtoken

EXPOSE 5000

CMD [ "node", "app.js" ]
