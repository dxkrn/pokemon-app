import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto px-0'>
      <App />
    </div>
  </StrictMode>,
)
