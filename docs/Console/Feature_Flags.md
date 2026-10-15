---
title: Feature flags (console)
---

# Feature flags (console)

grid-ui uses **compile-time / module flags** to hide unfinished product surfaces. These flags do **not** enforce authorization on the API and do **not** disable CLI generate.

## Product flags (examples)

| Flag | Typical default | Effect when false |
|------|-----------------|-------------------|
| `deployments` | true | Hide Deployments nav |
| `infrastructure` | true | Hide Infrastructure |
| `releases` | true | Hide Releases |
| `monitoring` / `alerts` / `topology` / `admin` | true | Hide those areas |
| `apm` / `logging` | false | Not in nav |
| `kubernetesWorkloads` | false | Hide k8s workload engine UI |

Source: [`grid-ui/src/config/featureFlags.ts`](https://github.com/gridplatform/grid-ui/blob/main/src/config/featureFlags.ts).

## Provider release flags

`consoleProviderRelease.<provider>` gates whether that cloud appears as a released console offering. **AWS is true**; other providers are false until product declares them.

`deployFlags[provider][subtype]` further toggles individual types inside a released provider.

## Catalog visibility helpers

List rows use visibility helpers (`visible` / `hidden` / `invalid`) so disabled offerings do not inflate project/env unit counts. Live residue can still appear when cloud resources remain after an offering is turned off.

## Related

- [Cloud support matrix](../Clouds/Support_Matrix.md)
- [Roadmap](../Roadmap.md)
