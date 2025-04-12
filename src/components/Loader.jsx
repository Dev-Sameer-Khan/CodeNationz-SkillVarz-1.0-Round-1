import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-screen fixed top-0 left-0 z-[99999999] bg-zinc-800 text-white flex items-center justify-center'>
      <h4 className='text-5xl font-bold animate-pulse'>Loading........</h4>
    </div>
  )
}

export default Loader