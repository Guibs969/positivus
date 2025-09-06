import banner from'../assets/banner.png'
import './styles.css'

function Home() {
  return (
    <>
    <div className='container'>
      
      <div className='textBox'> 
      <p className='text1'>Navigating the digital landscape for success</p>

      <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>

       <a className='button2'> Book a consultation </a>
       </div>
       <div className='imgBox'>
        <img src={banner} alt="Banner 01" />
       </div>

      
    </div>
    </>
  )
}

export default Home
