---
title: Concepts overview
---

# Concepts overview

This section defines the vocabulary Grid uses end-to-end. Read it before authoring JSON or operating the console at scale.

## Core ideas

| Concept | Meaning |
|---------|---------|
| **Desired state** | Git-tracked JSON that declares what *should* exist |
| **Unit** | One JSON file → one infrastructure identity → one Terraform root |
| **Project** | Boundary / app slug (`projects/<slug>/…`) |
| **Cloud / provider** | Path segment and `provider` field (`aws`, `gcp`, `azure`, …) |
| **Environment** | Path segment and `metadata.environment` (`development`, `staging`, `production`, or custom) |
| **Sync** | Pull Git → upsert inventory → mark missing paths stale |
| **Release** | Plan / apply / destroy job with logs, audit, optional approval |
| **Module bank** | Versioned Terraform modules (`grid-terraform`) |
| **Archive** | Generated instance Terraform next to intent (exit buffer) |
| **Remote state** | Shared Terraform state backend for all units on a control plane |
| **Catalog** | Known subtypes per provider (CLI maturity + console flags) |

## End-to-end path

```text
Author JSON in Git
  → Sync into GRID_CONFIG_ROOT
  → Unit appears in Infrastructure (if console catalog allows)
  → Plan release (Terraform plan)
  → Apply release (Terraform apply) when approved / allowed
  → State written to remote backend; archive/ refreshed
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

## Design principles (why it feels this way)

1. **Path is identity.** Renaming a file path changes how state and archive are addressed unless you migrate deliberately.
2. **Reference, don’t merge.** `dependsOn` wires `terraform_remote_state`; dependents are separate applies.
3. **Git delete ≠ cloud delete.** Stale is an operator signal; destroy is explicit.
4. **Console flags ≠ CLI capability.** UI may hide unreleased providers while CLI still generates for registered catalogs.
5. **Host monitoring is separate.** Prometheus runs beside Grid, not inside the Compose app containers.

## Related

- [About Grid](../Home.md)
- [AWS catalog](../Clouds/AWS.md)
