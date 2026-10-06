import React from 'react';
import Page from '../page.jsx';
import courses from '../data/courses.json';
import translations from '../data/translations/courses.json';
import { courseIntroduction, courseSummary, escapeHtml } from '../course-content.js';
import styles from '../styles/courses.css?raw';
import term1Styles from '../styles/term1.css?raw';
import term2Styles from '../styles/term2.css?raw';
import term3Styles from '../styles/term3.css?raw';
import fiveStyles from '../styles/casa0005.css?raw';

const sections = import.meta.glob('../content/courses/*.html', {query:'?raw', import:'default', eager:true});
export default function CoursePage({ code }) {
  const c = courses[code];
  const section = name => sections[`../content/courses/${code}-${name}.html`]?.trim() || '';
  const current = section('current');
  const reference = section('reference');
  const content = `<main class="uniform-course-page ">
    <header class="uniform-course-hero"><a href="/${c.term}">← 返回學期總覽</a>
    <p class="uniform-course-code">${code.toUpperCase()} · 2026/27</p><h1>${escapeHtml(c.title)}</h1>${courseIntroduction(c)}</header>
    <nav class="uniform-course-nav" aria-label="章節導覽"><a href="#basic-information">基本資訊</a><a href="#current-materials">本屆教材與課程內容</a><a href="#official-information">官方課程資訊</a><a href="#reference-materials">歷屆教材與學習參考</a></nav>
    <section id="basic-information"><h2>基本資訊</h2>${courseSummary(c)}</section>
    <section id="current-materials"><h2>本屆教材與課程內容</h2>${current || `<div class="course-empty"><p>${code === 'casa0010' ? '本屆研究 brief 與里程碑日期尚未取得或確認。' : '本屆教材尚未取得或確認'}</p></div>`}</section>
    <section id="official-information"><h2>官方課程資訊</h2><div class="course-existing-content">${section('official')}</div></section>
    <details id="reference-materials" class="uniform-course-reference"><summary>歷屆教材與學習參考</summary><div class="course-existing-content">${reference || '<p>尚無已確認的歷屆教材。</p>'}</div></details>
    </main>`;
  const sharedStyles = term1Styles + term2Styles + term3Styles + fiveStyles;
  return <Page key={code} page={code} content={content} pageStyles={sharedStyles + styles} pageTranslations={translations} />;
}
