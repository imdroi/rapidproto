# with help from https://stackoverflow.com/questions/61800182/how-to-route-angular-app-inside-nginx-container
#### Stage 0, Build API
FROM node:alpine
LABEL author="Constantin Müller"
WORKDIR apps/api/app
COPY package.json ./
RUN npm install
COPY apps/api .
EXPOSE 3333
CMD ["node","server.js"]
