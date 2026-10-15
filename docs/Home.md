---
sidebar_position: 1
slug: /
title: Grid Platform Docs
hide_title: true
---

<div className="grid-hero">
  <img className="grid-hero__banner" src="/doc/img/banner.png" alt="" />
  <div className="grid-hero__inner">
    <img className="grid-hero__logo" src="/doc/img/logo.png" alt="Grid" />
    <div className="grid-hero__badge">Open source · Self-hosted</div>
    <h1>Infrastructure orchestration, declared in Git</h1>
    <p>
      Grid syncs path-shaped desired-state JSON, generates Terraform from a module bank,
      runs plan / apply / destroy as releases with live logs, and optionally monitors
      live units from the host.
    </p>
    <div className="grid-hero__actions">
      <a className="primary" href="/doc/Getting-Started/Quick_Start">Quick start</a>
      <a className="secondary" href="/doc/What_Is_Grid">What is Grid?</a>
      <a className="secondary" href="https://github.com/gridplatform/doc">Edit on GitHub</a>
    </div>
  </div>
</div>

<figure className="grid-figure">
  <img src="/doc/img/diagrams/desired-state-loop.svg" alt="Desired-state loop: author JSON, sync, plan/apply, state and monitor" />
  <figcaption>The product loop — everything else wraps this.</figcaption>
</figure>

## Start here

<div className="grid-cards">
  <a className="grid-card" href="/doc/What_Is_Grid">
    <span className="grid-card__eyebrow">Product</span>
    <span className="grid-card__title">What is Grid?</span>
    <span className="grid-card__desc">Why it exists and how the pieces fit.</span>
  </a>
  <a className="grid-card" href="/doc/Architecture/Control_Plane">
    <span className="grid-card__eyebrow">Architecture</span>
    <span className="grid-card__title">Control plane</span>
    <span className="grid-card__desc">UI, Core, CLI, module bank, your Git remote.</span>
  </a>
  <a className="grid-card" href="/doc/Getting-Started/Quick_Start">
    <span className="grid-card__eyebrow">Install</span>
    <span className="grid-card__title">Quick start</span>
    <span className="grid-card__desc">Compose on a VM, then Sync and Plan.</span>
  </a>
  <a className="grid-card" href="/doc/Getting-Started/Your_Desired_State_Repo">
    <span className="grid-card__eyebrow">GitOps</span>
    <span className="grid-card__title">Your desired-state repo</span>
    <span className="grid-card__desc">Own the SoT — don’t fork the sample for prod.</span>
  </a>
  <a className="grid-card" href="/doc/Concepts/Desired_State">
    <span className="grid-card__eyebrow">Concepts</span>
    <span className="grid-card__title">Desired-state layout</span>
    <span className="grid-card__desc">Path rules, units, dependsOn, archive.</span>
  </a>
  <a className="grid-card" href="/doc/Clouds/Support_Matrix">
    <span className="grid-card__eyebrow">Clouds</span>
    <span className="grid-card__title">Support matrix</span>
    <span className="grid-card__desc">Honest maturity across console, CLI, and modules.</span>
  </a>
  <a className="grid-card" href="/doc/Console/Overview">
    <span className="grid-card__eyebrow">Console</span>
    <span className="grid-card__title">Operator UI</span>
    <span className="grid-card__desc">Infrastructure, releases, monitoring, admin.</span>
  </a>
  <a className="grid-card" href="/doc/Roadmap">
    <span className="grid-card__eyebrow">Status</span>
    <span className="grid-card__title">Roadmap</span>
    <span className="grid-card__desc">Shipped, hardening, and clearly upcoming.</span>
  </a>
</div>

## Product repositories

| Repository | Role |
|------------|------|
| [grid-core](https://github.com/gridplatform/grid-core) | API, GitOps sync, releases, install packaging |
| [grid-ui](https://github.com/gridplatform/grid-ui) | Browser console |
| [grid-cli](https://github.com/gridplatform/grid-cli) | Generate / plan / apply / destroy (also invoked by Core) |
| [grid-terraform](https://github.com/gridplatform/grid-terraform) | Module bank consumed by generate |
| [grid-config](https://github.com/gridplatform/grid-config) | **Example** desired-state tree — learn and copy; do not use as production SoT |

## Contribute

Fork → branch → PR against `main`. Env-var tables are generated from [`data/configuration.json`](https://github.com/gridplatform/doc/blob/main/data/configuration.json) — see [CONTRIBUTING.md](https://github.com/gridplatform/doc/blob/main/CONTRIBUTING.md).
