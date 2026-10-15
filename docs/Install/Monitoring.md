---
title: Monitoring
---

# Monitoring

Prometheus (metrics + rules), Alertmanager (notifications), and optional Alloy (collector) run on the **host** — not inside Grid Compose.

Stopping Grid (`docker compose down`, systemd stop) does **not** stop metrics.

| Component | Port | Role |
|-----------|------|------|
| Prometheus | `:9090` | Store / query metrics; evaluate alert rules |
| Alertmanager | `:9093` | Route and notify firings |
| Alloy | — | Scrapes → `remote_write` to Prometheus |

Install scripts and sample config live in
[grid-core/install/monitoring](https://github.com/gridplatform/grid-core/tree/main/install/monitoring).

## Production VM (Compose → host)

```bash
sudo bash install/monitoring/install-systemd.sh
systemctl status prometheus alertmanager alloy
```

In `install/.env`:

```bash
GRID_PROMETHEUS_URL=http://host.docker.internal:9090
GRID_ALERTMANAGER_URL=http://host.docker.internal:9093
GRID_MONITORING_CONFIG_DIR=/etc/prometheus
GRID_MONITORING_HOST_DIR=/etc/prometheus
```

Then bring Grid up with `bash install/compose-up.sh`.

## Local (`npm run prod`)

```bash
GRID_PROMETHEUS_URL=http://127.0.0.1:9090
GRID_ALERTMANAGER_URL=http://127.0.0.1:9093
GRID_MONITORING_CONFIG_DIR=./install/monitoring
```

Start Prometheus with `--web.enable-lifecycle` so the console Settings page can
`POST /-/reload`. Full commands: the install README linked above.

## Console behavior

- **Alerts** — list firings from Alertmanager.
- **Settings** — write `rules/` + `alertmanager.yml` under `GRID_MONITORING_CONFIG_DIR`, then reload.
- **Collectors on managed infra** — `POST /api/v1/monitoring/setup/:id` writes Alloy config that remote-writes to this host `:9090`.

## Related

- [Configuration](./Configuration.md) — all `GRID_PROMETHEUS_*` / `GRID_ALERTMANAGER_*` vars
- [grid-core MONITORING.md](https://github.com/gridplatform/grid-core/blob/main/docs/MONITORING.md)
