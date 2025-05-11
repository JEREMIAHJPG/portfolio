# Use a lightweight Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies with Yarn
RUN yarn install

# Copy the entire project
COPY . .

# Build your Nuxt 3 app
RUN yarn build

# Expose Nuxt default port
EXPOSE 3000

# Start the server
CMD ["yarn", "start"]
