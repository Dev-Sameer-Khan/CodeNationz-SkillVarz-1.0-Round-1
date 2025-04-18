import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Footer = () => {

  const imgRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{

    gsap.to(imgRef.current,{
      rotate : 360,
      willChange : "rotate",
      scrollTrigger:{
        trigger : "footer",
        start : "20% center",
        end : "center center",
        scrub : .3
      }
    })

  },[])

  return (
    <footer className="w-full min-h-screen py-10 px-6 max-[599px]:px-4 flex flex-col justify-between font-[font-1]">
      
    {/* Top Heading Section */}
    <div className="flex flex-col md:flex-row justify-between items-start max-[599px]:items-center">
      {/* Left Text */}
      <div className="text-[20vw] md:text-[7vw] font-extrabold leading-none font-[font-3]">
        <span className="block">GET IN</span>
      </div>

      {/* Right Text */}
      <div className="text-right max-w-xs md:max-w-md mt-2 md:mt-0">
        <h2 className="text-[18vw] md:text-[6vw] font-extrabold leading-none font-[font-2]">TOUCH</h2>
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
    <div className="mt-20 flex flex-wrap gap-x-15 md:gap-x-0 gap-y-5 md:gap-y-0 justify-between items-end max-[599px]:items-center w-full text-base md:text-[2vw] lg:text-[1.5vw]">
      <div className="leading-6 font-semibold">
        <p>BEHANCE</p>
        <p>INSTAGRAM</p>
      </div>
      <div className="leading-6 font-semibold text-right md:text-left">
        <p>LINKEDIN</p>
        <p>GITHUB</p>
      </div>
      <div className="leading-6 font-semibold">
        <p>EMAIL</p>
        <p>INSTAGRAM</p>
      </div>
      <div className="leading-6 font-semibold text-right md:text-left">
        <p>BY ADITYA 25</p>
        <p>ALL RIGHTS RESERVED</p>
      </div>
      <div className="w-full flex justify-end mt-10 md:mt-0  md:w-60 ">
        <img ref={imgRef} src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1744716305/wheel2_emw9bw.svg" alt="" />
      </div>
    </div>
  </footer>

  );
};

export default Footer;
