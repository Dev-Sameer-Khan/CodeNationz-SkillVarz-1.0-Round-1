// Menu.jsx
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Magnet from "./Magnet";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const items = [
    ["CULTURE", "APPROACH"],
    ["PORTFOLIO", "CONTACTS"],
    ["JOURNAL", ""],
  ];

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (window.innerWidth < 640) {
      setShowText(true);
    }

    if (open) {
      gsap.to(menuRef.current, {
        y: 0,
        willChange: "transform opacity",
        duration: 0.6,
        ease: "power3.inOut",
      });

      gsap.fromTo(
        linksRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          willChange: "transform opacity",
          ease: "power2.out",
          duration: 0.5,
          delay: 0.2,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.6,
        willChange: "transform",
        ease: "power3.inOut",
      });
    }
  }, [open]);

  return (
    <>
      {/* Button */}
      <button
        onClick={toggleMenu}
        className={`group uppercase tracking-wider text-[4vw] sm:text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] 
        flex items-center justify-center transition-all duration-300 cursor-pointer 
        ${open ? "z-[1001]" : " z-[1000]"}`}
      >
        <span
          className={`mr-2 transition-all duration-300 ${
            open ? "text-white" : "text-zinc-800"
          } ${showText || window.innerWidth < 640 ? "opacity-100" : "opacity-0"}`}
        >
          {open ? "Close" : "Menu"}
        </span>

        <Magnet padding={50} disabled={false} magnetStrength={5}>
          <span
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
            className={`inline-block w-4 h-4 rounded-full transition-all duration-300 ${
              open ? "bg-white" : "bg-zinc-800"
            }`}
            style={{ willChange: "transform" }}
          ></span>
        </Magnet>
      </button>

      {/* Menu Content */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-[#131313] text-[#ec008c] z-[999] -translate-y-full flex flex-col justify-between px-6 py-6"
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="text-2xl font-bold text-white">ADITYA</div>
        </div>

        {/* Grid Nav */}
        <div className="grid grid-cols-3 gap-6 justify-items-center items-center text-[8vw] sm:text-[6vw] md:text-[4.5vw] lg:text-[3vw] font-semibold uppercase">
          {items.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <h1
                ref={(el) => (linksRef.current[rowIndex * 3] = el)}
                className="cursor-pointer"
              >
                {row[0]}
              </h1>
              <span
                ref={(el) => (linksRef.current[rowIndex * 3 + 1] = el)}
                className="text-white text-[4vw] sm:text-[3vw]"
              >
                +
              </span>
              <h1
                ref={(el) => (linksRef.current[rowIndex * 3 + 2] = el)}
                className="cursor-pointer"
              >
                {row[1]}
              </h1>
            </React.Fragment>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between text-xs sm:text-sm uppercase font-light pt-6 text-white">
          <div className="space-x-2">
            <span className="text-gray-500">Italiano</span>
            <span className="text-[#ec008c] font-semibold">English</span>
          </div>
          <div className="space-x-4">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>LinkedIn</span>
          </div>
          <div className="text-right space-x-3">
            <span>©2025 DASS</span>
            <span>Privacy</span>
            <span>Credits</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
