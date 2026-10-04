import React from 'react';
import Page from '../page.jsx';
import content from '../content/casa0005.html?raw';
import pageStyles from '../styles/casa0005.css?raw';
import pageTranslations from '../data/translations/casa0005.json';

export default function Casa0005Page() {
  return <Page page="casa0005" content={content} pageStyles={pageStyles} pageTranslations={pageTranslations} />;
}
