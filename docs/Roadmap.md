---
title: Roadmap
---

# Roadmap

What Grid is **shipping**, **hardening**, and **explicitly not done yet**. Prefer this page + upstream STATUS notes over guessing from sample JSON.

## Done (core product loop)

| Area | Notes |
|------|-------|
| Desired-state Git Sync | Upsert + stale; no auto-destroy |
| Terraform generate via CLI + module bank | Archive / workspaces |
| Releases with live logs | Plan / apply / destroy |
| Console | Infrastructure, Deployments, Releases, Topology, Monitoring, Alerts, Admin |
| Auth + RBAC + env approvals | Local users, groups, domains |
| Remote state multi-backend | S3 / GCS / Azure / OCI / OSS / COS / S3-compat |
| Host monitoring integration | Prometheus + Alertmanager + Alloy |
| AWS console release surface | Primary UI cloud |
| AWS catalog subtypes | Documented as `supported` under [Clouds/AWS](./Clouds/AWS.md) |

## In progress

| Area | Notes |
|------|-------|
| Broader console cloud release | GCP and others behind `consoleProviderRelease` |
| GCP and other catalogs | Documented as `planned` until released — see [Clouds/GCP](./Clouds/GCP.md) |
| Azure / other CLI catalogs | Moving subtypes from planned → supported |
| Packaging / release polish | GHCR channels, `install/releases.json` — [Releases](./Install/Releases.md) · [Downloads](./Install/Downloads.md) |
| Hardening AWS on real VMs | Production soak |

## Upcoming / gated

| Area | Status | Notes |
|------|--------|-------|
| **Kubernetes workloads (Argo / OpenShift GitOps)** | Gated (`kubernetesWorkloads: false`; API rejects engine) | Docs: [Kubernetes workloads](./Concepts/Kubernetes_Workloads.md). Cluster/node-pool **Terraform** units already exist; in-cluster Application CD is next |
| **APM console** | Flag off | Domain reserved in RBAC |
| **Logging console** | Flag off | Domain reserved in RBAC |
| **OIDC / SSO** | Planned | Local auth first |
| **grid-operator** | Planned repo | CRDs — not on the Compose install path yet |
| **grid-ml** | Planned repo | Assistant / ML — not required to run Grid |
| **Private GitHub Pages for docs** | Needs Enterprise Cloud | Public Pages works on Free orgs |

## How we talk about clouds in docs

- **Samples** show the target multi-cloud layout.
- **Modules** may be scaffolds.
- **CLI catalog** is the generate truth.
- **Console flags** are the UI truth.

When those disagree, the per-provider Clouds pages win — start with [AWS](./Clouds/AWS.md).

## Related

- [About Grid](./Home.md)
- [Kubernetes workloads](./Concepts/Kubernetes_Workloads.md)
- [Exit ramp](./Concepts/Exit_Ramp.md)
- [Feature flags](./Console/Feature_Flags.md)
