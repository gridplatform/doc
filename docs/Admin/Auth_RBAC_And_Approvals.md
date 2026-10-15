---
title: Auth, RBAC, and approvals
---

# Auth, RBAC, and approvals

Grid’s console and API enforce **who can read and write** across projects, environments, and domains. The CLI, when used directly with cloud credentials, does **not** inherit those checks.

## Authentication

| Mechanism | Today |
|-----------|--------|
| Local user database | JSON under `GRID_DATA_DIR` |
| Sessions | Token / cookie with configurable TTL (`GRID_AUTH_SESSION_TTL_HOURS`) |
| Bootstrap | `GRID_AUTH_ADMIN_EMAIL` / `GRID_AUTH_ADMIN_PASSWORD` create one **superadmin** |
| Public register | `GRID_AUTH_ALLOW_REGISTER` — keep off for self-host |
| Auth disabled | `GRID_AUTH_DISABLED` — **dev only** |

OIDC / SSO is on the [roadmap](../Roadmap.md).

## Roles

| Role | Scope | Notes |
|------|-------|-------|
| **superadmin** | Global | Bootstrap only; break-glass |
| **admin** | Global | Manage users/groups; follows env approval policy for releases |
| **maintainer** | Global | Can approve; cannot manage users |
| **developer** | Global | Write within policy |
| **member** | None until granted | Access only via custom groups |

New users start as `member` with no grants until an admin assigns a predefined role or group membership.

Built-in groups (`superadmins`, `admins`, `maintainers`, `developers`) mirror predefined roles.

## Domains

Every grant is a domain level: `none` | `read` | `write` (write implies read).

| Domain | Read | Write |
|--------|------|-------|
| **infrastructure** | View / plan | Apply, destroy, custom CLI via API |
| **kubernetes** | View workloads | Apply workload releases (when enabled) |
| **monitoring** | Metrics / health | Manage monitors / policies |
| **apm** | View | Manage (console gated) |
| **logs** | View | Manage (console gated) |
| **topology** | View maps | Manage settings |
| **secrets** | Metadata | Manage refs |

Custom groups bind **project × environment × domain** grants for `member` users.

## Environments

Canonical slugs: `development`, `staging`, `production`. Custom folder names from desired state also appear.

Selecting an environment in the workspace scopes inventory and writes to that env only. The same unit name in another env is a **different** identity.

Ephemeral environments (clone-with-TTL patterns) may appear under `.ephemeral/…` in advanced layouts — treat as non-canonical until your install documents them as GA.

## Approvals

Environment policy can require approval before apply/destroy releases:

- Plan remains available for review
- Pending releases wait for an entitled approver
- Requesters should not self-approve when policy forbids it

Configure under **Admin → Environments**.

## CLI bypass

```text
Console/API  →  Grid AuthZ + approvals
Raw CLI      →  cloud IAM only
```

Lock down who can SSH to the control plane and which cloud roles the host assumes.

## Related

- [Admin & Sources](../Console/Admin_And_Sources.md)
- [Release lifecycle](../Concepts/Release_Lifecycle.md)
- [Configuration](../Install/Configuration.md)
