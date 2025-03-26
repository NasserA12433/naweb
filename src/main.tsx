import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './cssFiles/index.css';
import App from './home.tsx';
import MouseTrail from './mousetrail.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <MouseTrail/>
  </StrictMode>,
)
