FROM node:latest
WORKDIR /ui-python
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]