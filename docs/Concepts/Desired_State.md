---
title: Desired-state layout
---

# Desired-state layout

Desired state is how Grid represents infrastructure intent. The public reference tree lives in [grid-config](https://github.com/gridplatform/grid-config). Your production tree should be a **separate repository** you own.

## Canonical path shape

```text
projects/<project-slug>/<cloud>/<environment>/<infra-type>/<unit-name>.json
```

| Segment | Role | Examples |
|---------|------|----------|
| `projects/<slug>` | Application or ownership boundary | `demo-app`, `grid-labs`, `payments` |
| `<cloud>` | Provider folder | `aws`, `gcp`, `azure`, `oracle`, `huawei`, … |
| `<environment>` | Lifecycle stage | `development`, `staging`, `production`, or a custom slug |
| `<infra-type>` | Type folder (catalog subtype family) | `vpc`, `ec2`, `gke`, `network`, `nsg` |
| `<unit-name>.json` | One deployable unit | `grid-labs-vpc.json` |

### Real examples

```text
projects/demo-app/aws/production/vpc/example-vpc.json
projects/demo-app/gcp/development/gke/grid-development-gke.json
projects/grid-labs/aws/development/ec2/grid-labs-vm.json
projects/demo-app/azure/staging/nsg/example-nsg.json
projects/demo-app/oracle/production/network/example-network.json
```

The sample repo includes many cloud folders under `projects/demo-app/` so authors can see naming patterns across providers — not because every sample is production-ready modules.

## What one file means

Each JSON file is **one unit**:

- One inventory row in Grid
- One Terraform root after generate
- One remote-state address family for that path
- Optionally one `archive/…` directory of generated `.tf`

Do not pack an entire landing zone into a single file unless you intentionally want one Terraform root.

## Optional `archive/`

```text
archive/projects/<project>/<cloud>/<env>/<type>/<name>/
  main.tf
  …
```

CLI and Core regenerate this from JSON on generate / plan / deploy. Committing `archive/` is optional; it is the **plain-Terraform exit buffer** if you ever leave Grid — see [Exit ramp](./Exit_Ramp.md).

## Environments in the path

Canonical environments used across docs and RBAC examples:

| Slug | Typical posture |
|------|-----------------|
| `development` | Fast iteration; lighter approval |
| `staging` | Pre-prod; often requires approval |
| `production` | Tightest write policy |

Custom environment folder names are allowed; the console discovers them from the tree. Keep `metadata.environment` aligned with the path segment.

## Multi-cloud in one project

A single project can contain many clouds:

```text
projects/demo-app/
  aws/…
  gcp/…
  azure/…
  oracle/…
  huawei/…
  …
```

That is intentional. State backend choice for the **control plane** is independent of which cloud folders you author — see [Remote state](../Install/Remote_State.md).

## Sample projects in grid-config

| Project | Intent |
|---------|--------|
| `demo-app` | Broad example matrix across clouds and types |
| `grid-labs` | A smaller tree, useful for a first Sync and Plan |

## Related

- [Unit JSON](./Unit_JSON.md)
- [Your intent repository](../Getting-Started/Your_Intent_Repository.md)
- [grid-config README](https://github.com/gridplatform/grid-config#readme)
