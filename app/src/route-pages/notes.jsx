import React from 'react';
import Page from '../page.jsx';
import content from '../content/notes.html?raw';
import pageStyles from '../styles/notes.css?raw';
import pageTranslations from '../data/translations/notes.json';

export default function RoutePage() {
  return <Page page="notes" content={content} pageStyles={pageStyles} pageTranslations={pageTranslations} />;
}
