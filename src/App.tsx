import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Oracle as Home } from './pages/Home';
import { PlasmicHost } from './pages/PlasmicHost';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plasmic-host" element={<PlasmicHost />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
      <Analytics />
    </>
  );
}

export default App;
