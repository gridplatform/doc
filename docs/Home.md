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
      Grid is a self-hosted infrastructure orchestration platform. You declare what
      should exist as path-shaped JSON in Git; Grid syncs that tree and runs
      plan / apply / destroy as releases — across cloud infrastructure today and
      Kubernetes workload GitOps as that engine lands — with optional host monitoring.
    </p>
    <div className="grid-hero__actions">
      <a className="primary" href="/doc/Getting-Started/Quick_Start">Quick start</a>
    </div>
  </div>
</div>

<figure className="grid-figure">
  <img src="/doc/img/diagrams/desired-state-loop.png" alt="Control loop: author JSON, sync, plan/apply by engine, state and monitor" />
  <figcaption>Author → Sync → Plan/Apply (by engine) → State &amp; monitor. Everything else wraps this loop.</figcaption>
</figure>

## What Grid is for

Organizations use Grid when they want:

1. **Declarative ownership** — intent lives in Git you control, not only in a SaaS UI.
2. **One control plane** — the same release path for plan, apply, and destroy, with audit and live logs — whether the unit is cloud infrastructure or (as it ships) an in-cluster workload.
3. **Multi-cloud layout from day one** — path segments encode project, cloud, environment, and unit type, even when not every cloud is console-released yet.
4. **An exit ramp** — portable artifacts and standard tools, not a black box; see [Exit ramp](./Concepts/Exit_Ramp.md).

## Engines (not Terraform-only)

| Engine | Operates | Status |
|--------|----------|--------|
| **Terraform** | Cloud resources, managed clusters, node pools, module-bank subtypes | Shipped |
| **Kubernetes workloads** | In-cluster apps via GitOps (Argo CD / OpenShift GitOps) | Gated — see [Kubernetes workloads](./Concepts/Kubernetes_Workloads.md) |

Managed **clusters** are Terraform units. **Workloads inside** those clusters are the separate kubernetes engine. Details live in the sidebar under Concepts.

## What Grid is not

| Not this | Because |
|----------|---------|
| A hosted SaaS | You run **grid-core** + **grid-ui** on your VM or Compose host |
| A replacement for Terraform or Argo | Grid **orchestrates** them — generate/run Terraform today; drive workload GitOps as that path releases |
| “Just AWS tooling” | The platform models **many clouds**; per-service status lives under [Clouds](./Clouds/AWS.md) |
| Auto-destroy on Git delete | Removing JSON marks units **stale**; destroy requires an explicit action |

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
    · terraform → generate + module bank → remote state + archive/
    · kubernetes   → cluster GitOps (Argo / OpenShift) when enabled
        │
        ▼
  Optional host Prometheus / Alertmanager
```

That loop is the product. RBAC, approvals, Sources, Monitoring, and Topology wrap it. Use the **sidebar** for layout, unit JSON, clouds, install, and the rest — this page is the orientation.

## Who does what

| Actor | Responsibility |
|-------|----------------|
| **Operators / platform** | Install Core + UI, remote state, module bank pin, Git remote, auth bootstrap; later, cluster GitOps connectivity |
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
  <a className="grid-card" href="/doc/Clouds/AWS">
    <span className="grid-card__eyebrow">Clouds</span>
    <span className="grid-card__title">Provider catalogs</span>
    <span className="grid-card__desc">Per-cloud type/subtype — supported or planned.</span>
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
