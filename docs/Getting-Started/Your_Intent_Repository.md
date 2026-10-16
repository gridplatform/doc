---
title: Your intent repository
---

# Your intent repository

Grid’s source of truth for *what should exist* is a **Git repository you create and own** — the intent remote Core Syncs into inventory.

The public [grid-config](https://github.com/gridplatform/grid-config) repository is an **example layout** — learn from it, copy patterns, open PRs that improve samples. **Do not fork it for production and forget ownership.**

## Recommended setup

1. Create a **new empty repository** under your org on **any Git host** (GitHub, GitLab, Bitbucket, Gitea, …). **Private repos are expected** for real orgs.
2. Copy a minimal tree from `grid-config` (one project, one cloud, one environment, one unit).
3. Replace every `REPLACE_*` / lab CIDR / account-specific value.
4. Point Grid at that remote (clean URL — no token in the URL):

```bash
GRID_GITOPS_REPO_URL=https://git.example.com/<org>/<your-infra-config>.git
GRID_GITOPS_BRANCH=main
GRID_GITOPS_PATH=          # empty = repo root (projects/… at top level)
GRID_GITOPS_SYNC_INTERVAL_SEC=600
# Production (`npm run prod`) hard-requires username + token + expiry for HTTPS remotes:
GRID_GITOPS_USERNAME=git            # or oauth2 / x-token-auth per host
GRID_GITOPS_TOKEN=…                 # host-issued PAT / deploy token (any provider)
GRID_GITOPS_TOKEN_EXPIRES_AT=2027-01-15
```

5. In the console: **Admin → Sources** — set **username**, paste a **host-issued** personal access / deploy token (Grid does not create it), set **Token valid until** to that token’s expiry on the Git host, save (secret lands under `GRID_DATA_DIR`, never echoed back) **or** use an SSH remote with a deploy key on the control-plane host → **Sync**.

Without username + token + expiry (HTTPS) or a deploy key (SSH), Sync cannot reach a private intent repo — and **`npm run prod` will not boot** until HTTPS auth is fully configured.

## Canonical layout

```text
projects/
  <project-slug>/
    <cloud>/                 # aws | gcp | azure | oracle | …
      <environment>/         # development | staging | production | custom
        <infra-type>/        # vpc | ec2 | gke | …
          <unit-name>.json   # one deployable unit
archive/                     # optional generated Terraform (exit buffer)
```

Examples from the public sample:

```text
projects/demo-app/aws/production/vpc/example-vpc.json
projects/grid-labs/aws/development/ec2/grid-labs-vm.json
```

Full rules: [Desired-state layout](../Concepts/Desired_State.md).

## Ownership rules that keep GitOps sane

| Do | Don’t |
|----|--------|
| PR JSON changes; review like application code | Hand-edit the live `GRID_CONFIG_ROOT` clone and expect it to survive Sync |
| Keep secrets out of JSON (use cloud IAM / secret refs) | Commit long-lived cloud keys |
| One unit ≈ one engine root (Terraform workspace or Kubernetes workload) | Stuff unrelated stacks into a single giant JSON |
| Use `metadata.dependsOn` for cross-unit references | Assume Grid merges dependent units into one apply |

## How Grid uses the repo

On Sync, Core:

1. Fetches and hard-resets the working tree to `origin/<branch>` (tracked files).
2. Discovers `*.json` units under the configured path prefix.
3. Upserts infrastructure records (create / update / unchanged).
4. Marks previously tracked paths that disappeared as **`stale`** — it does **not** destroy cloud resources.

Details: [GitOps sync](../Concepts/GitOps_Sync.md).

## Related

- [Unit JSON](../Concepts/Unit_JSON.md)
- [Module bank](../Concepts/Module_Bank.md)
- [Kubernetes workloads](../Concepts/Kubernetes_Workloads.md)
- [Admin → Sources](../Console/Admin_And_Sources.md)
