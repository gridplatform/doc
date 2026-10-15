---
title: What is Grid?
---

# What is Grid?

<img src="/doc/img/logo.png" alt="Grid logo" width="72" style={{marginBottom: '1rem'}} />

Grid is a **self-hosted infrastructure orchestration platform**. It sits between your Git repository of desired-state JSON and the Terraform that actually creates resources in cloud accounts.

<figure className="grid-figure">
  <img src="/doc/img/diagrams/desired-state-loop.svg" alt="Desired-state loop" />
  <figcaption>Author → Sync → Plan/Apply → State &amp; monitor.</figcaption>
</figure>

It is built for organizations that want:

1. **Declarative ownership** — infrastructure intent lives in Git you control, not only in a SaaS UI.
2. **One control plane** — the same release path for plan, apply, and destroy, with audit and live logs.
3. **Multi-cloud layout from day one** — path segments encode project, cloud, environment, and unit type, even when not every cloud is console-released yet.
4. **An exit ramp** — generated Terraform under `archive/` is a plain-Terraform buffer, not a black box.

## What Grid is not

| Not this | Because |
|----------|---------|
| A hosted SaaS | You run **grid-core** + **grid-ui** on your VM or Compose host |
| A replacement for Terraform | Grid **generates and runs** Terraform via **grid-cli** + **grid-terraform** |
| “Just AWS tooling” | The platform models **many clouds**; maturity differs by layer (see [support matrix](./Clouds/Support_Matrix.md)) |
| Auto-destroy on Git delete | Removing JSON marks units **stale**; destroy requires an explicit action |

## The loop (mental model)

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

That loop is the product. Everything else — RBAC, approvals, Sources, Monitoring, Topology — wraps it.

## Who does what

| Actor | Responsibility |
|-------|----------------|
| **Operators / platform** | Install Core + UI, remote state, module bank pin, GitOps remote, auth bootstrap |
| **App / infra authors** | Own the desired-state repository; open PRs for JSON changes |
| **Approvers** | Gate apply/destroy where environment policy requires it |
| **CLI users** | Can run the same generate/plan/deploy path locally with cloud credentials (Grid AuthZ is not applied to raw CLI) |

## Related

- [Architecture](./Architecture/Control_Plane.md)
- [Desired-state layout](./Concepts/Desired_State.md)
- [Roadmap](./Roadmap.md)
