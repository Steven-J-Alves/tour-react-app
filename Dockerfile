# Define the image we will use and version
FROM node:12-alpine
# Create an app directory to hold the application code
WORKDIR /usr/src/app
# Copy the dependency file to the container's project root directory
COPY package.json ./
COPY yarn.lock ./
# Install app dependencies
RUN yarn
# Copy app folder
COPY . .
# Start server
CMD yarn start
