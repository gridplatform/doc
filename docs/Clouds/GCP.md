---
title: GCP
---

# GCP

Provider id: `gcp`. Per-service catalog: **type** (category) and **subtype** (`metadata.kind` / `resources[].type`).

| Status | Meaning | Count |
|--------|---------|-------|
| `supported` | Available to generate / plan / apply | 0 |
| `planned` | Not released yet — listed for layout and vocabulary | 143 |

## Catalog

| Type | Subtype | Status | Label |
|------|---------|--------|-------|
| Network | `cloud-dns` | `planned` | Cloud DNS (public/private zone + records) |
| Network | `cloud-endpoints` | `planned` | Cloud Endpoints |
| Network | `cloud-nat` | `planned` | Cloud NAT |
| Network | `firewall` | `planned` | VPC firewall rules |
| Network | `firewall-policy` | `planned` | Firewall Policy |
| Network | `interconnect` | `planned` | Interconnect |
| Network | `litellm-gateway` | `planned` | Litellm Gateway (self-hosted / unmanaged) |
| Network | `llm-inference-endpoint` | `planned` | Llm Inference Endpoint (self-hosted / unmanaged) |
| Network | `load-balancer` | `planned` | Cloud Load Balancing |
| Network | `natural-language` | `planned` | Natural Language AI |
| Network | `network` | `planned` | VPC network (+ subnets) |
| Network | `network-connectivity` | `planned` | Network Connectivity |
| Network | `network-security` | `planned` | Network Security |
| Network | `peering` | `planned` | VPC peering |
| Network | `route` | `planned` | Custom VPC routes |
| Network | `subnet` | `planned` | Subnet (folded into network) |
| Network | `vpc-access-connector` | `planned` | Serverless VPC Access connector |
| Network | `vpc-service-controls` | `planned` | Vpc Service Controls |
| Network | `vpn` | `planned` | Vpn |
| Compute | `batch` | `planned` | Batch |
| Compute | `compute-engine-instance` | `planned` | Compute Engine VM |
| Compute | `gpu-instance` | `planned` | Gpu Instance (self-hosted / unmanaged) |
| Compute | `instance-group` | `planned` | Instance Group |
| Kubernetes cluster | `gke-autopilot` | `planned` | Gke Autopilot |
| Kubernetes cluster | `gke-hub` | `planned` | Gke Hub |
| Kubernetes cluster | `gke-node-pool` | `planned` | GKE node pool (one YAML per pool) |
| Kubernetes cluster | `gpu-node-pool` | `planned` | Gpu Node Pool (self-hosted / unmanaged) |
| Kubernetes cluster | `kubernetes-engine` | `planned` | GKE cluster (node pools are separate units) |
| Database | `alloydb` | `planned` | Alloydb |
| Database | `bigtable` | `planned` | Bigtable |
| Database | `cloud-sql-mysql` | `planned` | Cloud SQL MySQL |
| Database | `cloud-sql-postgres` | `planned` | Cloud SQL PostgreSQL |
| Database | `cloud-sql-sqlserver` | `planned` | Cloud SQL SQL Server |
| Database | `firestore` | `planned` | Firestore |
| Database | `memorystore-memcached` | `planned` | Memorystore Memcached |
| Database | `memorystore-redis` | `planned` | Memorystore Redis |
| Database | `redis-cluster` | `planned` | Redis Cluster |
| Database | `spanner` | `planned` | Spanner |
| Storage | `cloud-storage` | `planned` | Cloud Storage |
| Storage | `compute-disk` | `planned` | Compute Disk |
| Storage | `filestore` | `planned` | Filestore |
| AI / ML | `dataplex` | `planned` | Dataplex |
| AI / ML | `dialogflow` | `planned` | Dialogflow |
| AI / ML | `dialogflow-cx` | `planned` | Dialogflow CX / CX Agent Studio |
| AI / ML | `document-ai` | `planned` | Document AI processor |
| AI / ML | `gemini-api` | `planned` | Gemini / Model Garden APIs (via Vertex) |
| AI / ML | `huggingface-tgi` | `planned` | Huggingface Tgi (self-hosted / unmanaged) |
| AI / ML | `kserve` | `planned` | Kserve (self-hosted / unmanaged) |
| AI / ML | `kuberay` | `planned` | Kuberay (self-hosted / unmanaged) |
| AI / ML | `mlflow` | `planned` | Mlflow (self-hosted / unmanaged) |
| AI / ML | `nvidia-nim` | `planned` | Nvidia Nim (self-hosted / unmanaged) |
| AI / ML | `ollama` | `planned` | Ollama (self-hosted / unmanaged) |
| AI / ML | `speech-to-text` | `planned` | Speech-to-Text |
| AI / ML | `tensorrt-llm` | `planned` | Tensorrt Llm (self-hosted / unmanaged) |
| AI / ML | `text-to-speech` | `planned` | Text-to-Speech |
| AI / ML | `vertex-ai` | `planned` | Vertex AI dataset / endpoint / featurestore / vector index / tensorboard |
| AI / ML | `vertex-ai-workbench` | `planned` | Vertex AI Workbench (Jupyter) |
| AI / ML | `vision-ai` | `planned` | Cloud Vision API |
| AI / ML | `vllm` | `planned` | Vllm (self-hosted / unmanaged) |
| Identity | `group` | `planned` | Cloud Identity Group |
| Identity | `iam` | `planned` | Project IAM |
| Identity | `identity-aware-proxy` | `planned` | Identity Aware Proxy |
| Identity | `identity-platform` | `planned` | Identity Platform |
| Identity | `service-account` | `planned` | Service account |
| Identity | `service-accounts` | `planned` | Service accounts |
| Identity | `service-directory` | `planned` | Service Directory |
| Identity | `workload-identity` | `planned` | Workload Identity |
| Security | `certificate-manager` | `planned` | Certificate Manager (+ optional global IP) |
| Security | `cloud-armor` | `planned` | Cloud Armor |
| Security | `cloud-kms` | `planned` | Cloud KMS |
| Security | `kms` | `planned` | KMS |
| Security | `org-policy` | `planned` | Org policy |
| Security | `private-ca` | `planned` | Private Ca |
| Security | `secret-manager` | `planned` | Secret Manager |
| Security | `vault` | `planned` | Vault IAM helpers |
| Messaging | `pubsub` | `planned` | Pub/Sub |
| Messaging | `pubsub-lite` | `planned` | Pubsub Lite |
| Serverless | `cloud-function` | `planned` | Cloud Function (Gen 1) |
| Serverless | `cloud-function-gen2` | `planned` | Cloud Function (Gen 2) |
| Serverless | `cloud-functions-gen2` | `planned` | Cloud Functions Gen2 |
| Serverless | `cloud-scheduler` | `planned` | Cloud Scheduler |
| Serverless | `cloud-workflows` | `planned` | Cloud Workflows |
| Containers | `artifact-registry` | `planned` | Artifact Registry |
| Containers | `cloud-run` | `planned` | Cloud Run (Gen 2) |
| Containers | `cloud-run-job` | `planned` | Cloud Run Job |
| Edge | `cloud-cdn` | `planned` | Cloud Cdn |
| Edge | `media-cdn` | `planned` | Media Cdn |
| Analytics | `bigquery` | `planned` | BigQuery (+ BQML / vector search via SQL) |
| Analytics | `bigquery-data-transfer` | `planned` | Bigquery Data Transfer |
| Analytics | `composer` | `planned` | Composer |
| Analytics | `data-fusion` | `planned` | Data Fusion |
| Analytics | `dataflow` | `planned` | Dataflow |
| Analytics | `dataproc` | `planned` | Dataproc |
| Analytics | `dataproc-metastore` | `planned` | Dataproc Metastore |
| Analytics | `looker` | `planned` | Looker |
| CI / CD | `cloud-build` | `planned` | Cloud Build |
| CI / CD | `cloud-deploy` | `planned` | Cloud Deploy |
| Observability | `alert-policy` | `planned` | Alert policy |
| Observability | `cloud-logging` | `planned` | Cloud Logging |
| Observability | `cloud-monitoring` | `planned` | Cloud Monitoring |
| Observability | `cloud-trace` | `planned` | Cloud Trace |
| Observability | `log-export` | `planned` | Log sink / export |
| Observability | `logging` | `planned` | Cloud Logging sink |
| Observability | `monitoring` | `planned` | Monitoring |
| Observability | `monitoring-alert-policy` | `planned` | Monitoring alert policy (log-based) |
| Other | `access-context-manager` | `planned` | Access Context Manager |
| Other | `apigee` | `planned` | Apigee |
| Other | `app-engine` | `planned` | App Engine |
| Other | `bentoml` | `planned` | Bentoml (self-hosted / unmanaged) |
| Other | `beyondcorp` | `planned` | Beyondcorp |
| Other | `binary-authorization` | `planned` | Binary Authorization |
| Other | `chroma` | `planned` | Chroma (self-hosted / unmanaged) |
| Other | `cloud-asset` | `planned` | Cloud Asset |
| Other | `cloud-datastore` | `planned` | Datastore |
| Other | `cloud-ids` | `planned` | Cloud Ids |
| Other | `cloud-router` | `planned` | Cloud Router |
| Other | `cloud-tasks` | `planned` | Cloud Tasks |
| Other | `dataform` | `planned` | Dataform |
| Other | `datastream` | `planned` | Datastream |
| Other | `deepspeed` | `planned` | Deepspeed (self-hosted / unmanaged) |
| Other | `error-reporting` | `planned` | Error Reporting |
| Other | `eventarc` | `planned` | Eventarc |
| Other | `firebase` | `planned` | Firebase |
| Other | `healthcare-api` | `planned` | Healthcare Api |
| Other | `lb-http` | `planned` | HTTP(S) LB |
| Other | `life-sciences` | `planned` | Life Sciences |
| Other | `mig` | `planned` | Mig |
| Other | `milvus` | `planned` | Milvus (self-hosted / unmanaged) |
| Other | `nvidia-gpu-operator` | `planned` | Nvidia Gpu Operator (self-hosted / unmanaged) |
| Other | `open-webui` | `planned` | Open Webui (self-hosted / unmanaged) |
| Other | `pgvector` | `planned` | Pgvector (self-hosted / unmanaged) |
| Other | `private-service-connect` | `planned` | Private Service Connect |
| Other | `qdrant` | `planned` | Qdrant (self-hosted / unmanaged) |
| Other | `ray-cluster` | `planned` | Ray Cluster (self-hosted / unmanaged) |
| Other | `resource-manager-folders` | `planned` | Resource Manager folders |
| Other | `sglang` | `planned` | Sglang (self-hosted / unmanaged) |
| Other | `source-repositories` | `planned` | Source Repositories |
| Other | `tpu` | `planned` | Tpu |
| Other | `translation` | `planned` | Cloud Translation |
| Other | `triton-inference-server` | `planned` | Triton Inference Server (self-hosted / unmanaged) |
| Other | `video-ai` | `planned` | Video Intelligence API |
| Other | `weaviate` | `planned` | Weaviate (self-hosted / unmanaged) |
| Other | `workstations` | `planned` | Workstations |

## Related

- [Unit JSON](../Concepts/Unit_JSON.md)
- [Install overview](../Install/Overview.md)

