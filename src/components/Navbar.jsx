import React, { useEffect, useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Navbar = () => {
  const nav = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(nav.current, {
      color: "#FEFEFE",
      willChange: "color",
      scrollTrigger: {
        trigger: nav.current,
        start: "100% 100%",
        end: "100% 50%",
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <nav
      ref={nav}
      className="fixed top-0 left-0 px-12 py-6 w-full h-screen z-10 flex justify-between flex-col pointer-events-none text-black"
    >
      <div className="flex justify-between w-[90%]">
        <div className="logo text-[1.5vw]">Nimbus</div>
        <div>
          <h4 className="flex items-center gap-1 mix-blend-difference">
            Based in India{" "}
            <span className="inline-block w-4">
              <img
                src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1742756992/libre-tech-drone_logo_r0cnuh.png"
                alt=""
              />
            </span>{" "}
            Drone Worldwide
          </h4>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-full h-full -translate-y-8">
          <div className="flex items-center -translate-x-28 justify-center flex-col">
            <h4 className="-rotate-90">Events, Architecture & Objects</h4>
          </div>
          <div className="flex h-screen items-center justify-between flex-col">
            <h4 className="underline font-semibold">EN</h4>
            <div className="flex items-center justify-center gap-2 -translate-y-12 cursor-pointer pointer-events-auto">
              <FaInstagram />
              <FaPinterest />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
        <h1 className="bg-red-500">sdfjsdhf</h1>
    </nav>
  );
};

export default Navbar;
