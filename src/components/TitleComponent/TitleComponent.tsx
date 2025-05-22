import './TitleComponent.css'
interface TitleCompoProps{
    title:string,
    text:string
}

const TitleComponent = ({title, text} : TitleCompoProps) => {
  return (
    <div className="titleCompo" >
        <h2 data-aos="fade-right">{title}</h2>
        <p data-aos="fade-up" data-aos-delay="300">{text}</p>
    </div>
  )
}

export default TitleComponent
