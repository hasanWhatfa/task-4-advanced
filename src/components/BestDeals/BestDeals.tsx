import { useState } from 'react';
import TitleComponent from '../TitleComponent/TitleComponent'
import './BestDeals.css'
import { bestDealsData } from '../../data/bestDealsData';
const BestDeals = () => {
    const [activeCat,setActiveCat] = useState('Residential Property')
    const categories : string[] = ['Residential Property','Commercial Property','Agriculture Property','Industrial Property'];
  return (
    <section className='bestDeals main-padding'>
      <TitleComponent title='Best Real Estate Deals' text='Lorem ipsum dolor sit amet, consectetur adipiscing eli' />
      <div className="bestDeals-mainContainer">
        <div className="tabsContaier">
            {categories.map((categ,categIndex)=>{
                return(
                    <button key={categIndex} className={`categTab ${categ == activeCat ? 'activeTab' : ''}`}
                    onClick={()=>setActiveCat(categ)} data-aos="fade-right" >
                        {categ}
                    </button>
                )
            })}
        </div>
        <div className="bestDeals-images-container">
            {bestDealsData.map((item)=>{
                if(item.filter==activeCat){
                    return(
                        item.imgsArr.map((src,srcIndex)=>{
                            return(
                                <div className="propertyImageContainer" data-aos="zoom-in-down">
                                    <div className="sm-text-prpryC">
                                        <h5>Featured</h5>
                                        <h5>3D</h5>
                                    </div>
                                    <img src={src} alt="property image" key={srcIndex} />
                                </div>
                            )
                        })
                    )
                }
            })}
        </div>
      </div>
    </section>
  )
}

export default BestDeals
