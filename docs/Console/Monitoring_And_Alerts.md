---
title: Monitoring and alerts
---

# Monitoring and alerts

Grid’s console Monitoring and Alerts pages read from **host** Prometheus and Alertmanager. Those processes are not the Compose app containers.

## Operator install

See [Monitoring (install)](../Install/Monitoring.md) and [grid-core/install/monitoring](https://github.com/gridplatform/grid-core/tree/main/install/monitoring).

Required production env:

```bash
GRID_PROMETHEUS_URL=…
GRID_ALERTMANAGER_URL=…
GRID_MONITORING_CONFIG_DIR=…
```

## Console behavior

| Page | Role |
|------|------|
| Monitoring | Unit-oriented metrics / health using control-plane join keys |
| Alerts | Firings from Alertmanager |
| Settings (where exposed) | Write rules + `alertmanager.yml`, then reload |

Collectors on managed infra can be bootstrapped via API (`monitoring/setup/:id`) to remote_write into the host Prometheus.

## Join key

Metrics are correlated with inventory using `grid_unit_id` (path-derived UUID by default). Stable paths ⇒ stable ids across control-plane reinstalls.

## Related

- [Configuration](../Install/Configuration.md)
- [Architecture](../Architecture/Control_Plane.md)
