# Stage 1 - build package
FROM node:18-slim AS build
# Create and change to the app directory.
WORKDIR /usr/app
# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./
# Install production dependencies. #--only=production
RUN npm install --omit=dev
# Copy local code to the container image.
COPY . /usr/app/
# Run the web service on container startup.
RUN npm run build

# Stage 2 - To production with Nginx serve
FROM nginx
EXPOSE 3000
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build /usr/share/nginx/html