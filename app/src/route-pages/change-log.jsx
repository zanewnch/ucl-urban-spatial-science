import React from 'react';
import Page from '../page.jsx';
import content from '../content/change-log.html?raw';
import pageStyles from '../styles/change-log.css?raw';
import pageTranslations from '../data/translations/change-log.json';

export default function RoutePage() {
  return <Page page="change-log" content={content} pageStyles={pageStyles} pageTranslations={pageTranslations} />;
}
