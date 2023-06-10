import React, { useEffect, useRef, useState } from "react";
import { Environment, useGLTF, useCursor } from "@react-three/drei";

export function Lamp(props) {
    const { nodes, materials } = useGLTF("/Lamp.glb");
    const [intensityLight, setIntensityLight] = useState(0)
    const [activeLigth, setActiveLigh] = useState(false)
    const [hover, setHover] = useState(false)
    useCursor(hover)

    useEffect(() => {
        activeLigth ?
            setIntensityLight(2)
            :
            setIntensityLight(0)
    }, [activeLigth])

    return (
        <group {...props} dispose={null}
            position={[-0.8, -1.325, -55]}
            rotation={[0.07, -3, 0]}
            scale={0.015}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            onClick={() => setActiveLigh(!activeLigth)}
        >
            <Environment
                preset={"night"}
            />
            <group position={[0, 8.76, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder.geometry}
                    position={[0, 8.76, 0]}
                >
                    <meshStandardMaterial
                        color={"rgb(220,125,150)"}
                        roughness={0.5}
                        metalness={0.5}
                    />
                </mesh>
            </group>
            <group
                position={[0.24, -1.26, -2.21]}
                rotation={[-Math.PI, 0.01, -Math.PI]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo1.geometry}
                    material={nodes.Cubo1.material}
                    position={[0.54, 2, 3.2]}
                    rotation={[0.01, 0.02, -0.15]}
                >
                    <meshStandardMaterial
                        color={"rgb(220,125,150)"}
                        roughness={0.5}
                        metalness={0.5}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo.geometry}
                    material={nodes.Cubo.material}
                    position={[0.54, 1, 3.2]}
                >
                    <meshStandardMaterial
                        color={"rgb(220,125,150)"}
                        roughness={0.5}
                        metalness={0.5}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cilindro.geometry}
                    material={nodes.Cilindro.material}
                    position={[0.39, 1, -2.14]}
                    scale={0.8}
                >
                    <meshStandardMaterial
                        color={"rgb(20,125,150)"}
                        roughness={0.5}
                        metalness={0.5}
                    />
                </mesh>
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere.geometry}
                material={nodes.Sphere.material}
                position={[-11.09, 34.82, 0]}
            >
                <meshStandardMaterial
                    color={"rgb(220,175,150)"}
                    roughness={0.4}
                    metalness={0.5}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone.geometry}
                material={nodes.Cone.material}
                position={[-16.4, 33.64, 0]}
                rotation={[0, 0, 0.2]}
            >
                <meshStandardMaterial
                    color={"rgb(10,15,50)"}
                    roughness={0.5}
                    metalness={0.2}
                />
            </mesh>
            <pointLight
                position={[-20, 30, -50]}
                castShadow
                intensity={intensityLight}
                decay={3.6}
                distance={1.8}
                shadow-bias={0.00001}
            />
            <pointLight
                position={[-5, 35, -5]}
                distance={15}
                intensity={intensityLight}
                decay={20}
                castShadow
                shadow-bias={0.000001}
            />
            <pointLight
                position={[-20, 35, 0]}
                distance={15}
                intensity={intensityLight}
                decay={10}
                shadow-bias={0.000001}
            />
        </group>
    );
}

useGLTF.preload("/Lamp.glb");