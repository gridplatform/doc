---
title: CLI overview
---

# CLI overview

[grid-cli](https://github.com/gridplatform/grid-cli) turns unit JSON into Terraform and runs plan / apply / destroy. **grid-core invokes the same CLI** on every console release.

## Mental model

```text
unit.json  →  grid generate  →  *.tf (archive or -o dir)
           →  grid plan|deploy|destroy  →  terraform
```

The CLI is environment-agnostic: it operates on the file you pass, with **local cloud credentials**. It does not enforce Grid RBAC.

## Common commands

```bash
# Inspect / catalog
grid providers
grid status --config-dir /path/to/desired-state

# Single unit
grid generate -c path/to/unit.json -o ./generated --format terraform
grid plan     -c path/to/unit.json -o ./generated --format terraform
grid deploy   -c path/to/unit.json -o ./generated --format terraform --auto-approve
grid destroy  -c path/to/unit.json -o ./generated --format terraform --auto-approve
```

Core injects `GRID_*` paths into child processes via `cliChildEnv` so generate finds the module bank and config root consistently.

## Catalog maturity

Each provider page under [Clouds](../Clouds/Overview.md) lists subtypes as `supported` or `planned`. That is separate from console feature flags.

## Providers

The CLI registers every platform provider id. Generate follows catalog status for that subtype: `supported` produces a root, `planned` is vocabulary only. Plan before apply whenever you use a subtype you have not applied on that control plane before.

## AuthZ reminder

| Surface | Enforces Grid roles / approvals? |
|---------|----------------------------------|
| Console / API | Yes |
| Raw CLI on a local machine | No — cloud IAM only |

## Related

- [Commands](./Commands.md)
- [Release lifecycle](../Concepts/Release_Lifecycle.md)
- [Unit JSON](../Concepts/Unit_JSON.md)
