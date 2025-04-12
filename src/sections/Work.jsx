import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const projects = [
    {
      id: 1,
      name: "AMALGUM",
      image:
        "https://s3-alpha-sig.figma.com/img/834f/875c/e4216312d6d0dd24b3b5cc4aff9e5ad3?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jH79m6UFDDifpzQH9FgRxEVpGYeUglDfgvWcBLTI7kt2leNAMuF~huXqqhlIw6NbJIiH1n~n5GFyHp2Wom8hF8h8viT4eI9VaWrY-8bPbx6h7xdY9rWrPiqshQQigSn7f95CJPnkZS5BzExFALeVJg7WvT0JdvKkShK~BNXRlgSk-z~SM3WYghhJjn3OF0Q80zEeg5G-eOK3YDWLI-NZ7y~0C-rC8moYolVHT1e15b~4usd7o7ckfyuIC1GOOj9qkrrLJK8LApGfR7PBlBau0Yx8TTPtvkI860CjpIiD9mCKXAtffF980SYxNwwOWU6eNxzTZ~yXJOFD8N~TOh7q5A__",
    },
    {
      id: 2,
      name: "Bayez.AI",
      image:
        "https://s3-alpha-sig.figma.com/img/6fe1/68be/8f59c3aa00b3f02011945ed5a2e37560?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XrCdLLe9TqyBrOLh6nw~Wcxhpd3ouixmZik10wF0gKh9IEOiNeyv77S4khu98YXk-6R0o6xdAItBC8HEyA5OLyMwFOU23JRra1OuzZCRxjdCB2eCAhdmtRS1hyQTN49nFW~3gSCwOIImZrP06S~2lB0Ybz6Zq5BD0uUcFGvwq4oiBVyAjLGfIsSVctj2C5fIbShiof6FzER1rO0JZnqE6xozkee1tS-LibdLh-vuNb4ZWHkon4tU7dm8zTx2h-YxZcELIYoXlterd1rUIpM9ELYPv8pz~q3G~DtIzAra~Zg5SMWD0fx5tRJRQWPShJgJA6y6CcpgJtXwvIBAOJcV-g__",
    },
    {
      id: 3,
      name: "Portfolio'22",
      image:
        "https://s3-alpha-sig.figma.com/img/63ce/99f2/9a75e0b1eb41709755291e68b3b9c792?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f67uhmTmQ7KVH35cS3ZJ~K~aHVdWf3b22Gi19a7nJo6xsYJPpAK4KqNKfO7dF-JdNIyrnCc6CbqjOd5i19JI4KiDd~8qMU4j56wpQSKmB3wjlKH4txpomuwQzqfKUL3mkpWjqyb5tvEB85b~Tzqdv~V7aX9vnYhbdP3~ynAQFp72whsHsAteujuPG8OwQ5qsHaOHSARTmzlulBoCP2WQEEZ5mgvzNWs-5KPMD0S~BLjJu3aPPUSgsrOGXQRpbtrdPdw3qPNMdiGB1b285MlYLEV2laXnzixWDQ2kfFwiwdC6WICX7yUzE44K6yPL9V5Z-W1hYUcE8zc8RRlptml45g__",
    },
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
      <div className="w-full min-h-screen px-8  py-20 -mb-10 md:-mb-42 flex items-center justify-center">
        <div className="grid grid-cols-2 max-[599px]:grid-cols-1 gap-10 md:gap-4 w-full mt-[-30vh] max-[599px]:mt-0 max-w-screen-xl">
          {/* Row 1 */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[#FF0000] font-semibold text-base">01</p>
              <p className="text-[#FF0000] font-semibold text-lg">AMALGUM</p>
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
              <p className="text-[#FF0000] font-semibold text-base">02</p>
              <p className="text-[#FF0000] font-semibold text-lg">Bayez.AI</p>
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
              <p className="text-[#FF0000] font-semibold text-base">03</p>
              <p className="text-[#FF0000] font-semibold text-lg">Nimbus</p>
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
              <p className="text-[#FF0000] font-semibold text-base">04</p>
              <p className="text-[#FF0000] font-semibold text-lg">Portfolio'22</p>
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

      <div className="w-full p-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="border-t border-gray-600 pt-6 flex items-center max-[599px]:flex-col gap-42 max-[599px]:gap-6"
          >
            <div className="w-[40%] max-[599px]:w-full">
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover origin-top-left"
              />
            </div>
            <div className="flex flex-col justify-between h-[30rem] max-[599px]:h-[5rem] w-[40%] max-[599px]:w-full">
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col text-red-500 font-semibold text-sm leading-5">
                  <span className="text-base">
                    {project.id.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xl">{project.name}</span>
                </div>
                <button className="text-white hover:underline flex items-center gap-2">
                  View Project
                  <span className="text-lg">⟶</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
