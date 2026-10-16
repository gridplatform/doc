import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'Home',
    {
      type: 'category',
      label: 'Architecture',
      items: ['Architecture/Control_Plane'],
    },
    {
      type: 'category',
      label: 'Getting-Started',
      collapsed: false,
      items: [
        'Getting-Started/Quick_Start',
        'Getting-Started/Your_Intent_Repository',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        'Concepts/Overview',
        'Concepts/Desired_State',
        'Concepts/Unit_JSON',
        'Concepts/GitOps_Sync',
        'Concepts/Release_Lifecycle',
        'Concepts/Module_Bank',
        'Concepts/Archive_And_Remote_State',
        'Concepts/Kubernetes_Workloads',
        'Concepts/Exit_Ramp',
      ],
    },
    {
      type: 'category',
      label: 'Clouds',
      items: [
        'Clouds/AWS',
        'Clouds/GCP',
        'Clouds/Azure',
        'Clouds/Oracle',
        'Clouds/IBM',
        'Clouds/Alibaba',
        'Clouds/Tencent',
        'Clouds/Huawei',
        'Clouds/OVH',
        'Clouds/Deutsche_Telekom',
        'Clouds/CtrlS',
        'Clouds/Yotta',
        'Clouds/Rancher',
        'Clouds/OpenShift',
        'Clouds/Redis_Enterprise',
        'Clouds/Confluent_Cloud',
      ],
    },
    {
      type: 'category',
      label: 'Console',
      items: [
        'Console/Overview',
        'Console/Infrastructure',
        'Console/Deployments_And_Releases',
        'Console/Monitoring_And_Alerts',
        'Console/Admin_And_Sources',
        'Console/Feature_Flags',
      ],
    },
    {
      type: 'category',
      label: 'Admin',
      items: ['Admin/Auth_RBAC_And_Approvals'],
    },
    {
      type: 'category',
      label: 'CLI',
      items: ['CLI/Overview', 'CLI/Commands'],
    },
    {
      type: 'category',
      label: 'Install',
      items: [
        'Install/Overview',
        'Install/Remote_State',
        'Install/Cloud_Accounts',
        'Install/VM',
        'Install/Docker_Compose',
        'Install/Dev_Vs_Prod',
        'Install/Releases',
        'Install/Downloads',
        'Install/Configuration',
        'Install/Monitoring',
      ],
    },
    'Roadmap',
  ],
};

export default sidebars;
