# Usa una imagen base de Node.js
FROM node:lts

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm ci

# Copia el resto de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["npm", "start"]