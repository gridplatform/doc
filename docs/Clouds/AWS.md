---
title: AWS
---

# AWS

AWS is the **primary console-released** provider in Grid today. CLI catalogs mark a large set of AWS subtypes as `supported`.

## Layout

```text
projects/<project>/aws/<environment>/<infra-type>/<name>.json
```

Examples in [grid-config](https://github.com/gridplatform/grid-config):

```text
projects/demo-app/aws/…/vpc/…
projects/grid-labs/aws/development/vpc/grid-labs-vpc.json
projects/grid-labs/aws/development/ec2/grid-labs-vm.json
```

## Module bank

Modules live under `aws/` in [grid-terraform](https://github.com/gridplatform/grid-terraform). Unit `metadata.modulePath` often looks like `aws/vpc`.

## Remote state

Typical control-plane setting when state should live on AWS:

```bash
GRID_TF_BACKEND=s3
GRID_TF_STATE_BUCKET=…
GRID_TF_LOCK_TABLE=…
GRID_TF_STATE_REGION=us-east-1
```

You can still store state elsewhere while deploying AWS modules — see [Remote state](../Install/Remote_State.md).

## Console

With `consoleProviderRelease.aws = true`, Infrastructure and Deployments show AWS units (subject to per-type deploy flags and workspace filters).

## Credentials

Prefer an instance role / OIDC on the Grid host. Ambient AWS env vars or shared config also work for labs. Never commit keys into desired-state JSON.

## Related

- [Support matrix](./Support_Matrix.md)
- [Unit JSON](../Concepts/Unit_JSON.md)
- [CLI overview](../CLI/Overview.md)
