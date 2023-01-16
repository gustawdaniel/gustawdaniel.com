#!/bin/bash

ENV=prod

echo "ENV: ${ENV}"

case ${ENV} in
  prod|dev|stag)
    # shellcheck disable=SC2046
    export $(xargs < .env.${ENV}.secret)
    ssh root@${SSH_IP} mkdir -p api.gustawdaniel.com
    rsync -aHAXxv --numeric-ids --delete --progress -e "ssh -T -c aes128-gcm@openssh.com -o Compression=no -x" \
 	      src test args doc package.json package-lock.json Dockerfile docker-compose.yml run.js \
 	      root@${SSH_IP}:/root/api.gustawdaniel.com

    ssh root@${SSH_IP} 'cat >> /root/api.gustawdaniel.com/docker-compose.yml << EOF

networks:
  default:
   external:
     name: webproxy
EOF'

    sort -u -t '=' -k 1,1 .env.${ENV}.secret .env > .env.${ENV}.build
    scp .env.${ENV}.build root@${SSH_IP}:~/api.gustawdaniel.com/.env
    ssh root@${SSH_IP} 'cd /root/api.gustawdaniel.com && docker-compose build && docker-compose down && docker-compose up -d';;
  *)
    echo Set ENV to prod dev or stag;;
esac


