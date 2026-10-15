---
title: Kubernetes workloads
---

# Kubernetes workloads

Grid is **not only a Terraform control plane**. The product model is one Git-backed desired-state tree and one release loop; **how** a unit is realized depends on its **engine**.

| Engine | What it operates | Status today |
|--------|------------------|--------------|
| **`terraform`** | Cloud modules, managed clusters, node pools, most catalog subtypes | Shipped — generate / plan / apply via [grid-cli](https://github.com/gridplatform/grid-cli) |
| **`kubernetes`** | In-cluster workloads (Applications, Helm, Kustomize, Jobs, …) via **GitOps** (Argo CD / OpenShift GitOps) | **Gated** — API and console behind `kubernetesWorkloads` / `GRID_ARGO_*`; see [Roadmap](../Roadmap.md) |

## Two different “Kubernetes” ideas

Do not confuse them:

| Kind | Engine | Example |
|------|--------|---------|
| **Managed cluster / node pool** | `terraform` | EKS, GKE, AKS units in the cloud catalog |
| **Workloads inside a cluster** | `kubernetes` | Deployments, Helm releases, Application CRs reconciled by Argo |

Clusters are infrastructure. Workloads are continuous delivery on top of a cluster. Grid is designed to own **both** under the same project / environment / RBAC story.

## What GitOps means here

1. **Desired-state Sync** (already shipped) — Grid pulls **your** Git repo of path-shaped JSON into inventory. That is shared for every engine.
2. **Workload GitOps** (onboarding) — for `kubernetes` units, apply does **not** mean `terraform apply`. It means Grid drives (or hands off to) a cluster GitOps reconciler so the cluster converges on the workload intent you declared.

Naming in the console keeps **Sources** for the desired-state remote so “GitOps” can mean in-cluster CD without colliding with Sync settings — [Console overview](../Console/Overview.md).

## Unit shape (direction of travel)

Workload units still live under the same path grammar:

```text
projects/<project>/<cloud-or-platform>/<environment>/<infra-type>/<name>.json
```

The JSON carries engine metadata and workload kind (Application, Helm, Kustomize, CronJob, …). Exact fields land with the gated release; treat samples and API contracts in grid-core as source of truth when the flag flips.

RBAC already reserves a **kubernetes** domain for view / apply when the engine is enabled — [Auth, RBAC, and approvals](../Admin/Auth_RBAC_And_Approvals.md).

## Exit ramp for workloads

Same philosophy as Terraform: Grid must not be a black box.

| You keep | Outside Grid |
|----------|----------------|
| Git history of workload intent | Argo / OpenShift GitOps (or `kubectl` / Helm) against the cluster |
| Cluster credentials you already use | No proprietary workload state format required by Grid |

See [Exit ramp](./Exit_Ramp.md).

## Related flags and config

| Knob | Role |
|------|------|
| `kubernetesWorkloads` (UI) | Hide / show workload engine surfaces |
| `GRID_ARGO_ENABLED` | Core Argo / OpenShift GitOps integration |
| `GRID_ARGO_KUBECONFIG` | Cluster kubeconfig for the reconciler |

Details: [Feature flags](../Console/Feature_Flags.md) · [Configuration](../Install/Configuration.md).

## Related

- [Concepts overview](./Overview.md)
- [Exit ramp](./Exit_Ramp.md)
- [Infrastructure](../Console/Infrastructure.md)
- [Roadmap](../Roadmap.md)
