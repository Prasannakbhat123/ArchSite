import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ScrollProvider } from './providers/ScrollProvider'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </StrictMode>,
)
