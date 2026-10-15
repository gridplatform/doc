#!/usr/bin/env node
/** Rewrite markdown links after Pascal-Case rename. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docs = path.join(root, 'docs');

/** Old path fragment → new path fragment (as used in markdown links) */
const replacements = [
  // longest first
  ['getting-started/your-desired-state-repo.md', 'Getting-Started/Your_Desired_State_Repo.md'],
  ['getting-started/quick-start.md', 'Getting-Started/Quick_Start.md'],
  ['architecture/control-plane.md', 'Architecture/Control_Plane.md'],
  ['concepts/archive-and-state.md', 'Concepts/Archive_And_Remote_State.md'],
  ['concepts/releases-lifecycle.md', 'Concepts/Release_Lifecycle.md'],
  ['concepts/desired-state.md', 'Concepts/Desired_State.md'],
  ['concepts/gitops-sync.md', 'Concepts/GitOps_Sync.md'],
  ['concepts/module-bank.md', 'Concepts/Module_Bank.md'],
  ['concepts/unit-json.md', 'Concepts/Unit_JSON.md'],
  ['concepts/overview.md', 'Concepts/Overview.md'],
  ['clouds/support-matrix.md', 'Clouds/Support_Matrix.md'],
  ['clouds/azure-and-others.md', 'Clouds/Azure_And_Others.md'],
  ['clouds/aws.md', 'Clouds/AWS.md'],
  ['clouds/gcp.md', 'Clouds/GCP.md'],
  ['console/deployments-and-releases.md', 'Console/Deployments_And_Releases.md'],
  ['console/monitoring-and-alerts.md', 'Console/Monitoring_And_Alerts.md'],
  ['console/admin-and-sources.md', 'Console/Admin_And_Sources.md'],
  ['console/feature-flags.md', 'Console/Feature_Flags.md'],
  ['console/infrastructure.md', 'Console/Infrastructure.md'],
  ['console/overview.md', 'Console/Overview.md'],
  ['admin/rbac.md', 'Admin/Auth_RBAC_And_Approvals.md'],
  ['cli/overview.md', 'CLI/Overview.md'],
  ['cli/commands.md', 'CLI/Commands.md'],
  ['install/configuration.md', 'Install/Configuration.md'],
  ['install/remote-state.md', 'Install/Remote_State.md'],
  ['install/docker-compose.md', 'Install/Docker_Compose.md'],
  ['install/dev-vs-prod.md', 'Install/Dev_Vs_Prod.md'],
  ['install/monitoring.md', 'Install/Monitoring.md'],
  ['install/overview.md', 'Install/Overview.md'],
  ['install/releases.md', 'Install/Releases.md'],
  ['install/vm.md', 'Install/VM.md'],
  ['what-is-grid.md', 'What_Is_Grid.md'],
  ['roadmap.md', 'Roadmap.md'],
  // same-folder relative forms
  ['./feature-flags.md', './Feature_Flags.md'],
  ['./infrastructure.md', './Infrastructure.md'],
  ['./deployments-and-releases.md', './Deployments_And_Releases.md'],
  ['./monitoring-and-alerts.md', './Monitoring_And_Alerts.md'],
  ['./admin-and-sources.md', './Admin_And_Sources.md'],
  ['./overview.md', './Overview.md'],
  ['./commands.md', './Commands.md'],
  ['./configuration.md', './Configuration.md'],
  ['./remote-state.md', './Remote_State.md'],
  ['./docker-compose.md', './Docker_Compose.md'],
  ['./dev-vs-prod.md', './Dev_Vs_Prod.md'],
  ['./monitoring.md', './Monitoring.md'],
  ['./releases.md', './Releases.md'],
  ['./vm.md', './VM.md'],
  ['./desired-state.md', './Desired_State.md'],
  ['./unit-json.md', './Unit_JSON.md'],
  ['./gitops-sync.md', './GitOps_Sync.md'],
  ['./releases-lifecycle.md', './Release_Lifecycle.md'],
  ['./module-bank.md', './Module_Bank.md'],
  ['./archive-and-state.md', './Archive_And_Remote_State.md'],
  ['./support-matrix.md', './Support_Matrix.md'],
  ['./aws.md', './AWS.md'],
  ['./gcp.md', './GCP.md'],
  ['./azure-and-others.md', './Azure_And_Others.md'],
];

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(abs));
    else if (ent.name.endsWith('.md')) out.push(abs);
  }
  return out;
}

let files = 0;
for (const file of [...walk(docs), path.join(root, 'README.md'), path.join(root, 'CONTRIBUTING.md')]) {
  if (!fs.existsSync(file)) continue;
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [from, to] of replacements) {
    text = text.split(from).join(to);
  }
  // repo README paths used docs/kebab…
  text = text.split('docs/what-is-grid.md').join('docs/What_Is_Grid.md');
  text = text.split('docs/architecture/control-plane.md').join('docs/Architecture/Control_Plane.md');
  text = text.split('docs/getting-started/').join('docs/Getting-Started/');
  text = text.split('docs/concepts/').join('docs/Concepts/');
  text = text.split('docs/clouds/').join('docs/Clouds/');
  text = text.split('docs/console/').join('docs/Console/');
  text = text.split('docs/admin/').join('docs/Admin/');
  text = text.split('docs/cli/').join('docs/CLI/');
  text = text.split('docs/install/').join('docs/Install/');
  text = text.split('docs/roadmap.md').join('docs/Roadmap.md');
  if (text !== before) {
    fs.writeFileSync(file, text);
    files += 1;
    console.log('updated', path.relative(root, file));
  }
}
console.log(`rewrote ${files} files`);
