---
title: Archive and remote state
---

# Archive and remote state

Two durable artifacts sit beside desired-state JSON: **remote Terraform state** and the optional **archive/** generated HCL.

## Remote state (required for production)

Every production / install control plane configures one backend via `GRID_TF_*`.

That backend is used for:

1. Unit `terraform.tfstate` objects  
2. Mirroring generated archive objects (same store, different key prefix)

Backends include `s3`, `gcs`, `azurerm`, `oci`, `oss`, `cos`, `s3compat`, and lab-only `local`. Full matrix and bootstrap scripts: [Remote Terraform state](../Install/Remote_State.md).

**Important:** state backend ≠ module cloud. You can deploy Tencent modules while storing state on AWS S3, or keep state on the same vendor as the modules.

## Archive (exit buffer)

On generate / plan / deploy, Grid writes instance Terraform under a path shaped like the unit, typically:

```text
GRID_CONFIG_ROOT/archive/projects/<app>/<cloud>/<env>/<type>/<name>/
```

That directory is ordinary Terraform. Teams can:

- Inspect what Grid generated
- Commit it next to JSON if they want Git history of HCL
- Take over with plain Terraform if they leave Grid later

How to walk away (or dual-run) without treating this as a “finished” checkbox: **[Exit ramp](./Exit_Ramp.md)** — one of the beauties of Grid.

Default with a git module bank is remote `git::` module sources (no vendored copy) unless you set `GRID_MODULE_SOURCE`.

## Fallback workspaces

API-created units without `gitPath` use:

```text
GRID_WORK_DIR/<infrastructure-id>/generated/
```

Prefer Git-tracked units for anything long-lived.

## dependsOn and remote state

Cross-unit references rely on remote state data sources so VPC outputs (etc.) are readable from another root. Both units must have been applied (or otherwise have state) for dependents to plan cleanly.

## Related

- [Exit ramp](./Exit_Ramp.md)
- [Remote state install guide](../Install/Remote_State.md)
- [Release lifecycle](./Release_Lifecycle.md)
- [Module bank](./Module_Bank.md)
