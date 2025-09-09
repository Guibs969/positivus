import './styles.css';
import logo from '../../assets/logo.png';
function Header() {
  return (
    <header>
      <div className="header-container">
        <img className='img' src={logo} alt="Logo" />
        <nav className='navbar'>
          <a href="#about">About us</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
          <a className='button' href="#quote">Request a quote</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
