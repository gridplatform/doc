---
title: OpenShift
---

# OpenShift

Provider id: `openshift`. Per-service catalog: **type** (category) and **subtype** (`metadata.kind` / `resources[].type`).

| Status | Meaning | Count |
|--------|---------|-------|
| `supported` | Available to generate / plan / apply | 0 |
| `planned` | Not released yet — listed for layout and vocabulary | 29 |

## Catalog

| Type | Subtype | Status | Label |
|------|---------|--------|-------|
| Network | `network-policy` | `planned` | Network Policy |
| Network | `route` | `planned` | Route |
| Kubernetes cluster | `machine-pool` | `planned` | Machine pool |
| Kubernetes cluster | `machine-set` | `planned` | Machine Set |
| Kubernetes cluster | `roks-cluster` | `planned` | Roks Cluster |
| Kubernetes cluster | `rosa-account-roles` | `planned` | Rosa Account Roles |
| Kubernetes cluster | `rosa-cluster` | `planned` | ROSA cluster (AWS) |
| Kubernetes cluster | `rosa-hcp-cluster` | `planned` | Rosa Hcp Cluster |
| Kubernetes cluster | `rosa-machine-pool` | `planned` | Rosa Machine Pool |
| Kubernetes cluster | `rosa-sts-policy` | `planned` | Rosa Sts Policy |
| Storage | `storage-class` | `planned` | Storage Class |
| AI / ML | `kserve` | `planned` | Kserve |
| AI / ML | `kuberay` | `planned` | Kuberay |
| AI / ML | `vllm` | `planned` | Vllm |
| Identity | `aro-resource-group` | `planned` | Aro Resource Group |
| Identity | `identity-provider` | `planned` | Identity provider |
| Identity | `oauth` | `planned` | Oauth |
| Observability | `cluster-monitoring` | `planned` | Cluster Monitoring |
| Other | `aro-cluster` | `planned` | ARO cluster (Azure) |
| Other | `aro-worker-node` | `planned` | Aro Worker Node |
| Other | `cluster-autoscaler` | `planned` | Cluster Autoscaler |
| Other | `image-registry` | `planned` | Image Registry |
| Other | `ingress-controller` | `planned` | Ingress Controller |
| Other | `machine-config-pool` | `planned` | Machine Config Pool |
| Other | `nvidia-gpu-operator` | `planned` | Nvidia Gpu Operator |
| Other | `operator-hub` | `planned` | Operator Hub |
| Other | `project` | `planned` | OpenShift project |
| Other | `pvc` | `planned` | Pvc |
| Other | `self-managed-cluster` | `planned` | Self-managed OpenShift cluster |

## Related

- [Unit JSON](../Concepts/Unit_JSON.md)
- [Install overview](../Install/Overview.md)

