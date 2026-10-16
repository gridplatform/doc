---
sidebar_position: 1
slug: /
title: About Grid
sidebar_label: About Grid
hide_title: true
---

<div className="grid-hero">
  <div className="grid-hero__inner">
    <div className="grid-hero__brand">
      <img className="grid-hero__logo" src="/doc/img/logo.png" alt="Grid" />
      <div className="grid-hero__badge">Open source · Self-hosted</div>
    </div>
    <h1>About Grid</h1>
    <p>
      Grid is a self-hosted control plane. You describe what should exist as JSON
      in Git — a project, a cloud, an environment, and a unit. Grid syncs that
      tree and runs plan, apply, and destroy the same way on every cloud. Each
      cloud has its own catalog of what Grid can build there.
    </p>
    <div className="grid-hero__actions">
      <a className="primary" href="/doc/Getting-Started/Quick_Start">Quick start</a>
    </div>
  </div>
</div>

<figure className="grid-figure">
  <img src="/doc/img/diagrams/desired-state-loop.svg" alt="Control loop: author JSON, sync, plan/apply by engine, state and monitor" />
  <figcaption>Author → Sync → Plan/Apply (by engine) → State &amp; monitor. Everything else wraps this loop.</figcaption>
</figure>

## What Grid is for

Organizations use Grid when they want:

1. **Intent you own** — the JSON lives in a Git repository you control.
2. **One release path** — plan, apply, and destroy, with audit and live logs, for every cloud and every engine.
3. **A catalog per cloud** — the path shape is the same; the types Grid builds are that cloud’s catalog. See [provider catalogs](./Clouds/Overview.md).
4. **An exit ramp** — generated Terraform and your Git history stay usable with ordinary tools. See [Exit ramp](./Concepts/Exit_Ramp.md).

## Engines

| Engine | Operates |
|--------|----------|
| **Terraform** | Cloud resources, managed clusters, node pools, and other module-bank subtypes |
| **Kubernetes workloads** | In-cluster apps via GitOps (Argo CD / OpenShift GitOps) — [Kubernetes workloads](./Concepts/Kubernetes_Workloads.md) |

Managed **clusters** are Terraform units. **Workloads inside** those clusters are the separate kubernetes engine. Details live in the sidebar under Concepts.

## What Grid is not

| Not this | Because |
|----------|---------|
| A hosted SaaS | You run **grid-core** and **grid-ui** on your own VM or Compose host |
| A replacement for Terraform or Argo | Grid runs them. Terraform units become HCL. Kubernetes units become cluster GitOps |
| Automatic destroy when JSON is deleted | A missing file is marked **stale**. Destroy is a separate release |

## How it works

```text
Your Git repo (intent JSON)
        │
        ▼
  GitOps Sync (grid-core)
        │  upsert units · mark missing JSON as stale
        ▼
  Console / API / CLI
        │  plan · apply · destroy (releases)
        ▼
  Engine:
    · terraform   → generate + module bank → remote state + archive/
    · kubernetes  → cluster GitOps (Argo / OpenShift)
        │
        ▼
  Optional host Prometheus / Alertmanager
```

That loop is the product. RBAC, approvals, Sources, Monitoring, and Topology wrap it. Use the **sidebar** for layout, unit JSON, clouds, install, and the rest — this page is the orientation.

## Who does what

| Actor | Responsibility |
|-------|----------------|
| **Operators / platform** | Install Core + UI, remote state, module bank pin, Git remote, auth bootstrap, and cluster GitOps connectivity for workload units |
| **App / infra authors** | Own the intent repository; open PRs for JSON (and workload) changes |
| **Approvers** | Gate apply/destroy where environment policy requires it |
| **CLI users** | Same generate/plan/deploy path on a **local** machine with cloud credentials (Grid AuthZ is not applied to raw CLI) |

## Where to go next

<div className="grid-cards">
  <a className="grid-card" href="/doc/Getting-Started/Quick_Start">
    <span className="grid-card__eyebrow">Start</span>
    <span className="grid-card__title">Quick start</span>
    <span className="grid-card__desc">Stand up Grid, Sync, then Plan.</span>
  </a>
  <a className="grid-card" href="/doc/Architecture/Control_Plane">
    <span className="grid-card__eyebrow">Architecture</span>
    <span className="grid-card__title">Control plane</span>
    <span className="grid-card__desc">UI, Core, CLI, module bank, and your Git remote.</span>
  </a>
  <a className="grid-card" href="/doc/Concepts/Kubernetes_Workloads">
    <span className="grid-card__eyebrow">Engines</span>
    <span className="grid-card__title">Kubernetes workloads</span>
    <span className="grid-card__desc">GitOps CD beside Terraform — gated, documented.</span>
  </a>
  <a className="grid-card" href="/doc/Concepts/Exit_Ramp">
    <span className="grid-card__eyebrow">Portability</span>
    <span className="grid-card__title">Exit ramp</span>
    <span className="grid-card__desc">Leave with Terraform and/or cluster GitOps — no lock-in.</span>
  </a>
  <a className="grid-card" href="/doc/Clouds/Overview">
    <span className="grid-card__eyebrow">Clouds</span>
    <span className="grid-card__title">Provider catalogs</span>
    <span className="grid-card__desc">What Grid builds on each cloud.</span>
  </a>
  <a className="grid-card" href="/doc/Install/Overview">
    <span className="grid-card__eyebrow">Operate</span>
    <span className="grid-card__title">Install</span>
    <span className="grid-card__desc">Compose, VM, state, credentials, configuration.</span>
  </a>
  <a className="grid-card" href="/doc/Roadmap">
    <span className="grid-card__eyebrow">Status</span>
    <span className="grid-card__title">Roadmap</span>
    <span className="grid-card__desc">What is shipped, hardening, and still upcoming.</span>
  </a>
</div>
