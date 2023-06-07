import React, { useRef } from "react";
import { Environment, useGLTF } from "@react-three/drei";

export function Lamp(props) {
    const { nodes, materials } = useGLTF("/Lamp.glb");
    return (
        <group {...props} dispose={null}
            position={[-0.7, -1.325, -55]}
            rotation={[0.07, -3, 0]}
            scale={0.015}
        >
            <Environment
                preset="city"
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
                    color={"rgb(10,125,150)"}
                    roughness={0.5}
                    metalness={0.2}
                />

            </mesh>
            <pointLight
                castShadow
            />
        </group>
    );
}

useGLTF.preload("/Lamp.glb");