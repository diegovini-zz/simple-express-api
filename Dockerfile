#build-stage
FROM node:lts-alpine as build-stage
WORKDIR /app
RUN apk --no-cache add git
RUN git clone https://github.com/diegovini/simple-express-api
COPY package*.json ./
ARG API_KEY
ENV API_KEY=${API_KEY}
RUN npm install
COPY . .


#production-stage
EXPOSE 3000
CMD ["node","api/app.js"]
