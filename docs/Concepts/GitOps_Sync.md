---
title: GitOps sync
---

# GitOps sync

Sync is how Grid’s inventory catches up with Git. It is **pull-based reconciliation of desired-state JSON**, not a CD pipeline that auto-applies Terraform.

## Configuration

| Variable / setting | Meaning |
|--------------------|---------|
| `GRID_GITOPS_REPO_URL` | Remote intent repository |
| `GRID_GITOPS_BRANCH` | Branch to track (default `main`) |
| `GRID_GITOPS_PATH` | Optional subdirectory (relative; no `..`) |
| `GRID_GITOPS_SYNC_INTERVAL_SEC` | Auto interval; default `600` when a URL is set; `0` = manual only |
| `GRID_CONFIG_ROOT` | Working tree on the control plane |

Console: **Admin → Sources** (desired-state + module bank). Infrastructure also exposes a sync / drift panel for the current workspace.

## What Sync does

1. Ensures `GRID_CONFIG_ROOT` matches the remote (fetch + reset tracked files to `origin/<branch>`).
2. Walks JSON units under the path prefix.
3. For each unit: create, update content hash, or leave unchanged.
4. For previously tracked paths missing from Git: set status **`stale`**.
5. Never auto-destroys cloud resources.

Untracked paths such as generated `archive/` are left alone on reset.

## Stale vs destroyed

| Status | Meaning | Typical next step |
|--------|---------|-------------------|
| `pending` / `running` / … | Active inventory | Plan / apply as usual |
| `stale` | JSON gone (or marked missing) but unit may still exist in cloud | Restore JSON, or explicit **Destroy**, or remove after cleanup |
| `destroyed` | Destroy completed | Usually dropped from active counts |

**Removing a file from Git is a signal, not a delete in the cloud.**

## Desired ahead / drift

| Signal | Meaning |
|--------|---------|
| Content hash ≠ last applied hash (`desiredAhead`) | Git intent changed since last successful apply |
| `terraform plan` wants changes | Live/state differs from current generated desired |
| Empty plan | Live matches current desired |

Drift check APIs compare those signals; reverse-engineering full Grid JSON from state is not fully automated.

## Unit identity during sync

- Default id = UUID v5(path) — durable across store wipe if the path is unchanged
- Optional `metadata.id` only if you set it yourself
- See [Unit JSON](./Unit_JSON.md)

## Concurrency

- Manual Sync fails fast if another sync is in progress.
- Interval sync **skips** a tick if busy (no queue pile-up).
- Failures wait for the next interval; they do not tight-loop retry.

## API surface

| Method | Path |
|--------|------|
| `GET` | `/api/v1/gitops/status` |
| `GET` / `PUT` | `/api/v1/gitops/settings` |
| `POST` | `/api/v1/gitops/sync` |
| `POST` | `/api/v1/infrastructures/:id/drift-check` |

Repo URLs with embedded credentials are redacted in API responses.

## Related

- [Your intent repository](../Getting-Started/Your_Intent_Repository.md)
- [Release lifecycle](./Release_Lifecycle.md)
- [Admin → Sources](../Console/Admin_And_Sources.md)
