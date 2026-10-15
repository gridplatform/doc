---
title: Yotta
---

# Yotta

Provider id: `yotta`. Per-service catalog: **type** (category) and **subtype** (`metadata.kind` / `resources[].type`).

| Status | Meaning | Count |
|--------|---------|-------|
| `supported` | Available to generate / plan / apply | 0 |
| `planned` | Not released yet — listed for layout and vocabulary | 31 |

## Catalog

| Type | Subtype | Status | Label |
|------|---------|--------|-------|
| Network | `dns` | `planned` | DNS |
| Network | `firewall` | `planned` | Firewall |
| Network | `load-balancer` | `planned` | Load balancer |
| Network | `network` | `planned` | Network (+ subnets) |
| Network | `openstack-network` | `planned` | Openstack Network |
| Network | `security-group` | `planned` | Security Group |
| Network | `subnet` | `planned` | Subnet (folded into network) |
| Network | `vpc` | `planned` | Vpc |
| Network | `vpn` | `planned` | Vpn |
| Compute | `compute-instance` | `planned` | Compute instance |
| Compute | `gpu-instance` | `planned` | Gpu Instance |
| Compute | `instance-group` | `planned` | Instance Group |
| Kubernetes cluster | `gpu-node-pool` | `planned` | Gpu Node Pool |
| Kubernetes cluster | `kubernetes` | `planned` | Kubernetes |
| Storage | `disk` | `planned` | Disk |
| Storage | `object-storage` | `planned` | Object storage |
| Storage | `snapshot` | `planned` | Snapshot |
| Storage | `volume` | `planned` | Volume |
| AI / ML | `ssh-keypair` | `planned` | Ssh Keypair |
| AI / ML | `vllm` | `planned` | Vllm |
| Identity | `affinity-group` | `planned` | Affinity Group |
| Containers | `template` | `planned` | Template |
| Other | `account` | `planned` | Account |
| Other | `acl` | `planned` | Acl |
| Other | `autoscale` | `planned` | Autoscale |
| Other | `database` | `planned` | Database |
| Other | `ip-address` | `planned` | Ip Address |
| Other | `iso` | `planned` | Iso |
| Other | `nic` | `planned` | Nic |
| Other | `openstack-compute` | `planned` | Openstack Compute |
| Other | `project` | `planned` | Project |

## Related

- [Unit JSON](../Concepts/Unit_JSON.md)
- [Install overview](../Install/Overview.md)

