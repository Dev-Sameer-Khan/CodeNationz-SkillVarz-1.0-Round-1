import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Scene = () => {
  const model = useGLTF("/model.glb");
  const click = useRef(null);
  const sec = useRef(null);

useEffect(() => {
    if (model.scene) {
        model.scene.rotation.x += 0.25;
    }
}, [model.scene]);

  const handleClick = () => {
    gsap.to(sec.current, {
      opacity: 0,
      display: "none",
      duration: 1,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    if (model.scene) {
      gsap.to(model.scene.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }
  }, [model.scene]);

  return (
    <div
      ref={sec}
      className="canvas-container w-full h-screen bg-white text-black "
    >
      <Canvas>
        <group scale={10}>
          <Environment
            files={
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_03_1k.hdr"
            }
          />
          <primitive object={model.scene} />
        </group>
      </Canvas>
      <div
        ref={click}
        className="absolute top-16 left-0 w-full h-full flex justify-center items-center flex-col font-[ppneue] text-[1.3vw] max-[599px]:text-[3.3vw] cursor-pointer translate-y-10 leading-tight"
        onClick={handleClick}
      >
        <h1 className="pointer-events-auto">CLICK TO</h1>
        <h1 className="pointer-events-auto">START</h1>
      </div>
    </div>
  );
};

export default Scene;
