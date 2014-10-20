EZSEED (easy seedbox)
===

Toujours en cours de travaux ;)

## Pré-requis

### Nodejs
[Node version manager](https://github.com/creationix/nvm) est recommandé

### MongoDB
[Instructions d'installation](http://docs.mongodb.org/manual/installation/)

### Server
Si aucun serveur n'est présent, [ezseed installera nginx](https://github.com/ezseed/ezseed/blob/master/scripts/server.sh)
Si vous avez déjà installé un serveur web, ezseed ajoutera sa configuration apache ou nginx (note: apache n'a pas encore été testé)

## Installation

### Dépendances

```
sudo aptitude install gcc-4.7 sudo curl python whois

# nvm - nodejs
curl https://raw.githubusercontent.com/creationix/nvm/v0.17.1/install.sh | bash
source ~/.bashrc
nvm install 0.10.32
nvm alias default 0.10.32

# mongodb
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/debian-sysvinit dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org

```

### Ezseed

#### En tant qu'utilisateur
```
npm i pm2@0.11.0 ezseed -g
# suivez les instructions de configuration
```

#### En tant que `root`

```
npm i ezseed -g --unsafe-perm
npm i pm2@0.11.0 -g --unsafe-perm
```


## Utilisation

Après la configuration, il vous faudra ajouter un utilisateur et lancer ezseed

```
ezseed useradd mynewuser
ezseed start
ezseed transmission start
```

Pour plus d'options regardez l'aide `ezseed -h`

## Bugs connus

- rtorrent a un souci avec les noms en majuscules/minuscules
- rtorrent a un souci avec les caractères spéciaux de certains torrents et peut mener à un disfonctionnement d'ezseed
- rtorrent nécessite une configuration supplémentaire d'AutoTools pour déplacer les téléchargements:
- 

## Bonus 
Synchronisation des fichiers vers votre NAS

Tuto : http://www.legeektechno.fr/serveurs/script-de-synchronisation-de-seedbox-version-2.html

Ensuite génére une clé RSA
```
ssh-keygen -t rsa
ssh-copy-id -i ~/.ssh/id_rsa.pub root@monippublique
cd scripts
nano setEnv.sh
```
Remplacer la valeur LOGS_DIR par 
LOGS_DIR=/var/log/rsync

en root
```
mkdir -p /var/log/rsync
chown -R /var/log/rsync
chgrp -R /var/log/rsync
```
Lancer vos synchronisation maintenant ou gerer les via crontab



![](https://camo.githubusercontent.com/a278375b20071e41ed233b5f6b1e8936222ae0bf/687474703a2f2f7777772e7a75706d6167652e65752f692f687052455238336376472e706e67)
