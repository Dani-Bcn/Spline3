
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
        duration: 2
      })
      :
      gsap.to(groupRef.current.position, {
        x: 1.2,
        duration: 2
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
        {/* nieve */}
        {/*  <group
          position={[-1.49, -98.14, -0.84]}
          rotation={[0, 0, -1.01]}
          scale={0.84}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость503.geometry}
            material={nodes.Плоскость503.material}
            position={[-151.71, -31.18, -20.22]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость502.geometry}
            material={nodes.Плоскость502.material}
            position={[-92.95, 7.16, 21.59]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость501.geometry}
            material={nodes.Плоскость501.material}
            position={[-60.86, -83.26, 17.55]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость500.geometry}
            material={nodes.Плоскость500.material}
            position={[-147.31, -63.84, 46.76]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость499.geometry}
            material={nodes.Плоскость499.material}
            position={[-90.1, -48.11, 8.27]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость498.geometry}
            material={nodes.Плоскость498.material}
            position={[-61.75, -10.83, -53.87]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость497.geometry}
            material={nodes.Плоскость497.material}
            position={[-21.47, 36.96, -12.97]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость496.geometry}
            material={nodes.Плоскость496.material}
            position={[-11.83, 96.83, -22.61]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость495.geometry}
            material={nodes.Плоскость495.material}
            position={[-63.87, 70.57, -61.7]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость494.geometry}
            material={nodes.Плоскость494.material}
            position={[25.54, 74.74, 23.68]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость493.geometry}
            material={nodes.Плоскость493.material}
            position={[28.22, 130.17, -19.04]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость492.geometry}
            material={nodes.Плоскость492.material}
            position={[66.06, 147.48, -36.57]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость491.geometry}
            material={nodes.Плоскость491.material}
            position={[36.62, 198.9, 35.69]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость490.geometry}
            material={nodes.Плоскость490.material}
            position={[-2.82, 157.78, 65.14]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость489.geometry}
            material={nodes.Плоскость489.material}
            position={[64.14, 178.36, 64.92]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость488.geometry}
            material={nodes.Плоскость488.material}
            position={[-103.94, -100.63, -3.11]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость.geometry}
            material={nodes.Плоскость.material}
            position={[-99.72, -80.81, 64.92]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Плоскость1.geometry}
            material={nodes.Плоскость1.material}
            position={[-114.72, -39.18, 64.92]}
          />
        </group> */}
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
