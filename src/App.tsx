import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Oracle as Home } from './pages/Home';
import OrgComparison from './pages/OrgComparison';
import { ErrorBoundary } from './components/ErrorBoundary';

const Advertise = lazy(() => import('./pages/Advertise'));

function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/org-comparison" element={<OrgComparison />} />
            <Route path="/advertise" element={<Suspense><Advertise /></Suspense>} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
      <Analytics />
    </>
  );
}

export default App;
