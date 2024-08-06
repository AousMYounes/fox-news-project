import logo from '../assets/images/fox-news-icon-66.png';
import face from '../assets/images/icons8-facebook-100.png';
import insta from '../assets/images/icons8-instagram-100.png';
import linked from '../assets/images/icons8-linkedin-100.png';
import whats from '../assets/images/icons8-whatsapp-100.png';
const Footer = () => {
  return (
    <div>
 
    <footer className="page-footer bg-dark"  >
    <div className="container" id="contact">
      <div className="row mb-5">
        <div className="col-sm-12 col-md-6 col-lg-4 py-3">
          <br></br>
          <br></br>
          <p><a href='#' className="c3">Fox News Now</a></p>
          <img src={logo} alt='pic logo' width={100} height={100} className="mm"/>
        </div>
        
        <div className="col-sm-12 col-md-6 col-lg-4 py-3" >
        <br></br>
        <br></br>
          <h5><a href='#' className="c1">Contact Us</a></h5>
          <p></p>
          <a href="#" className="c2">+963 985 517 031</a><br/>
          <a href="#" className="c2">Fox.News@gmail.com</a>
          <br></br>
         <p></p>
          <div className="social-media-button">
            <a href="https://www.facebook.com/aous.younes.7"><img src={face} alt='pic logo' width={30} height={30}/></a>
            <a href="https://www.instagram.com/aous.younes.7"><img src={insta} alt='pic logo' width={30} height={30}/></a>
            <a href="https://www.linkedin.com/aous.younes.7"><img src={linked} alt='pic logo' width={30} height={30}/></a>
            <a href="https://api.whatsapp.com/send/?phone=963985517031&text&type=phone_number&app_absent=0"><img src={whats} alt='pic logo' width={30} height={30}/></a>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 py-3">
        <br></br>
        <br></br>
        <h5><a href='#' className="c1">Login</a></h5>
          <p></p>
          <form action="#" method='post'>
            <input type="text" className="form-control" placeholder="Enter your email.." />
            <button type="submit" className="btn btn-warning btn-block mt-2">Subscribe</button>
          </form>
        </div>
      </div>
       <div className='d1'>
       <p className="text-center" id="copyright"><a href='#' className='c4'>Copyright &copy; 2024. This Website design and develop by <span className='sp11'>Eng.Aous Mohammad Younes</span></a></p>
       <br></br>
       </div>
      
    </div>
  </footer>

        
     </div>
  )
}

export default Footer
