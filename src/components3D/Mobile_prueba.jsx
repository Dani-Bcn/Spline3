import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mobile_prueba(props) {
  const { nodes, materials } = useGLTF("/Mobile.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[2.76, 6.75, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder3-Mat"].geometry}
          material={materials.Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder3-Mat1"].geometry}
          material={materials["Mat.1"]}
        />
      </group>
      <group position={[1.39, 6.75, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder2-Mat"].geometry}
          material={materials.Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder2-Mat1"].geometry}
          material={materials["Mat.1"]}
        />
      </group>
      <group position={[2.76, 8.23, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder1-Mat"].geometry}
          material={materials.Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder1-Mat1"].geometry}
          material={materials["Mat.1"]}
        />
      </group>
      <group position={[1.39, 8.23, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder-Mat"].geometry}
          material={materials.Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder-Mat1"].geometry}
          material={materials["Mat.1"]}
        />
      </group>
      <group position={[0, 0.01, 0]} scale={[1, 0.9, 1]}>
        <group position={[0, -0.01, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Loft-Material009"].geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Loft-Mat2"].geometry}
            material={materials["Mat.2"]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube4.geometry}
        material={materials["Material.009"]}
        position={[2.09, 7.5, -0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube3.geometry}
        material={materials.Mat}
        position={[-3.97, 5.1, 0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2.geometry}
        material={materials.Mat}
        position={[-3.97, 6.05, 0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube1.geometry}
        material={materials.Mat}
        position={[3.99, 3.9, 0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Mat}
        position={[3.99, 6.05, 0.22]}
      />
    </group>
  );
}

useGLTF.preload("/Mobile.glb");
