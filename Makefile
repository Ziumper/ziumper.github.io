install-node:
	sudo snap install node --classic

cleanup:
	docker run --rm -v "$PWD":/work -w /work node:20 bash -lc "npm install --no-audit --no-fund @shopify/prettier-plugin-liquid && npx --yes prettier --write ."