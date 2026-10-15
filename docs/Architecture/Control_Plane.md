---
title: Control plane
---

# Control plane

Grid’s control plane is four cooperating repositories plus your desired-state Git remote.

## Components

| Component | Package | Responsibility |
|-----------|---------|----------------|
| **API & runner** | [grid-core](https://github.com/gridplatform/grid-core) | Auth, inventory, GitOps sync, release orchestration, Terraform process, monitoring APIs, install scripts |
| **Console** | [grid-ui](https://github.com/gridplatform/grid-ui) | Browser UX: workspace, Infrastructure, Deployments, Releases, Monitoring, Admin |
| **Generator / CLI** | [grid-cli](https://github.com/gridplatform/grid-cli) | Turns unit JSON into Terraform; plan / deploy / destroy; catalog maturity metadata |
| **Module bank** | [grid-terraform](https://github.com/gridplatform/grid-terraform) | Versioned Terraform modules referenced by generate |
| **Desired state** | **Your** Git repo (samples in [grid-config](https://github.com/gridplatform/grid-config)) | Source of truth for what *should* exist |

```text
┌─────────────┐     HTTPS      ┌──────────────────┐
│  grid-ui    │ ─────────────► │    grid-core     │
│  (nginx)    │   /api/v1      │  API + runner    │
└─────────────┘                └────────┬─────────┘
                                        │ spawn
                                        ▼
                               ┌──────────────────┐
                               │    grid-cli      │
                               │  generate/plan   │
                               └────────┬─────────┘
                                        │ modules
                                        ▼
                               ┌──────────────────┐
                               │ grid-terraform   │
                               │  (git tag pin)   │
                               └──────────────────┘

GRID_CONFIG_ROOT ◄── clone/pull ── your desired-state Git remote
```

## Runtime data (not the source of truth)

Under Core’s data directories you will also see:

| Path / store | Role |
|--------------|------|
| `GRID_DATA_DIR` | Users, sessions, audit, release records, GitOps settings |
| `GRID_WORK_DIR` | Fallback Terraform workspaces for API-only units without `gitPath` |
| `GRID_CONFIG_ROOT` | Desired-state working tree + optional `archive/` |

**Source of truth for intent** is always the Git tree that Sync mirrors into `GRID_CONFIG_ROOT`. Runtime JSON caches are rebuildable.

## Request paths that matter

| User action | Typical path |
|-------------|--------------|
| Sync desired state | `POST /api/v1/gitops/sync` → upsert / stale |
| Plan / apply from console | Release + lifecycle → CLI + Terraform |
| Live logs | SSE `GET /api/v1/deployments/:id/logs/stream` |
| Drift check | Compare content hash / `terraform plan` signals |
| Monitoring | Query Prometheus / Alertmanager URLs configured on the host |

## Production vs development

| Mode | How you run it | Env file |
|------|----------------|----------|
| Development | `npm run dev` in each package | `.env.development` |
| Production | Compose / `npm run prod` / release images | `.env` / `install/.env` |

Production boots refuse incomplete remote state and monitoring URLs. Details: [Development vs production](../Install/Dev_Vs_Prod.md).

## Related

- [GitOps sync](../Concepts/GitOps_Sync.md)
- [Release lifecycle](../Concepts/Release_Lifecycle.md)
- [Install overview](../Install/Overview.md)
