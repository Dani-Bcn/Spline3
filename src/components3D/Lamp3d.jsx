import React, { useRef } from "react";
import {
  Environment,
  OrbitControls,
  SpotLight,
  useGLTF,
} from "@react-three/drei";
import { PointLight } from "three";

export function Lamp3d(props) {
  const { nodes, materials } = useGLTF("/Lamp.glb");
  return (
    <group
      {...props}
      dispose={null}
      scale={0.005}
      rotation={[0, 0, 0]}
      position={[-0.7, -1.335, -55]}
    >
      <group 
      position={[20,50,-200]}
      rotation={[-5,5,5]}>
        <pointLight/>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tube1.geometry}
        material={materials.Mat}
        position={[0, 0.9, 0]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Mat.1"]}
        position={[10.2, 70.8, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tube.geometry}
        material={materials.Mat}
        position={[8.6, 69.6, 0]}
        rotation={[0, 0, -0.9]}
      />
      <group position={[0, 22, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sweep_2.geometry}
          material={materials["Mat.3"]}
          position={[0, -22, 0]}
        />
      </group>
      <group position={[0.2, -1.3, -2.2]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo1.geometry}
          material={materials["Mat.1"]}
          position={[0.6, 2.2, 4.8]}
          rotation={[0, 0, -0.1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo.geometry}
          material={materials.Mat}
          position={[0.6, 0, 4.8]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro.geometry}
          material={materials["Mat.1"]}
          position={[0.4, 0.2, -2.1]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lathe.geometry}
        material={materials.Mat}
        position={[22.8, 68.3, 0]}
        rotation={[0, 0, 1.4]}
      />
    </group>
  );
}

useGLTF.preload("/Lamp.glb");
