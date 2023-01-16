include .env
export

node_modules: package.json
	npm i

up: node_modules
	npm run dev

deploy:
	./scripts/deploy.sh

ssh:
	ssh root@"${SSH_IP}"
