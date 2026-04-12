import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NewScreen } from './newScreen.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NewScreen />
  </StrictMode>,
)
