import React, { useRef } from "react";
import { MeshReflectorMaterial, useGLTF } from "@react-three/drei";

export function Calendar3d(props) {
  const { nodes, materials } = useGLTF("/Calendar.glb");
  return (
    <group {...props} dispose={null}
        scale={[0.55,0.5,0.8]}
        position={[0.95,0,0]}
        rotation={[0,-0.4,0]}
    >
         <group position={[0, 0, 0.02]}>
        <mesh
          castShadow
         
          geometry={nodes.Cube1.geometry}
          material={nodes.Cube1.material}
          position={[0, 0, -1.04]}
          rotation={[Math.PI / 9, 0, 0]}
          >
          <meshStandardMaterial
              color={"rgb(50,50,85)"}
                    roughness={5}
          />
        </mesh>
        <mesh
          castShadow
      
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[0, 0, 1.04]}
          rotation={[-Math.PI / 9, 0, 0]}
          >
          <meshStandardMaterial
              color={"rgb(150,150,155)"}
              
              transparent
              opacity={0.5}

          />
        </mesh>
      </group>
      <group position={[0.01, 2.56, 0]}>
        <mesh
         
          receiveShadow
          geometry={nodes.Cilindro16.geometry}
          material={nodes.Cilindro16.material}
          position={[-4.56, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro15.geometry}
          material={nodes.Cilindro15.material}
          position={[-4, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro14.geometry}
          material={nodes.Cilindro14.material}
          position={[-3.42, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro13.geometry}
          material={nodes.Cilindro13.material}
          position={[-2.86, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro12.geometry}
          material={nodes.Cilindro12.material}
          position={[-2.27, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro11.geometry}
          material={nodes.Cilindro11.material}
          position={[-1.69, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro10.geometry}
          material={nodes.Cilindro10.material}
          position={[-1.13, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro9.geometry}
          material={nodes.Cilindro9.material}
          position={[-0.55, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro8.geometry}
          material={nodes.Cilindro8.material}
          position={[4.57, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro7.geometry}
          material={nodes.Cilindro7.material}
          position={[3.96, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro6.geometry}
          material={nodes.Cilindro6.material}
          position={[3.41, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro5.geometry}
          material={nodes.Cilindro5.material}
          position={[2.84, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro4.geometry}
          material={nodes.Cilindro4.material}
          position={[2.28, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro3.geometry}
          material={nodes.Cilindro3.material}
          position={[1.71, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro2.geometry}
          material={nodes.Cilindro2.material}
          position={[1.15, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro1.geometry}
          material={nodes.Cilindro1.material}
          position={[0.57, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro.geometry}
          material={nodes.Cilindro.material}
          position={[-0.01, 0, 0]}
        />
      </group>
      <group position={[-0.05, 2.10, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Recorrido.geometry}
          material={nodes.Recorrido.material}
          position={[0.03, 0, 0]}
          >
          <meshStandardMaterial
              color={"rgb(200,120,125)"}
              metalness={0.5}
              roughness={0.1}           
          />
        </mesh>
      </group>
    
        <mesh
    receiveShadow
        position={[0,-2.7,0]}
        scale={[70,120,100]}
        rotation={[-1.55,0,0]}
      >
        <planeGeometry/>
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={5}
          roughness={5}
          depthScale={0.3}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="rgb(75,75,80)"
          metalness={0.1}
        />
      </mesh> 
    </group>
  );
}

useGLTF.preload("/Calendar.glb");