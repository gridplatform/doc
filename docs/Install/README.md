# Install

Self-host Grid on a VM or with Docker Compose. Scripts: **[grid-core/install](https://github.com/gridplatform/grid-core/tree/main/install)**.

| Guide | Description |
|-------|-------------|
| [Overview](Overview.md) | Paths, components, order of operations |
| [Remote_State](Remote_State.md) | Multi-cloud Terraform state backends |
| [Cloud_Accounts](Cloud_Accounts.md) | Host credentials for cloud providers |
| [VM](VM.md) | Ubuntu VM — Compose default, native optional |
| [Docker_Compose](Docker_Compose.md) | Compose-only |
| [Dev_Vs_Prod](Dev_Vs_Prod.md) | Env file layering |
| [Releases](Releases.md) | Channels, tags, GHCR pins |
| [Configuration](Configuration.md) | Env vars (generated from `data/configuration.json`) |
| [Monitoring](Monitoring.md) | Host Prometheus / Alertmanager / Alloy |

**Typical path:** Remote_State → VM / Docker_Compose → Configuration → Monitoring → [Your_Desired_State_Repo](../Getting-Started/Your_Desired_State_Repo.md) → [Auth_RBAC_And_Approvals](../Admin/Auth_RBAC_And_Approvals.md).
