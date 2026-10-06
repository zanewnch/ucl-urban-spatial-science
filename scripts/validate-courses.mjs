import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseDocument } from 'htmlparser2';
import { findAll } from 'domutils';

const read = file => readFileSync(`app/src/${file}`, 'utf8');
const courses = JSON.parse(read('data/courses.json'));
const aliases = JSON.parse(read('data/course-aliases.json'));
const pages = JSON.parse(read('data/pages.json'));
const normalize = text => text.replace(/\s+/g, ' ').trim();
const translations = new Set(Object.keys(JSON.parse(read('data/translations/courses.json'))).map(normalize));
const expected = ['casa0001','casa0005','casa0007','casa0013','casa0002','casa0011','casa0025','casa0034','casa0006','casa0008','casa0023','casa0028','casa0029','casa0033','casa0010'];
assert.deepEqual(Object.keys(courses).sort(), expected.sort());
const idsByCourse = {};
const walk = nodes => nodes.flatMap(node => [node, ...walk(node.children || [])]);
for (const c of Object.values(courses)) {
  assert.equal(c.code, Object.keys(courses).find(key => courses[key] === c));
  assert(c.title && c.source && c.assessment && c.tools && c.status);
  assert(pages[c.code]);
  const content = ['current','official','reference'].map(section => read(`content/courses/${c.code}-${section}.html`)).join('\n');
  const nodes = walk(parseDocument(content).children);
  const ids = nodes.filter(n => n.attribs?.id).map(n => n.attribs.id);
  assert.equal(new Set(ids).size, ids.length, `${c.code}: duplicate IDs`);
  idsByCourse[c.code] = new Set(ids);
  for (const n of nodes) {
    if (n.type === 'text' && /[\u3400-\u9fff]/.test(n.data)) assert(translations.has(normalize(n.data)), `Missing translation: ${n.data}`);
    if (n.name === 'a' && n.attribs.href?.startsWith('#')) assert(ids.includes(n.attribs.href.slice(1)), `${c.code}: broken anchor ${n.attribs.href}`);
    if (n.name === 'a') assert(!/sesskey|X-Amz-|logout|user\/profile/.test(n.attribs.href), 'Account-specific source URL');
  }
  if (!['casa0005','casa0007'].includes(c.code)) assert.equal(read(`content/courses/${c.code}-current.html`).trim(), '');
}
for (const [from,to] of Object.entries(aliases)) {
  const [code,hash] = to.slice(1).split('#');
  assert(courses[code], `Unknown alias ${from}`);
  if (hash) assert(idsByCourse[code].has(hash), `Missing alias destination: ${from} -> ${to}`);
}
for (const term of ['term1','term2','term3']) {
  const termNodes = walk(parseDocument(read(`content/${term}.html`)).children);
  for (const n of termNodes) {
    if (n.type === 'text' && /[\u3400-\u9fff]/.test(n.data)) assert(translations.has(normalize(n.data)), `Missing overview translation: ${n.data}`);
  }
  const nodes = termNodes.filter(n => n.name === 'course-card');
  assert.equal(nodes.length, term === 'term1' ? 4 : term === 'term2' ? 10 : 1);
  for (const n of nodes) assert.equal(courses[n.attribs.code].term, term);
}
const overviewCards = findAll(n => n.name === 'course-card', parseDocument(read('content/index.html')).children);
assert.equal(overviewCards.length, 8);
for (const card of overviewCards) assert(courses[card.attribs.code].selected);
const qmCurrent = read('content/courses/casa0007-current.html');
assert(qmCurrent.includes('2022/23') && qmCurrent.includes('2026/09/18'));
assert(qmCurrent.includes('EDA1_lecture.html') && qmCurrent.includes('EDA1_practical.html') && qmCurrent.includes('EDA1_practical.ipynb'));
assert(!qmCurrent.includes('huanfachen.github.io'));
assert(read('content/courses/casa0007-reference.html').includes('2025/26'));
console.log(`Courses: ${expected.length} permanent pages, 15 uniform cards, ${Object.keys(aliases).length} legacy aliases, translations and cohort boundaries passed.`);
