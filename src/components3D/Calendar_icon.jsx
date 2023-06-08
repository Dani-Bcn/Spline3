import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Text3D, useScroll, useCursor } from "@react-three/drei";
import font1 from '../fonts/Bebas_Regular.json'
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export function Calendar_icon(props) {  

    const { nodes, materials } = useGLTF("/Calendar_icon.glb");
   
    const fecha = new Date()
    const hoy = fecha.toDateString()
    const month = hoy.slice(3, 7).toUpperCase()
    const day = hoy.slice(8, 11)
    const year = hoy.slice(13, 15)
    const data = useScroll()
    const groupRef = useRef()
    const [hover, setHover] = useState()   

    useFrame(() => {
        data.range(0, 2 / 2) > 0.92 ?
            gsap.to(groupRef.current.position, {
                x: .8,
                duration: 1
            })
            :
            gsap.to(groupRef.current.position, {
                x: 1.2,
                duration: 2
            })
    })

    useCursor(hover)
    return (
        <group {...props} dispose={null}
            ref={groupRef}
            castShadow
            position={[.75, -0.65, -55.25]}
            scale={[0.08, 0.08, 0.5]}
            rotation={[0, -0.35, 0]}
        >
            <group
                castShadow
                name="letters"
                scale={[1, 1, 1]}
                position={[0.1, 0, 0]}
            >
                <Text3D
                    castShadow
                    position={[-0.85, 0, 0.02]}
                    rotation={[-0.1, 0, 0]}
                    font={font1}
                    scale={0.4}
                >
                    <meshStandardMaterial
                        color={"rgb(150,150,50)"}
                        roughness={0.5}
                    />
                    {month}
                </Text3D>
                <Text3D
                    castShadow
                    position={[0.15, 0, 0.02]}
                    font={font1}
                    scale={0.4}
                    rotation={[-0.1, 0, 0]}
                >
                    <meshStandardMaterial
                        color={"rgb(150,150,50)"}
                        roughness={0.5}
                    />
                    {year}
                </Text3D>
                <Text3D
                    castShadow
                    font={font1}
                    position={[-0.35, -0.65, 0.055]}
                    rotation={[-0.1, 0, 0]}
                    scale={0.5}
                >
                    <meshStandardMaterial
                        color={"rgb(150,150,50)"}
                        roughness={0.5}
                    />
                    {day}
                </Text3D>
            </group>
            <group position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus_3.geometry}
                    material={nodes.Torus_3.material}
                    position={[37.1, 68.76, -3.03]}
                    rotation={[-0.09, Math.PI / 2, 0]}
                    scale={[1, 2, 1]}
                >
                    <meshStandardMaterial
                        color={"rgb(150,10,50)"}
                        roughness={0.35}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus_3_1.geometry}
                    material={nodes.Torus_3_1.material}
                    position={[32.83, 68.76, -3.03]}
                    rotation={[-0.09, Math.PI / 2, 0]}
                    scale={[1, 2, 1]}
                >
                    <meshStandardMaterial
                        color={"rgb(150,10,50)"}
                        roughness={0.35}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus_2.geometry}
                    material={nodes.Torus_2.material}
                    position={[-36.48, 68.76, -3.03]}
                    rotation={[-0.09, Math.PI / 2, 0]}
                    scale={[1, 2, 1]}
                >
                    <meshStandardMaterial
                        color={"rgb(150,10,50)"}
                        roughness={0.3}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus.geometry}
                    material={nodes.Torus.material}
                    position={[-40.76, 68.76, -3.03]}
                    rotation={[-0.09, Math.PI / 2, 0]}
                    scale={[1, 2, 1]}
                >
                    <meshStandardMaterial
                        color={"rgb(150,10,50)"}
                        roughness={0.35}
                    />
                </mesh>
                <mesh
                    castShadow
                    geometry={nodes.Rectangle_4.geometry}
                    material={nodes.Rectangle_4.material}
                    position={[0, -6.63, -9.36]}
                >
                    <meshStandardMaterial
                        color={"rgb(150,150,50)"}
                        roughness={0.35}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rectangle_3.geometry}
                    material={nodes.Rectangle_3.material}
                    position={[0, -6.87, -3.27]}
                    rotation={[-0.03, 0, 0]}
                >
                    <meshStandardMaterial
                        color={"rgb(100,155,100)"}
                        roughness={0.35}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rectangle_2.geometry}
                    material={nodes.Rectangle_2.material}
                    position={[0, -6.44, 4.6]}
                    rotation={[-0.09, 0, 0]}
                >
                    <meshStandardMaterial
                        color={"rgb(100,100,155)"}
                        roughness={0.2}
                    />
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload("/Calendar_icon.glb");