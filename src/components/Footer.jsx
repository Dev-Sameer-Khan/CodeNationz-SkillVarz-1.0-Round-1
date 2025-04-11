import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full min-h-screen py-6 px-6 flex flex-col justify-between">
      
      {/* Top Heading Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
        {/* Left Text */}
        <div className="text-[12vw] md:text-[8vw] font-extrabold leading-none">
          <span className="block">GET IN</span>
        </div>

        {/* Right Text */}
        <div className="text-right max-w-xs md:max-w-md mt-6 md:mt-0">
          <h2 className="text-[12vw] md:text-[8vw] font-extrabold leading-none">TOUCH</h2>
          <p className="mt-2 text-sm md:text-base opacity-80">
            Feel Free To Mail, Reach Out To Me.
          </p>
          <a
            href="#contact"
            className="underline mt-2 inline-block text-sm md:text-base"
          >
            Let’s Connect.
          </a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-20 flex flex-wrap justify-between items-end w-full text-xs md:text-sm">
        <div className="space-y-1">
          <p>BEHANCE</p>
          <p>INSTAGRAM</p>
        </div>
        <div className="space-y-1">
          <p>LINKEDIN</p>
          <p>GITHUB</p>
        </div>
        <div className="space-y-1">
          <p>EMAIL</p>
        </div>
        <div className="space-y-1 text-right md:text-left">
          <p>BY ADITYA 25'</p>
          <p>ALL RIGHTS RESERVED</p>
        </div>
        <div>
          <img src="./src/assets/images/wheel.svg" alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
