---
title: GCP
---

# GCP

GCP is a **first-class layout and CLI** target. The console provider release flag is **off by default** until the product surface is flipped — CLI generate/plan for supported types still works when credentials and modules are present.

## Layout

```text
projects/<project>/gcp/<environment>/<infra-type>/<name>.json
```

Samples include VPC, Cloud NAT, firewall, peering, GKE, and node pools under `projects/demo-app/gcp/…`.

## Module bank

See `gcp/` in [grid-terraform](https://github.com/gridplatform/grid-terraform).

## Remote state

```bash
GRID_TF_BACKEND=gcs
GRID_TF_STATE_BUCKET=…
```

## Console

To show GCP in a private build, set `consoleProviderRelease.gcp = true` in grid-ui feature flags and ship that UI. Public releases keep the flag false until declared ready in STATUS / release notes.

## Related

- [Support matrix](./Support_Matrix.md)
- [Azure and other clouds](./Azure_And_Others.md)
