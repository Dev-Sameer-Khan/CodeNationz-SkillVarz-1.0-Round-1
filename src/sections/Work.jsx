import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Magnet from "../components/Magnet";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const projects = [
    {
      id: 1,
      name: "AMALGUM",
      image:
        "https://res.cloudinary.com/dbgzq41x2/image/upload/v1744716304/project1_hh7gxu.png",
    },
    {
      id: 2,
      name: "Bayez.AI",
      image:
        "https://res.cloudinary.com/dbgzq41x2/image/upload/v1744716304/project2_tpcgpt.png",
    },
    {
      id: 3,
      name: "Nimbus",
      image:
        "https://res.cloudinary.com/dbgzq41x2/image/upload/v1744716303/project3_blx9el.png",
    },
    {
      id: 4,
      name: "Portfolio'22",
      image:
        "https://res.cloudinary.com/dbgzq41x2/image/upload/v1744719237/project4_i5ajpi.png",
    }
  ];

  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((img, i) => {
      if (img) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            end: "bottom top",
            scrub: 0.3,
          },
        });

        tl.to(img, {
          scaleX: 1.2,
          ease: "none",
          willChange: "scaleX",
        }).to(img, {
          scaleX: 1,
          ease: "none",
          willChange: "scaleX",
        });
      }
    });
  }, []);

  return (
    <section className="w-full">
      <div className="w-full px-8 max-[599px]:px-4 py-20 flex items-center justify-center font-[font-1]">
        <div className="grid grid-cols-2 max-[1025px]:grid-cols-1 gap-10 w-full">
          {/* Row 1 */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-red-500 font-semibold text-base">01</p>
              <p className="text-red-500 font-semibold text-lg">AMALGUM</p>
            </div>
            <div className="text-right  text-sm opacity-80 space-y-1">
              <p>Empowering Farmers, Enriching India</p>
              <p>2D Visualization</p>
              <p>Language Conversion</p>
              <p>3D Area Scanning</p>
              <p>Pre-Setup Analysis</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-red-500 font-semibold text-base">02</p>
              <p className="text-red-500 font-semibold text-lg">Bayez.AI</p>
            </div>
            <div className="text-right  text-sm opacity-80 space-y-1">
              <p>Empowering Farmers, Enriching India</p>
              <p>2D Visualization</p>
              <p>Language Conversion</p>
              <p>3D Area Scanning</p>
              <p>Pre-Setup Analysis</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-red-500 font-semibold text-base">03</p>
              <p className="text-red-500 font-semibold text-lg">Nimbus</p>
            </div>
            <div className="text-right  text-sm opacity-80 space-y-1">
              <p>Empowering Farmers, Enriching India</p>
              <p>2D Visualization</p>
              <p>Language Conversion</p>
              <p>3D Area Scanning</p>
              <p>Pre-Setup Analysis</p>
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-red-500 font-semibold text-base">04</p>
              <p className="text-red-500 font-semibold text-lg">
                Portfolio'22
              </p>
            </div>
            <div className="text-right  text-sm opacity-80 space-y-1">
              <p>Empowering Farmers, Enriching India</p>
              <p>2D Visualization</p>
              <p>Language Conversion</p>
              <p>3D Area Scanning</p>
              <p>Pre-Setup Analysis</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-6 max-[599px]:p-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="border-t border-gray-600 pt-6 flex items-center max-[599px]:flex-col gap-42 max-[599px]:gap-6"
          >
            <div className="w-[40%] max-[599px]:w-[80%] h-full">
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={project.image}
                alt={project.name}
                className="w-full h-full object-contain origin-top-left max-[599px]:origin-center"
              />
            </div>
            <div className="flex flex-col justify-between h-[30rem] max-[599px]:h-[5rem] w-[40%] max-[599px]:w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col text-red-500 font-semibold text-sm leading-5">
                  <span className="text-base">
                    {project.id.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xl">{project.name}</span>
                </div>
                <Magnet padding={50} disabled={false} magnetStrength={5}>
                <button className="text-white hover:underline flex items-center gap-2 cursor-pointer">
                  View Project
                  <span className="text-lg">⟶</span>
                </button>
                </Magnet>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
