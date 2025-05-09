FROM node:24-slim

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Build the Vite app
COPY . .
RUN npm run build

# Install a lightweight static server
RUN npm install -g serve

# Expose the port serve will run on
EXPOSE 3000

# Serve the Vite build output
CMD ["serve", "-s", "dist"]
