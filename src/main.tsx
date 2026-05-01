import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './screens/home.tsx'
import ColumnistPanel from './screens/columnistPanel.tsx'
import AdminPanel from './screens/adminPanel.tsx'
import NewScreen from './screens/newScreen.tsx'
import SignIn from './screens/signIn.tsx'
import SignUp from './screens/signUp.tsx'
import CreateNew from './screens/createNew.tsx'
import Contact from './screens/contact.tsx'
import AboutUs from './screens/aboutUs.tsx'
import PrivacyPolicies from './screens/privacyPolicies.tsx'
import Terms from './screens/terms.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/new-screen" element={< NewScreen/>}/>
        <Route path="/admin-panel" element={<AdminPanel />}/>
        <Route path="/columnist-panel" element={<ColumnistPanel />}/>
        <Route path="/create-new" element={<CreateNew />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/privacy-policies" element={<PrivacyPolicies />}/>
        <Route path="/terms" element={<Terms />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
