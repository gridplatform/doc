---
title: Cloud support matrix
---

# Cloud support matrix

Grid is a **multi-cloud platform**. Support is layered. Read this table before assuming a sample JSON or module folder is “production ready” in every surface.

## Provider IDs (platform vocabulary)

These ids appear across CLI types, console flags, terraform folders, and `grid-config` samples:

`aws` · `gcp` · `azure` · `oracle` · `ibm` · `alibaba` · `tencent` · `huawei` · `ovh` · `deutsche-telekom` · `ctrls` · `yotta` · `rancher` · `openshift` · `redis-enterprise` · `confluent-cloud`

## Layered maturity (honest view)

| Layer | What “supported” means today |
|-------|------------------------------|
| **Desired-state samples** | Example JSON exists under `projects/demo-app/<cloud>/…` for learning layouts |
| **Module bank folders** | Terraform modules / scaffolds under [grid-terraform](https://github.com/gridplatform/grid-terraform) |
| **CLI catalog** | Resource types marked `supported`, `coming_soon`, or `planned` in grid-cli |
| **Console provider release** | `consoleProviderRelease` — UI Deployments / listing gate (**UI-only**; does not block API/CLI) |

### Snapshot (keep in sync with code)

| Provider | Console released | CLI adapter (typical) | Notes |
|----------|------------------|------------------------|-------|
| **aws** | **Yes** | Supported | Primary console release surface |
| **gcp** | Not yet | Supported | CLI/catalog ready; flip console flag when product-ready |
| **azure** | Not yet | Coming soon | Samples + scaffolds; verify per type |
| **oracle** | Not yet | Planned / catalog | Samples present |
| **ibm** | Not yet | Planned / catalog | Samples present |
| **alibaba** | Not yet | Planned / catalog | Samples present |
| **tencent** | Not yet | Planned / catalog | Samples present |
| **huawei** | Not yet | Planned / catalog | Samples present |
| **ovh** | Not yet | Planned / catalog | Samples present |
| **deutsche-telekom** | Not yet | Planned / catalog | Samples present |
| **ctrls** | Not yet | Planned / catalog | Samples present |
| **yotta** | Not yet | Planned / catalog | Samples present |
| **rancher** | Not yet | Planned / catalog | Platform overlay |
| **openshift** | Not yet | Planned / catalog | Platform overlay |
| **redis-enterprise** | Not yet | Planned / catalog | Service overlay |
| **confluent-cloud** | Not yet | Planned / catalog | Service overlay |

Exact per-resource counts change — use `grid providers` / the CLI resource catalog and [grid-ui feature flags](https://github.com/gridplatform/grid-ui/blob/main/src/config/featureFlags.ts) as source of truth when in doubt.

## What this means for operators

1. **Author JSON for any cloud folder** you intend to operate — layout is shared.
2. **Generate/plan via CLI** where the catalog marks types supported.
3. **Console Deployments picker** only lists console-released providers (today: AWS) unless you change flags in a fork / release.
4. **Remote state** can live on a different cloud than the modules — [Remote state](../Install/Remote_State.md).

## Kubernetes note

- **Managed clusters / node pools** (EKS, GKE, AKS, …) are Terraform units like any other subtype.
- **In-cluster workloads via Argo** are a separate engine — gated off in the console today. See [Roadmap](../Roadmap.md).

## Related

- [AWS](./AWS.md)
- [GCP](./GCP.md)
- [Azure and other clouds](./Azure_And_Others.md)
- [Roadmap](../Roadmap.md)
