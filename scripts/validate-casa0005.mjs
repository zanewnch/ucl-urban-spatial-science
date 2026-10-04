import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseDocument } from 'htmlparser2';
import { findAll, textContent } from 'domutils';

const content = readFileSync('app/src/content/casa0005.html', 'utf8');
const document = parseDocument(content);
const nodes = findAll(node => node.type === 'tag', document.children);
const ids = nodes.filter(node => node.attribs.id).map(node => node.attribs.id);
assert.equal(new Set(ids).size, ids.length, 'Duplicate guide IDs');
assert.equal(nodes.filter(node => node.name === 'article' && node.attribs.class === 'guide-week').length, 10);
for (let week = 1; week <= 10; week++) {
  const node = nodes.find(item => item.attribs.id === `casa0005-week-${week}`);
  assert(node, `Missing Week ${week}`);
  assert.equal(findAll(item => item.type === 'tag' && item.name === 'ol', node.children).length, 1, `Missing workflow for Week ${week}`);
}
const term1 = parseDocument(readFileSync('app/src/content/term1.html', 'utf8'));
const oldIds = findAll(node => node.type === 'tag' && node.attribs.id?.startsWith('casa0005'), term1.children).map(node => node.attribs.id);
for (const id of oldIds) assert(id === 'casa0005' || ids.includes(id), `Missing legacy anchor ${id}`);
for (const node of nodes.filter(item => item.name === 'a')) {
  const href = node.attribs.href;
  if (href.startsWith('#')) assert(ids.includes(href.slice(1)), `Broken anchor ${href}`);
  assert(!/sesskey|X-Amz-|logout|user\/profile/.test(href), 'Account-specific URL in guide');
}
const translations = JSON.parse(readFileSync('app/src/data/translations/casa0005.json', 'utf8'));
function allNodes(nodes) { return nodes.flatMap(node => [node, ...allNodes(node.children ?? [])]); }
const textNodes = allNodes(document.children).filter(node => node.type === 'text');
for (const node of textNodes) {
  if (/[\u3400-\u9fff]/.test(node.data)) assert(translations[node.data], `Missing translation: ${node.data}`);
}
for (const node of nodes) {
  for (const key of ['aria-label', 'title']) {
    const value = node.attribs[key];
    if (value && /[\u3400-\u9fff]/.test(value)) assert(translations[value], `Missing attribute translation: ${value}`);
  }
}
const text = textContent(document);
for (const expected of ['2026-10-08', '2026-12-17', '2026/12/18', '2026/11/25', 'GIS-MarkScheme-2025.pdf', '9–11pm']) assert(text.includes(expected));
const pages = JSON.parse(readFileSync('app/src/data/pages.json', 'utf8'));
assert.equal(pages.casa0005.file, 'casa0005.html');
assert(readFileSync('app/src/main.jsx', 'utf8').includes('path="/casa0005"'));
console.log(`CASA0005: 10 weekly workflows, ${ids.length} unique IDs, ${oldIds.length} compatible anchors, ${Object.keys(translations).length} translations; all checks passed.`);
