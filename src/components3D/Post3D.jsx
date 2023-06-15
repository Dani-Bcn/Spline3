import React, { useRef, useEffect } from "react";
import { useGLTF, MeshReflectorMaterial } from "@react-three/drei";
import { gsap } from "gsap";


export function Post3d(props) {
    const { nodes, materials } = useGLTF("/Post-box.glb");
    const topRef = useRef()
    const { activeAnimation } = props
    const { setActiveAnimation } = props
    console.log(activeAnimation)

    useEffect(() => {
        if (!activeAnimation) {
            gsap.to(topRef.current.rotation, {
                x: -120,
                y: 0,
                z: 0
            })
            gsap.to(topRef.current.position, {
                x: 0,
                y: -40,
                z: 81
            })
        }
        setTimeout(() => {
            setActiveAnimation(false)
            gsap.to(topRef.current.rotation, {
                x: -122.56,
                y: 0,
                z: 0
            })
            gsap.to(topRef.current.position, {
                x: 0,
                y: -40,
                z: 82
            })
        }, 1000)
    }, [activeAnimation])

    return (
        <group {...props} dispose={null}
            scale={0.006}
            position={[7, 0.7, 0]}
            rotation={[0.1, -0.5, 0]}
        >
            <mesh
                scale={[100, 100, 1]}
                rotation={[-1.555, -0, 0.4]}
                position={[0, -338, 0]}
            >
                <planeGeometry args={[50, 50]} />
                <MeshReflectorMaterial
                    blur={[500, 1500]}
                    resolution={2048}
                    mixBlur={5}
                    mixStrength={100}
                    roughness={2}
                    depthScale={1.2}
                    minDepthThreshold={0.3}
                    maxDepthThreshold={1.9}
                    color="#050505"
                    metalness={0.5}
                />
            </mesh>
            <group position={[53.12, -1.8, 27.1]} rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[-58.13, 12.07, 17.13]}>
                    <group position={[57.7, -7.97, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Extrude_1.geometry}
                            material={nodes.Extrude_1.material}
                        >
                            <meshStandardMaterial
                                color={"rgb(220,180,150)"}
                                roughness={0.5}
                            />
                        </mesh>
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Extrude1.geometry}
                        material={nodes.Extrude1.material}
                        position={[58.78, -7.97, 0]}
                    >
                        <meshStandardMaterial
                            color={"rgb(180,180,180)"}
                            roughness={0.5}
                        />
                    </mesh>
                </group>
            </group>
            <mesh
                ref={topRef}
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={nodes.Cylinder.material}
                position={[0, -39.97, 76.58]}
                rotation={[-122.4, 0, 0]}
            >
                <meshStandardMaterial
                    color={"rgb(12,120,180)"}
                    roughness={0.5}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder8.geometry}
                material={nodes.Cylinder8.material}
                position={[-56.78, -40.15, 77.74]}
            >
                <meshStandardMaterial
                    color={"rgb(180,180,180)"}
                    roughness={0.5}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder7.geometry}
                material={nodes.Cylinder7.material}
                position={[56.84, -40.15, 77.74]}
            >
                <meshStandardMaterial
                    color={"rgb(180,180,180)"}
                    roughness={0.1}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder6.geometry}
                material={nodes.Cylinder6.material}
                position={[54.8, -1.58, 27]}
            >
                <meshStandardMaterial
                    color={"rgb(180,180,180)"}
                    roughness={0.1}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder5.geometry}
                material={nodes.Cylinder5.material}
                position={[0, -38.96, -75.77]}
                rotation={[-Math.PI, 0, -Math.PI]}
            >
                <meshStandardMaterial
                    color={"rgb(12,120,180)"}
                    roughness={0.1}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder4.geometry}
                material={nodes.Cylinder4.material}
                position={[0, -54.87, 0]}
            >
                <meshStandardMaterial
                    color={"rgb(12,120,180)"}
                    roughness={0.1}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder3.geometry}
                material={nodes.Cylinder3.material}
                position={[0, -327.85, 0]}
            >
                <meshStandardMaterial
                    color={"rgb(250,150,100)"}
                    roughness={0.1}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder2.geometry}
                material={nodes.Cylinder2.material}
                position={[0, -333.92, 0]}
            >
                <meshStandardMaterial
                    color={"rgb(12,120,180)"}
                    roughness={0.6}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder1.geometry}
                material={nodes.Cylinder1.material}
                position={[0, -187.29, 0]}
            >
                <meshStandardMaterial
                    color={"rgb(120,120,120)"}
                    roughness={0.08}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1.geometry}
                material={nodes.Cube1.material}
                position={[0, -44.93, -2.48]}
            >
                <meshStandardMaterial
                    color={"rgb(50,50,80)"}
                    roughness={0.7}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Capsule.geometry}
                material={nodes.Capsule.material}
                position={[0, 0, 20.48]}
            >
                <meshStandardMaterial
                    color={"rgb(12,120,180)"}
                    roughness={0.2}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={nodes.Cube.material}
                position={[0, -41.28, -0.81]}
            >
                <meshStandardMaterial
                    color={"rgb(12,120,180)"}
                    roughness={0.6}
                />
            </mesh>
        </group>

    );
}


useGLTF.preload("/Post-box.glb");
