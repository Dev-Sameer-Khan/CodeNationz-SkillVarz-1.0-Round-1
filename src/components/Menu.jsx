// Menu.jsx
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Magnet from "./Magnet";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const plusRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const handleMouseMove = (e) => {
    const spans = gsap.utils.toArray(".plus-span");
    spans.forEach((span) => {
        gsap.to(span, {
          rotate: Math.floor(e.clientX / 3),
          duration: 0.3,
          ease: "none",
        });
    });
  };
  
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
          } ${
            showText || window.innerWidth < 640 ? "opacity-100" : "opacity-0"
          }`}
        >
          {open ? "Close" : "Menu"}
        </span>

        <Magnet
          padding={50}
          disabled={window.innerWidth < 1240 ? true : false}
          magnetStrength={5}
        >
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

      <div
      onMouseMove={handleMouseMove}
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-[#131313] text-[#E2E1DF] z-[999] -translate-y-full flex flex-col justify-between px-4 pb-6 pt-3"
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="text-3xl font-bold text-white">ADITYA</div>
        </div>

        <div className="w-full h-full pt-10 flex items-center justify-center flex-col gap-6 text-[8vw] sm:text-[4vw] md:text-[8vw] lg:text-[6vw] font-semibold uppercase">
      {items.map((row, rowIndex) => {
        const firstIndex = rowIndex * 3;
        const plusIndex = firstIndex + 1;
        const secondIndex = firstIndex + 2;
        
        // Skip rendering empty rows
        if (!row[0] && !row[1]) return null;
        
        return (
          <div
            key={rowIndex}
            className="flex justify-center items-center gap-6 max-[599px]:gap-2"
          >
            {/* Left Link */}
            {row[0] && (
              <h1
                onMouseEnter={() => setHoveredIndex(firstIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`cursor-pointer transition-opacity duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== firstIndex
                    ? "opacity-30"
                    : "opacity-100"
                }`}
              >
                {row[0]}
              </h1>
            )}
            
            {/* Plus Sign - only show if both items exist */}
            {row[0] && row[1] && (
              <span
                ref={plusRef}
                className={`plus-span transition-opacity duration-300 font-extralight text-[10vw] sm:text-[5vw] md:text-[6vw] ${
                  hoveredIndex !== null ? "opacity-30" : "opacity-100"
                }`}
              >
                +
              </span>
            )}
            
            {/* Right Link */}
            {row[1] && (
              <h1
                onMouseEnter={() => setHoveredIndex(secondIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`cursor-pointer transition-opacity duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== secondIndex
                    ? "opacity-30"
                    : "opacity-100"
                }`}
              >
                {row[1]}
              </h1>
            )}
          </div>
        );
      })}
    </div>

        {/* Footer */}
        <div className="flex justify-between text-xs sm:text-sm uppercase font-light pt-6 text-white">
          <div className="space-x-2">
            <span className="text-[#E2E1DF] opacity-50 font-semibold cursor-pointer">
              Italiano
            </span>
            <span className="text-[#E2E1DF] font-semibold cursor-pointer">English</span>
          </div>
          <div className="space-x-4">
            <span className="cursor-pointer hover:opacity-70 transition-opacity">Instagram</span>
            <span className="cursor-pointer hover:opacity-70 transition-opacity">Dribble</span>
            <span className="cursor-pointer hover:opacity-70 transition-opacity">LinkedIn</span>
          </div>
          <div className="text-right space-x-3">
            <span>©2025 ADITYA</span>
            <span className="cursor-pointer hover:opacity-70 transition-opacity">Privacy</span>
            <span className="cursor-pointer hover:opacity-70 transition-opacity">Credits</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
