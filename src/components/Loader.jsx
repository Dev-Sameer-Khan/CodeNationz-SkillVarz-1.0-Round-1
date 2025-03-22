import React from 'react'

const Loader = () => {
  return (
    <section className='w-full h-screen bg-black text-white flex items-center justify-end relative'>
        <div className='logo w-[30%] opacity-100 select-none -translate-x-1/2 -translate-y-1/2 transform absolute top-1/2 left-1/2'>
        <img className='w-full h-full object-cover' src="./src/assests/images/NimbusLogo.png" alt="" />
        </div>
    </section>
  )
}

export default Loader