
import React, { useRef, useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import { useGLTF, useCursor } from "@react-three/drei";
import { gsap } from "gsap";

export function Dados_links(props) {
    const { nodes, materials } = useGLTF("/Dados_links.glb");
    const [hover, sethover] = useState(false)
    const navigate = useNavigate()
    const gitRef = useRef()
    const domestikaRef = useRef()
    const linkedinRef = useRef()
    
    useCursor(hover)
    const hoverLinkedinOn = (() => {
        gsap.to(linkedinRef.current.position, {
            z: 40
        })
        sethover(true)
    })
    const hoverLinkedinOff = (() => {
        sethover(false)
        gsap.to(linkedinRef.current.position, {
            z: 10
        })
    })
    const hoverGit_hubOn = (() => {
        sethover(true)
        gsap.to(gitRef.current.position, {
            z: 5
        })
    })
    const hoverGit_hubOff = (() => {
        sethover(false)
        gsap.to(gitRef.current.position, {
            z: -25
        })
    })
    const hoverDomestikaOn = (() => {
        sethover(true)
        gsap.to(domestikaRef.current.position, {
            z: 50
        })
    })
    const hoverDomestikaOff = (() => {
        sethover(false)
        gsap.to(domestikaRef.current.position, {
            z: 0
        })
    })
  
 
    return (
        <group {...props} dispose={null}
            position={[0.45, -1.293, -55]}
            scale={[0.0012, 0.0012, 0.001]}
            rotation={[0, -0.6, -0]}
        >
            <group
                onPointerOver={() => hoverDomestikaOn()}
                onPointerOut={() => hoverDomestikaOff()}
                onClick={() => window.location.href = 'https://www.domestika.org/es/nneodani'}
                rotation={[0, 0.1, 0.02]}
                position={[35, 82, -50.13]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo.geometry}
                    material={nodes.Cubo.material}
                    position={[0, 0, -22.13]}
                >
                    <meshStandardMaterial
                        color={"rgb(175,50,50)"}
                        roughness={0.8}
                    >
                    </meshStandardMaterial>
                </mesh>
                <mesh
                    ref={domestikaRef}
                    castShadow
                    receiveShadow
                    scale={[1, 1, 2]}
                    geometry={nodes.Extrusión1.geometry}
                    material={nodes.Extrusión1.material}
                    position={[0, 0, 0]}
                >
                    <meshStandardMaterial
                        color={"rgb(175,175,175)"}
                        roughness={0.5}
                    >
                    </meshStandardMaterial>
                </mesh>
            </group>
            <group
                onPointerOver={() => hoverGit_hubOn()}
                onPointerOut={() => hoverGit_hubOff()}
                onClick={() => window.location.href = 'https://github.com/Dani-Bcn'}
                rotation={[0.02, 0.2, -0.03]}
                position={[0, 1, -16.07]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo_1.geometry}
                    material={nodes.Cubo_1.material}
                    position={[0, 0, 17.07]}
                >
                    <meshStandardMaterial
                        color={"rgb(190,190,190)"}
                        roughness={0.9}
                    >
                    </meshStandardMaterial>
                </mesh>
                <mesh
                    ref={gitRef}
                    castShadow
                    receiveShadow
                    geometry={nodes.Forro.geometry}
                    material={nodes.Forro.material}
                    position={[0, 0, -25]}
                >
                    <meshStandardMaterial
                        color={"rgb(50,50,50)"}
                        roughness={0.2}
                    >
                    </meshStandardMaterial>
                </mesh>
            </group>
            <group
                onPointerOver={() => hoverLinkedinOn()}
                onPointerOut={() => hoverLinkedinOff()}h
            onClick={()=> window.location.href='Https://www.linkedin.com/in/daniperezbnc/' }
                position={[100.83, 2, -100.63]}
                rotation={[0.08, 1, -0.05]}
            >
                <group position={[-2.83, 0, 0]}
                    ref={linkedinRef}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Extrusión2.geometry}
                        material={nodes.Extrusión2.material}
                    >
                        <meshStandardMaterial
                            color={"rgb(150,150,150)"}
                            roughness={5}
                        >
                        </meshStandardMaterial>
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Extrusión1_1.geometry}
                        material={nodes.Extrusión1_1.material}
                    >
                        <meshStandardMaterial
                               color={"rgb(150,150,150)"}
                               roughness={5}
                        >
                        </meshStandardMaterial>
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Extrusión.geometry}
                        material={nodes.Extrusión.material}
                    >
                        <meshStandardMaterial
                              color={"rgb(150,150,150)"}
                              roughness={5}
                        >
                        </meshStandardMaterial>
                    </mesh>
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo_2.geometry}
                    material={nodes.Cubo_2.material}
                    position={[2.83, 0, -22.63]}
                >
                    <meshStandardMaterial
                        color={"rgb(50,100,200)"}
                        roughness={2}
                    >
                    </meshStandardMaterial>
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload("/Dados_links.glb");