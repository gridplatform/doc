---
title: Control plane
---

# Control plane

Grid’s control plane is four cooperating repositories plus your intent Git remote. It orchestrates **engines** — Terraform for cloud infrastructure today, and Kubernetes workload GitOps (Argo / OpenShift) as that path releases — under one Sync, release, and RBAC model.

<figure className="grid-figure">
  <img src="/doc/img/diagrams/control-plane.png" alt="Control plane: grid-ui to grid-core to grid-cli to Terraform, plus desired-state Git and remote state" />
  <figcaption>UI and API on top; Git desired-state and remote Terraform state underneath.</figcaption>
</figure>

## Components

| Component | Package | Responsibility |
|-----------|---------|----------------|
| **API & runner** | [grid-core](https://github.com/gridplatform/grid-core) | Auth, inventory, Sync, release orchestration, Terraform runner, gated Argo/workload path, monitoring APIs, install |
| **Console** | [grid-ui](https://github.com/gridplatform/grid-ui) | Browser UX: workspace, Infrastructure, Deployments, Releases, Monitoring, Admin |
| **Generator / CLI** | [grid-cli](https://github.com/gridplatform/grid-cli) | Terraform generate / plan / deploy / destroy; catalog maturity metadata |
| **Module bank** | [grid-terraform](https://github.com/gridplatform/grid-terraform) | Versioned Terraform modules referenced by generate |
| **Intent repo** | **Your** Git remote (samples in [grid-config](https://github.com/gridplatform/grid-config)) | Source of truth for what *should* exist — shared by every engine |

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
| Plan / apply from console | Release + lifecycle → engine (`terraform` CLI today; `kubernetes` GitOps when enabled) |
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
- [Kubernetes workloads](../Concepts/Kubernetes_Workloads.md)
- [Exit ramp](../Concepts/Exit_Ramp.md)
- [Release lifecycle](../Concepts/Release_Lifecycle.md)
- [Install overview](../Install/Overview.md)
