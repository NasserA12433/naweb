import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './cssFiles/index.css';
import MouseTrail from './mousetrail.js';
import Navbar from './navbar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <MouseTrail/>
  </StrictMode>,
)
