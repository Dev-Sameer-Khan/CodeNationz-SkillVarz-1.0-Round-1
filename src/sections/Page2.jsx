import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useEffect } from 'react'

const Page2 = () => {
  const sec2 = useRef(null);
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to(sec2.current,{
      backgroundColor : "black",
      willChange : "color",
      scrollTrigger :{
        trigger : sec2.current,
        start : "20% 100%",
        end : "50% 100%",
        scrub : .3,
        // markers : true
      }
    })
  }, [])
  return (
    <div ref={sec2} className='w-full h-screen bg-[#E9E8E8] text-[#FEFEFE] flex items-center justify-center flex-col gap-2 text-[7.5vw] font-semibold'>
      <h2>Our Drones are Best at</h2>
      <h2>Image captureing and</h2>
    </div>
  )
}

export default Page2