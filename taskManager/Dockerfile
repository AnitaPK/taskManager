FROM node:19-alpine
# Create app directory
WORKDIR /app
COPY package.json /app
RUN yarn install && yarn cache clean
# Bundle app source
COPY . /app
EXPOSE 8080
CMD [ "node", "app.js" ]
