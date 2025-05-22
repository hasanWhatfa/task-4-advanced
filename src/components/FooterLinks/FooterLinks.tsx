import './FooterLinks.css'
interface FooterLinksProps{
    linkData :{
    title:string,
    links: FooterLinks[]
    }
}

type FooterLinks = {
    linkName:string,
    linkTo:string
}
const FooterLinks = ({linkData} : FooterLinksProps) => {
  return (
    <div className='footerLink' data-aos="fade-up">
      <h4>{linkData.title}</h4>
      <div className="links">
        {
            linkData.links.map((link,index)=>{
                return(
                    <a href={link.linkTo} key={index}>{link.linkName}</a>
                )
            })
        }
      </div>
    </div>
  )
}
export default FooterLinks
