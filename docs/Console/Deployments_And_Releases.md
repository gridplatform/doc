---
title: Deployments and releases
---

# Deployments and releases

## Deployments

The Deployments area is where operators start **plan** or **apply** style runs against catalog offerings and see live residue units.

Picker contents respect:

- Console provider release (today: AWS)
- Per-type deploy flags
- Product flags (`deployments`, `kubernetesWorkloads`, …)

Live rows can show units that are still running in cloud after a console offering was turned off (**residue**).

## Releases

Releases are the durable job records (plan / apply / destroy / custom) with:

- Status machine (queued → planning/running → success/failed, plus approval states)
- Audit linkage
- Live log streaming

Infrastructure Plan/Apply/Destroy uses the same release machinery so history is not split across “UI actions” vs “releases”.

## Approvals

When an environment requires approval, write releases wait in a pending state until an entitled approver acts. See [RBAC](../Admin/Auth_RBAC_And_Approvals.md).

## Related

- [Release lifecycle](../Concepts/Release_Lifecycle.md)
- [AWS catalog](../Clouds/AWS.md)
