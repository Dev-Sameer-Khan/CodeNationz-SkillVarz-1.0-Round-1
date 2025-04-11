import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Hero = ({ref}) => {
  let textanim = useRef(null);

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
  }, []);

  return (
    <section ref={ref} className="w-full min-h-screen bg-[#E2E1DF] text-[#131313] px-6 max-[599px]:px-4 py-20 flex flex-col gap-10 overflow-hidden">
      <div className="head1 font-[font-2] w-full flex items-center justify-between max-[599px]:flex-col max-[599px]:items-start leading-none">
        <h1 className="font-[200] text-[15vw]">GD</h1>
        <h1 className="font-[800] text-[15vw] tracking-none">ADITYA</h1>
      </div>
      <div className="head2 flex items-center justify-end max-[599px]:hidden">
        <p className="w-[53%]">
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
          <img src="./src/assets/images/wheel.svg" alt="" />
          <p className="w-[65%] mt-6">
            For me, web designing is an art where logic and creativity meet. I enjoy
            crafting sleek interfaces, dynamic interactions, and intuitive designs that
            not only look good but feel seamless and engaging
          </p>
        </div>
        <div className="img w-[20%] max-[599px]:w-full overflow-hidden">
          <img
            className="w-full h-full object-cover object-top"
            src="https://s3-alpha-sig.figma.com/img/f36c/3d51/0153a4a0fc74a4a6144f47ecdce59d9b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ryTNM9n38mJbC8HR4yN~1gfK6eJSGb8PkrN3EZgMgDndNxhDaqNxtQ0jybTbT8repXj5R8-w9-IXfzkD6AJVfisQnA5mPibEsg0DGMeAKxhBTDtu9UOHZbbA-VbSO-k~yO3MmYCKRiFCC9OXPlYnJJthXHZyJ6thdzNfq7Ykh3jD3t2fb-q2AvlQdiI8LSYqjZMcHpAbSXofqLLqCgH5FDvqU3GpvOoBpPESp45cbdiXe78tVqMokLKg27Tut-gzq61U24p2k6Hur2Q2oTvHCg7NGBf2cjh4iYkXlZ3jUvK8UKn93gpPiuwIxUOZNxWhvqBswbx07wieJqQA7ITJLQ__"
            alt=""
          />
        </div>
      </div>
      <div className="head4 w-[60%]">
        <h3 ref={textanim} className="text-[10vw] leading-none">
          FEATURED WORK
        </h3>
      </div>
    </section>
  );
};

export default Hero;
