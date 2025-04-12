import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen px-8 md:px-6 py-10 md:py-20 font-sans">
      {/* Heading Section */}
      <div className="text-left mb-8 md:mb-32 max-w-5xl mx-auto">
        <h1 className="text-[40px] md:text-6xl font-extrabold leading-tight">TYPOGRAPHY <span className="">&</span></h1>
        <h2 className="text-[40px] md:text-6xl italic font-light mt-0">CREATIVITY</h2>
        <p className="text-3xl md:text-2xl font-light mt-6">
          <span className="tracking-wider">CREATES DIGITAL</span> <br />
          <span className="tracking-widest font-semibold">EXPERIENCES</span>
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-8 md:mb-24">
        <div className="w-[360px] h-[240px] bg-gray-700 rounded-xl"></div>
        <div className="w-[360px] h-[240px] bg-gray-700 rounded-xl"></div>
      </div>

      {/* Who Am I Section */}
      <div className="w-full grid md:grid-cols-3 gap-8 md:gap-16">
        <div className="md:col-span-2">
          <h2 className="text-6xl md:text-4xl font-bold  mb-4 md:mb-6">WHO AM I?</h2>
          <p className="leading-relaxed mb-6 text-lg">
            I’m Aditya, a Computer And Communication Student At LNMIIT Jaipur, Driven By Creativity And A Passion For Blending Design With Technology. As A Designer, I Love Bringing Ideas To Life Through Motion And Design.
          </p>
          <p className="leading-relaxed mb-6 text-lg">
            Movement, Both In Design And Life, Keeps Me Inspired—Whether It’s Gaming, Football, Or Simply Walking Outside. I Believe That Staying Energized And Adaptable In All Aspects Of Life Fuels My Creativity And Approach To Problem-Solving.
          </p>
          <p className="leading-relaxed text-lg">
            A Huge Sci-Fi Fan, I Draw Inspiration From Cyberpunk And Arcane, Fascinated By Their World-Building And Futuristic Ideas. Just As These Stories Push Creative Boundaries, I Strive To Craft Digital Experiences That Captivate And Inspire. I Thrive In Dynamic Environments, Always Eager To Learn, Adapt, And Innovate In The Ever-Evolving World Of Technology.
          </p>
        </div>

        {/* Sidebar Info Section */}
        <div className="flex flex-col gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl md:text-xl font-bold mb-3">HONORS & AWARDS</h3>
            <ul className="text-base leading-relaxed list-disc ml-5">
              <li>Google GEN AI Hackathon Top 5 (2024)</li>
              <li>MNIT Web-A-Thon Runner Up (2024)</li>
              <li>Informatica For All/GenAI Finalist (2025)</li>
              <li>LNMIIT Hackathon Winner (2023)</li>
              <li>Oasis’23 Hackathon Finalist</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">SKILLS</h3>
            <ul className="text-base leading-relaxed grid grid-cols-2  md:gap-y-2 md:gap-x-6">
              <li>Figma</li>
              <li>GSAP</li>
              <li>Framer Motion</li>
              <li>React</li>
              <li>Redux Toolkit</li>
              <li>Tailwind CSS</li>
              <li>Firebase</li>
              <li>Git</li>
              <li>Vercel</li>
              <li>APIs</li>
              <li>C++</li>
              <li>C</li>
              <li>REST APIs</li>
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>Postman</li>
              <li>Jira</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Netlify</li>
              <li>Render</li>
              <li>Python</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About