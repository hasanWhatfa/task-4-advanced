import './HowItWorksCard.css'
interface HowitWorksCardProps{
    cardData:{
        id:number,
        image:string,
        activeImage:string,
        title:string,
        text:string
    }
    activeCard:number,
    handleActiveCardChange:(newValue : number ) => void;
}
const HowItWorksCard = ({cardData,activeCard,handleActiveCardChange} : HowitWorksCardProps) => {
  return (
    <div className={`howItWorksCard ${cardData.id == activeCard ? 'activeCard' : ''}`} onClick={()=>handleActiveCardChange(cardData.id)} data-aos="flip-left">
      <img src={cardData.id == activeCard ? cardData.activeImage : cardData.image} />
      <div>
        <h3>{cardData.title}</h3>
        <p>{cardData.text}</p>
      </div>
    </div>
  )
}

export default HowItWorksCard
