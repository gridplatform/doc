---
title: Install overview
---

# Install overview

Install **scripts and Compose** live in [grid-core/install](https://github.com/gridplatform/grid-core/tree/main/install). These pages explain which path to use and what you must configure.

## Choose a path

| Path | What runs | Guide |
|------|-----------|--------|
| **Remote state first** | Object store for Terraform state + archive mirror | [Remote Terraform state](./Remote_State.md) |
| **Cloud credentials** | How the host authenticates to providers | [Cloud accounts and credentials](./Cloud_Accounts.md) |
| **Compose on a VM** *(default)* | Docker: `core` + `ui` | [Docker Compose](./Docker_Compose.md) · [VM](./VM.md) · `install.sh` |
| **Native VM** | Node + systemd + host nginx | [VM](./VM.md) with `GRID_USE_NATIVE=1` |
| **Release images** | GHCR `current` / `lts` / pinned version | [Releases](./Releases.md) |
| **Dev from source** | `npm run dev` | [Dev vs prod](./Dev_Vs_Prod.md) |

> **Order of operations**  
> 1. Create remote state ([guide](./Remote_State.md))  
> 2. Install Grid (Compose or native)  
> 3. Point Sources at **your** desired-state repo  
> 4. Install host monitoring ([guide](./Monitoring.md))  
> 5. Sync → Plan → Apply  

Skipping remote state is acceptable only for a disposable local lab.

## What gets installed

1. **grid-core** — API, auth, GitOps sync, release runner  
2. **grid-ui** — console (static build behind nginx)  
3. **grid-cli** — bundled / cloned for Core to spawn  
4. **Terraform** ≥ 1.5 (image pins a concrete version)  
5. **Desired-state working tree** — clone of **your** Git remote into `GRID_CONFIG_ROOT`  
6. **Module bank** — [grid-terraform](https://github.com/gridplatform/grid-terraform) at a pinned ref  

[grid-config](https://github.com/gridplatform/grid-config) is an example repository only.

## Version pinning

Set `GRID_REF` to the tag you want ([Releases](./Releases.md), [Downloads](./Downloads.md)):

```bash
export GRID_REF=v0.1.0
curl -fsSL https://raw.githubusercontent.com/gridplatform/grid-core/${GRID_REF}/install/install.sh | sudo -E bash
```

## Next

- [Releases](./Releases.md) · [Downloads](./Downloads.md)  
- [Install on a VM](./VM.md)  
- [Docker Compose](./Docker_Compose.md)  
- [Configuration](./Configuration.md)  
- [Monitoring](./Monitoring.md)  
- [Quick start](../Getting-Started/Quick_Start.md)
