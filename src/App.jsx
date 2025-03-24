import React from 'react'
import Loader from './components/Loader'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import Page2 from './sections/Page2'

const App = () => {
  return (
    <>
    {/* <Loader/> */}
    <Navbar/>
    <Hero/>
    <Page2/>
    </>
  )
}

export default App