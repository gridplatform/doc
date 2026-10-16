---
title: Roadmap
---

# Roadmap

How Grid grows without changing the model. Per-provider subtype status lives on the [catalog pages](./Clouds/Overview.md), not here.

## The loop that stays

| Area | What it means |
|------|----------------|
| Desired-state Git Sync | Upsert + stale; no auto-destroy |
| Engines | Terraform generate via the CLI and module bank; Kubernetes workload GitOps on the same release path |
| Releases | Plan / apply / destroy with live logs, audit, and optional approval |
| Console | Infrastructure, Deployments, Releases, Topology, Monitoring, Alerts, Admin |
| Auth | Local users, groups, domains, environment approvals |
| Remote state | One control-plane backend, independent of which provider a unit targets |
| Host monitoring | Prometheus + Alertmanager + Alloy beside Grid |

## What moves independently

| Surface | How it advances |
|---------|-----------------|
| **Catalog** | A subtype moves from `planned` to `supported` on that provider’s page when generate is real |
| **Console** | `consoleProviderRelease` and `deployFlags` show a provider or subtype in the UI without changing the CLI |
| **Engines** | `kubernetesWorkloads` exposes in-cluster GitOps. Managed clusters stay Terraform units |
| **Packaging** | Platform tags and changelogs: [Releases](./Install/Releases.md) · [Downloads](./Install/Downloads.md) |

When samples, modules, the CLI catalog, and console flags disagree, the [provider catalog](./Clouds/Overview.md) is the vocabulary and the flags are only the UI.

## Adjacent surfaces

These sit beside the loop. They are not required to run Grid.

| Area | Role |
|------|------|
| **APM / Logging consoles** | Reserved product flags and RBAC domains |
| **OIDC / SSO** | Identity in front of the same local RBAC model |
| **grid-operator** | Cluster CRDs — not on the Compose install path |
| **grid-ml** | Assistant / ML — not required to run Grid |

## Related

- [About Grid](./Home.md)
- [Kubernetes workloads](./Concepts/Kubernetes_Workloads.md)
- [Exit ramp](./Concepts/Exit_Ramp.md)
- [Feature flags](./Console/Feature_Flags.md)
