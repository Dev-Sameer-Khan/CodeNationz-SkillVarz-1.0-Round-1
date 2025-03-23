import React from 'react'
import Landing from '../components/Landing'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-[#E9E8E8] text-black text-6xl flex items-center justify-center font-medium relative'>
      <Landing/>
      <div className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col gap-20'>
      <div className='flex gap-80'>
      <h4>Global</h4>
      <h4>Drone</h4>
      </div>
      <h4>Agency</h4>
      </div>
    </div>
  )
}

export default Hero