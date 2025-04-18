import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Hero = ({ ref }) => {
  let textanim = useRef(null);
  let txt1 = useRef(null);
  let txt2 = useRef(null);
  let txt3 = useRef(null);
  let txt4 = useRef(null);
  let img1 = useRef(null);
  let img2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textanim.current,
      {
        yPercent: 0,
      },
      {
        scrollTrigger: {
          trigger: textanim.current,
          start: "top 60%",
          end: "bottom top",
          scrub: 0.3,
        },
        yPercent: 150,
        willChange: "transform",
      }
    );

    gsap.fromTo(txt1.current,{
      y : 20,
      opacity : 0
    },{
      y : 0,
      opacity : 1,
      duration : 0.5,
      willChange : "transform opacity",
    },"-=0.8")
    gsap.fromTo(txt2.current,{
      y : 20,
      opacity : 0
    },{
      y : 0,
      opacity : 1,
      duration : 0.5,
      willChange : "transform opacity",
    },"<")
    gsap.fromTo(txt3.current,{
      y : 20,
      opacity : 0
    },{
      y : 0,
      opacity : 1,
      duration : 0.5,
      willChange : "transform opacity",
    },"<")
    gsap.fromTo(txt4.current,{
      y : 20,
      opacity : 0
    },{
      y : 0,
      opacity : 1,
      duration : 0.5,
      willChange : "transform opacity",
    },"<")
    gsap.fromTo(img1.current,{
      rotate : 360,
    },{
      rotate : 0,
      duration : 0.5,
      willChange : "transform",
    },"<")
    gsap.fromTo(img2.current,{
      y : 20,
      opacity : 0
    },{
      y : 0,
      opacity : 1,
      duration : 0.5,
      willChange : "transform opacity",
    },"<")
  }, []);

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-[#E2E1DF] text-[#131313] px-6 max-[599px]:px-4 py-20 flex flex-col gap-10 overflow-hidden font-[font-1]"
    >
      <div className="head1 w-full flex items-center justify-between max-[599px]:flex-col max-[599px]:items-start leading-none">
        <h1 ref={txt1} className="font-[200] text-[12vw]">GD</h1>
        <h1 ref={txt2} className="font-[font-3] text-[12vw] tracking-none">ADITYA</h1>
      </div>
      <div className="head2 flex items-center justify-end max-[599px]:hidden">
        <p ref={txt3} className="w-[60%]">
          Websites are more than just functional spaces—they're immersive
          experiences
          where visuals, typography and motion come together to tell a story, evoke
          emotions and create memorable interactions.
          Every element, from the smallest detail to the overall design
          plays a role in shaping how users feel and engage
          transforming a simple visit into an inspiring journey.
        </p>
      </div>
      <div className="head3 w-full h-full mt-20 flex items-center justify-between max-[599px]:flex-col max-[599px]:items-start">
        <div className="para w-full">
          <img ref={img1} src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1744716304/wheel_zte6j0.svg" alt="" />
          <p ref={txt4} className="w-[65%] mt-6">
            For me, web designing is an art where logic and creativity meet. I enjoy
            crafting sleek interfaces, dynamic interactions, and intuitive designs that
            not only look good but feel seamless and engaging.
          </p>
        </div>
        <div className="img w-[20%] max-[599px]:w-full overflow-hidden">
          <img
            ref={img2}
            className="w-full h-full object-cover object-top"
            src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1744716303/adi_cjbwy9.png"
            alt=""
          />
        </div>
      </div>
      <div className="head4 w-[60%]">
        <h3 ref={textanim} className="text-[10vw] leading-none">
          FEATURED <span className="font-[font-3]">WORK</span>
        </h3>
      </div>
    </section>
  );
};

export default Hero;
