import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = ({ heroRef }) => {
  const navRef = useRef(null);
  const navRef1 = useRef(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!heroRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [heroRef]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    gsap.to(navRef.current, {
      y: isVisible ? "0%" : "-100%",
      willChange: "transform",
      duration: 0.3,
      ease: "power1.out",
    });
  }, [isVisible]);
  useEffect(() => {
    gsap.to(navRef1.current, {
      y: isVisible ? "0%" : "-100%",
      willChange: "transform",
      duration: 0.3,
      ease: "power1.out",
    });
  }, [isVisible]);

  return (
    <header>
      <nav
        ref={navRef}
        className={`desktop-nav text-[#131313] w-full fixed top-0 left-0 z-[999] flex items-center justify-between px-6 py-2 text-[2vw] max-[599px]:hidden transition-all duration-300 ${
          isHeroVisible ? "" : "backdrop-blur-md bg-[#e2e1df67]"
        }`}
      >
        <div className="left flex gap-10">
          <div className="logo">
            <h1>Designer</h1>
          </div>
          <div className="location">
            <h4>Location</h4>
            <h4 className="leading-none">
              U.P, India{" "}
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h4>
          </div>
        </div>
        <div className="menu flex items-center gap-4">
          <h5>MENU</h5>
          <span className="inline-block w-6 h-6 rounded-full bg-black"></span>
        </div>
      </nav>

      <nav
        ref={navRef1}
        className={`mobile-nav text-[#131313] w-full hidden max-[599px]:block fixed top-0 left-0 z-[999] px-4 py-2 text-[6vw] ${
          isHeroVisible ? "" : "backdrop-blur-md bg-[#e2e1df67]"
        }`}
      >
        Menu +
      </nav>
    </header>
  );
};

export default Navbar;
