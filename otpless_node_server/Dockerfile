FROM node:20-alpine

WORKDIR /otpless_node_server
COPY package*.json ./
RUN npm install --only=production
COPY . .
# Ensure the exposed port matches the one used in docker-compose.yml
EXPOSE 8088 

CMD ["npm", "run", "start"]