---
sidebar_position: 1
slug: /
title: Grid Platform Docs
---

# Grid Platform Docs

**Grid** is an open-source, self-hosted control plane for cloud infrastructure.

Teams declare what should exist as **path-shaped JSON** in their own Git repository. Grid syncs that tree, generates Terraform from a shared module bank, runs plan / apply / destroy as **releases** with live logs, stores state remotely, and optionally monitors live units from the host.

This documentation is the product manual — not a marketing sketch. It covers how desired state is shaped, how sync and releases work, how the console and CLI relate, how every cloud folder in the platform fits today, and what is intentionally still ahead.

**Live site:** [gridplatform.github.io/doc](https://gridplatform.github.io/doc/)  
**Source:** [github.com/gridplatform/doc](https://github.com/gridplatform/doc)

## Start here

| If you want to… | Read |
|-----------------|------|
| Understand what Grid is for | [What is Grid?](./What_Is_Grid.md) |
| See how the pieces fit | [Architecture](./Architecture/Control_Plane.md) |
| Stand up a control plane | [Quick start](./Getting-Started/Quick_Start.md) |
| Own your desired-state Git repo | [Your desired-state repository](./Getting-Started/Your_Desired_State_Repo.md) |
| Author unit JSON correctly | [Desired-state layout](./Concepts/Desired_State.md) · [Unit JSON](./Concepts/Unit_JSON.md) |
| See cloud maturity honestly | [Cloud support matrix](./Clouds/Support_Matrix.md) |
| Operate the console | [Console overview](./Console/Overview.md) |
| See what is next | [Roadmap](./Roadmap.md) |

## Product repositories

| Repository | Role |
|------------|------|
| [grid-core](https://github.com/gridplatform/grid-core) | API, GitOps sync, releases, install packaging |
| [grid-ui](https://github.com/gridplatform/grid-ui) | Browser console |
| [grid-cli](https://github.com/gridplatform/grid-cli) | Generate / plan / apply / destroy (also invoked by Core) |
| [grid-terraform](https://github.com/gridplatform/grid-terraform) | Module bank consumed by generate |
| [grid-config](https://github.com/gridplatform/grid-config) | **Example** desired-state tree — learn and copy; do not use as production SoT |

## How to contribute to these docs

Fork → branch → PR against `main`. Env-var tables are generated from [`data/configuration.json`](https://github.com/gridplatform/doc/blob/main/data/configuration.json) — see [CONTRIBUTING.md](https://github.com/gridplatform/doc/blob/main/CONTRIBUTING.md).
