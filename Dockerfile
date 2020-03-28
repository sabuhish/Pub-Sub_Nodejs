
# we specify base image
FROM node:alpine




WORKDIR /app

# isntall some dependicies
# COPY ./package.json ./
COPY package*.json ./


# install some dependicies
RUN npm install

# next step we will set up defualt command
COPY ./ ./



EXPOSE 4000

CMD [ "node", "index.js" ]
