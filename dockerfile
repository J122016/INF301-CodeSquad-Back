# Use an official Node.js 19 image as a base
FROM node:18-bullseye

# Set the working directory to /app
WORKDIR /usr/app

# Copy the package*.json files
COPY src/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code (omitido, bind local scr folder in docker-compose)
# COPY ./src .

# Expose the port
EXPOSE 3000

# Run the command to start the Node.js server
CMD ["npm", "start"]