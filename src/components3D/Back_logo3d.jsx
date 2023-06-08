import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export function Back_logo(props) {

    const bodyRef = useRef()
    const arist1Ref = useRef()
    const arist2Ref = useRef()
    const { nodes, materials } = useGLTF("/Back_logo.glb");
    const data = useScroll()

    
  useFrame((state, delta) => {
   
      gsap.to(bodyRef.current.rotation, {
        x: state.mouse.x / 4,
        y: state.mouse.y / 4
      })
      gsap.to(arist1Ref.current.rotation, {
        x: state.mouse.y / 4,
        y: state.mouse.x / 4
      })
      gsap.to(arist2Ref.current.rotation, {
        x: -state.mouse.x / 4,
        y: -state.mouse.y / 4
      })
   
    })

    return (
        <group {...props} dispose={null}
            scale={[0.002,0.002,0.001]}
            position={[0, 0, -55]}
        >
            <mesh
             scale={[1,1,0.01]}
                ref={bodyRef}
                castShadow
        
                geometry={nodes["Loft-Mat"].geometry}
                material={materials.Mat}
            >
                <meshStandardMaterial
                    color={"rgb(180,150,180)"}
                    metalness={0.7}
                    roughness={0.6}
                />
            </mesh>
            <mesh
             scale={[1.2,1.2,0.01]}
                ref={arist1Ref}
             
                castShadow
         
                geometry={nodes["Loft-Mat2"].geometry}
                material={materials["Mat.2"]}
            >
                <meshStandardMaterial
                    color={"rgb(150,250,180)"}
                    metalness={0.5}
                    roughness={0.35}
                />
            </mesh>
            <mesh
             scale={[1.1,1.1,0.01]}
                ref={arist2Ref}               
                castShadow
                receiveShadow
                geometry={nodes["Loft-Mat1"].geometry}
                material={materials["Mat.1"]}
            >
                <meshStandardMaterial
                    color={"rgb(250,150,10)"}
                    metalness={0.5}
                    roughness={0.35}
                />
            </mesh>
        </group>
    );
}

useGLTF.preload("/Back_logo.glb");