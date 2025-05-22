import HowItWorksCard from '../HowItWorksCard/HowItWorksCard'
import TitleComponent from '../TitleComponent/TitleComponent'
import './HowItWorks.css'
import { howItWorksData } from '../../data/howItWorksData'
import { useState } from 'react'

const HowItWorks = () => {
  const [activeCard, setActiveCard]= useState(2);
  const handleActiveCardChange =  (num:number) : void=>{
    setActiveCard(num)
  }
  return (
    <section className="howItWorks main-padding">
      <TitleComponent title='How it Works' text='Lorem ipsum dolor sit amet, consectetur adipiscing eli'/>
      <div className="howItContainer">
        {howItWorksData.map((card,cardIndex)=>{
            return(
                <HowItWorksCard key={cardIndex} cardData={card} activeCard={activeCard} 
                handleActiveCardChange={handleActiveCardChange}/>
            )
        })}
      </div>
    </section>
  )
}

export default HowItWorks
