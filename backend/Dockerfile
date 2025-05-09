# Use official Node.js image
FROM node:24-slim

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your backend code
COPY . .

# Expose the port your Express server uses
EXPOSE 5000

# Start the server
CMD ["node", "app.js"]
