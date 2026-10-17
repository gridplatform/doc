---
title: Admin and Sources
---

# Admin and Sources

Admin is the governance surface for a Grid installation.

## Tabs (typical)

| Tab | Purpose |
|-----|---------|
| Users | Create users, assign predefined roles |
| Groups | Custom project × environment × domain grants |
| Environments | Discovered envs, approval policy |
| Sources | Desired-state Git remote + module bank |
| Audit | Security / change audit log |
| About | Version / build metadata |

## Sources

Configure:

- Desired-state repository URL, branch, path prefix, sync interval
- Module bank URL / ref / sync interval

Then **Sync** from Sources or Infrastructure. Credentials in repo URLs are redacted when read back from the API.

HTTPS production access is a host username, a host-issued token, and that token’s expiry (`YYYY-MM-DD`). SSH uses a deploy key and does not use those three. Read access is enough. Write is only needed if this control plane pushes `archive/` back to Git. Setup: [Intent repository access](../Getting-Started/Intent_Repository_Access.md).

## Environments

Environment list is driven by desired-state paths (and ephemeral patterns when used). Approval toggles gate write releases for that env.

## Related

- [RBAC](../Admin/Auth_RBAC_And_Approvals.md)
- [GitOps sync](../Concepts/GitOps_Sync.md)
- [Module bank](../Concepts/Module_Bank.md)
