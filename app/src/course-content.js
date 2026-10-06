import courses from './data/courses.json';

export const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
export function courseIntroduction(c) {
  return `<p class="course-description">${escapeHtml(c.description || '課程簡介尚未確認')} <a class="course-introduction-source" href="${escapeHtml(c.source)}" target="_blank" rel="noopener">來源 ↗</a></p>`;
}
export function courseSummary(course) {
  const c = course;
  const source = (label, url = c.source) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${label}</a>`;
  const toolsSource = c.code === 'casa0007'
    ? 'https://bea-taylor.com/Quant_Methods/sessions/week_EDA1/EDA1_practical.html' : c.source;
  const term = c.term === 'term3' ? 'Terms 2–3' : c.term === 'term1' ? 'Term 1' : 'Term 2';
  return `<dl class="course-summary-fields">
    <div><dt>學期</dt><dd>${source(term)}</dd></div>
    <div><dt>學分</dt><dd>${source(`${c.credits} credits`)}</dd></div>
    <div><dt>評量</dt><dd>${source(escapeHtml(c.assessment))}</dd></div>
    <div><dt>工具</dt><dd>${source(escapeHtml(c.tools), toolsSource)}</dd></div>
    <div class="course-material-status"><dt>教材狀態</dt><dd>${escapeHtml(c.status)}</dd></div>
  </dl>`;
}
export function courseCardHtml(code, attributes = {}) {
  const c = courses[code];
  if (!c) return '';
  const attrs = ['data-source', 'data-pathways', 'data-module'].map(key => `${key}="${escapeHtml(attributes[key] || (key === 'data-module' ? `${code} ${c.title}` : key === 'data-source' ? 'casa' : ''))}"`).join(' ');
  return `<article class="uniform-course-card module-card" ${attrs}>
    <span class="uniform-course-code">${code.toUpperCase()}</span><h3>${escapeHtml(c.title)}</h3>
    ${courseIntroduction(c)}<div class="uniform-course-actions"><a href="/${code}">查看完整課程 →</a></div></article>`;
}
