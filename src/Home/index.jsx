import banner from'../assets/banner.png'
import ama from'../assets/ama.png'
import dri from'../assets/dri.png'
import hub from'../assets/hub.png'
import net from'../assets/net.png'
import not from'../assets/not.png'
import zoo from'../assets/zoo.png'
import './styles.css'

function Home() {
  return (
    <>
    <div className='container'>
      
      <div className='textBox'> 
      <p className='text1'>Navigating the digital landscape for success</p>
      <p className='text2'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>

       <a className='button2'> Book a consultation </a>
       </div>
       <div className='imgBox'>
        <img src={banner} alt="Banner 01" />
       </div>

       <div className='marcas'>
        <a href='http://amazon.com.br/' target="_blank" rel="noopener noreferrer">
        <img src={ama} alt="Amazon" />
        </a>
        <a href='https://www.netflix.com/br/title/80211991' target="_blank" rel="noopener noreferrer">
        <img src={net} alt="Netflix" />
        </a>
        <a href='https://br.hubspot.com/' target="_blank" rel="noopener noreferrer">
        <img src={hub} alt="hub" />
        </a>
         <a href='https://www.notion.com/' target="_blank" rel="noopener noreferrer">
        <img src={not} alt="Not" />
        </a>
        <a href='https://dribbble.com/' target="_blank" rel="noopener noreferrer">
        <img src={dri} alt="dri" />
        </a>
        <a href='https://zoom.com/pt' target="_blank" rel="noopener noreferrer">
        <img src={zoo} alt="Zoo" />
        </a>
       </div>

      
    </div>
    </>
  )
}

export default Home
