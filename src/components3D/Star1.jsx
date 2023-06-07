
import React, { useRef } from "react";
import { MeshReflectorMaterial, useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import img1 from '/img/Star3.png'

import { gsap } from "gsap";

export function Star1(props) {
  const { nodes, materials } = useGLTF("/Star1.gltf");
  const groupRef = useRef()
  const groupRef2 = useRef()
  const textureStar3 = useTexture(img1)

  const data = useScroll()
  useFrame((state,delta)=>{
    if (data.range(0, 2 / 2) < 0.1) {
    groupRef.current.rotation.y = -0 + state.mouse.y/5
    groupRef.current.rotation.x = -0 + state.mouse.x /5

    } else {
      gsap.to(groupRef.current.rotation, {
        x: 0,
        y: 0
      })
    }
    groupRef.current.position.y = 0 - data.range(0,2/2) *0.685
    groupRef.current.position.x = 0 - data.range(0,2/2) *0.78
    groupRef.current.scale.x = 0.001 - data.range(0,2/2) *0.00075
    groupRef.current.scale.y = 0.001 - data.range(0,2/2) *0.00075
    groupRef2.current.position.y = -5 + data.range(0,2/2) * 4
    groupRef.current.scale.z = 0.001 - data.range(0,2/2) *0.00075
  })

  return (
    <>
    <group {...props} dispose={null}
      scale={[0.001,0.001,0.001]}
      ref={groupRef}
      position={[0,0,-55]}
    >
      <mesh geometry={nodes.Extrusión_1.geometry} material={materials.Mat} >
        <meshStandardMaterial
          map={textureStar3}
        roughness={2.5}
        
          color={"rgb(175,175,200)"}      
        />
      </mesh>
    </group>
     <group {...props} dispose={null}
     ref={groupRef2}
     scale={[2,0.002,0.001]}     
     position={[0,-0.7,-55.35]}
   >
     <mesh 
     receiveShadow
     geometry={nodes.Extrusión_1.geometry} material={materials.Mat} >
       <meshStandardMaterial  
         map={textureStar3}
         blur={[500, 1000]}
         mixBlur={10}      
         roughness={2}
         resolution={2040}
        
        color={"rgb(230,220,75)"}
       />
     </mesh>
   </group>
   </>
  );
}

useGLTF.preload("/Star1.gltf");