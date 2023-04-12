FROM amd64/node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm install

ENV NODE_PATH=/app/node_modules

COPY server.js .

CMD ["npm", "start"]