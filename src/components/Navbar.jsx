import React from "react";
import Dock from "./Dock";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const Navbar = () => {
  const items = [
    { icon: "", label: "Home", onClick: () => alert("Home!") },
    { icon: "", label: "Archive", onClick: () => alert("Archive!") },
    { icon: "", label: "Profile", onClick: () => alert("Profile!") },
    { icon: "", label: "Settings", onClick: () => alert("Settings!") },
  ];

  return (
    <nav className="fixed top-0 left-0 px-12 py-6 w-full h-screen z-10 flex justify-between flex-col pointer-events-auto">
      <div className="flex justify-between w-[90%]">
        <div className="logo text-[1.5vw]">Nimbus</div>
        <div>
          <h4 className="flex items-center gap-1">
            Based in India <span className="inline-block w-4"><img src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1742756992/libre-tech-drone_logo_r0cnuh.png" alt="" /></span> Drone
            Worldwide
          </h4>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-full h-full -translate-y-8">
        <div className="flex items-center -translate-x-28 justify-center flex-col">
            <h4 className="-rotate-90">Events,Architecture & Objects</h4>
        </div>
        <div className="flex h-screen items-center justify-between flex-col">
          <h4 className="underline font-semibold">EN</h4>
          <div className="flex items-center justify-center gap-2 -translate-y-12 cursor-pointer">
            <FaInstagram/>
           <FaPinterest/>
            <FaLinkedin/>
          </div>
        </div>
        </div>
      </div>
      <Dock items={items} className="cursor-pointer" />
    </nav>
  );
};

export default Navbar;
