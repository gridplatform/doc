---
title: Downloads
---

# Downloads

Version history for the Grid platform. Each entry is one release across the component repositories, with a short changelog.

How tags are cut: [Releases](./Releases.md).

Install any listed ref:

```bash
export GRID_AUTH_ADMIN_PASSWORD='…'
export GRID_REF=<tag>
curl -fsSL https://raw.githubusercontent.com/gridplatform/grid-core/${GRID_REF}/install/install.sh | sudo -E bash
```

---

## LTS

Long-term line. Tag form: `vX.Y.Z-lts`. Entries are added here as each LTS cut is published.

---

## Current

Active line, including beta tags (`vX.Y.Z-beta.N`) when published.

### 0.1.0 — 2026-10-16

**Tag:** `v0.1.0` · **Components:** grid-cli, grid-core, grid-ui, grid-terraform @ `v0.1.0`

- Desired-state Git Sync (upsert + stale; no auto-destroy)
- Terraform generate, archive, and plan / apply / destroy releases
- Console: Infrastructure, Deployments, Releases, Topology, Monitoring, Alerts, Admin
- Auth, RBAC, and environment approvals
- Remote Terraform state (S3, GCS, Azure, OCI, OSS, COS, S3-compat)
- Host monitoring (Prometheus, Alertmanager, Alloy)
- AWS console surface
- VM `install.sh` and Compose images
- HTTPS intent-repo auth required in production (username, token, expiry)

```bash
export GRID_REF=v0.1.0
curl -fsSL https://raw.githubusercontent.com/gridplatform/grid-core/${GRID_REF}/install/install.sh | sudo -E bash
```
