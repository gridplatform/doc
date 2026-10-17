---
title: Utho Cloud
---

# Utho Cloud

Provider id: `utho`. Per-service catalog: **type** (category) and **subtype** (`metadata.kind` / `resources[].type`).

| Status | Meaning | Count |
|--------|---------|-------|
| `supported` | Available to generate / plan / apply | 0 |
| `planned` | Not released yet — listed for layout and vocabulary | 55 |

## Catalog

| Type | Subtype | Status | Label |
|------|---------|--------|-------|
| Compute | `cloud` | `planned` | Cloud instance |
| Compute | `cloud-power` | `planned` | Cloud power |
| Compute | `cloud-resize` | `planned` | Cloud resize |
| Compute | `cloud-iso` | `planned` | Cloud ISO |
| Compute | `ssh-key` | `planned` | SSH key |
| Compute | `autoscaling` | `planned` | Autoscaling |
| Compute | `autoscaling-policy` | `planned` | Autoscaling policy |
| Compute | `autoscaling-schedule` | `planned` | Autoscaling schedule |
| Kubernetes cluster | `kubernetes` | `planned` | Kubernetes |
| Kubernetes cluster | `kubernetes-node-pool` | `planned` | Kubernetes node pool |
| Storage | `cloud-ebs` | `planned` | Cloud block volume |
| Storage | `cloud-storage` | `planned` | Cloud storage |
| Storage | `cloud-snapshot` | `planned` | Cloud snapshot |
| Storage | `ebs` | `planned` | Block volume |
| Storage | `ebs-attachment` | `planned` | Block volume attachment |
| Storage | `object-storage` | `planned` | Object storage |
| Storage | `object-storage-key` | `planned` | Object storage key |
| Storage | `object-storage-permission` | `planned` | Object storage permission |
| Network | `cloud-vpc` | `planned` | Cloud VPC attachment |
| Network | `cloud-public-ip` | `planned` | Cloud public IP |
| Network | `cloud-firewall` | `planned` | Cloud firewall attachment |
| Network | `vpc` | `planned` | VPC |
| Network | `subnet` | `planned` | Subnet |
| Network | `nat-gateway` | `planned` | NAT gateway |
| Network | `route-table` | `planned` | Route table |
| Network | `route` | `planned` | Route |
| Network | `vpc-peering` | `planned` | VPC peering |
| Network | `elastic-ip` | `planned` | Elastic IP |
| Network | `loadbalancer` | `planned` | Load balancer |
| Network | `loadbalancer-frontend` | `planned` | Load balancer frontend |
| Network | `loadbalancer-backend` | `planned` | Load balancer backend |
| Network | `loadbalancer-acl` | `planned` | Load balancer ACL |
| Network | `loadbalancer-settings` | `planned` | Load balancer settings |
| Network | `firewall` | `planned` | Firewall |
| Network | `firewall-rule` | `planned` | Firewall rule |
| Network | `firewall-server` | `planned` | Firewall server |
| Network | `ipsec` | `planned` | IPsec |
| Network | `ipsec-connection` | `planned` | IPsec connection |
| Database | `database` | `planned` | Database |
| Database | `database-db` | `planned` | Database schema |
| Database | `database-user` | `planned` | Database user |
| Database | `database-pool` | `planned` | Database pool |
| DNS | `dns-zone` | `planned` | DNS zone |
| DNS | `dns-record` | `planned` | DNS record |
| Containers | `container-registry` | `planned` | Container registry |
| Containers | `container-registry-robot` | `planned` | Container registry robot |
| Containers | `container-registry-webhook` | `planned` | Container registry webhook |
| Containers | `container-registry-immutable-rule` | `planned` | Container registry immutable rule |
| Identity | `iam-user` | `planned` | IAM user |
| Identity | `api-token` | `planned` | API token |
| Identity | `project` | `planned` | Project |
| Identity | `project-member` | `planned` | Project member |
| Observability | `alert` | `planned` | Alert |
| Observability | `alert-contact` | `planned` | Alert contact |
| Security | `ssl-certificate` | `planned` | SSL certificate |

## Related

- [Unit JSON](../Concepts/Unit_JSON.md)
- [Install overview](../Install/Overview.md)
