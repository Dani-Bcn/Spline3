import React, { useRef } from "react";
import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { gsap } from "gsap";

export function Title3d(props) {
  const { nodes, materials } = useGLTF("/NombreDani.gltf");

  const groupRef = useRef()
  const dRef = useRef()
  const pRef = useRef()
  const data = useScroll()
  const a_iRef = useRef()
  const e_zRef = useRef()

  useFrame((state, delta) => {
    if (data.range(0, 2 / 2) < 0.1) {
      gsap.to(groupRef.current.rotation, {
        x: state.mouse.y / 4,
        y: state.mouse.x / 4
      })
    } else {
      gsap.to(groupRef.current.rotation, {
        x: 0,
        y: 0
      })
    }

    a_iRef.current.children[0].material.opacity = 1 - data.range(0, 2 / 2) * 3
    a_iRef.current.children[1].material.opacity = 1 - data.range(0, 2 / 2) * 3
    a_iRef.current.children[2].material.opacity = 1 - data.range(0, 2 / 2) * 3
    e_zRef.current.children[0].material.opacity = 1 - data.range(0, 2 / 2) * 3
    e_zRef.current.children[1].material.opacity = 1 - data.range(0, 2 / 2) * 3
    e_zRef.current.children[2].material.opacity = 1 - data.range(0, 2 / 2) * 3
    e_zRef.current.children[3].material.opacity = 1 - data.range(0, 2 / 2) * 3    
    a_iRef.current.position.y = 1 - data.range(0, 2 / 2) * 600
    e_zRef.current.position.y = 1 - data.range(0, 2 / 2) * 600
    
    pRef.current.position.y = 0 - data.range(0, 2 / 2) * 385.5
    pRef.current.position.x = - data.range(0, 2 / 2) * 208.5
    pRef.current.scale.x = 1 - data.range(0, 2 / 2) / 1.4
    pRef.current.scale.y = 1 - data.range(0, 2 / 2) / 1.5
    pRef.current.scale.z = 1 - data.range(0, 2 / 2) / 1.001
    dRef.current.position.y = 0 - data.range(0, 2 / 2) * 628
    dRef.current.position.x = 0 - data.range(0, 2 / 2) * 330
    dRef.current.scale.x = 1 - data.range(0, 2 / 2) / 1.8
    dRef.current.scale.y = 1 - data.range(0, 2 / 2) / 1.8
    dRef.current.scale.z = 1 - data.range(0, 2 / 2) / 1.001

  })

  return (
    <group {...props} dispose={null}
      ref={groupRef}
      scale={0.0013}
      position={[0, 0.07, -54.7]}
    >
      <pointLight
        position={[0, -50, 53]}
        shadow-bias={0.0001}
        decay={1}
        distance={1}
        intensity={1}
        shadow-mapSize={2048}
      />
      <group position={[-273, 0, 0]}>
        <mesh
          ref={dRef}
          castShadow
          geometry={nodes.D.geometry}
        >
          <meshStandardMaterial
        
            color={"rgb(250,200,120)"}
            metalness={0.3}
          />
        </mesh>
        <group
          ref={a_iRef}
        >
          <mesh
            castShadow
            geometry={nodes.a.geometry}
            position={[190.63, 0, 0]}
          >
            <meshStandardMaterial
              transparent
              color={"rgb(200,200,250)"}
              metalness={0.3}
            />
          </mesh>
          <mesh
            castShadow
            geometry={nodes.n.geometry}
            position={[345.21, 0, 0]}
          >
            <meshStandardMaterial
              transparent
      
              color={"rgb(200,200,250)"}
              metalness={0.3}
            />
          </mesh>
          <mesh
            castShadow
            geometry={nodes.i.geometry}
            position={[495.02, 0, 0]}
          >
            <meshStandardMaterial
              transparent
       
              color={"rgb(200,200,250)"}
              metalness={0.3}
            />
          </mesh>
        </group>
      </group>
      <group position={[-378.71, -241.31, 0]}>
        <mesh
          ref={pRef}
          castShadow
          geometry={nodes.P.geometry}
          material={nodes.P.material}
        >
          <meshStandardMaterial
  
            color={"rgb(250,200,120)"}
            metalness={0.3}
          />
        </mesh>
        <group
          ref={e_zRef}
        >
          <mesh
            castShadow
            geometry={nodes.é.geometry}
            material={nodes.é.material}
            position={[182.62, 0, 0]}
          >
            <meshStandardMaterial
              transparent
 
              color={"rgb(200,200,250)"}
              metalness={0.3}
            />
          </mesh>
          <mesh
            castShadow
            geometry={nodes.r.geometry}
            material={nodes.r.material}
            position={[319.63, 0, 0]}
          >
            <meshStandardMaterial
              transparent
     
              color={"rgb(200,200,250)"}
              metalness={0.3}
            />
          </mesh>
          <mesh
            castShadow
            geometry={nodes.e.geometry}
            material={nodes.e.material}
            position={[469.24, 0, 0]}
          >
            <meshStandardMaterial
              transparent

              color={"rgb(200,200,250)"}
              metalness={0.3}
            />
          </mesh>
          <mesh
            castShadow
            geometry={nodes.z.geometry}
            material={nodes.z.material}
            position={[606.25, 0, 0]}
          >
            <meshStandardMaterial
              transparent
     
              color={"rgb(200,200,250)"}
              metalness={0.3}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/NombreDani.gltf");