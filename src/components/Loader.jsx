import React, { useEffect, useRef } from "react";
import Scene from "./Scene";
import gsap from "gsap";

const Loader = () => {
  return (
    <section className="w-full h-screen fixed top-0 left-0 z-20 flex justify-center items-center pointer-events-none">
      <Scene />
    </section>
  );
};

export default Loader;
