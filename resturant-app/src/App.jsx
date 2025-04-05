import Banner from "./components/Banner"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NewaLetter from "./components/NesLetter"
import Testimonial from "./components/Testimonial"
import Footer from './components/Footer'
import Aos from "aos"
import 'aos/dist/aos.css'
import React from "react"
import Shop from "./components/Shopping"
import { CartProvider } from "./components/Contex/CartContex"

const App = () => {
 
  React.useEffect(()=>{
    Aos.init({
      offset:100,
      duration:700,
      easing:'ease-in',
      delay:100,
    });
    Aos.refresh();
  })

  return(
    <>
    <CartProvider>
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Banner/>
      
      <Shop/>
      <Testimonial/>
      <NewaLetter/>
      <Footer/>
    </div>
    </CartProvider>
    </>
  )
}



export default App
