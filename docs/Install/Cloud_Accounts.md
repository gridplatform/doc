---
title: Cloud accounts and credentials
---

# Cloud accounts and credentials

How the **control plane host** authenticates when Grid runs generate / plan / apply. This is install and operations. Subtype vocabulary lives on the [provider catalogs](../Clouds/Overview.md).

Desired-state JSON must never contain long-lived cloud keys.

## Principles

1. Prefer **instance roles, workload identity, or OIDC** on the Grid VM or Compose host.
2. Ambient credentials on the host (environment, metadata service, shared config) match a local Terraform run against that provider.
3. The **remote state** backend is chosen once for the control plane. It is independent of which providers the units target — see [Remote Terraform state](./Remote_State.md).
4. Credential variable names are the provider SDK’s names (`AWS_*`, `GOOGLE_*`, `ARM_*`, and the equivalents for other clouds). Grid does not invent a second credential format.

## State store versus target provider

One install picks **one** state backend for every unit. Units may target any catalog provider. State can live on the same vendor as the modules, or on a different store (including an S3-compatible endpoint).

Configure the backend with `GRID_TF_*` as documented in [Remote Terraform state](./Remote_State.md). Configure provider credentials the same way you would for Terraform CLI on that host.

## Related

- [Remote Terraform state](./Remote_State.md)
- [Configuration](./Configuration.md)
- [Provider catalogs](../Clouds/Overview.md)
