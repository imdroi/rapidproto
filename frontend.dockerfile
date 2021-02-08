# with help from https://stackoverflow.com/questions/61800182/how-to-route-angular-app-inside-nginx-container

## Stage 0: compile angular frontend
FROM node:14-alpine as build
# Preparing working environment
WORKDIR /app

# Copy only package json to avoid a complete rebuild, when only sources have changed
COPY ["package.json", "nx.json", "decorate-angular-cli.js", "angular.json", "jest.config.js", "jest.preset.js", ".eslintrc.json", "tsconfig.base.json", "/app/"]

# Install Angular CLI --unsafe-perm because we are root and pug installation fails otherwise
RUN npm install --unsafe-perm --allow-root --legacy-peer-deps

# Installing app source into image
COPY ["./apps/rapidproto", "/app/apps/rapidproto"]
COPY ["./libs", "/app/libs"]
COPY ["./tools","/app/tools"]

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN npm run build --prod --unsafe-perm --allow-root


## Stage 1: serve app with nginx server
FROM nginx:latest

# copy compiled artifact into webserver root
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/apps/rapidproto /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposing ports
EXPOSE 80

# Starting server
CMD ["nginx", "-g", "daemon off;"]
