import './styles.css';
import logo from '../../assets/logo.png';
function Header() {
  

  return (
    <>
    <div className="container">
      <img className='img' src={logo} alt="Logo" />
       <div className='navbar'>   
        <a> About us </a>
        <a> Services </a>
        <a> Pricing  </a>
        <a>  Blog    </a>          
      <div>
          <a className='button'> Requeste a quote </a>
      
      
      
    
      
  
      </div>
     </div>
    </div>
    </>
  )
}

export default Header
