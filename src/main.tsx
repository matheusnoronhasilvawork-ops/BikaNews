import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ColumnistPanel from './columnistPanel.tsx'
import AdminPanel from './adminPanel.tsx'
import { NewScreen } from './newScreen.tsx'
import Login from './login.tsx'
import SignUp from './signUp.tsx'
import CreateNew from './createNew.tsx'
import Contact from './contact.tsx'
import AboutUs from './aboutUs.tsx'
import PrivacyPolicies from './privacyPolicies.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrivacyPolicies />
  </StrictMode>,
)
