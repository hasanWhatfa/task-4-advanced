import './HeroCardComponent.css'

interface heroCardProps{
    data:{img:string , title:string , dcs:string}
}

const HeroCardComponent = ({data} :  heroCardProps) => {
  return (
    <div className="heroCard">
        <div className="heroCardIconContainer">
            <img src={data.img} alt="icon" />
        </div>
        <div className="heroCardTextContent">
            <h4>{data.title}</h4>
            <p>{data.dcs}</p>
        </div>
    </div>
  )
}

export default HeroCardComponent;
