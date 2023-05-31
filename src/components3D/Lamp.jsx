
import React, { useRef, useState } from "react";
import { useGLTF, useScroll, useCursor } from "@react-three/drei";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";

export function Lamp(props) {
    const { lightProps } = props
    const { nodes, materials } = useGLTF("/Lamp.gltf");
    const data = useScroll()
    const groupRef = useRef()
    const [intensity, setIntensity] = useState(false)
    const [pointCursor, setPointCursor] = useState(false)
    const buttonLightRef = useRef()
    useCursor(pointCursor)
    useFrame(() => {
        data.range(0, 2 / 2) > 0.95 ?
            gsap.to(groupRef.current.position, {
                x: -0.8,
                duration: 2
            })
            :
            gsap.to(groupRef.current.position, {
                x: -2,
                duration: 5
            })
    })

    const light = (() => {

        lightProps(intensity)
        setIntensity(!intensity)
        if (intensity) {
            gsap.to(buttonLightRef.current.rotation, {
                z: 0.2
            })
            setIntensity(0)
        } else {
            setIntensity(1.5)
            gsap.to(buttonLightRef.current.rotation, {
                z: -0.2
            })
        }
    })
    return (
        <group {...props} dispose={null}
            onPointerOver={() => setPointCursor(true)}
            onPointerOut={() => setPointCursor(false)}
            onClick={() => light()}
            ref={groupRef}
            position={[-0.7, -1.325, -55]}
            rotation={[0.07, 0.1, 0]}
            scale={0.007}
        >
            <pointLight
                position={[25, 55, 2.5]}
                shadow-bias={0.00001}
                decay={2}
                distance={2}
                intensity={intensity}
                shadow-mapSize={2048}
            />
            <pointLight
                position={[-100, 40, 2.5]}
                shadow-bias={0.000001}
                decay={2}
                distance={5}
                intensity={intensity}
                shadow-mapSize={4048}
                castShadow
            />
            <group
                name="flexible"
                position={[-0.61, 15.47, -4.58]}
                rotation={[-Math.PI, 0.01, -Math.PI]}
            >
                <mesh
                    name="Recorrido"
                    geometry={nodes.Recorrido.geometry}
                    position={[0, -15.47, 0]}
                >
                    <meshStandardMaterial
                        color={"rgb(0,0,0)"}
                        roughness={0.5}
                    />
                </mesh>
            </group>
            <group
                name="lampara"
                position={[12.47, 58.37, -4.41]}
                rotation={[3.14, 0.01, -3.04]}
            >
                <mesh
                    name="Cápsula1"
                    geometry={nodes.Cápsula1.geometry}
                    material={nodes.Cápsula1.material}
                    position={[-5.94, 1.37, -0.01]}
                    rotation={[0, 0, 1.77]}
                >
                    <meshStandardMaterial
                        color={"rgb(170,125,50)"}
                        roughness={0.5}
                    />
                </mesh>
                <mesh
                    name="Cápsula"
                    geometry={nodes.Cápsula.geometry}
                    material={nodes.Cápsula.material}
                    position={[2.22, 2.14, 0]}
                    rotation={[0, 0, 0.26]}
                >
                    <meshStandardMaterial
                        color={"rgb(170,125,50)"}
                        roughness={0.5}
                    />
                </mesh>
                <mesh
                    name="Cilindro"
                    geometry={nodes.Cilindro.geometry}
                    material={nodes.Cilindro.material}
                    position={[3.72, -3.5, 0]}
                    rotation={[0, 0, 0.26]}
                >
                    <meshStandardMaterial
                        color={"rgb(170,175,240)"}
                        roughness={1.5}
                    />
                </mesh>
                <mesh
                    name="Cilindro1"
                    geometry={nodes.Cilindro1.geometry}
                    material={nodes.Cilindro1.material}
                    position={[7.24, -57.13, 0.01]}
                    rotation={[0, 0, -0.1]}
                >
                    <meshStandardMaterial
                        color={"rgb(170,175,250)"}
                        roughness={2}
                        metalness={0.8}
                    />
                </mesh>
            </group>
            <group
                name="base"
                position={[-0.38, -1.26, -5.77]}
                rotation={[-Math.PI, 0.01, -Math.PI]}
            >
                <group
                    position={[0, -0.5, -15]}
                    scale={2}
                >
                    <mesh
                        ref={buttonLightRef}
                        name="Cubo1"
                        geometry={nodes.Cubo1.geometry}
                        material={nodes.Cubo1.material}
                        position={[0.54, 1.25, 3.2]}
                        rotation={[0.01, 0.02, -0.15]}
                    >
                        <meshStandardMaterial
                            color={"rgb(170,125,50)"}
                            roughness={2}
                        />
                    </mesh>
                    <mesh
                        name="Cubo"
                        geometry={nodes.Cubo.geometry}
                        material={nodes.Cubo.material}
                        position={[0.54, 0.38, 3.2]}
                    >
                        <meshStandardMaterial
                            color={"rgb(70,75,50)"}
                            roughness={2}
                            metalness={0.8}
                        />
                    </mesh>
                </group>
                <mesh
                    scale={1.4}
                    name="Cilindro_1"
                    geometry={nodes.Cilindro_1.geometry}
                    material={nodes.Cilindro_1.material}
                    position={[0.39, 0.18, -2.14]}
                >
                    <meshStandardMaterial
                        color={"rgb(170,125,50)"}
                        roughness={2}
                        metalness={0.8}
                    />
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload("/Lamp.gltf");