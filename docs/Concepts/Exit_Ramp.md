---
title: Exit ramp
---

# Exit ramp

The **exit ramp** is one of the beauties of Grid — not a checklist item you “finish,” and not a trapdoor out of a black box.

Grid is opinionated about how you **author** and **operate** infrastructure (desired-state JSON, Sync, releases). It is deliberately **not** opinionated about locking you into Grid forever. Every generate / plan / apply path produces ordinary Terraform you can take with you.

That is the point: you get control-plane ergonomics **and** a clean handoff to plain Terraform when you want it.

## What you get

| Artifact | Why it matters |
|----------|----------------|
| **`archive/` HCL** | Instance Terraform for each unit — readable, reviewable, runnable outside Grid |
| **Remote state** | The same backend Terraform already knows; Grid does not invent a proprietary state format |
| **Desired-state JSON** | Your intent stays in Git you own — even if you stop running Core / UI |

Nothing here requires a “Grid export” product. The ramp is the normal generate path.

## What the exit ramp is not

| Not this | Reality |
|----------|---------|
| A one-time migration wizard | Archive refreshes whenever you generate / plan / apply |
| Proof that “Grid is done” | It is an ongoing property of the platform |
| Abandoning GitOps | You can keep the JSON repo and only stop using Core / UI |
| Vendor-shaped state | State lives in standard Terraform backends |

## Steps (use the ramp)

These are the steps when you want to operate a unit **without** Grid in the loop — or when you want confidence that you *could*.

### 1. Generate (or plan) the unit

From the console, API, or CLI, run **generate** or **plan** for the unit. Grid writes Terraform under a path shaped like the desired-state file, for example:

```text
GRID_CONFIG_ROOT/archive/projects/<project>/<cloud>/<environment>/<infra-type>/<unit-name>/
  main.tf
  …
```

Optional: commit `archive/` next to your JSON if you want HCL history in Git.

### 2. Confirm remote state

Note the control plane’s `GRID_TF_*` backend. That is the same store Terraform will use outside Grid. Details: [Remote Terraform state](../Install/Remote_State.md) · [Archive and remote state](./Archive_And_Remote_State.md).

### 3. Point Terraform at the archive root

On a machine with cloud credentials and Terraform ≥ 1.5:

```bash
cd archive/projects/<project>/<cloud>/<environment>/<infra-type>/<unit-name>/
terraform init
terraform plan
```

Use the same backend configuration Grid used (or migrate state deliberately with Terraform’s own tools — do not invent a parallel state key by accident).

### 4. Decide what keeps running Grid

| Keep | Leave |
|------|-------|
| Other projects / environments on Core | This unit (or this whole install) |
| Sync + approvals for JSON authors | Console / API only for this root |
| Monitoring on the host | Whatever you replace it with |

You can exit **one unit** and keep Grid for everything else.

### 5. Stop Grid from owning that root (when ready)

1. Stop scheduling plan / apply / destroy for that unit in the console or API.  
2. Optionally remove or archive the desired-state JSON so Sync no longer upserts it (destroy is still an **explicit** action — deleting JSON alone does not destroy cloud resources).  
3. Operate going forward with `terraform` against the archive (and remote state) only.

## Why this is a strength

Most orchestration UIs hide the real IaC. Grid’s loop **is** Terraform generation. The exit ramp is not a concession — it is the same artifact operators already use for review and audit, made first-class so leaving (or dual-running) never depends on our goodwill.

## Related

- [Archive and remote state](./Archive_And_Remote_State.md)
- [Desired-state layout](./Desired_State.md)
- [Release lifecycle](./Release_Lifecycle.md)
- [Module bank](./Module_Bank.md)
- [About Grid](../Home.md)
