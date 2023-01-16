include .env
export

node_modules: package.json
	npm i

up: node_modules
	DEBUG=debug npm run dev

deploy:
	./scripts/deploy.sh

ssh:
	ssh root@"${SSH_IP}"
