---
title: CtrlS
---

# CtrlS

Provider id: `ctrls`. Per-service catalog: **type** (category) and **subtype** (`metadata.kind` / `resources[].type`).

| Status | Meaning | Count |
|--------|---------|-------|
| `supported` | Available to generate / plan / apply | 0 |
| `planned` | Not released yet — listed for layout and vocabulary | 30 |

## Catalog

| Type | Subtype | Status | Label |
|------|---------|--------|-------|
| Network | `dns` | `planned` | DNS |
| Network | `load-balancer` | `planned` | Load balancer |
| Network | `network` | `planned` | Network (+ subnets) |
| Network | `nutanix-subnet` | `planned` | Nutanix Subnet |
| Network | `security-group` | `planned` | Security Group |
| Network | `subnet` | `planned` | Subnet (folded into network) |
| Network | `vsphere-network` | `planned` | Vsphere Network |
| Compute | `compute-instance` | `planned` | Compute instance |
| Compute | `gpu-instance` | `planned` | Gpu Instance |
| Compute | `nutanix-vm` | `planned` | Nutanix Vm |
| Compute | `vsphere-vm` | `planned` | Vsphere Vm |
| Kubernetes cluster | `gpu-node-pool` | `planned` | Gpu Node Pool |
| Kubernetes cluster | `kubernetes` | `planned` | Kubernetes |
| Storage | `backup` | `planned` | Backup |
| Storage | `object-storage` | `planned` | Object storage |
| Storage | `volume` | `planned` | Volume |
| Storage | `volume-attach` | `planned` | Volume Attach |
| AI / ML | `keypair` | `planned` | Keypair |
| AI / ML | `vllm` | `planned` | Vllm |
| Other | `database` | `planned` | Database |
| Other | `flavor` | `planned` | Flavor |
| Other | `floating-ip` | `planned` | Floating Ip |
| Other | `gpu-pool` | `planned` | Gpu Pool |
| Other | `image` | `planned` | Image |
| Other | `lb-member` | `planned` | Lb Member |
| Other | `lb-monitor` | `planned` | Lb Monitor |
| Other | `nutanix-cluster` | `planned` | Nutanix Cluster |
| Other | `port` | `planned` | Port |
| Other | `router` | `planned` | Router |
| Other | `share` | `planned` | Share |

## Related

- [Unit JSON](../Concepts/Unit_JSON.md)
- [Install overview](../Install/Overview.md)

