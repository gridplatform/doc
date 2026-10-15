---
title: CLI commands
---

# CLI commands

Command names and flags evolve — treat `grid --help` and the [grid-cli README](https://github.com/gridplatform/grid-cli#readme) as authoritative. This page documents the **operator intent** of each family.

## Discovery

| Intent | Typical command |
|--------|-----------------|
| List providers / maturity | `grid providers` |
| Scan a desired-state tree | `grid status --config-dir <root>` |

## Generate

Produces Terraform for one unit JSON into an output directory (or archive layout when integrated with Core).

Requires module bank access (`GRID_MODULE_BANK` / ref) and a valid unit document.

## Plan / deploy / destroy

Thin orchestration over Terraform after generate:

| Intent | Notes |
|--------|-------|
| Plan | No apply; use for PR checks and console Plan releases |
| Deploy | Apply with optional `--auto-approve` |
| Destroy | Tear down the unit root |

## Prune

Used when cleaning inventory / optional destroy workflows. Prefer explicit confirmation; Grid Sync alone never destroys.

## Environment

When Core spawns the CLI it sets config root, module bank, terraform binary, and TF backend variables. Local runs should export the same `GRID_*` / cloud credentials you expect in production.

## Related

- [CLI overview](./Overview.md)
- [Configuration](../Install/Configuration.md)
