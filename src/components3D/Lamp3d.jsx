import React, { useRef } from "react";
import { Environment, SpotLight, useGLTF } from "@react-three/drei";


export function Lamp3d(props) {
  const { nodes, materials } = useGLTF("/Lamp.glb");
  return (
    <group 
      scale={0.5}
    {...props} dispose={null}>

      
<spotLight
          intensity={0.5}
            position={[0,0,10]}
          />

    
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tube1.geometry}
        material={materials.Mat}
        position={[-0.039, 0.854, 0]}
        rotation={[0, 0, -0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Mat.1"]}
        position={[10.203, 70.775, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tube.geometry}
        material={materials.Mat}
        position={[8.609, 69.552, 0]}
        rotation={[0, 0, -0.87]}
      />
      <group position={[0, 21.962, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sweep_2.geometry}
          material={materials["Mat.3"]}
          position={[0, -21.962, 0]}
        />
      </group>
      <group
        position={[0.245, -1.262, -2.207]}
        rotation={[-Math.PI, 0.014, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo1.geometry}
          material={materials["Mat.1"]}
          position={[0.64, 2.155, 4.816]}
          rotation={[0.008, 0.022, -0.146]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo.geometry}
          material={materials.Mat}
          position={[0.555, -0.042, 4.813]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro.geometry}
          material={materials["Mat.1"]}
          position={[0.392, 0.184, -2.142]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lathe.geometry}
        material={materials.Mat}
        position={[22.835, 68.276, 0]}
        rotation={[0, 0, 1.363]}
      />
    </group>
  );
}

useGLTF.preload("/Lamp.glb");