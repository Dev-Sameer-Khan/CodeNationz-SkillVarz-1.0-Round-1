import gsap from "gsap";
import React, { useEffect } from "react";
import CountUp from "./CountUp";

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".logo",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: "none",
      },
      "a"
    );
    tl.fromTo(
      ".group",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: "none",
      },
      "a"
    );
    tl.to(".count", {
      y: "95%",
      duration: 10,
    })
      .fromTo(
        ".top",
        {
          y: "-100%",
        },
        {
          y: "100%",
          ease: "none",
        }
      )
      .to(
        ".group",
        {
          opacity: 0,
        },
        "b"
      )
      .to(
        ".logo",
        {
          opacity: 0,
        },
        "b"
      )
      .to(
        ".sect",
        {
          opacity: 0,
          display: "none",
        },
        "b"
      );
  }, []);

  return (
    <section className="sect fixed w-full h-screen bg-black text-white flex justify-end p-6 overflow-hidden">
      <div className="logo w-[20%] opacity-100 select-none -translate-x-1/2 -translate-y-1/2 transform absolute top-1/2 left-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1742665464/NimbusLogo_ygg9ki.png"
          alt=""
        />
      </div>
      <div className="group flex">
        <div className="count -translate-x-6 translate-y-0">
          <CountUp
            from={0}
            to={100}
            duration={10}
            separator=","
            delay={2}
            direction="up"
          />
        </div>
        <div className="lines h-full flex items-center justify-end flex-col gap-2">
          {Array.from({ length: 75 }).map((_, index) => (
            <span
              key={index}
              className={`h-[1px] w-10 inline-block bg-white ${
                [
                  0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75,
                  80, 85, 90, 95, 100,
                ].includes(index)
                  ? "scale-x-125 origin-right"
                  : index === 40
                  ? "scale-x-105 origin-right"
                  : index === 50
                  ? "scale-x-150 origin-right"
                  : ""
              }`}
            ></span>
          ))}
        </div>
      </div>
      <div className="top w-full h-screen bg-cyan-300 absolute top-0 left-0"></div>
    </section>
  );
};

export default Loader;
