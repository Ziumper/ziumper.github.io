# Portfolio

Portfolio page: https://ziumper.github.io, forked from [multi-language-al-folio](https://github.com/george-gca/multi-language-al-folio/) (v1.16.2).

## Languages

The site is available in English (default) and Polish, handled by [jekyll-polyglot](https://github.com/untra/polyglot).
Each language keeps its content in its own folder:

- `_pages/<lang>/`, `_posts/<lang>/`, `_projects/<lang>/`
- `_data/<lang>/strings.yml` – UI translations
- `_data/<lang>/cv.yml` – CV content

## Running locally

Requires [Docker](https://www.docker.com/).

```bash
docker compose pull
docker compose up
```

The site is served at http://localhost:8080 and rebuilds automatically on changes.

## Formatting

```bash
npm ci
npx prettier --check .   # or --write to fix
```
