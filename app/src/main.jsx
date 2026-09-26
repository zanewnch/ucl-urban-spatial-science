import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const IndexPage = lazy(() => import('./route-pages/index.jsx'));
const Term1Page = lazy(() => import('./route-pages/term1.jsx'));
const Term2Page = lazy(() => import('./route-pages/term2.jsx'));
const Term3Page = lazy(() => import('./route-pages/term3.jsx'));
const NotesPage = lazy(() => import('./route-pages/notes.jsx'));
const ChangeLogPage = lazy(() => import('./route-pages/change-log.jsx'));

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<div aria-hidden="true" />}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/term1" element={<Term1Page />} />
          <Route path="/term2" element={<Term2Page />} />
          <Route path="/term3" element={<Term3Page />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/change-log" element={<ChangeLogPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
