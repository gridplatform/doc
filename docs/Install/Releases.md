---
title: Releases
---

# Releases

A **platform release** is one cut of Grid as an application: the same version across the component repositories, recorded on [Downloads](./Downloads.md) with a short changelog.

Tags and that download list are separate. A git tag names a commit in one repository. A download entry names the set of tags that ship together, plus what changed.

## How a release is planned

1. Decide the line: **LTS** or **current** (current includes beta tags when we publish them).
2. Land the work on `main` in each component repository.
3. Write a short platform changelog (bullet summary) on [Downloads](./Downloads.md) under that line.
4. Note the component tags in [`install/releases.json`](https://github.com/gridplatform/grid-core/blob/main/install/releases.json).
5. Tag the repositories, in order: **grid-cli → grid-ui → grid-terraform → grid-core**.

Each repository keeps its own `CHANGELOG.md` for detail. The Downloads page stays a short summary of the platform cut.

## Tagging structure

| Line | Git tag | Example | GHCR tags |
|------|---------|---------|-----------|
| Current | `vX.Y.Z` | `v0.1.0` | `0.1.0`, `current` |
| Beta | `vX.Y.Z-beta.N` | `v0.2.0-beta.1` | `0.2.0-beta.1` |
| LTS | `vX.Y.Z-lts` | `v1.2.0-lts` | `1.2.0`, `lts` |

Semver: `MAJOR.MINOR.PATCH`.

- **MAJOR** — breaking change
- **MINOR** — backward-compatible feature
- **PATCH** — backward-compatible fix

`0.x.y` may still move. `1.0.0` is the stability line.

The same tag string is applied to `grid-cli`, `grid-core`, `grid-ui`, and usually `grid-terraform`. Docs may be tagged with the same ref.

Install uses that git ref directly:

```bash
export GRID_REF=v0.1.0
curl -fsSL https://raw.githubusercontent.com/gridplatform/grid-core/${GRID_REF}/install/install.sh | sudo -E bash
```

`vX.Y.Z` installs that current build. `vX.Y.Z-lts` installs that LTS build. `vX.Y.Z-beta.N` installs that beta build.

Published builds and their changelogs: [Downloads](./Downloads.md).

## Related

[Downloads](./Downloads.md) · [VM](./VM.md) · [Docker Compose](./Docker_Compose.md) · [Configuration](./Configuration.md)
