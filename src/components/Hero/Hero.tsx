import './Hero.css'
import {heroCardsData} from '../../data/heroData'
import HeroCardComponent from '../HeroCardComponent/HeroCardComponent'
interface HeroProps{
  data: {title:string,text:string},
}

const Hero = ({data} : HeroProps) => {
  return (
    <div className="hero main-padding" >
      <img src="/task-4-advanced/asstes/imgaes/heroImage.png" className="heroImage"/>
      <div className="heroTextContent"  data-aos="zoom-in-up">
        <div className='herooootext'>
          <h2>
            {data.title}
          </h2>
          <p>
            {data.text}
          </p>
        </div>
        <div className="heroCalcs">
          {heroCardsData.map((item,itemIndex)=>{
            return(
              <HeroCardComponent data = {item} key={itemIndex}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Hero
