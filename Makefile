install-node:
	sudo snap install node --classic

cleanup:
	npx prettier . --write