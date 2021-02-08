# with help from https://stackoverflow.com/questions/61800182/how-to-route-angular-app-inside-nginx-container
#### Stage 0, Build API
FROM node:alpine
LABEL author="Constantin Müller"
WORKDIR /app
COPY package.json ./
RUN npm install --prod --legacy-peer-deps
RUN npm run build:api
COPY /app/dist/ .
EXPOSE 3333
CMD ["node","server.js"]
