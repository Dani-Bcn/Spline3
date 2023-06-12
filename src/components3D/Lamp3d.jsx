
import React, { useRef, useState } from "react";
import { Environment, useGLTF } from "@react-three/drei";
import { useCursor } from "@react-three/drei";

export function Lamp3d(props) {

  const [activeLight, setActiveLaight] = useState(false)
  const [hover, setHover] = useState(false)

  useCursor(hover)

  const { nodes, materials } = useGLTF("/Lamp.glb");
  return (
    <group {...props} dispose={null}
      position={[-0.8, -1.325, -55]}
      rotation={[0.07, 0.1, 0]}
      scale={0.007}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={() => setActiveLaight(!activeLight)}
    >

      {
        activeLight ?
          <>
            <Environment
              preset={"city"}
            />
            <pointLight
              castShadow
              position={[45, 70, -5]}
              intensity={150}
              distance={5}
              shadow-bias={0.00001}
              decay={50}
            />
            <pointLight
              position={[-7, 100, 0]}
              castShadow
              intensity={5}
              distance={33}
              shadow-bias={0.00001}
              decay={75}
            />
          </>
          :
          <>
            <Environment
              preset={"night"}
            />
            <pointLight
              castShadow
              intensity={0}
            />
          </>
      }
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lathe.geometry}
          material={materials.Mat}
          position={[22.84, 68.28, 0]}
          rotation={[0, 0, 1.36]}
          material-color={"rgb(100,100,180)"}
          material-roughness={0.15}
        />
        <group position={[0, 21.96, 0]}>
          <group position={[0, -21.96, 0]}>
            <mesh

              castShadow
              receiveShadow
              geometry={nodes.Sweep_2.geometry}
              material={materials["Mat.3"]}
              material-color={"rgb(50,50,50)"}
              material-roughness={0.3}
            />
          </group>
        </group>
        <group

          position={[0.24, -1.26, -2.21]}
          rotation={[-Math.PI, 0.01, -Math.PI]}
        >
          <mesh

            castShadow
            receiveShadow
            geometry={nodes.Cubo.geometry}
            material={materials.Mat}
            position={[0.55, -0.04, -8]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo1.geometry}
            material={materials["Mat.1"]}
            position={[0.64, 2.16, -8]}
            rotation={[0.01, 0.02, -0.15]}
            material-color={"rgb(190,150,20)"}
            material-roughness={0.5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cilindro.geometry}
            material={materials["Mat.1"]}
            position={[0.39, 0.18, -2.14]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube.geometry}
          material={materials.Mat}
          position={[8.61, 69.55, 0]}
          rotation={[0, 0, -0.87]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube1.geometry}
          material={materials.Mat}
          position={[-0.04, 0.85, 0]}
          rotation={[0, 0, -0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Mat.1"]}
          position={[10.2, 70.78, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Lamp.glb");
