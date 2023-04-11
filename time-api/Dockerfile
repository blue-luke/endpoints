FROM amd64/node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm install --production

COPY server.js .

CMD ["npm", "start"]