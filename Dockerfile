FROM node:20
WORKDIR /app/react-app

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

EXPOSE 8080

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript

EXPOSE 8080
CMD ["npm", "run", "start"]
