FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

RUN chmod -R ugo+w /usr/local/lib/node_modules

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

RUN npm install -g swagger-ui-express

COPY --chown=node:node . .

#RUN ls -lh /usr/local/bin/docker-entrypoint.sh
#RUN cat /usr/local/bin/docker-entrypoint.sh

EXPOSE 5000

CMD [ "node", "app.js" ]
