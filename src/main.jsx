import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Chef from './Chef.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chef />
  </StrictMode>
)
