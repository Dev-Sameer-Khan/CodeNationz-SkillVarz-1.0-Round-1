import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const LoaderHero = () => {

  const LoaderRef = useRef(null)
  
useEffect(()=>{

  gsap.to(LoaderRef.current,{
    scrollTrigger:{
      pin : true
    }
  })

},[])

  return (
    <>
    <style>
        {`
          @layer utilities {
            .text-transparent-clip {
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              color: transparent;
            }
          }
        `}
      </style>
    <section ref={LoaderRef} className='w-full h-screen text-[15vw] font-black leading-none px-6 py-4 flex items-end sticky top-0 left-0 bg-[#E2E1DF] z-[99] text-[#131313]'>
       <h1 class="text-[120px] font-bold text-transparent-clip bg-[url('./src/assets/images/giphy.gif')] bg-cover bg-center">
    ADITYA
  </h1>
    </section>
    </>
  )
}

export default LoaderHero