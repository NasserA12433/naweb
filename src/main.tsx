import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './cssFiles/index.css'
import App from './home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
