import React from 'react';
import Page from '../page.jsx';
import content from '../content/index.html?raw';
import pageStyles from '../styles/index.css?raw';
import pageTranslations from '../data/translations/index.json';

export default function RoutePage() {
  return <Page page="index" content={content} pageStyles={pageStyles} pageTranslations={pageTranslations} />;
}
