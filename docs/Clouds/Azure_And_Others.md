---
title: Azure and other clouds
---

# Azure and other clouds

Grid’s path model and sample repository cover **many providers** beyond AWS and GCP. Treat them as a shared platform vocabulary with **uneven module/CLI maturity**.

## Azure

| Aspect | Status |
|--------|--------|
| Sample JSON | Yes — VPC/VNet, NSG, NAT, firewall, peering under `projects/demo-app/azure/…` |
| Module bank | `azure/` scaffolds |
| CLI | Many types `coming_soon` / `planned` — check catalog |
| Console release | Off by default |

State:

```bash
GRID_TF_BACKEND=azurerm
GRID_TF_AZURE_RESOURCE_GROUP=…
GRID_TF_AZURE_STORAGE_ACCOUNT=…
GRID_TF_AZURE_CONTAINER=grid-tfstate
```

## Oracle, Alibaba, Tencent, Huawei, OVH, IBM, CtrlS, Yotta

| Aspect | Status |
|--------|--------|
| Sample JSON | Present under matching `projects/demo-app/<cloud>/` folders |
| Module bank | Provider folders exist; verify each module before production apply |
| CLI | Largely catalog / planned |
| Console release | Off by default |
| State backends | `oci`, `oss`, `cos`, `s3compat` — see [Remote state](../Install/Remote_State.md) |

## Platform / service overlays

`rancher`, `openshift`, `redis-enterprise`, `confluent-cloud`, `deutsche-telekom` appear as clouds in the platform id list. They reuse underlying compute/network clouds for state and often for real resources. Use samples as naming guides; confirm modules before apply.

## How to adopt a non-AWS cloud safely

1. Copy a **small** sample unit into **your** desired-state repo.
2. `grid generate` / `grid plan` locally with cloud credentials.
3. Confirm module outputs and state keys.
4. Sync into Grid; use API/CLI apply if console provider release is still off.
5. Only then consider flipping console flags in your fork or waiting for an upstream release.

## Related

- [Support matrix](./Support_Matrix.md)
- [Roadmap](../Roadmap.md)
- [Desired-state layout](../Concepts/Desired_State.md)
