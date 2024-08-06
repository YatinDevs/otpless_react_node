# Use the official Node.js image from the Docker Hub
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /otpless_react_client

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .


# Expose port 5173, which is the default port for Vite's development server
EXPOSE 5173

# Run the Vite development server
CMD ["npm", "run", "dev"]



#-------------------- for Prod  ---------



# Build the React application
# RUN npm run build

# Install a lightweight static file server
# RUN npm install -g serve

# EXPOSE 5173

# Serve the built application
# CMD ["serve", "-s", "dist", "-l", "4173"]

