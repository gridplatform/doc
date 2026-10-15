---
title: Quick start
---

# Quick start

Goal: a working Grid control plane on a VM or laptop, pointed at a desired-state repository, ready to Sync and Plan.

## Prerequisites

1. **Remote Terraform state** for anything beyond a disposable lab — [Remote state](../Install/Remote_State.md).
2. Outbound HTTPS from the host (GitHub, cloud APIs, module bank).
3. A **desired-state Git repository you own** — [Your_Desired_State_Repo](./Your_Desired_State_Repo.md). Do not use the public [grid-config](https://github.com/gridplatform/grid-config) sample as production SoT.

## Fastest path (Compose on Ubuntu)

```bash
export GRID_AUTH_ADMIN_PASSWORD='choose-a-strong-password'
# After creating remote state, also export GRID_TF_* (see remote-state guide)
curl -fsSL https://raw.githubusercontent.com/gridplatform/grid-core/main/install/install.sh | sudo -E bash
```

Open `http://<host>/`, sign in with the bootstrap admin email/password from `install/.env`.

## Compose from a clone

```bash
git clone https://github.com/gridplatform/grid-core.git
cd grid-core
cp install/.env.example install/.env
# Set at minimum:
#   GRID_AUTH_ADMIN_PASSWORD
#   GRID_TF_BACKEND + bucket/lock/region (or Azure/OCI/… equivalents)
#   GRID_GITOPS_REPO_URL=https://github.com/<you>/<your-desired-state>.git
#   GRID_PROMETHEUS_URL / GRID_ALERTMANAGER_URL (host monitoring)
bash install/compose-up.sh
bash install/verify.sh
```

Full variable reference: [Configuration](../Install/Configuration.md).

## First hour checklist

| Step | Where |
|------|--------|
| 1. Sign in as bootstrap superadmin | Console login |
| 2. Confirm GitOps / Sources points at **your** repo | Admin → Sources |
| 3. **Sync** desired state | Infrastructure sync panel or Sources |
| 4. Pick project + environment in the workspace bar | Shell header |
| 5. Open a unit → **Plan** (safe) before **Apply** | Infrastructure / Deployments |
| 6. Create users and assign roles or groups | Admin → Users / Groups |
| 7. Set approval policy on staging/production if needed | Admin → Environments |

## What “done” looks like

- Sync reports tracked units without unexpected errors.
- Plan finishes with live CLI/Terraform logs in the console.
- Remote state objects appear under your backend prefix for applied units.
- Metrics endpoints respond when monitoring is installed ([Monitoring](../Install/Monitoring.md)).

## Next

- [Desired-state layout](../Concepts/Desired_State.md)
- [Console overview](../Console/Overview.md)
- [Cloud support matrix](../Clouds/Support_Matrix.md)
