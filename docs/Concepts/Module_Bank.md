---
title: Module bank
---

# Module bank

The **module bank** is the Terraform module tree Grid’s generator consumes — published as [grid-terraform](https://github.com/gridplatform/grid-terraform).

## Configuration

| Variable | Purpose |
|----------|---------|
| `GRID_MODULE_BANK` | Git URL or local path |
| `GRID_MODULE_BANK_REF` | Branch or **release tag** (prefer tags in production) |
| `GRID_MODULE_BANK_SYNC_INTERVAL_SEC` | Auto-refresh local checkout; `0` = manual |
| `GRID_MODULE_SOURCE` | Optional `remote` to force `git::` sources in generated HCL |

Example production pin:

```bash
GRID_MODULE_BANK=https://github.com/gridplatform/grid-terraform.git
GRID_MODULE_BANK_REF=v0.1.0
```

Admins can also manage module-bank settings under **Admin → Sources**.

## Layout

Modules are grouped by provider folder:

```text
aws/…  gcp/…  azure/…  oracle/…  alibaba/…  tencent/…  huawei/…  …
```

Unit JSON often carries `metadata.modulePath` (e.g. `aws/vpc`) so generate knows which module to bind.

## Maturity

Having a folder in the bank does **not** always mean “console-released” or “CLI supported”. Cross-check:

1. Provider catalog under [Clouds](../Clouds/AWS.md)
2. CLI `grid providers` / resource catalog status
3. Console `consoleProviderRelease` (UI-only gate)

## Sync vs module bank

| Tree | What changes it |
|------|-----------------|
| Desired-state Git | Your infra authors |
| Module bank Git | Platform / module maintainers |

Pin the bank so control planes do not silently float to breaking module commits.

## Related

- [Unit JSON](./Unit_JSON.md)
- [Archive and remote state](./Archive_And_Remote_State.md)
- [Releases (platform versioning)](../Install/Releases.md)
