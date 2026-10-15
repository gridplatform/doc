---
title: Unit JSON
---

# Unit JSON

Every desired-state file is a JSON document Grid and the CLI understand. Below is the contract authors should follow.

## Minimal shape

```json
{
  "provider": "aws",
  "project": "grid-labs",
  "region": "us-east-1",
  "metadata": {
    "name": "grid-labs-vpc",
    "description": "Network fabric",
    "environment": "development",
    "kind": "vpc",
    "modulePath": "aws/vpc"
  },
  "resources": [
    {
      "type": "vpc",
      "name": "grid-labs-vpc",
      "role": "primary",
      "cidr": "10.50.0.0/16"
    }
  ]
}
```

## Top-level fields

| Field | Required | Notes |
|-------|----------|-------|
| `provider` | yes | Must match catalog / path cloud (`aws`, `gcp`, …) |
| `project` | recommended | Should match `projects/<slug>` |
| `region` | usually | Cloud region / location for the unit |
| `metadata` | yes | Identity and linkage |
| `resources` | yes | Non-empty array of resource objects |

## `metadata`

| Field | Purpose |
|-------|---------|
| `name` | Display name / unit name |
| `description` | Human summary |
| `environment` | Must match path environment segment |
| `kind` | Catalog subtype word (same vocabulary as console / CLI) |
| `modulePath` | Module bank path hint (e.g. `aws/vpc`) |
| `dependsOn` | Array of **project-relative** paths to other units |
| `id` | Optional stable UUID — only if **you** set it; Grid does not require committing this |

### `dependsOn` (reference-only)

```json
"dependsOn": [
  "aws/development/vpc/grid-labs-vpc.json"
]
```

Paths are relative to the **project** root (`projects/<slug>/`).

Important:

- DependsOn does **not** merge units into one Terraform apply.
- Grid emits `terraform_remote_state` (or equivalent wiring) so the dependent root can read outputs.
- Apply order is an operator concern (apply VPC before VM).

Example from the labs sample — EC2 depending on VPC:

```text
projects/grid-labs/aws/development/ec2/grid-labs-vm.json
  metadata.dependsOn → aws/development/vpc/grid-labs-vpc.json
```

## `resources[]`

Each entry is a typed object:

| Field | Purpose |
|-------|---------|
| `type` | Catalog subtype (`vpc`, `ec2-instance`, `subnet`, …) |
| `name` | Resource local name |
| `role` | Often `primary` or `support` for folded helpers (e.g. subnets beside a VPC) |
| … | Type-specific properties (`cidr`, `machineType`, rules, …) |

**Primary type** should agree with `metadata.kind`. The console validates catalog vocabulary for released providers.

A VPC unit may include support resources (subnets, etc.) in the same file when the module is designed that way. A compute unit typically **references** network outputs via `dependsOn` rather than owning the VPC stack.

## Catalog vocabulary

Subtype strings are shared across:

- Desired-state `metadata.kind` / `resources[].type`
- Console deploy flags / list visibility
- CLI resource catalog maturity (`supported` / `coming_soon` / `planned`)

Use the same word everywhere. Inventing a free-form type that is not in the catalog will show as invalid/hidden in the console even if a file syncs.

## Unit id (join key)

By default Core derives a stable UUID v5 from the **git path**. Same path → same id after a control-plane reinstall.

- Used for inventory, deployments, and `grid_unit_id` in metrics
- Terraform state addressing remains **path-based**
- Renaming a path without migration breaks state/archive addressing by design

## Validation tips

1. Path segments ↔ `provider` / `environment` / project slug stay consistent.
2. No secrets in JSON.
3. Fill every `REPLACE_*` before apply.
4. Prefer small units; split when blast radius grows.
5. After editing, Sync (or local `grid status`) before Plan.

## Related

- [Desired-state layout](./Desired_State.md)
- [GitOps sync](./GitOps_Sync.md)
- [CLI overview](../CLI/Overview.md)
