import { useEffect, useState } from 'react';
import './Navbar.css'

interface navBarProps{
    links:string[]
}

const Navbar = ({links} : navBarProps) => {
  const [activeLink , setActiveLink] = useState('Home');
  const[showMenu,setShowMenu] = useState(false);
  const [scrolling,setScrolling] = useState(false);   
  //track the scrolling to chage the appreance of the navBar
    useEffect(() => {
      const handleScroll = () => {
        setScrolling(window.scrollY > 10);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <>
        <nav className={`bg-screen-nav main-padding ${scrolling ? 'navBarScroll' : ''}`} data-aos="fade-down">
            <img src="/asstes/icons/logoGroup.svg" alt="logo" />
            <div className="navLinks">
                {links.map((link,linkIndex)=>{
                    return(
                        <a key={linkIndex} href='#' onClick={() : void=> setActiveLink(link)}
                        className={`${activeLink == link ? 'activeLink':'' }`}>{link}</a>
                    )
                })}
            </div>
            <button className="navBtn">Login</button>
        </nav>
        <nav className={`sm-screen-nav main-padding ${scrolling ? 'navBarScroll' : ''}`}>

            <img src="/asstes/icons/logoGroup.svg" alt="logo" className='sm-screen-logo' />
            <img src="/asstes/icons/bars.svg" onClick={() =>setShowMenu(!showMenu)} className='cursonIcon'/>

            <div className={`sm-screen-nav-menu ${showMenu ? 'showMenu' : ''}`}>
                <div className="sm-screen-nav-menu-top">
                    <div className="navLinks-sm-screen-header main-padding">
                        <img src="/asstes/icons/logoGroup.svg" alt="logo" className='sm-screen-logo'/>
                        <img src="/asstes/icons/closeIcon.svg" onClick={()=>setShowMenu(false)} className='cursonIcon'/>
                    </div>
                    <div className="navLinks">
                        {links.map((link,linkIndex)=>{
                            return(
                            <a key={linkIndex} href='#' onClick={() : void=> setActiveLink(link)}
                            className={`${activeLink == link ? 'activeLink':'' }`}>{link}</a>                      
                        )
                        })}
                    </div>
                </div>
                <button className="navBtn">Login</button>
            </div>
        </nav>
    </>

  )
}

export default Navbar
