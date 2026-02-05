import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Oracle as Home } from './pages/Home';
import OrgComparison from './pages/OrgComparison';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/org-comparison" element={<OrgComparison />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
      <Analytics />
    </>
  );
}

export default App;
