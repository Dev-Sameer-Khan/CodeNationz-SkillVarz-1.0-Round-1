import gsap from "gsap";
import React, { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    gsap.fromTo(
      ".logo",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration : 10,
        ease : "none"
      }
    );
  }, []);

  return (
    <section className="w-full h-screen bg-black text-white flex justify-end relative p-6">
      <div className="logo w-[20%] opacity-100 select-none -translate-x-1/2 -translate-y-1/2 transform absolute top-1/2 left-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1742665464/NimbusLogo_ygg9ki.png"
          alt=""
        />
      </div>
      <div className="group flex">
      <div>
        0%
      </div>
      <div className="lines h-full flex items-center justify-end flex-col gap-2">
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
        <span className="h-[1px] w-12 inline-block bg-white"></span>
      </div>
      </div>
    </section>
  );
};

export default Loader;
