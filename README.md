# Grid Docs

Guides for [Grid Platform](https://github.com/gridplatform) — install, concepts, admin, and CLI.

**Read these on GitHub.** Markdown-first so teams can browse, fork, and PR without a separate docs site. The same `docs/` tree can power a site later if you want one.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Start here

| Step | Guide |
|------|--------|
| 0. Org adoption | [docs/organizations.md](docs/organizations.md) |
| 1. Remote Terraform state (S3 / GCS / Azure) | [docs/install/remote-state.md](docs/install/remote-state.md) |
| 2. Install Grid (Compose on a VM) | [docs/install/vm.md](docs/install/vm.md) · [docker-compose.md](docs/install/docker-compose.md) |
| 3. Configure env / auth / GitOps | [docs/install/configuration.md](docs/install/configuration.md) |
| 4. Orgs, environments, approvals | [docs/admin/rbac.md](docs/admin/rbac.md) |
| 5. Concepts | [docs/concepts/overview.md](docs/concepts/overview.md) |
| 6. CLI (AWS / GCP) | [docs/cli/aws-gcp.md](docs/cli/aws-gcp.md) |

Install scripts and Dockerfiles live in **[grid-core/install](https://github.com/gridplatform/grid-core/tree/main/install)** (not in this repository).

### One-line install (Compose on Ubuntu)

```bash
export GRID_AUTH_ADMIN_PASSWORD='choose-a-strong-password'
curl -fsSL https://raw.githubusercontent.com/gridplatform/grid-core/main/install/install.sh | sudo -E bash
```

Then open `http://<host>/`. Full path: [docs/install/overview.md](docs/install/overview.md).

## Documentation map

```text
docs/
  organizations.md
  install/          remote-state, vm, compose, configuration
  concepts/
  admin/
  cli/
```

## Product repositories

| Repository | What it’s for |
|------------|---------------|
| [grid-core](https://github.com/gridplatform/grid-core) | Runs Grid on your machine + install packaging |
| [grid-ui](https://github.com/gridplatform/grid-ui) | Website console |
| [grid-cli](https://github.com/gridplatform/grid-cli) | Command-line tool (also used by the API) |
| [grid-terraform](https://github.com/gridplatform/grid-terraform) | Ready-made Terraform modules |
| [grid-config](https://github.com/gridplatform/grid-config) | **Example** desired-state JSON — create your own for real use |

Org profile branding: [gridplatform/.github](https://github.com/gridplatform/.github). Status: [STATUS.md](https://github.com/gridplatform/.github/blob/main/STATUS.md).

## Contributing

Fork → branch → pull request against `main`. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT — see [LICENSE](LICENSE).
