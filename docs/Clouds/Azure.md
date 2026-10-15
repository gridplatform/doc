---
title: Azure
---

# Azure

Provider id: `azure`. Per-service catalog: **type** (category) and **subtype** (`metadata.kind` / `resources[].type`).

| Status | Meaning | Count |
|--------|---------|-------|
| `supported` | Available to generate / plan / apply | 0 |
| `planned` | Not released yet — listed for layout and vocabulary | 145 |

## Catalog

| Type | Subtype | Status | Label |
|------|---------|--------|-------|
| Network | `application-gateway` | `planned` | Application Gateway |
| Network | `dns` | `planned` | Azure DNS (public zone + records) |
| Network | `firewall` | `planned` | Firewall |
| Network | `iotcentral` | `planned` | Iotcentral |
| Network | `litellm-gateway` | `planned` | Litellm Gateway (self-hosted / unmanaged) |
| Network | `llm-inference-endpoint` | `planned` | Llm Inference Endpoint (self-hosted / unmanaged) |
| Network | `load-balancer` | `planned` | Load balancer |
| Network | `nat-gateway` | `planned` | Nat Gateway |
| Network | `network` | `planned` | Virtual network (+ subnets) |
| Network | `network-security-group` | `planned` | Network security group |
| Network | `private-dns` | `planned` | Azure Private DNS (zone + VNet links + records) |
| Network | `private-dns-resolver` | `planned` | Azure DNS Private Resolver (hybrid) |
| Network | `private-endpoint` | `planned` | Private Endpoint |
| Network | `security-center` | `planned` | Security Center |
| Network | `subnet` | `planned` | Subnet (folded into network) |
| Network | `vnet-peering` | `planned` | Vnet Peering |
| Network | `vpn-gateway` | `planned` | Vpn Gateway |
| Compute | `batch` | `planned` | Batch |
| Compute | `container-instance` | `planned` | Container Instances |
| Compute | `gpu-instance` | `planned` | Gpu Instance (self-hosted / unmanaged) |
| Compute | `mssql-managed-instance` | `planned` | Mssql Managed Instance |
| Compute | `virtual-machine` | `planned` | Virtual machine |
| Compute | `vm-scale-set` | `planned` | Vm Scale Set |
| Kubernetes cluster | `aks` | `planned` | AKS |
| Kubernetes cluster | `aks-node-pool` | `planned` | AKS node pool |
| Kubernetes cluster | `gpu-node-pool` | `planned` | Gpu Node Pool (self-hosted / unmanaged) |
| Database | `cosmosdb` | `planned` | Cosmosdb |
| Database | `mariadb` | `planned` | Mariadb |
| Database | `mysql-flexible` | `planned` | MySQL Flexible Server |
| Database | `postgresql` | `planned` | PostgreSQL Flexible Server |
| Database | `postgresql-flexible` | `planned` | Postgresql Flexible |
| Database | `redis-cache` | `planned` | Redis Cache |
| Database | `redis-enterprise` | `planned` | Redis Enterprise |
| Database | `sql-server` | `planned` | Sql Server |
| Storage | `managed-disk` | `planned` | Managed Disk |
| Storage | `snapshot` | `planned` | Snapshot |
| Storage | `storage-account` | `planned` | Storage account |
| AI / ML | `ai-foundry` | `planned` | Ai Foundry |
| AI / ML | `ai-search` | `planned` | Azure AI Search |
| AI / ML | `cognitive-services` | `planned` | Azure AI Services / Foundry Tools account |
| AI / ML | `huggingface-tgi` | `planned` | Huggingface Tgi (self-hosted / unmanaged) |
| AI / ML | `kserve` | `planned` | Kserve (self-hosted / unmanaged) |
| AI / ML | `kuberay` | `planned` | Kuberay (self-hosted / unmanaged) |
| AI / ML | `machine-learning` | `planned` | Azure Machine Learning workspace |
| AI / ML | `mlflow` | `planned` | Mlflow (self-hosted / unmanaged) |
| AI / ML | `nvidia-nim` | `planned` | Nvidia Nim (self-hosted / unmanaged) |
| AI / ML | `ollama` | `planned` | Ollama (self-hosted / unmanaged) |
| AI / ML | `openai` | `planned` | Azure OpenAI |
| AI / ML | `speech` | `planned` | Azure Speech |
| AI / ML | `tensorrt-llm` | `planned` | Tensorrt Llm (self-hosted / unmanaged) |
| AI / ML | `vllm` | `planned` | Vllm (self-hosted / unmanaged) |
| Identity | `managed-identity` | `planned` | Managed Identity |
| Identity | `management-group` | `planned` | Management Group |
| Identity | `resource-group` | `planned` | Resource Group |
| Security | `key-vault` | `planned` | Key Vault |
| Messaging | `event-grid` | `planned` | Event Grid |
| Messaging | `event-hubs` | `planned` | Event Hubs |
| Messaging | `notification-hub` | `planned` | Notification Hub |
| Messaging | `service-bus` | `planned` | Service Bus |
| Messaging | `web-pubsub` | `planned` | Web Pubsub |
| Serverless | `function-app` | `planned` | Function App |
| Serverless | `logic-app` | `planned` | Logic App |
| Serverless | `logic-apps` | `planned` | Logic Apps |
| Containers | `app-service` | `planned` | App Service |
| Containers | `container-apps` | `planned` | Container Apps |
| Containers | `container-registry` | `planned` | Container Registry |
| Edge | `cdn` | `planned` | Cdn |
| Edge | `confidential-ledger` | `planned` | Confidential Ledger |
| Edge | `front-door` | `planned` | Front Door |
| Analytics | `data-factory` | `planned` | Data Factory |
| Analytics | `databricks` | `planned` | Databricks |
| Analytics | `log-analytics` | `planned` | Log Analytics |
| Analytics | `stream-analytics` | `planned` | Stream Analytics |
| Analytics | `synapse` | `planned` | Synapse |
| CI / CD | `devops-pipeline` | `planned` | Azure Pipelines |
| Other | `api-management` | `planned` | Api Management |
| Other | `app-configuration` | `planned` | App Configuration |
| Other | `application-insights` | `planned` | Application Insights |
| Other | `automation` | `planned` | Automation |
| Other | `availability-set` | `planned` | Availability Set |
| Other | `azure-ad-application` | `planned` | Entra ID application |
| Other | `bentoml` | `planned` | Bentoml (self-hosted / unmanaged) |
| Other | `bot-service` | `planned` | Bot Service |
| Other | `chroma` | `planned` | Chroma (self-hosted / unmanaged) |
| Other | `communication-services` | `planned` | Communication Services |
| Other | `content-safety` | `planned` | Azure Content Safety |
| Other | `cost-management` | `planned` | Cost Management |
| Other | `data-protection` | `planned` | Data Protection |
| Other | `data-share` | `planned` | Data Share |
| Other | `deepspeed` | `planned` | Deepspeed (self-hosted / unmanaged) |
| Other | `desktop-virtualization` | `planned` | Desktop Virtualization |
| Other | `digital-twins` | `planned` | Digital Twins |
| Other | `document-intelligence` | `planned` | Document Intelligence (FormRecognizer kind) |
| Other | `domain-services` | `planned` | Domain Services |
| Other | `elastic-cloud` | `planned` | Elastic Cloud |
| Other | `elastic-san` | `planned` | Elastic San |
| Other | `eventgrid` | `planned` | Eventgrid |
| Other | `fabric` | `planned` | Fabric |
| Other | `fluid-relay` | `planned` | Fluid Relay |
| Other | `graph` | `planned` | Graph |
| Other | `hdinsight` | `planned` | Hdinsight |
| Other | `healthcare-apis` | `planned` | Healthcare Apis |
| Other | `hpc-cache` | `planned` | Hpc Cache |
| Other | `hybrid-compute` | `planned` | Hybrid Compute |
| Other | `iothub` | `planned` | Iothub |
| Other | `kusto` | `planned` | Kusto |
| Other | `language` | `planned` | Azure Language |
| Other | `lighthouse` | `planned` | Lighthouse |
| Other | `load-test` | `planned` | Load Test |
| Other | `maintenance` | `planned` | Maintenance |
| Other | `managed-hsm` | `planned` | Managed Hsm |
| Other | `maps` | `planned` | Maps |
| Other | `media-services` | `planned` | Media Services |
| Other | `milvus` | `planned` | Milvus (self-hosted / unmanaged) |
| Other | `mixed-reality` | `planned` | Mixed Reality |
| Other | `monitor` | `planned` | Monitor |
| Other | `netapp` | `planned` | Netapp |
| Other | `nginx` | `planned` | Nginx |
| Other | `nvidia-gpu-operator` | `planned` | Nvidia Gpu Operator (self-hosted / unmanaged) |
| Other | `open-webui` | `planned` | Open Webui (self-hosted / unmanaged) |
| Other | `oracle-database` | `planned` | Oracle Database |
| Other | `pgvector` | `planned` | Pgvector (self-hosted / unmanaged) |
| Other | `policy` | `planned` | Policy |
| Other | `power-bi` | `planned` | Power Bi |
| Other | `public-ip` | `planned` | Public Ip |
| Other | `purview` | `planned` | Purview |
| Other | `qdrant` | `planned` | Qdrant (self-hosted / unmanaged) |
| Other | `ray-cluster` | `planned` | Ray Cluster (self-hosted / unmanaged) |
| Other | `recovery-services` | `planned` | Recovery Services |
| Other | `relay` | `planned` | Relay |
| Other | `role-assignment` | `planned` | Role Assignment |
| Other | `sentinel` | `planned` | Sentinel |
| Other | `service-fabric` | `planned` | Service Fabric |
| Other | `service-plan` | `planned` | Service Plan |
| Other | `sglang` | `planned` | Sglang (self-hosted / unmanaged) |
| Other | `signalr` | `planned` | Signalr |
| Other | `spring-apps` | `planned` | Spring Apps |
| Other | `static-web-app` | `planned` | Static Web App |
| Other | `timeseries-insights` | `planned` | Timeseries Insights |
| Other | `traffic-manager` | `planned` | Traffic Manager |
| Other | `translator` | `planned` | Azure Translator |
| Other | `triton-inference-server` | `planned` | Triton Inference Server (self-hosted / unmanaged) |
| Other | `vision` | `planned` | Azure Vision |
| Other | `vmware` | `planned` | Vmware |
| Other | `weaviate` | `planned` | Weaviate (self-hosted / unmanaged) |

## Related

- [Unit JSON](../Concepts/Unit_JSON.md)
- [Install overview](../Install/Overview.md)

