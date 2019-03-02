FROM node:11

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Expose ports for web and hot reloading
EXPOSE 1234
EXPOSE 33080

CMD [ "npm", "run", "parcel:dev" ]
