// Stages the static web assets into dist/ for the Tauri desktop build.
//
// Why this exists: Tauri refuses a distDir that contains a `src-tauri`,
// `node_modules` or `target` folder. The repo root holds index.html (GitHub
// Pages serves it from there), so the root cannot be the distDir. This script
// is wired to `tauri.conf.json > build > beforeBuildCommand`, which Tauri runs
// BEFORE it validates distDir -- so it works for local builds and CI alike.
//
// Run manually with:  node scripts/stage-web-assets.js
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

// Keep this list in sync with the files the app actually loads.
const files = ['index.html', 'sw.js', 'manifest.json', 'galaxy.jpg'];

fs.mkdirSync(dist, { recursive: true });

for (const file of files) {
  const from = path.join(root, file);
  if (!fs.existsSync(from)) {
    console.error('stage-web-assets: missing ' + file);
    process.exit(1);
  }
  fs.copyFileSync(from, path.join(dist, file));
  console.log('staged ' + file + ' -> dist/' + file);
}
