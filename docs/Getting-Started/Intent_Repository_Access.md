---
title: Intent repository access
---

# Intent repository access

The intent repository is the private Git remote that holds desired state. Production uses it on every Sync. That is the only reason these credentials exist.

They are not a cloud-account credential. AWS, GCP, Azure, and the other catalogs use [cloud accounts](../Install/Cloud_Accounts.md). A cloud login does not clone this repository, and a Git token does not deploy into a cloud.

Grid does not create the credential, and it does not ship a plugin per Git host. Any host that speaks Git over HTTPS or SSH is a supported intent remote. The three values go in the same place for every host. What changes is the username that host expects, and where you create the token.

GitHub and GitLab cover most teams. Also supported, where those two are not the host people use: Bitbucket, Azure Repos, Gitea, Forgejo, Backlog, Gitee, Alibaba Cloud Codeup, Tencent CODING, and Huawei CodeArts Repo. Steps for each are below. A host not named there uses [any other Git host](#any-other-git-host).

The public [grid-config](https://github.com/gridplatform/grid-config) repository is a sample layout. Copy the tree into a repository you own. Do not point production at the sample.

The module bank (`GRID_MODULE_BANK`) is a different remote. Nothing on this page authenticates the module bank.

## What production checks

`npm run prod`, `npm start`, and Compose refuse to start when the intent URL is HTTPS and any of these is empty:

| Setting | What you copy from the Git host |
|---------|----------------------------------|
| `GRID_GITOPS_USERNAME` | The HTTPS username that host expects next to the token. Not your display name. |
| `GRID_GITOPS_TOKEN` | The token or app password the host showed once. |
| `GRID_GITOPS_TOKEN_EXPIRES_AT` | The expiry you chose, as `YYYY-MM-DD`. Grid does not ask the host for this date. |

There is no skip. Fill the three values and start again.

The check only proves the three values are present. Sync is what proves the token can read the repository. A wrong token boots, then Sync fails.

An SSH URL (`git@…` or `ssh://…`) skips all three. The host key on the control-plane machine is the credential.

Keep the repository URL clean. Do not put the token in `GRID_GITOPS_REPO_URL`.

Read access is enough for Sync. Write is only needed if this control plane pushes `archive/` back to Git.

## Where the values go

| How you run Grid | File |
|------------------|------|
| `npm run prod` from a grid-core checkout | `grid-core/.env` |
| Compose or `install.sh` | `install/.env` |
| `npm run dev` | `.env.development` (this file is not read by production) |

After the API is up, **Admin → Sources** stores the same three values in `GRID_DATA_DIR/gitops-secrets.json`. The API never returns the token. If both the env file and Sources are set, the env file wins.

## GitHub

Use this when the private repository is on GitHub.com or GitHub Enterprise. Enterprise uses the same screens on your hostname.

### HTTPS

1. Create a private repository in the org that should own desired state.
2. Copy a minimal `projects/…` tree from the sample and replace sample values. See [Your intent repository](./Your_Intent_Repository.md).
3. On GitHub: profile photo → **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**.
4. Resource owner: the org or user that owns the repository.
5. Repository access: **Only select repositories**, then the intent repository.
6. Repository permissions: **Contents** → **Read-only**. Choose **Read and write** only if this control plane pushes `archive/`.
7. Set an expiration. Copy that date.
8. Generate the token and copy it. GitHub shows it once.
9. If the org enforces SAML single sign-on, open the token and **Authorize** it for that org. An unauthorized token cannot see the private repository.
10. If the org blocks fine-grained tokens, create a classic token instead and grant only the **repo** scope. Same username and expiry rules.

```bash
GRID_GITOPS_REPO_URL=https://github.com/<org>/<your-intent-repo>.git
GRID_GITOPS_BRANCH=main
GRID_GITOPS_USERNAME=git
GRID_GITOPS_TOKEN=<fine-grained-or-classic-token>
GRID_GITOPS_TOKEN_EXPIRES_AT=2027-01-15
```

`git` is the username Grid sends. GitHub accepts it when the password is the token.

### SSH

1. On the control-plane host: `ssh-keygen -t ed25519 -f /path/grid-intent -C grid-intent` and leave the public key in place.
2. Repository → **Settings** → **Deploy keys** → **Add deploy key**. Paste the public key. Leave **Allow write access** off unless you push `archive/`.
3. Point Grid at SSH and do not set the three HTTPS values:

```bash
GRID_GITOPS_REPO_URL=git@github.com:<org>/<your-intent-repo>.git
```

GitHub Enterprise uses `git@<your-hostname>:<org>/<repo>.git`.

## GitLab

Use this for GitLab.com and for a self-managed GitLab. The screens match; only the hostname changes.

### HTTPS with a project access token

Prefer a project access token. It is limited to this project.

1. Create a private project in the group that should own desired state, and push your `projects/…` tree.
2. **Settings** → **Access** → **Access tokens** (project access tokens).
3. Name it for this control plane. Set an expiry and copy that date.
4. Role: **Reporter** for Sync. **Developer** only if this control plane pushes `archive/`.
5. Scope: `read_repository`. Add `write_repository` only for the archive push.
6. Create the token and copy it. GitLab shows it once.

```bash
GRID_GITOPS_REPO_URL=https://gitlab.com/<group>/<your-intent-repo>.git
GRID_GITOPS_BRANCH=main
GRID_GITOPS_USERNAME=oauth2
GRID_GITOPS_TOKEN=<project-access-token>
GRID_GITOPS_TOKEN_EXPIRES_AT=2027-01-15
```

Self-managed: replace `gitlab.com` with your host. `oauth2` stays the username for a project, group, or personal access token.

A personal access token works the same way, but it can read every project that user can read. Use one only when a project token is not available. Scope is still `read_repository`.

A **deploy token** (Settings → Repository → Deploy tokens, scope `read_repository`) is different: `GRID_GITOPS_USERNAME` is the username GitLab displays for that deploy token, not `oauth2`.

### SSH

**Settings** → **Repository** → **Deploy keys** → paste the control-plane public key, read-only.

```bash
GRID_GITOPS_REPO_URL=git@gitlab.com:<group>/<your-intent-repo>.git
```

## Bitbucket

### Bitbucket Cloud

1. Create a private repository in the workspace that should own desired state, and push your `projects/…` tree.
2. Open that repository → **Settings** → **Security** → **Access tokens** → **Create access token**.
3. Name it for this control plane. Set an expiry and copy that date. If the workspace allows “no expiry”, still pick a date so Grid has one to record.
4. Permission: **Repositories → Read**. Add **Write** only if this control plane pushes `archive/`.
5. Create the token and copy it. Bitbucket shows it once.

```bash
GRID_GITOPS_REPO_URL=https://bitbucket.org/<workspace>/<your-intent-repo>.git
GRID_GITOPS_BRANCH=main
GRID_GITOPS_USERNAME=x-token-auth
GRID_GITOPS_TOKEN=<repository-access-token>
GRID_GITOPS_TOKEN_EXPIRES_AT=2027-01-15
```

`x-token-auth` is the literal username Bitbucket requires for a repository access token.

SSH: repository **Settings** → **Access keys** → add the control-plane public key, read-only.

```bash
GRID_GITOPS_REPO_URL=git@bitbucket.org:<workspace>/<your-intent-repo>.git
```

### Bitbucket Data Center

1. Create the private repository and push the tree.
2. Personal avatar → **Manage account** → **HTTP access tokens** → create a token with repository read. Copy the expiry.
3. Username is the Bitbucket account name, not `x-token-auth`.

```bash
GRID_GITOPS_REPO_URL=https://<your-bitbucket-host>/scm/<project>/<your-intent-repo>.git
GRID_GITOPS_USERNAME=<bitbucket-username>
GRID_GITOPS_TOKEN=<http-access-token>
GRID_GITOPS_TOKEN_EXPIRES_AT=2027-01-15
```

SSH uses the clone URL the repository page shows (`ssh://git@<host>:7999/<project>/<repo>.git`) and an access key on that repository.

## Gitea and Forgejo

Gitea and Forgejo use the same screens. This is the usual choice when the Git server is one you run.

### HTTPS

1. Create a private repository under the org that should own desired state, and push your `projects/…` tree.
2. User menu → **Settings** → **Applications** → **Generate new token**.
3. Name it for this control plane.
4. Scope: `read:repository`. Use `write:repository` only if this control plane pushes `archive/`.
5. If the server offers repository selection, limit the token to the intent repository. Public-only tokens cannot read a private repository.
6. Set an expiry when the server asks, and copy that date. If it does not ask, use the date you intend to rotate the token.
7. Generate and copy the token. The server shows it once.

```bash
GRID_GITOPS_REPO_URL=https://<your-git-host>/<org>/<your-intent-repo>.git
GRID_GITOPS_BRANCH=main
GRID_GITOPS_USERNAME=<account-username-on-that-server>
GRID_GITOPS_TOKEN=<access-token>
GRID_GITOPS_TOKEN_EXPIRES_AT=2027-01-15
```

The username is the account name on that server (the name you sign in with). It is not `git` unless that is the account name.

### SSH

Repository → **Settings** → **Deploy keys** → add the control-plane public key, read-only. Use the SSH clone URL the repository page shows.

## Gitee

Use this when the private repository is on Gitee, including a Gitee deployment you run. Do not send the username `git`. Gitee rejects it.

### HTTPS

1. Create a private repository and push your `projects/…` tree.
2. Avatar → **Settings** → **Security settings** → **Personal tokens** → **Generate new token**.
3. Name it for this control plane. Set an expiry and copy that date.
4. Permission: `projects`, limited to read. Add write only if this control plane pushes `archive/`.
5. Generate the token and copy it. Gitee shows it once.

```bash
GRID_GITOPS_REPO_URL=https://gitee.com/<owner>/<your-intent-repo>.git
GRID_GITOPS_BRANCH=main
GRID_GITOPS_USERNAME=<gitee-account-username>
GRID_GITOPS_TOKEN=<personal-token>
GRID_GITOPS_TOKEN_EXPIRES_AT=2027-01-15
```

`GRID_GITOPS_USERNAME` is the account name you sign in with, not the token and not `git`.

SSH: add the control-plane public key under the account SSH keys, then:

```bash
GRID_GITOPS_REPO_URL=git@gitee.com:<owner>/<your-intent-repo>.git
```

## Alibaba Cloud Codeup

Use this when the repository is on Alibaba Cloud DevOps (云效 Codeup). The clone account is not your Alibaba Cloud console login, and it is not `git`.

### HTTPS

1. Create a private repository in the organization and push your `projects/…` tree. Copy the HTTPS address the repository page shows (`https://codeup.aliyun.com/…`).
2. Avatar → **Personal settings** → **HTTPS password**. Copy the **HTTPS clone account**. That value is `GRID_GITOPS_USERNAME`.
3. **Personal settings** → **Personal access tokens** → create a token that can read the repository over Git. Set an expiry and copy that date. Copy the token. Codeup shows it once.
4. Read is enough. Add write only if this control plane pushes `archive/`.

```bash
GRID_GITOPS_REPO_URL=https://codeup.aliyun.com/<org>/<your-intent-repo>.git
GRID_GITOPS_BRANCH=main
GRID_GITOPS_USERNAME=<https-clone-account>
GRID_GITOPS_TOKEN=<personal-access-token>
GRID_GITOPS_TOKEN_EXPIRES_AT=2027-01-15
```

If you use the HTTPS clone password instead of a personal access token, that password is `GRID_GITOPS_TOKEN`, and `GRID_GITOPS_TOKEN_EXPIRES_AT` is the date you will rotate it.

SSH: upload the control-plane public key in the same personal settings, and use the SSH clone URL from the repository page.

## Tencent CODING

Use this when the repository is on CODING (`e.coding.net`).

### HTTPS with a project token

A project token is limited to one project.

1. Create the private repository and push your `projects/…` tree. Copy the HTTPS clone URL (`https://e.coding.net/<team>/…`).
2. **Project settings** → **Developer options** → **Project tokens** → create a token.
3. Set an expiry and copy that date. Grant repository read. Add write only if this control plane pushes `archive/`.
4. Copy the token username CODING shows, and the token. The token is shown once.

```bash
GRID_GITOPS_REPO_URL=https://e.coding.net/<team>/<project>/<your-intent-repo>.git
GRID_GITOPS_BRANCH=main
GRID_GITOPS_USERNAME=<project-token-username>
GRID_GITOPS_TOKEN=<project-token>
GRID_GITOPS_TOKEN_EXPIRES_AT=2027-01-15
```

A personal access token also works. Create it under **Personal account settings** → **Access tokens**, with the `project:depot` scope. Then `GRID_GITOPS_USERNAME` is the phone number or email on that personal settings page, and `GRID_GITOPS_TOKEN` is the access token.

SSH uses `git@e.coding.net:…` and a public key on the account. The SSH username is `git`.

## Huawei CodeArts Repo

Use this when the repository is on Huawei Cloud CodeArts Repo. Prefer an access token. Huawei requires an expiry on that token (at most one year).

### HTTPS

1. Create a private repository and push your `projects/…` tree. Copy the HTTPS clone URL the repository page shows.
2. Account alias → **This account settings** → **Repo** → **Access tokens** → **New token**.
3. Name it for this control plane. Copy the expiry date Huawei sets. The token can read and write the repositories that account can already access. Huawei does not offer a read-only scope on this token.
4. Copy the token. Huawei shows it once.

```bash
GRID_GITOPS_REPO_URL=https://<codearts-repo-host>/<project>/<your-intent-repo>.git
GRID_GITOPS_BRANCH=main
GRID_GITOPS_USERNAME=private-token
GRID_GITOPS_TOKEN=<access-token>
GRID_GITOPS_TOKEN_EXPIRES_AT=2027-01-15
```

`private-token` is the literal username Huawei expects for an access token.

The other HTTPS option is the clone username and password under **This account settings** → **Repo** → **HTTPS password**. The username looks like `<tenant>/<iam-user>`. Put that password in `GRID_GITOPS_TOKEN` and the date you will rotate it in `GRID_GITOPS_TOKEN_EXPIRES_AT`.

SSH: add the control-plane public key under the same Repo settings and use the SSH clone URL from the repository page.

## Backlog

Use this when the repository is on Backlog (Nulab), which is common for companies in Japan.

### HTTPS

1. Create a private Git repository in the space and push your `projects/…` tree. Copy the HTTPS clone URL (`https://<space>.backlog.com/git/…` or `https://<space>.backlog.jp/git/…`).
2. `GRID_GITOPS_USERNAME` is the email address you use to sign in to Backlog.
3. `GRID_GITOPS_TOKEN` is the Backlog password. If the space requires two-factor authentication, create a **special password** under **Personal settings** → **Password** and use that instead. Git over HTTPS will not accept the normal password or a one-time code.
4. Backlog does not show an expiry for that password. `GRID_GITOPS_TOKEN_EXPIRES_AT` is the date you will rotate it.

```bash
GRID_GITOPS_REPO_URL=https://<space>.backlog.com/git/<project>/<your-intent-repo>.git
GRID_GITOPS_BRANCH=main
GRID_GITOPS_USERNAME=<backlog-login-email>
GRID_GITOPS_TOKEN=<password-or-special-password>
GRID_GITOPS_TOKEN_EXPIRES_AT=2027-01-15
```

SSH: add the control-plane public key in the personal Git settings and use the SSH clone URL from the repository page. The three HTTPS values stay unset.

## Azure Repos

Use this when the repository is on Azure DevOps, which shows up in Microsoft estates across APAC.

1. Create a private Git repository and push your `projects/…` tree. Copy the HTTPS clone URL (`https://dev.azure.com/<org>/<project>/_git/<repo>`).
2. User settings → **Personal access tokens** → **New token**.
3. Scope: **Code** → **Read**. Add **Write** only if this control plane pushes `archive/`.
4. Set an expiry and copy that date. Copy the token. Azure DevOps shows it once.

```bash
GRID_GITOPS_REPO_URL=https://dev.azure.com/<org>/<project>/_git/<your-intent-repo>
GRID_GITOPS_BRANCH=main
GRID_GITOPS_USERNAME=git
GRID_GITOPS_TOKEN=<personal-access-token>
GRID_GITOPS_TOKEN_EXPIRES_AT=2027-01-15
```

Azure DevOps accepts any non-empty username when the password is the token. `git` is the value to put in Grid.

SSH uses the SSH clone URL and a public key uploaded under user settings → SSH public keys.

## Any other Git host

Grid has no provider plugin list. Any host that accepts Git over HTTPS or SSH works, including a host not named above.

1. Create a private repository and push the `projects/…` tree.
2. Create the credential that host documents for Git over HTTPS (personal access token, deploy token, or app password). Scope it to read this repository.
3. Read that host’s Git HTTPS page for the username. Some hosts want your account name. Some want a fixed string (`oauth2`, `x-token-auth`, or similar). Put that string in `GRID_GITOPS_USERNAME`.
4. Put the secret in `GRID_GITOPS_TOKEN`.
5. Put the expiry you set, as `YYYY-MM-DD`, in `GRID_GITOPS_TOKEN_EXPIRES_AT`. If the host does not show an expiry, use the date you will rotate it.
6. If the host has no HTTPS token, use the SSH clone URL and a read-only deploy key instead, and leave the three HTTPS values unset.

```bash
GRID_GITOPS_REPO_URL=https://<your-git-host>/<org>/<your-intent-repo>.git
GRID_GITOPS_USERNAME=<username-from-that-hosts-git-docs>
GRID_GITOPS_TOKEN=<token-that-host-issued>
GRID_GITOPS_TOKEN_EXPIRES_AT=YYYY-MM-DD
```

## After the values are set

Start production again (`npm run prod`, or Compose). The boot list should no longer report `GRID_GITOPS_USERNAME`, `GRID_GITOPS_TOKEN`, or `GRID_GITOPS_TOKEN_EXPIRES_AT`.

Then **Sync** from **Admin → Sources** or Infrastructure. A successful sync means the credential can read the private repository.

## Related

- [Your intent repository](./Your_Intent_Repository.md)
- [GitOps sync](../Concepts/GitOps_Sync.md)
- [Admin → Sources](../Console/Admin_And_Sources.md)
- [Development vs production](../Install/Dev_Vs_Prod.md)
- [Cloud accounts](../Install/Cloud_Accounts.md)
