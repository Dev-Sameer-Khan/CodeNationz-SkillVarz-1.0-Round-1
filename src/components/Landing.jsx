import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react'

const Landing = () => {

    const model2 = useGLTF("/model2.glb");

    useEffect(()=>{
        model2.scene.rotation.x = 0.25;
    })

  return (
    <div
          className="canvas-container w-full h-screen bg-[#E9E8E8] text-black "
        >
          <Canvas>
            <OrbitControls   />
            <group scale={10}>
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