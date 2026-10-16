---
title: Concepts overview
---

# Concepts overview

This section defines the vocabulary Grid uses end-to-end. Read it before authoring JSON or operating the console at scale.

## Core ideas

| Concept | Meaning |
|---------|---------|
| **Intent (desired state)** | Git-tracked JSON that declares what *should* exist |
| **Unit** | One JSON file → one inventory identity → one engine root (Terraform workspace **or** workload release) |
| **Engine** | How a unit is realized — `terraform` or `kubernetes` (GitOps) |
| **Project** | Boundary / app slug (`projects/<slug>/…`) |
| **Provider** | Path segment and `provider` field — any catalog id, not a preferred cloud |
| **Environment** | Path segment and `metadata.environment` (`development`, `staging`, `production`, or custom) |
| **Sync** | Pull Git → upsert inventory → mark missing paths stale |
| **Release** | Plan / apply / destroy job with logs, audit, optional approval |
| **Module bank** | Versioned Terraform modules (`grid-terraform`) for the terraform engine |
| **Archive** | Generated instance Terraform next to intent — part of the [exit ramp](./Exit_Ramp.md) |
| **Remote state** | Shared Terraform state backend for terraform-engine units on a control plane |
| **Catalog** | Known subtypes per provider (CLI maturity + console flags) |

## End-to-end path

```text
Author JSON in Git
  → Sync into GRID_CONFIG_ROOT
  → Unit appears in Infrastructure (if console catalog allows)
  → Plan / apply release via the unit’s engine:
       · terraform  → plan/apply + remote state + archive/
       · kubernetes → cluster GitOps
  → Optional metrics labeled with grid_unit_id
```

## Deep dives

| Topic | Page |
|-------|------|
| Path layout & samples | [Desired-state layout](./Desired_State.md) |
| JSON fields, dependsOn, kinds | [Unit JSON](./Unit_JSON.md) |
| Sync, stale, drift, ids | [GitOps sync](./GitOps_Sync.md) |
| Plan / apply / destroy | [Release lifecycle](./Release_Lifecycle.md) |
| Modules & pins | [Module bank](./Module_Bank.md) |
| State + archive | [Archive and remote state](./Archive_And_Remote_State.md) |
| In-cluster apps / Argo | [Kubernetes workloads](./Kubernetes_Workloads.md) |
| Leaving without a black box | [Exit ramp](./Exit_Ramp.md) |

## Design principles (why it feels this way)

1. **Path is identity.** Renaming a file path changes how state, archive, and inventory are addressed unless you migrate deliberately.
2. **Reference, don’t merge.** `dependsOn` wires remote state (terraform); dependents remain separate applies.
3. **Git delete ≠ cloud / cluster delete.** Stale is an operator signal; destroy is explicit.
4. **Console flags ≠ CLI capability.** The UI may hide a provider or engine that the CLI catalog already describes.
5. **Engines share Sync and RBAC.** Terraform and Kubernetes workloads differ in *how* they apply, not in who owns intent.
6. **Host monitoring is separate.** Prometheus runs beside Grid, not inside the Compose app containers.

## Related

- [About Grid](../Home.md)
- [Provider catalogs](../Clouds/Overview.md)
