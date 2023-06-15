import React, { useRef } from "react";
import { Environment, useGLTF } from "@react-three/drei";

export function Winter(props) {
  const { nodes, materials } = useGLTF("/Winter.glb");
  return (
    <group {...props} dispose={null}
      scale={0.0035}
      position={[1.6,-0.45,0]}
      rotation={[0.1,2.9,0]}    
    >
      <Environment
        preset="city"
      />
      <group position={[-127.21, 70.78, -53.6]} rotation={[0.11, -0.51, 0.28]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Sweep1-Mat1"].geometry}
          material={materials["Mat.1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Sweep1-Mat"].geometry}
          material={materials.Mat}
        />
      </group>
      <group position={[11.7, 176.6, -23.19]} rotation={[0.3, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sweep_1.geometry}
          material={materials["Mat.3"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Capsule2.geometry}
        material={materials["Mat.3"]}
        position={[-4.08, 175.89, -79.08]}
        rotation={[-0.01, 1.44, -0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere7.geometry}
        material={materials["Mat.2"]}
        position={[-13.35, 33.33, -76.28]}
        rotation={[0.64, -1.07, 0.57]}
        scale={[1.05, 0.86, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere6.geometry}
        material={materials["Mat.2"]}
        position={[-12.91, 72.21, -58.1]}
        rotation={[0.64, -1.07, 0.57]}
        scale={[1.05, 0.86, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere5.geometry}
        material={materials["Mat.2"]}
        position={[-11.47, 109.98, -54.07]}
        rotation={[0.64, -1.07, 0.57]}
        scale={[1.05, 0.86, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere3.geometry}
        material={materials["Mat.2"]}
        position={[-21.57, 195.03, -44.04]}
        rotation={[0.64, -1.07, 0.57]}
        scale={[1.05, 0.86, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Capsule1.geometry}
        material={materials["Mat.4"]}
        position={[-151.87, 161.19, 0]}
        rotation={[0, 0, 1.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude.geometry}
        material={nodes.Extrude.material}
        position={[-5.55, -78.95, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere4.geometry}
        material={materials["Mat.2"]}
        position={[6.71, 194.12, -44.9]}
        rotation={[0, -1.15, 0]}
        scale={[1.05, 0.86, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Capsule.geometry}
        material={materials["Mat.4"]}
        position={[140.01, 122.25, 0]}
        rotation={[0, 0, -1.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Mat.1"]}
        position={[-9.36, 9.66, 8.79]}
        rotation={[0, -1.15, 0]}
        scale={[0.88, 0.86, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere2.geometry}
        material={materials["Mat.1"]}
        position={[-4.7, 176.63, 2.1]}
        rotation={[0, -1.15, 0]}
        scale={[1.05, 0.86, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere1.geometry}
        material={materials["Mat.1"]}
        position={[-14.32, 97.45, 14.12]}
        rotation={[0, -1.15, 0]}
        scale={[1.08, 0.75, 1.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lathe.geometry}
        material={materials["Mat.4"]}
        position={[-12.15, 222.12, 7.66]}
        rotation={[0.48, -1.13, 0.35]}
      />
    </group>
  );
}

useGLTF.preload("/Winter.glb");