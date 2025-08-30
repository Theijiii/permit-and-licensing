# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy dependency files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose the service port
EXPOSE 3000

# Start the service
CMD ["npm", "start"]
