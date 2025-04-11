import React, { useRef } from 'react'
import Navbar from './Components/Navbar'
import Hero from './sections/Hero'
import Work from './sections/Work'
import ScrollVelocity from './sections/ScrollVelocity'
import About from './sections/About'
import Footer from './components/Footer'

const App = () => {
  const heroRef = useRef(null);
  return (
    <section className='bg-[#131313] text-[#E2E1DF] relative overflow-hidden'>
    <Navbar heroRef={heroRef}/>
    <Hero ref={heroRef}/>
    <Work/>
    <ScrollVelocity
  texts={[' SINCE 2025 ', ' FROM INDIA ']} 
  velocity={50} 
  className="bg-[#131313] text-[#E2E1DF]"
/>
    <About/>
    <Footer/>
    </section>
  )
}

export default App