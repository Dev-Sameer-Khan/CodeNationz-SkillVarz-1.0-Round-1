import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

const Landing = () => {

    const model2 = useGLTF("/model2.glb");
    const group = useRef(null);

    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{
        model2.scene.rotation.x = 0.40;
        model2.scene.rotation.y = 0.10;

        gsap.to(model2.scene.rotation,{
            duration: 10,
            ease : "none",
            y: -Math.PI * 2,
            willChange: "transform",
          scrollTrigger :{
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub : .3
          }
        },"a")
        gsap.to(model2.scene.position,{
          duration: 10,
          ease : "none",
          y: -0.04,
          willChange: "transform",
          scrollTrigger :{
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub : .3
          }
        },"a")

    },[])

  return (
    <div
          className="canvas-container w-full h-screen fixed top-0 left-0"
        >
          <Canvas>
            {/* <OrbitControls /> */}
            <group ref={group} scale={15} position={[0, 0.3, 0]}>
              <Environment
                files={
                  "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_03_1k.hdr"
                }
              />
              <primitive object={model2.scene} />
            </group>
          </Canvas>
        </div>
  )
}

export default Landing