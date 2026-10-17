---
title: Intent repository access
---

# Intent repository access

Production boot (`npm run prod`, `npm start`, Compose) will not start until the intent remote can be reached. Grid does not create Git credentials. You create them on the Git host and give them to Grid.

The public [grid-config](https://github.com/gridplatform/grid-config) repository is a sample layout. Production points at a repository you own. Private is the normal choice.

The module bank (`GRID_MODULE_BANK`) is a different remote. These credentials are only for the intent repository (`GRID_GITOPS_REPO_URL`).

## HTTPS

Use a clean URL. Do not put the token in the URL.

```bash
GRID_GITOPS_REPO_URL=https://git.example.com/<org>/<your-intent-repo>.git
GRID_GITOPS_BRANCH=main
GRID_GITOPS_USERNAME=<host-username>
GRID_GITOPS_TOKEN=<host-issued-token>
GRID_GITOPS_TOKEN_EXPIRES_AT=YYYY-MM-DD
```

All three of username, token, and expiry are required for every HTTPS remote in production, including a public URL. If any one is missing, boot stops and lists the three settings. Fill them and start again. There is no skip flag.

| Setting | What it is |
|---------|------------|
| `GRID_GITOPS_USERNAME` | HTTPS basic-auth name that sits next to the token. Not your display name. |
| `GRID_GITOPS_TOKEN` | Token the Git host issued (personal access token, project token, deploy token, or app password). |
| `GRID_GITOPS_TOKEN_EXPIRES_AT` | The expiry you set on that token, `YYYY-MM-DD`. Grid does not look this date up from the host. |

Username by host:

| Host | Username | Token |
|------|----------|-------|
| GitHub | `git` | Fine-grained token on that repo, or a classic token that can read it |
| GitLab | `oauth2` | Personal, project, or deploy token with `read_repository` |
| Bitbucket Cloud | `x-token-auth` | Repository access token |
| Gitea, Forgejo, or another host | The account name that host documents for token login | That host’s access token |

Grant **read** on the intent repository. Write is only needed if this control plane pushes `archive/` back to Git.

## Where to put the values

`npm run prod` reads `grid-core/.env`. Development (`npm run dev`) reads `.env.development` and does not use `.env`. Compose reads `install/.env`.

After the API is up, **Admin → Sources** can store the same three values. They land in `GRID_DATA_DIR/gitops-secrets.json`. The API never returns the token. Environment variables win when both are set.

## SSH

An SSH remote does not use the username, token, or expiry. The control-plane host authenticates with a deploy key.

```bash
GRID_GITOPS_REPO_URL=git@git.example.com:<org>/<your-intent-repo>.git
```

Put the private key on the machine that runs Grid. Add the matching public key on the repository as a read-only deploy key (GitHub deploy key, GitLab deploy key, Bitbucket access key, or the equivalent on your host).

## Related

- [Your intent repository](./Your_Intent_Repository.md)
- [GitOps sync](../Concepts/GitOps_Sync.md)
- [Admin → Sources](../Console/Admin_And_Sources.md)
- [Development vs production](../Install/Dev_Vs_Prod.md)
