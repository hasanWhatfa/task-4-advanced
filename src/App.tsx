import { useEffect } from "react"
import BestDeals from "./components/BestDeals/BestDeals"
import FindYourDream from "./components/FindYourDream/FindYourDream"
import Foorter from "./components/Foorter/Foorter"
import Hero from "./components/Hero/Hero"
import HowItWorks from "./components/HowItWorks/HowItWorks"
import MostTrending from "./components/MostTrending/MostTrending"
import Navbar from "./components/Navbar/Navbar"
import {heroMainData} from './data/heroData'
import Aos from 'aos'
import 'aos/dist/aos.css'
const App = () => {
  useEffect(()=>{
  Aos.init({duration:800});
  },[])
  return (
    <>
    <header >
      <Navbar links={['Home','About','Service','New Property','Contact']}/>
      <Hero data ={heroMainData}/>
    </header>
    <main>
      <HowItWorks />
      <FindYourDream />
      <MostTrending />
      <BestDeals />
    </main>
    <Foorter />
    </>
  )
}

export default App

