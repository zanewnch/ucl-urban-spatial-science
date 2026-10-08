import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'vendor', 'CASA0005repo', 'docs');
const siteRoot = path.join(root, 'site');
const destination = path.join(siteRoot, 'casa0005-handbook');

const resolvedSite = path.resolve(siteRoot);
const resolvedDestination = path.resolve(destination);
if (!resolvedDestination.startsWith(`${resolvedSite}${path.sep}`)) {
  throw new Error(`Refusing to copy handbook outside site output: ${resolvedDestination}`);
}

try {
  const index = await stat(path.join(source, 'index.html'));
  if (!index.isFile()) throw new Error('docs/index.html is not a file');
} catch {
  throw new Error('CASA0005 handbook docs/index.html is missing. Restore the vendored files under vendor/CASA0005repo.');
}

const entries = await readdir(source);
await mkdir(siteRoot, { recursive: true });
await rm(destination, { recursive: true, force: true });
await cp(source, destination, { recursive: true });
console.log(`Copied ${entries.length} top-level handbook entries to ${path.relative(root, destination)}.`);
