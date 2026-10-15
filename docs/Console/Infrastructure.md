---
title: Infrastructure
---

# Infrastructure

Infrastructure is the live inventory of desired-state units known to Core after Sync (plus any API-created units).

## List behavior

Rows are filtered by:

1. Workspace project / environment
2. Console provider release + deploy flags (UI-only)
3. Active status (stale / destroyed excluded from many counts)

Invalid catalog vocabulary can surface as a distinct “invalid” visibility for released providers.

## Sync from config

The Infrastructure page includes a **Synced from config** panel:

- Sync pulls Git into inventory
- Shows units that are **desired ahead** of last apply
- Per-unit **Check drift**

Source repo settings remain under Admin → Sources.

## Unit detail

From a unit you typically can:

- Inspect resolved config / catalog errors
- Plan / apply / destroy (subject to RBAC + approvals)
- Restore config to disk when recovering from stale (admin flows)
- View live logs while a job runs

## Engines

| Engine | Today |
|--------|-------|
| `terraform` | Default for cloud modules / clusters / node pools |
| `kubernetes` | Workload engine UI and API path gated — Argo / OpenShift GitOps |

Managed Kubernetes **clusters** remain Terraform units on this page; they are not the gated workload engine. Full story: [Kubernetes workloads](../Concepts/Kubernetes_Workloads.md).

## Related

- [GitOps sync](../Concepts/GitOps_Sync.md)
- [Kubernetes workloads](../Concepts/Kubernetes_Workloads.md)
- [Unit JSON](../Concepts/Unit_JSON.md)
- [Feature flags](./Feature_Flags.md)
