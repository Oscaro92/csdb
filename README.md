# CSDB - Capoeira Sul Da Bahia

[![Version](https://img.shields.io/badge/version-0.3.1-blue.svg)](https://img.shields.io/badge/version-0.3.1-blue.svg)

## Description

Site de l'assocation Nossa Cassa qui promouvoit la Capoeira et ses activités dans le 92

## Librairies Utilisées

- [React](https://react.dev): Framework Javascript
- [fullcalendar](https://fullcalendar.io): Librairie de création calendrier facilement
- [Bootstrap](https://www.npmjs.com/package/bootstrap): Librairie Javascript implémentant [Bootstrap](https://getbootstrap.com/)

## Installation 

1. Clonez le dépôt :

```sh
git clone https://github.com/<votreutilisateur>/csdb.git
cd site-wen
```

2. Installez les dépendances :

```sh
npm install
# or
yarn
```

3. Exécutez le projet en mode développement :

```sh
npm run dev
# or
yarn dev
```

Accédez au site dans votre navigateur en visitant [http://localhost:3000](http://localhost:3000).

## Mise en production (avec PM2)

1. Installez PM2 globalement :

```sh
npm install pm2 -g
```

2. Déployez l'application avec PM2 :

```sh
pm2 start npm --name <name_project> -- start --port <port>
# or
pm2 start yarn --name <name_project> -- start --port <port>
```

3. Vérifiez le bon fonctionnement :

```sh
pm2 list
```

4. Configurer PM2 pour démarrer automatiquement au démarrage du serveur :

```sh
pm2 startup
pm2 save
```
