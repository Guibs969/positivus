import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import Header from './components/Header'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <Header />
    <Home />
    <Footer />
  </StrictMode>,
)
