FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application code
COPY . .

# Run linting
RUN npm run lint

# Run tests
RUN npm run test

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]