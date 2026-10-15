---
title: Cloud accounts and credentials
---

# Cloud accounts and credentials

How the **control plane host** authenticates to cloud APIs when Grid runs generate / plan / apply. This is install/ops — not the per-provider catalog pages under [Clouds](../Clouds/AWS.md).

Desired-state JSON must never contain long-lived cloud keys.

## Principles

1. Prefer **instance roles / workload identity / OIDC** on the Grid VM or Compose host.
2. Ambient credentials on the host (env, metadata service, shared config) are fine for labs.
3. **Remote state** backend is chosen once for the control plane and is independent of which module-bank clouds you deploy — see [Remote Terraform state](./Remote_State.md).

## AWS

Typical for labs: instance profile, or `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` / `AWS_REGION` on the host.

When state lives on S3:

```bash
GRID_TF_BACKEND=s3
GRID_TF_STATE_BUCKET=…
GRID_TF_LOCK_TABLE=…
GRID_TF_STATE_REGION=us-east-1
```

## GCP

Application Default Credentials on the host, or a service-account JSON mounted for the Core process.

```bash
GRID_TF_BACKEND=gcs
GRID_TF_STATE_BUCKET=…
```

## Azure

Azure CLI / managed identity / service principal env vars as used by the Terraform AzureRM provider.

```bash
GRID_TF_BACKEND=azurerm
GRID_TF_AZURE_RESOURCE_GROUP=…
GRID_TF_AZURE_STORAGE_ACCOUNT=…
GRID_TF_AZURE_CONTAINER=grid-tfstate
```

## Other clouds

Oracle, Alibaba, Tencent, Huawei, OVH, IBM, CtrlS, Yotta, and S3-compatible stores use the backends listed in [Remote Terraform state](./Remote_State.md) (`oci`, `oss`, `cos`, `s3compat`, …). Configure provider credentials the same way you would for a local Terraform CLI run against that cloud.

## Related

- [Remote Terraform state](./Remote_State.md)
- [Configuration](./Configuration.md)
- [AWS catalog](../Clouds/AWS.md) · [GCP](../Clouds/GCP.md) · [Azure](../Clouds/Azure.md)
