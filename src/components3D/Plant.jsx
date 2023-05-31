import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";

export function Plant(props) {
    const { nodes, materials } = useGLTF("/Plant");
    return (
        <group {...props} dispose={null}
            position={[-0.4, -1.35, -55]}
            scale={0.12}
        >
            <group scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_2.geometry}
                    material={nodes.Cube_2.material}
                    position={[2.65, 128.53, 0.83]}
                    rotation={[-Math.PI, 0.96, -Math.PI]}
                    scale={0.26}
                >
                    <meshStandardMaterial
                        color={'rgb(1,120,1)'}
                        roughness={0.9}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_3.geometry}
                    material={nodes.Cube_3.material}
                    position={[10.91, 107.93, 12.13]}
                    rotation={[-0.11, -0.96, -0.06]}
                    scale={0.28}
                >
                    <meshStandardMaterial
                        color={'rgb(1,120,1)'}
                        roughness={0.9}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_4.geometry}
                    material={nodes.Cube_4.material}
                    position={[-19.58, 87.12, -8.64]}
                    rotation={[-3.12, 0.52, 2.87]}
                    scale={0.26}
                >
                    <meshStandardMaterial
                        color={'rgb(1,120,1)'}
                        roughness={0.9}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_5.geometry}
                    material={nodes.Cube_5.material}
                    position={[15, 96.23, 10.61]}
                    rotation={[-3.13, -0.1, -2.88]}
                    scale={0.28}
                >
                    <meshStandardMaterial
                        color={'rgb(1,120,1)'}
                        roughness={0.9}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={nodes.Cube.material}
                    position={[16, 93, -11.5]}
                    rotation={[0, 0.17, -0.17]}
                    scale={0.26}
                >
                    <meshStandardMaterial
                        color={'rgb(1,120,1)'}
                        roughness={0.9}
                    />
                </mesh>

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plant_Base.geometry}
                    material={nodes.Plant_Base.material}
                    position={[2.23, 30.14, -1.8]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 9]}
                    scale={[0.45, 0.46, 0.46]}
                >
                    <meshStandardMaterial
                        color={'rgb(10,120,120)'}
                        roughness={0.9}
                    />
                </mesh>

            </group>
        </group>
    );
}

useGLTF.preload("/Plant");