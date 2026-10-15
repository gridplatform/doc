#!/usr/bin/env node
/**
 * Rename docs/ to Deep-Dive style:
 *   Folders: Pascal-Case-With-Hyphens
 *   Files:   Title_With_Underscores.md  (no numbers)
 *
 * Uses a staging dir so case-only renames work on case-insensitive volumes.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docs = path.join(root, 'docs');
const staging = path.join(root, '_docs_rename_staging');

/** old relative path (from docs/) → new relative path */
const map = {
  'intro.md': null, // drop kebab duplicate; keep Home.md
  'what-is-grid.md': null, // drop kebab duplicate; keep What_Is_Grid.md
  'Home.md': 'Home.md',
  'What_Is_Grid.md': 'What_Is_Grid.md',
  'Roadmap.md': 'Roadmap.md',
  'README.md': 'README.md',

  'architecture/control-plane.md': 'Architecture/Control_Plane.md',

  'getting-started/quick-start.md': 'Getting-Started/Quick_Start.md',
  'getting-started/your-desired-state-repo.md':
    'Getting-Started/Your_Desired_State_Repo.md',

  'concepts/overview.md': 'Concepts/Overview.md',
  'concepts/desired-state.md': 'Concepts/Desired_State.md',
  'concepts/unit-json.md': 'Concepts/Unit_JSON.md',
  'concepts/gitops-sync.md': 'Concepts/GitOps_Sync.md',
  'concepts/releases-lifecycle.md': 'Concepts/Release_Lifecycle.md',
  'concepts/module-bank.md': 'Concepts/Module_Bank.md',
  'concepts/archive-and-state.md': 'Concepts/Archive_And_Remote_State.md',

  'clouds/support-matrix.md': 'Clouds/Support_Matrix.md',
  'clouds/aws.md': 'Clouds/AWS.md',
  'clouds/gcp.md': 'Clouds/GCP.md',
  'clouds/azure-and-others.md': 'Clouds/Azure_And_Others.md',

  'console/overview.md': 'Console/Overview.md',
  'console/infrastructure.md': 'Console/Infrastructure.md',
  'console/deployments-and-releases.md': 'Console/Deployments_And_Releases.md',
  'console/monitoring-and-alerts.md': 'Console/Monitoring_And_Alerts.md',
  'console/admin-and-sources.md': 'Console/Admin_And_Sources.md',
  'console/feature-flags.md': 'Console/Feature_Flags.md',

  'admin/rbac.md': 'Admin/Auth_RBAC_And_Approvals.md',

  'cli/overview.md': 'CLI/Overview.md',
  'cli/commands.md': 'CLI/Commands.md',

  'install/README.md': 'Install/README.md',
  'install/overview.md': 'Install/Overview.md',
  'install/remote-state.md': 'Install/Remote_State.md',
  'install/vm.md': 'Install/VM.md',
  'install/docker-compose.md': 'Install/Docker_Compose.md',
  'install/dev-vs-prod.md': 'Install/Dev_Vs_Prod.md',
  'install/releases.md': 'Install/Releases.md',
  'install/configuration.md': 'Install/Configuration.md',
  'install/monitoring.md': 'Install/Monitoring.md',
};

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function walkFiles(dir, base = dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walkFiles(abs, base));
    else out.push(path.relative(base, abs).split(path.sep).join('/'));
  }
  return out;
}

if (fs.existsSync(staging)) fs.rmSync(staging, { recursive: true, force: true });
ensureDir(staging);

const existing = walkFiles(docs);
const unseen = new Set(existing);

for (const [from, to] of Object.entries(map)) {
  const src = path.join(docs, from);
  if (!fs.existsSync(src)) {
    if (to !== null) console.warn(`missing source: ${from}`);
    continue;
  }
  unseen.delete(from);
  if (to === null) {
    console.log(`drop ${from}`);
    continue;
  }
  const dest = path.join(staging, to);
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
  console.log(`${from} → ${to}`);
}

for (const leftover of unseen) {
  console.warn(`UNMAPPED (not copied): ${leftover}`);
}

// Swap: remove docs, move staging → docs (avoids case collision)
fs.rmSync(docs, { recursive: true, force: true });
fs.renameSync(staging, docs);

console.log('\nDone. New tree:');
for (const f of walkFiles(docs).sort()) console.log(`  ${f}`);
