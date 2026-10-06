import React from 'react';
import Page from '../page.jsx';
import courses from '../data/courses.json';
import translations from '../data/translations/courses.json';
import { courseIntroduction, courseSummary, escapeHtml } from '../course-content.js';
import styles from '../styles/course-detail.css?raw';

const sections = import.meta.glob('../content/courses/*.html', { query: '?raw', import: 'default', eager: true });

export default function CoursePage({ code }) {
  const course = courses[code];
  const section = name => sections[`../content/courses/${code}-${name}.html`]?.trim() || '';
  const current = section('current');
  const reference = section('reference');
  const content = `<main class="uniform-course-page course-detail">
    <a class="course-breadcrumb" href="/${course.term}">← 返回學期總覽</a>
    <header class="uniform-course-hero">
      <p class="uniform-course-code"><span>${code.toUpperCase()}</span><span>2026/27</span></p>
      <h1>${escapeHtml(course.title)}</h1>${courseIntroduction(course)}
    </header>
    <course-materials>
      <section id="current-materials" class="course-section"><h2>本屆教材</h2><div class="course-existing-content">${current || `<div class="course-empty"><p>${code === 'casa0010' ? '本屆研究 brief 與里程碑日期尚未取得或確認。' : '本屆教材尚未取得或確認'}</p><button type="button" class="ui-button" data-show-history>查看歷屆教材與學習參考 →</button></div>`}</div></section>
      <section id="reference-materials" class="course-section"><h2>歷屆教材與學習參考</h2><div class="course-existing-content">${reference || '<div class="course-empty"><p>尚無已確認的歷屆教材。</p></div>'}</div></section>
    </course-materials>
    <details id="course-information" class="course-information"><summary>課程資訊</summary><div class="course-information-body">
      <section id="basic-information" class="course-section"><h2>基本資訊</h2>${courseSummary(course)}</section>
      <section id="official-information" class="course-section"><h2>官方課程資訊</h2><div class="course-existing-content">${section('official')}</div></section>
    </div></details>
  </main>`;
  return <Page key={code} page={code} content={content} pageStyles={styles} pageTranslations={translations} />;
}
