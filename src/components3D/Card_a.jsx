import React, { useRef, useState } from "react";
import { useGLTF, MeshReflectorMaterial, useCursor } from "@react-three/drei";


import { gsap } from "gsap";

export function Card_a(props) {

    const { nodes, materials } = useGLTF("/Card.glb");  
  
    const [hover, setHover] = useState(false)
    const aboutRef = useRef()
    const photoRef = useRef()
    useCursor(hover)

    const hoverOn = (() => {
        setHover(true)
        gsap.to(aboutRef.current.position, {
            y: 60
        })
        gsap.to(photoRef.current.position, {
            y: -120
        })
    })
    const hoverOff = (() => {
        setHover(false)
        gsap.to(aboutRef.current.position, {
            y: -40
        })
        gsap.to(photoRef.current.position, {
            y: -30
        })
    })

    return (
        <group {...props} dispose={null}
            scale={[0.18, 0.20, 0.03]}
            rotation={[0, 0, 0]}
            position={[-55, -80, -1]}
        >
            <group>                
                <group
                    position={[0, 120, 0]}
                    onPointerOver={() => hoverOn()}
                    onPointerOut={() => hoverOff()}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["icon-bg"].geometry}
                        material={nodes["icon-bg"].material}
                        position={[-10, -107.15, -38]}
                        rotation={[0, 0.009, 0]}
                        scale={[1, 1, 0.37]}
                    >
                        <MeshReflectorMaterial
                            blur={[1000, 2500]}
                            mixBlur={8}
                            metalness={0.25}
                            color={"rgb(170,120,120)"}
                       
                            roughness={0.9}
                      
                        />
                    </mesh>
                    <mesh
                        rotation={[0, 0.01, 0]}
                        castShadow
                        receiveShadow
                        geometry={nodes.Text.geometry}
                        material={nodes.Text.material}
                        position={[-4.47, -105.02, -34]}
                    >
                        <MeshReflectorMaterial
                            blur={[1000, 2000]}
                            mixBlur={5}
                            metalness={0.3}
                            color={"rgb(150,150,255)"}                       
                            roughness={1.2}            
                        />
                    </mesh>
                </group>
                <mesh
                    ref={aboutRef}
                    castShadow
                    receiveShadow
                    geometry={nodes["icon-bg_2"].geometry}
                    material={nodes["icon-bg_2"].material}
                    position={[-9.3, -150.31, -38.55]}
                    scale={[0.9, 1, 1]}
                >
                    <MeshReflectorMaterial
                        blur={[1000, 2500]}
                        transparent
                        opacity={1}
                        mixBlur={5}
                        metalness={0.2}
                        color={"rgb(170,120,120)"}          
                        roughness={1.2}
           
                    />
                </mesh>
                <mesh
                ref={photoRef}
                    position={[0, -50, -33.03]}
                    scale={[175, 175, 5]}
                >
                    <boxGeometry />
                    <MeshReflectorMaterial
                        blur={[1000, 2500]}
                        metalness={0.2}
                        color={"rgb(170,120,120)"}
                        emissiveIntensity={9}
                        roughness={1.2}
                
                    />
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload("/Card.glb");