import './MostTrendingCard.css'

interface MostTrendingCardDataProps{
    cardData:{
    img:string,
    price:string,
    appartment:string,
    location:string
    }
}
const MostTrendingCard = ({cardData} : MostTrendingCardDataProps) => {
  return (
    <div className='mostTrendingCard'>
        <img src={cardData.img} alt='appartment image' data-aos="zoom-in-down"/>
        <h2 data-aos="fade-right">{cardData.price}</h2>
        <p className="appartmentInfo" data-aos="fade-right">{cardData.appartment}</p>
        <p className='appartmentLocation' data-aos="fade-right"><img src="/task-4-advanced/asstes/icons/locationIconMostTrend.svg" alt="icon" />{cardData.location}</p>
    </div>
  )
}

export default MostTrendingCard
