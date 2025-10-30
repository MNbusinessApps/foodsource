# Mobile Dockerfile for The Bookie Butcher
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Expose ports for Expo
EXPOSE 19000 19001 8081

# Start Expo development server
CMD ["npm", "start", "--", "--web"]