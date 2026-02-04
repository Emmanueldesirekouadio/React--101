import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppExo from './AppExo.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AppExo />
  // </StrictMode>,
)
