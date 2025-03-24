import React, { useEffect, useRef } from "react";
import Landing from "../components/Landing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Hero = () => {

  const gap = useRef([]);
  const sec1 = useRef(null);
  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{
    gsap.fromTo(gap.current, {
      gap : "110rem",
    }, {
      gap : "1rem",
      willChange : "gap", 
      scrollTrigger :{
        trigger : sec1.current,
        start : "0% 50%",
        end : "100% 50%",
        scrub : .3,
      }
    })

    gsap.to(sec1.current,{
      backgroundColor : "black",
      color : "#FEFEFE",
      willChange : "color", 
      scrollTrigger :{
        trigger : sec1.current,
        start : "100% 80%",
        end : "100% 50%",
        scrub : .3,
        // markers : true
      }
    })
  })

  return (
    <div ref={sec1} className="section-1 w-full h-screen bg-[#E9E8E8] text-black text-6xl flex items-center justify-center font-medium relative pointer-events-none">
      <Landing />
      <div className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[5vw] font-semibold flex-col gap-20 ">
        <div ref={gap} className="flex">
          <h4>Global</h4>
          <h4>Drone</h4>
        </div>
        <h4>Agency</h4>
      </div>
    </div>
  );
};

export default Hero;
