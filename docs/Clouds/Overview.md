---
title: Provider catalogs
sidebar_label: Overview
---

# Provider catalogs

Grid uses the same intent and the same release path on every cloud. What changes is the **catalog**: the types that cloud can hold.

A cloud is a folder in your Git tree (`projects/<project>/<cloud>/…`), a `provider` field on the unit, and a folder in the module bank. Each page under Clouds is that cloud’s catalog. Every subtype is either:

| Status | Meaning |
|--------|---------|
| `supported` | Grid can generate a plan and apply for that type |
| `planned` | The name is part of the layout. Generate is not available for it yet |

## Three layers, kept separate

| Layer | Question it answers |
|-------|---------------------|
| **Catalog** | Does the CLI know this subtype, and is it `supported` or `planned`? |
| **Module bank** | Is there a Terraform module path to bind (`metadata.modulePath`)? |
| **Console flags** | Is this provider or subtype shown as a released offering in the UI? |

A folder in the module bank, a row in the catalog, and a console flag can disagree. The catalog page is the vocabulary. Flags only hide or show the console. The CLI still follows catalog status.

## How a unit names its provider

```text
projects/<project>/<provider>/<environment>/<type>/<unit>.json
```

`provider`, the path segment, and `metadata.modulePath` (for example `<provider>/<subtype>`) refer to the same catalog. Intent does not change shape when you add another provider — only the segment and the subtype vocabulary change.

## Related

- [Desired-state layout](../Concepts/Desired_State.md)
- [Module bank](../Concepts/Module_Bank.md)
- [Feature flags](../Console/Feature_Flags.md)
- [Unit JSON](../Concepts/Unit_JSON.md)
