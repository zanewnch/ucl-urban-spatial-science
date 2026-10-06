import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import courses from './data/courses.json';

const IndexPage = lazy(() => import('./route-pages/index.jsx'));
const Term1Page = lazy(() => import('./route-pages/term1.jsx'));
const CoursePage = lazy(() => import('./route-pages/course.jsx'));
const Term2Page = lazy(() => import('./route-pages/term2.jsx'));
const Term3Page = lazy(() => import('./route-pages/term3.jsx'));
const NotesPage = lazy(() => import('./route-pages/notes.jsx'));
const Casa0005NotePage = lazy(() => import('./route-pages/note-casa0005.jsx'));
const ChangeLogPage = lazy(() => import('./route-pages/change-log.jsx'));

const legacyPages = { index: '/', term1: '/term1', term2: '/term2', term3: '/term3', notes: '/notes', 'change-log': '/change-log' };
function LegacyPageRedirect({ to }) {
  const { hash, search } = useLocation();
  return <Navigate to={{ pathname: to, hash, search }} replace />;
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<div aria-hidden="true" />}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/term1" element={<Term1Page />} />
          {Object.keys(courses).map(code => <Route key={code} path={`/${code}`} element={<CoursePage code={code} />} />)}
          <Route path="/term2" element={<Term2Page />} />
          <Route path="/term3" element={<Term3Page />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/notes/casa0005" element={<Casa0005NotePage />} />
          <Route path="/change-log" element={<ChangeLogPage />} />
          {Object.entries(legacyPages).map(([name, to]) => <Route key={name} path={`/${name}.html`} element={<LegacyPageRedirect to={to} />} />)}
          {Object.keys(courses).map(code => <Route key={`${code}-html`} path={`/${code}.html`} element={<LegacyPageRedirect to={`/${code}`} />} />)}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
