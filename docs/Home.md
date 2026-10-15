---
sidebar_position: 1
slug: /
title: About Grid
sidebar_label: About Grid
hide_title: true
---

<div className="grid-hero">
  <div className="grid-hero__inner">
    <img className="grid-hero__logo" src="/doc/img/logo.png" alt="Grid" />
    <div className="grid-hero__badge">Open source · Self-hosted</div>
    <h1>About Grid</h1>
    <p>
      Grid is a self-hosted infrastructure orchestration platform. You declare what
      should exist as path-shaped JSON in Git; Grid syncs that tree, generates
      Terraform, and runs plan / apply / destroy as releases — with optional host
      monitoring.
    </p>
    <div className="grid-hero__actions">
      <a className="primary" href="/doc/Getting-Started/Quick_Start">Quick start</a>
      <a className="secondary" href="/doc/Concepts/Desired_State">Desired state</a>
      <a className="secondary" href="/doc/Architecture/Control_Plane">Control plane</a>
    </div>
  </div>
</div>

<figure className="grid-figure">
  <img src="/doc/img/diagrams/desired-state-loop.svg" alt="Desired-state loop: author JSON, sync, plan/apply, state and monitor" />
  <figcaption>Author → Sync → Plan/Apply → State &amp; monitor. Everything else wraps this loop.</figcaption>
</figure>

## What Grid is for

Organizations use Grid when they want:

1. **Declarative ownership** — infrastructure intent lives in Git you control, not only in a SaaS UI.
2. **One control plane** — the same release path for plan, apply, and destroy, with audit and live logs.
3. **Multi-cloud layout from day one** — path segments encode project, cloud, environment, and unit type, even when not every cloud is console-released yet.
4. **An exit ramp** — generated Terraform under `archive/` is ordinary HCL you can take with you; see [Exit ramp](./Concepts/Exit_Ramp.md).

## What Grid is not

| Not this | Because |
|----------|---------|
| A hosted SaaS | You run **grid-core** + **grid-ui** on your VM or Compose host |
| A replacement for Terraform | Grid **generates and runs** Terraform via **grid-cli** + **grid-terraform** |
| “Just AWS tooling” | The platform models **many clouds**; per-service status lives under [Clouds](./Clouds/AWS.md) |
| Auto-destroy on Git delete | Removing JSON marks units **stale**; destroy requires an explicit action |

## How it works

```text
Your Git repo (desired-state JSON)
        │
        ▼
  GitOps Sync (grid-core)
        │  upsert units · mark missing JSON as stale
        ▼
  Console / API / CLI
        │  plan · apply · destroy (releases)
        ▼
  grid-cli generate → Terraform (module bank)
        │
        ▼
  Remote state + archive/ HCL
        │
        ▼
  Optional host Prometheus / Alertmanager
```

That loop is the product. RBAC, approvals, Sources, Monitoring, and Topology wrap it.

## Who does what

| Actor | Responsibility |
|-------|----------------|
| **Operators / platform** | Install Core + UI, remote state, module bank pin, GitOps remote, auth bootstrap |
| **App / infra authors** | Own the desired-state repository; open PRs for JSON changes |
| **Approvers** | Gate apply/destroy where environment policy requires it |
| **CLI users** | Same generate/plan/deploy path on a **local** machine with cloud credentials (Grid AuthZ is not applied to raw CLI) |

## Where to go next

Use the sections in this documentation for the details:

<div className="grid-cards">
  <a className="grid-card" href="/doc/Architecture/Control_Plane">
    <span className="grid-card__eyebrow">Architecture</span>
    <span className="grid-card__title">Control plane</span>
    <span className="grid-card__desc">UI, Core, CLI, module bank, and your Git remote.</span>
  </a>
  <a className="grid-card" href="/doc/Getting-Started/Quick_Start">
    <span className="grid-card__eyebrow">Install</span>
    <span className="grid-card__title">Quick start</span>
    <span className="grid-card__desc">Stand up Grid, Sync desired state, then Plan.</span>
  </a>
  <a className="grid-card" href="/doc/Getting-Started/Your_Desired_State_Repo">
    <span className="grid-card__eyebrow">GitOps</span>
    <span className="grid-card__title">Your desired-state repo</span>
    <span className="grid-card__desc">Own the source of truth — samples are reference only.</span>
  </a>
  <a className="grid-card" href="/doc/Concepts/Desired_State">
    <span className="grid-card__eyebrow">Concepts</span>
    <span className="grid-card__title">Desired-state layout</span>
    <span className="grid-card__desc">Paths, unit JSON, dependsOn, sync, and archive.</span>
  </a>
  <a className="grid-card" href="/doc/Clouds/AWS">
    <span className="grid-card__eyebrow">Clouds</span>
    <span className="grid-card__title">Provider catalogs</span>
    <span className="grid-card__desc">Per-cloud type/subtype — supported or planned.</span>
  </a>
  <a className="grid-card" href="/doc/Console/Overview">
    <span className="grid-card__eyebrow">Console</span>
    <span className="grid-card__title">Operator UI</span>
    <span className="grid-card__desc">Infrastructure, releases, monitoring, and admin.</span>
  </a>
  <a className="grid-card" href="/doc/Install/Configuration">
    <span className="grid-card__eyebrow">Operate</span>
    <span className="grid-card__title">Configuration</span>
    <span className="grid-card__desc">Env vars for Core, Compose, auth, state, and monitoring.</span>
  </a>
  <a className="grid-card" href="/doc/Roadmap">
    <span className="grid-card__eyebrow">Status</span>
    <span className="grid-card__title">Roadmap</span>
    <span className="grid-card__desc">What is shipped, hardening, and still upcoming.</span>
  </a>
</div>
