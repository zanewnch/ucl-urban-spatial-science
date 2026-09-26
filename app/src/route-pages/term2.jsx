import React from 'react';
import Page from '../page.jsx';
import content from '../content/term2.html?raw';
import pageStyles from '../styles/term2.css?raw';
import pageTranslations from '../data/translations/term2.json';

export default function RoutePage() {
  return <Page page="term2" content={content} pageStyles={pageStyles} pageTranslations={pageTranslations} />;
}
