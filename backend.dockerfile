# with help from https://stackoverflow.com/questions/61800182/how-to-route-angular-app-inside-nginx-container
#### Stage 0, Build API
FROM node:14-alpine
LABEL author="Constantin Müller"
WORKDIR /app

# Installing app source into image
COPY ["package.json", "package-lock.json", "nx.json","decorate-angular-cli.js", "/app/"]
RUN npm ci --unsafe-perm --legacy-peer-deps --allow-root

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# build api app
COPY [".", "/app/"]
RUN npm run build:api

EXPOSE 3333
CMD ["node","/app/dist/apps/api/main.js"]
