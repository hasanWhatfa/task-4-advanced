import './Foorter.css'
import { footerLinksData , contactLinks } from '../../data/footerData'
import FooterLinks from '../FooterLinks/FooterLinks'
const Foorter = () => {
  return (
    <footer className='main-padding'>
      <div className="footerTopContent">
        <div className="footerLogo" data-aos="fade-up">
          <img src="/task-4-advanced/asstes/icons/logoGroup.svg" alt="logo"/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus
            felis vitae sit est quisque.
          </p>
        </div>
        {
          footerLinksData.map((link,linkIndex)=>{
            return(
              <FooterLinks linkData={link} key={linkIndex}/>
            )
          })
        }
        <div className="locationInfo" data-aos="fade-up">
          <h4>Our Location</h4>
          <div className="cotactLinksContainer">
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
            <div className="footerIconsContainer">
              {
                contactLinks.map((icon,iconIndex)=>{
                  return(
                    <a href="#" key={iconIndex}>
                      <img src={icon.img} alt={icon.alt} />
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>






      <div className="footerBottomContent">
        <div className="lightLine"></div>
        <div className="footerBottomLinks">
          <p>Copyright 2024 flora. All Rights Reserved</p>
          <div className="bottomLinksRight" >
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Foorter
