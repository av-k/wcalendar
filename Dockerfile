FROM keymetrics/pm2-docker-alpine:7

ENV HOME=/usr/src/app
WORKDIR $HOME

COPY package*.json ./

RUN npm install
RUN npm install -g babel-cli

COPY . .

CMD [ "pm2-docker", "start", "pm2.development.json" ]
