import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Typing from './typing.jsx'
import './index.css'
import App from './App.jsx'
import Chef from './Chef.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chef />
  </StrictMode>
)
