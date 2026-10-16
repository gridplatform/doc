---
title: Console overview
---

# Console overview

The console ([grid-ui](https://github.com/gridplatform/grid-ui)) is the browser control surface for Grid. It talks only to **grid-core** (`VITE_GRID_API_URL`).

## Workspace context

The shell header selects:

- **Project** — from discovered desired-state projects / inventory
- **Environment** — development, staging, production, or custom slugs

Most lists filter to that pair. Unit counts exclude stale/destroyed and console-hidden offerings.

## Primary areas

| Area | Route | Purpose |
|------|-------|---------|
| Overview | `/dashboard` | High-level entry |
| Deployments | `/deployments` | Start plan/apply style runs; live units |
| Releases | `/releases` | Release history |
| Infrastructure | `/infrastructure` | Inventory, detail, sync panel, plan/apply/destroy |
| Topology | `/topology` | Relationship view |
| Monitoring | `/monitoring` | Metrics-backed unit health |
| Alerts | `/alerts` | Alertmanager firings |
| Admin | `/admin` | Users, groups, environments, sources, audit, about |

Product flags can hide **APM**, **Logging**, and the **Kubernetes workloads** engine UI — see [Feature flags](./Feature_Flags.md).

## Sources (GitOps settings)

Desired-state remote and module bank are configured under **Admin → Sources** (legacy `/gitops` redirects here). “GitOps” in the product name for in-cluster CD stays separate from Sources.

## Auth

Local accounts + session cookies/tokens. Bootstrap superadmin from `GRID_AUTH_ADMIN_*`. Details: [RBAC](../Admin/Auth_RBAC_And_Approvals.md).

## Related

- [Infrastructure](./Infrastructure.md)
- [Deployments & releases](./Deployments_And_Releases.md)
- [Monitoring & alerts](./Monitoring_And_Alerts.md)
- [Admin & Sources](./Admin_And_Sources.md)
