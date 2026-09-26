import React from 'react';
import Page from '../page.jsx';
import content from '../content/term1.html?raw';
import pageStyles from '../styles/term1.css?raw';
import pageTranslations from '../data/translations/term1.json';

export default function RoutePage() {
  return <Page page="term1" content={content} pageStyles={pageStyles} pageTranslations={pageTranslations} />;
}
