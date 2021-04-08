FROM node:10.22.1

# Create app directory
WORKDIR /app

COPY . /app

RUN npm install

CMD npm start

EXPOSE 3000