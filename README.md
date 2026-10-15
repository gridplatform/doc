# Grid Docs

Product documentation for [Grid Platform](https://github.com/gridplatform) — desired-state GitOps, multi-cloud Terraform orchestration, console, CLI, and install.

**Site:** [https://gridplatform.github.io/doc/](https://gridplatform.github.io/doc/)  
**Source of truth:** Markdown under [`docs/`](docs/) (also readable on GitHub).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Naming

Folders and files follow the same convention as Deep-Dive docs:

- **Folders:** `Pascal-Case-With-Hyphens` (example: `Getting-Started`, `Platform-Ops` style)
- **Files:** `Title_With_Underscores.md` (no numeric prefixes)

## Read the manual

| Section | Start here |
|---------|------------|
| Product | [What_Is_Grid](docs/What_Is_Grid.md) · [Architecture](docs/Architecture/Control_Plane.md) |
| Getting-Started | [Quick_Start](docs/Getting-Started/Quick_Start.md) · [Your_Desired_State_Repo](docs/Getting-Started/Your_Desired_State_Repo.md) |
| Concepts | [Desired_State](docs/Concepts/Desired_State.md) · [Unit_JSON](docs/Concepts/Unit_JSON.md) · [GitOps_Sync](docs/Concepts/GitOps_Sync.md) |
| Clouds | [Support_Matrix](docs/Clouds/Support_Matrix.md) |
| Console | [Overview](docs/Console/Overview.md) |
| Install | [Overview](docs/Install/Overview.md) · [Configuration](docs/Install/Configuration.md) |
| Roadmap | [Roadmap](docs/Roadmap.md) |

Install scripts live in **[grid-core/install](https://github.com/gridplatform/grid-core/tree/main/install)** — not in this repository.

### One-line install (Compose on Ubuntu)

```bash
export GRID_AUTH_ADMIN_PASSWORD='choose-a-strong-password'
curl -fsSL https://raw.githubusercontent.com/gridplatform/grid-core/main/install/install.sh | sudo -E bash
```

## Updating configuration tables

Env-var reference tables are **generated**:

1. Edit [`data/configuration.json`](data/configuration.json)
2. Run `npm run sync:config`
3. Commit JSON + `docs/Install/Configuration.md`

CI fails if the generated file is stale.

## Local docs site

```bash
npm ci
npm start          # http://localhost:3000/doc/
npm run build
```

GitHub Pages deploys the Docusaurus build to the **`gh-pages`** branch via `.github/workflows/deploy-pages.yml`.

One-time setup: **Settings → Pages → Build and deployment**

- **Source:** Deploy from a branch  
- **Branch:** `gh-pages` / `/ (root)`

Do **not** point Pages at `main` — that serves the repo README and hides the docs sidebar.

## Documentation map

```text
docs/
  Home.md
  What_Is_Grid.md
  Roadmap.md
  Architecture/
  Getting-Started/
  Concepts/
  Clouds/
  Console/
  Admin/
  CLI/
  Install/
data/
  configuration.json
scripts/
  render-configuration.mjs
```

## Product repositories

| Repository | Role |
|------------|------|
| [grid-core](https://github.com/gridplatform/grid-core) | API + install |
| [grid-ui](https://github.com/gridplatform/grid-ui) | Console |
| [grid-cli](https://github.com/gridplatform/grid-cli) | Generate / plan / apply |
| [grid-terraform](https://github.com/gridplatform/grid-terraform) | Module bank |
| [grid-config](https://github.com/gridplatform/grid-config) | Example desired-state only |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT — see [LICENSE](LICENSE).
