import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Labs from './pages/Labs.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Labs />
  </StrictMode>
);
