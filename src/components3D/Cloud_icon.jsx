
import React, { useRef, useState } from "react";
import { useGLTF, useScroll, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export function Cloud_icon(props) {
  const { nodes, materials } = useGLTF("/Cloud.glb");
  const groupRef = useRef()
  const data = useScroll()
  const [hover, setHover] = useState(false)
  useCursor(hover)

  useFrame(() => {

    data.range(0, 2 / 2) > 0.95 ?
      gsap.to(groupRef.current.position, {
        x: 0.8,
        duration: 0.5
      })
      :
      gsap.to(groupRef.current.position, {
        x: 1.2,
        duration:0.5
      })
  })

  return (
    <group {...props} dispose={null}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      ref={groupRef}
      position={[0.8, -0.9, -55.3]}
      scale={[0.0005, 0.0005, 0.0005]}
      rotation={[0, 2.9, 0]}
    >
      <group rotation={[0, -1.56, 0]}>
        <mesh
          castShadow
          geometry={nodes.Esfera_1.geometry}
          material={materials.Mat}
          material-color={"rgb(195,195,195)"}
          material-roughness={0.5}
        />
      </group>
      <group position={[-7.51, -56.53, -10.93]}>      
        <group
          position={[0, 0, 0]}
          scale={[80, 80, 50]}
        >
          {/* luna */}
          <mesh
            castShadow
            receiveShadow
            position={[0, 200, 0]}
            geometry={nodes.luna.geometry}
            material={nodes.luna.material}
            material-color="rgb(240,250,0)"
          />
          {/* sol */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sol.geometry}
            material={nodes.sol.material}
            position={[0, 2, 0]}
          />
          <mesh>
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Cloud.glb");
