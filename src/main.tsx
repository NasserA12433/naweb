import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './cssFiles/index.css';
import { ThemeProvider } from './ldtheme.tsx';
import Navbar from './navbar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  </StrictMode>,
)
