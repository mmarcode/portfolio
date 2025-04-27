FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

# Comando por defecto para desarrollo (vite dev)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
