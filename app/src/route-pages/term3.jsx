import React from 'react';
import Page from '../page.jsx';
import content from '../content/term3.html?raw';
import pageStyles from '../styles/term3.css?raw';
import pageTranslations from '../data/translations/term3.json';

export default function RoutePage() {
  return <Page page="term3" content={content} pageStyles={pageStyles} pageTranslations={pageTranslations} />;
}
