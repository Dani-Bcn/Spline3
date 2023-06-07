import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";

export function Calendar3d(props) {

  const { nodes, materials } = useGLTF("/Calendar.gltf");
  const arrayNumsToroides = new Array(10).fill()

  const MaterialStandardToroide = (() => {
    return (
      <meshStandardMaterial
        color={"rgb(55,55,55)"}
        roughness={0.15}
      />
    )
  })

  return (
    <group {...props} dispose={null}
      scale={0.022}
      rotation={[0, -0.5, 0]}
      position={[0, -0.5, 0]}
    >
      <mesh
        receiveShadow
        castShadow
        position={[0, -94, 0]}
        rotation={[-1.59, 0, 0]}
        scale={1500}
      >
        <planeGeometry />
        <MeshReflectorMaterial
          color={"rgb(255,255,255)"}
          resolution={2042}
          blur={[2000, 1550]}
          roughness={0.9}
          mixBlur={0.5}
        />
      </mesh>

      {
        arrayNumsToroides.map((e, i) => {
          return (
            <group key={i}
              name="Clonador"
              position={[-153.93 + i * 34, 90.59, -36.92]}
              rotation={[0, 0, -Math.PI / 2]}
            >
              <mesh
                name="Toroide_0"
                castShadow
                receiveShadow
                geometry={nodes.Toroide_0.geometry}
                material={nodes.Toroide_0.material}
              >
                <MaterialStandardToroide />
              </mesh>
            </group>
          )
        })
      }

      <mesh
        name="Cubo_13"
        castShadow
        geometry={nodes.Cubo_13.geometry}
        material={nodes.Cubo_13.material}
        rotation={[-0.39, 0, 0]}
      >
        <meshStandardMaterial
          transparent
          opacity={0.5}
          color={"rgb(150,150,255)"}
        />
      </mesh>
      <mesh
        name="Cubo1"
        scale={[1, 1, 0.5]}
        receiveShadow
        geometry={nodes.Cubo1.geometry}
        material={nodes.Cubo1.material}
        position={[0, -93.24, -37.53]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh
        name="Cubo"
        receiveShadow
        geometry={nodes.Cubo.geometry}
        material={nodes.Cubo.material}
        position={[0, -1.16, -75.25]}
        rotation={[0.37, 0, 0]}
      >
        <meshStandardMaterial
          transparent
          opacity={1}
          roughness={8}
          metalness={1.4}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Calendar.gltf");