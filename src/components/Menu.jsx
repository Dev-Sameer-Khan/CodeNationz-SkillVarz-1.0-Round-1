// Menu.jsx
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Magnet from "./Magnet";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

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
      <button
        onClick={toggleMenu}
        className={`group uppercase tracking-wider text-[4vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] 
    flex items-center justify-center transition-all duration-300 cursor-pointer 
    ${open ? "fixed top-6 left-6 z-[1001]" : " z-[1000]"}`}
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

      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-[#131313] text-white z-[999] -translate-y-full flex flex-col justify-center items-center gap-12"
      >
        {["Home", "Work", "About", "Contact"].map((link, i) => (
          <h1
            key={i}
            ref={(el) => (linksRef.current[i] = el)}
            className="text-[8vw] sm:text-[6vw] md:text-[4.5vw] lg:text-[3vw] uppercase font-semibold cursor-pointer tracking-wider"
          >
            {link}
          </h1>
        ))}
      </div>
    </>
  );
};

export default Menu;
