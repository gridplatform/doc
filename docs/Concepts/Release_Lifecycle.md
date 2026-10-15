---
title: Release lifecycle
---

# Release lifecycle

A **release** is Grid’s record of a plan, apply, destroy, or related job. Console Plan/Apply/Destroy go through this path so history, approvals, and live logs stay consistent.

## Flow

```text
Desired JSON (synced or API)
        │
        ▼
  Create / select infrastructure unit
        │
        ▼
  Release: plan | apply | destroy
        │
        ├─ optional approval gate (env policy)
        │
        ▼
  grid-cli generate → terraform plan|apply|destroy
        │
        ▼
  Live logs (SSE) + audit + status
```

## Modes

| Mode | Effect |
|------|--------|
| **Plan** | Generate + `terraform plan` — no cloud mutation |
| **Apply** | Generate + apply — creates/updates resources |
| **Destroy** | Tears down the unit’s Terraform root |

Terraform itself decides create vs update vs delete from JSON vs state. Grid exposes that honestly in logs.

## Where Terraform runs from

| Unit kind | Working directory |
|-----------|-------------------|
| Git-tracked (`gitPath` set) | `GRID_CONFIG_ROOT/archive/…` (path-shaped) |
| API-only (no git path) | `GRID_WORK_DIR/<infra-id>/generated/` |

## Approvals

Environment policy can require approval before apply/destroy:

- Plan is typically not gated (read-only intent)
- Requester cannot approve their own write when policy forbids it
- Superadmin may bypass depending on policy design — see [RBAC](../Admin/Auth_RBAC_And_Approvals.md)

## Live logs

While a job runs, Core streams CLI + Terraform output. The console attaches to:

```text
GET /api/v1/deployments/:id/logs/stream
```

## API sketch

| Action | Endpoint (representative) |
|--------|---------------------------|
| Plan | `POST /api/v1/infrastructures/:id/plan` |
| Apply | `POST /api/v1/infrastructures/:id/apply` |
| Destroy | `POST /api/v1/infrastructures/:id/destroy` |
| Console create+run | `POST /api/v1/deployments` with `mode: plan \| apply` |

Exact payloads evolve with the API; treat [grid-core](https://github.com/gridplatform/grid-core) as source for request shapes.

## Credentials

Apply/destroy need cloud credentials on the control plane (instance role, ambient env, or configured provider auth). Prefer roles over long-lived keys.

## Related

- [GitOps sync](./GitOps_Sync.md)
- [CLI overview](../CLI/Overview.md)
- [Deployments & releases (console)](../Console/Deployments_And_Releases.md)
