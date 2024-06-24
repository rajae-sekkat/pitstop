# Utiliser une image de base légère avec Node.js version 16.x.x
FROM node:16

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json .

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel le service sera en écoute
EXPOSE 8081
EXPOSE 9876

# Définir la commande par défaut pour démarrer le service
CMD ["npm", "start"]
