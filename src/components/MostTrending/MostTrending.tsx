import TitleComponent from '../TitleComponent/TitleComponent'
import './MostTrending.css'
import sliceArray from '../SliceArray'
import { mostTrendingData } from '../../data/mostTrendingData'
import MostTrendingCard from '../MostTrendingCard/MostTrendingCard'
const MostTrending = () => {
    const mostTrnedingRows = sliceArray(mostTrendingData,3);
  return (
    <section className='mostTrending main-padding'>
      <TitleComponent title='Most Trending' text='Lorem ipsum dolor sit amet, consectetur adipiscing eli'/>
      <div className="mostTrendingMainContainer">
        {
            mostTrnedingRows.map((row,rowInex)=>{
                return(
                    <div className="mostTrenRow" key={rowInex}>
                        {
                            row.map((card,cardIndex)=>{
                                return(
                                    <MostTrendingCard cardData ={card} key={cardIndex} />
                                )
                            })
                        }
                    </div>
                )
            })
        }
      </div>
    </section>
  )
}

export default MostTrending
