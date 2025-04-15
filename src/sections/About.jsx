import React from "react";

const About = () => {
  return (
    <div className="min-h-screen px-4 py-4 mt-20 max-[599px]:mt-10 font-[font-1]">
      <div className="text-start mb-8 md:mb-32 leading-10 md:leading-15 ">
        <h1 className="text-[30px] md:text-6xl lg:text-7xl font-extrabold tracking-wider font-[font-3]">
          TYPOGRAPHY &
        </h1>
        <h2 className="text-[30px] md:text-6xl lg:text-7xl italic tracking-widest font-extralight md:ml-58 mb-2.5 md:mb-5 mt-0 font-[font-2]">
          CREATIVITY
        </h2>
        <div className="text-4xl md:text-6xl lg:text-6xl md:flex-col md:justify-self-end flex flex-col gap-2 max-[599px]:gap-0 lg:flex-row leading-[20px] md:leading-6 font-light">
          <span className="">CREATES DIGITAL</span>
          <br />
          <span className="">EXPERIENCES</span>
        </div>
      </div>
      <div className="w-full min-h-[30vh] flex flex-col md:flex-row justify-between items-center md:items-end gap-3 mb-8 md:mb-20">
        <div className="bg-gray-700 w-full md:w-[50%] lg:w-[50%] h-[50vh] md:mb-30 rounded-xl overflow-hidden">
          <img className="w-full h-full object-cover hover:scale-105 transition-all duration-300" src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1744716304/about1_ja3o3s.png" alt="" />
        </div>
        <div className="bg-gray-700 w-full md:w-[50%] lg:w-[50%] h-[50vh] rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover hover:scale-105 transition-all duration-300" src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1744716304/about2_w1endv.png" alt="" />

        </div>
      </div>
      <div className="w-full min-[50vh]-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex md:justify-end mb-4">
          <h1 className="text-6xl md:text-6xl lg:text-6xl font-semibold uppercase md:mr-4">
            Who <span className="font-normal">am </span> 
             <span className="font-extrabold">i</span>?
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-y-6 md:gap-y-6 mb-10">
          <h1 className="text-base md:text-lg lg:text-xl uppercase">
            I'm Aditya, a Computer and
            Communication student at LNMIIT Jaipur, driven by
            creativity and a passion for blending design with technology. As a
            designer, I love bringing ideas to life through motion and design.
          </h1>
          <h1 className="text-base md:text-lg lg:text-xl uppercase">
            Movement, both in design and life, keeps me inspired—whether it's
            gaming, football, or simply walking
            outside. I believe that staying energized
            and adaptable in all aspects of life fuels my creativity and approach to
            problem-solving
          </h1>
          <h1 className="text-base md:text-lg lg:text-xl uppercase">
            A huge sci-fi fan, I draw inspiration from Cyberpunk and Arcane, 
            fascinated by their world building and futuristic ideas. 
            Just as these stories push creative boundaries, I
            strive to craft digital experiences
            that captivate and inspire. I thrive in dynamic environments, 
            always eager to learn, adapt, and innovate in the ever-evolving
            world of technology.
          </h1>
        </div>
      
      </div>
      <div className="w-full min-[30vh] md:flex lg:flex lg:gap-x-20 md:gap-x-10">
             <div className="mb-4">
              <h1 className="underline decoration-2 text-xl mb-2">HONORS & AWARDS</h1>
              <p className="text-30 ">Google GEN AI Hackathon Top 5 (2024)</p>
              <p className="text-30 ">MNIT Web-A-Thon Runner up (2024)</p>
              <p className="text-30 ">Informatica for AI/GenAI Finalist (2025)</p>
             </div>
             <div className="lg:flex md:flex lg:gap-x-20 md:gap-x-10">
            <div >
            <h1 className="underline decoration-2 text-xl mb-2">SKILLS</h1>
              <p className="text-30 ">Figma</p>
              <p className="text-30 ">GSAP</p>
              <p className="text-30 ">C</p>
            </div>
            <p className="lg:mt-9 text-30">C++</p>
             </div>
        </div>
    </div>
  );
};

export default About;
