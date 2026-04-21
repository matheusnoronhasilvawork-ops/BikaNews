import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './screens/App.tsx'
import ColumnistPanel from './screens/columnistPanel.tsx'
import AdminPanel from './screens/adminPanel.tsx'
import { NewScreen } from './screens/newScreen.tsx'
import Login from './screens/login.tsx'
import SignUp from './screens/signUp.tsx'
import CreateNew from './screens/createNew.tsx'
import Contact from './screens/contact.tsx'
import AboutUs from './screens/aboutUs.tsx'
import PrivacyPolicies from './screens/privacyPolicies.tsx'
import Terms from './screens/terms.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Terms />
  </StrictMode>,
)
