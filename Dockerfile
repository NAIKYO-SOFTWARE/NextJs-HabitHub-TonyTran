# Use an official Node.js runtime as a parent image
FROM node:20.11.1

# Set the working directory in the container
WORKDIR /app

# Install dependencies
# Note: Using a wildcard to ensure both package.json AND package-lock.json (if available) are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
# RUN npm ci --only=production
# For development, install all dependencies including 'devDependencies'
RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
# For development, use a command that starts Next.js in development mode
CMD ["npm", "run", "dev"]