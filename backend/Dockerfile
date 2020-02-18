FROM node:10.15.3-alpine

WORKDIR /app
EXPOSE 3000
#CMD ["npm", "run", "dev"]
ENTRYPOINT ["node", "--inspect=9229", "src/index.js"]


COPY package* ./
RUN npm ci
COPY . .
