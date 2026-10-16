---
title: Exit ramp
---

# Exit ramp

The **exit ramp** is one of the beauties of Grid — not a checklist item you “finish,” and not a trapdoor out of a black box.

Grid is opinionated about how you **author** and **operate** (Git-backed intent, Sync, releases, RBAC). It is deliberately **not** opinionated about locking you into Grid. Whatever engine ran the unit — Terraform or Kubernetes workload GitOps — you keep portable artifacts and standard tools.

That is the point: control-plane ergonomics **and** a clean handoff when you want to dual-run or leave.

## What you get

| Artifact | Engine | Why it matters |
|----------|--------|----------------|
| **`archive/` HCL** | Terraform | Instance Terraform — readable, reviewable, runnable with plain `terraform` |
| **Remote state** | Terraform | Standard backends (`GRID_TF_*`); not a proprietary state format |
| **Git intent** | All engines | Desired-state JSON, including workload intent, stays in **your** repo |
| **Cluster GitOps** | Kubernetes workloads | Argo CD / OpenShift GitOps (or the cluster’s own tools) can keep reconciling without Core / UI |

Nothing here requires a special “Grid export” product. The ramp is the normal operating path made first-class.

## What the exit ramp is not

| Not this | Reality |
|----------|---------|
| A one-time migration wizard | Artifacts refresh as you plan / apply (or as GitOps reconciles) |
| Proof that “Grid is done” | It is an ongoing property of the platform |
| Abandoning Git | You can keep the repo and only stop using Core / UI |
| Terraform-only thinking | Workloads exit to cluster GitOps the same way cloud units exit to Terraform |

## Steps — Terraform units

When you want to operate a **Terraform** unit without Grid in the loop — or prove that you could:

### 1. Generate (or plan) the unit

From the console, API, or CLI, run **generate** or **plan**. Grid writes Terraform under a path shaped like the unit file:

```text
GRID_CONFIG_ROOT/archive/projects/<project>/<cloud>/<environment>/<infra-type>/<unit-name>/
  main.tf
  …
```

Optional: commit `archive/` next to JSON if you want HCL history in Git.

### 2. Confirm remote state

Note the control plane’s `GRID_TF_*` backend — that is the store Terraform uses outside Grid. Details: [Remote Terraform state](../Install/Remote_State.md) · [Archive and remote state](./Archive_And_Remote_State.md).

### 3. Point Terraform at the archive root

On a **local** machine with cloud credentials and Terraform ≥ 1.5:

```bash
cd archive/projects/<project>/<cloud>/<environment>/<infra-type>/<unit-name>/
terraform init
terraform plan
```

Keep the same backend configuration Grid used (or migrate state deliberately with Terraform’s own tools).

### 4. Decide what keeps running Grid

| Keep | Leave |
|------|-------|
| Other projects / environments on Core | This unit (or this whole install) |
| Sync + approvals for authors | Console / API only for this root |
| Host monitoring | Whatever you replace it with |

You can exit **one unit** and keep Grid for everything else.

### 5. Stop Grid from owning that root (when ready)

1. Stop scheduling plan / apply / destroy for that unit.  
2. Optionally remove or archive the JSON so Sync no longer upserts it (destroy is still **explicit** — deleting JSON alone does not destroy cloud resources).  
3. Operate with `terraform` against the archive and remote state only.

## Steps — Kubernetes workload units

When the **kubernetes** engine is enabled ([Kubernetes workloads](./Kubernetes_Workloads.md)):

1. Keep workload intent in Git (Grid’s desired-state tree and/or the repo Argo already watches).  
2. Confirm the cluster still reconciles via Argo CD / OpenShift GitOps (or your chosen CD) using the same kubeconfig / Application CRs.  
3. Stop Grid from issuing workload releases for that unit.  
4. Leave Core / UI whenever you want — the cluster GitOps path does not depend on Grid remaining online.

Exact JSON fields and UI flows track the gated release; the principle does not: **no black-box lock-in**.

## Why this is a strength

Most orchestration UIs hide the real delivery mechanism. Grid’s loop surfaces it — Terraform roots you can run yourself, and (as workloads land) GitOps you already understand. The exit ramp is not a concession; it is how the product stays honest.

## Related

- [Kubernetes workloads](./Kubernetes_Workloads.md)
- [Archive and remote state](./Archive_And_Remote_State.md)
- [Release lifecycle](./Release_Lifecycle.md)
- [Module bank](./Module_Bank.md)
- [About Grid](../Home.md)
