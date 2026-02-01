import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Oracle as Home } from './pages/Home';
import { OracleA as VariantA } from './pages/VariantA';
import { OracleB as VariantB } from './pages/VariantB';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<VariantA />} />
        <Route path="/b" element={<VariantB />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
