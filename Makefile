.PHONY: install-node serve build cleanup

install-node:
	sudo snap install node --classic

# run the site locally on http://localhost:8080 (live reload included)
serve:
	docker compose up

# production build into _site/
build:
	docker compose run --rm -e JEKYLL_ENV=production jekyll bash -lc "git config --global --add safe.directory '*' && bundle exec jekyll build"

# format the whole repository with the prettier versions pinned in package-lock.json
cleanup:
	docker run --rm -v "$(shell pwd)":/work -w /work node:20 bash -lc "npm ci --no-audit --no-fund && npx prettier --write ."
