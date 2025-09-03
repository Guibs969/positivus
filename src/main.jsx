import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import Header from './components/Header'

createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>,
)
