
import React, { useRef } from "react";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export function Autumn(props) {
  const { nodes, materials } = useGLTF("/Autumn.glb");
  return (
    <group {...props} dispose={null}
        scale={0.0007}
        rotation={[0,-0.2,0]}
        position={[1.6,-0.75,0]}
    >      
        <Environment
            preset="city"
        />
      <group position={[1212.7, 1370.68, 0]}
      rotation={[0.05,-0.8,0]}
      scale={[1.5,1.2,1.5]}
      >
        <mesh
          geometry={nodes["Lathe-Mat5"].geometry}
          material={materials["Mat.5"]}
        >
            <meshStandardMaterial
                    color={"rgb(250,180,20)"}
            />
        </mesh>
        <mesh
          geometry={nodes["Lathe-Mat6"].geometry}
          material={materials["Mat.6"]}
          >
          <meshStandardMaterial
                  color={"rgb(50,80,120)"}
                  roughness={0.3}
          />
      </mesh>
      </group>
      <group position={[-311.9, 138.65, 155.69]}>
        <group position={[-650.94, 35.53, -195.7]}
            scale={[1.5,1,1]}
        >
          <mesh
            geometry={nodes.Cube16.geometry}
            material={materials["Mat.1"]}
            position={[107.29, -130.36, 245.03]}
          />
          <mesh
            geometry={nodes.Cube15.geometry}
            material={materials["Mat.1"]}
            position={[107.29, -130.36, -324.64]}
          />
          <mesh
            geometry={nodes.Cube14.geometry}
            material={materials["Mat.1"]}
            position={[107.29, -133.2, -324.64]}
          />
          <mesh
            geometry={nodes.Cube13.geometry}
            material={materials["Mat.1"]}
            position={[107.29, -133.2, 244.19]}
          />
          <mesh
            geometry={nodes.Sweep3.geometry}
            material={materials["Mat.1"]}
            position={[107.66, 8.59, 40.02]}
            rotation={[0.21, 0, 3.14]}
            >
            <meshStandardMaterial
                    color={"rgb(100,100,80)"}
                    metalness={2}
                    roughness={0.3}
            />
        </mesh>
          <mesh
            geometry={nodes.Sweep2.geometry}
            material={materials["Mat.1"]}
            position={[107.86, 220.61, 40.02]}
            >
            <meshStandardMaterial
                    color={"rgb(100,100,80)"}
                    metalness={2}
                    roughness={0.3}
            />
        </mesh>
          <mesh
            geometry={nodes.Sweep1.geometry}
            material={materials["Mat.1"]}
            position={[107.83, 463.57, 40.02]}
            >
            <meshStandardMaterial
                    color={"rgb(100,100,80)"}
                    metalness={2}
                    roughness={0.3}
            />
        </mesh>
          <mesh
            geometry={nodes.Sweep.geometry}
            material={materials["Mat.1"]}
            position={[-752.51, -165.65, 40.02]}
            >
            <meshStandardMaterial
                    color={"rgb(100,100,80)"}
                    metalness={2}
                    roughness={0.3}
            />
        </mesh>
        </group>
        <group position={[970.44, 34, -195.7]}
        
         scale={[1.5,1,1]}>
          <mesh
            geometry={nodes.Cube16_1.geometry}
            material={materials["Mat.1"]}
            position={[107.29, -130.36, 245.03]}
            >
            <meshStandardMaterial
                    color={"rgb(100,100,80)"}
                    metalness={2}
                    roughness={0.3}
            />
        </mesh>
          <mesh
            geometry={nodes.Cube15_1.geometry}
            material={materials["Mat.1"]}
            position={[107.29, -130.36, -324.64]}
            >
            <meshStandardMaterial
                    color={"rgb(100,100,80)"}
                    metalness={2}
                    roughness={0.3}
            />
        </mesh>
          <mesh
            geometry={nodes.Cube14_1.geometry}
            material={materials["Mat.1"]}
            position={[107.29, -133.2, -324.64]}
            >
            <meshStandardMaterial
                    color={"rgb(100,100,80)"}
                    metalness={2}
                    roughness={0.3}
            />
        </mesh>
          <mesh
            geometry={nodes.Cube13_1.geometry}
            material={materials["Mat.1"]}
            position={[107.29, -133.2, 244.19]}
            >
            <meshStandardMaterial
                    color={"rgb(100,100,80)"}
                    metalness={2}
                    roughness={0.3}
            />
        </mesh>
          <mesh
            geometry={nodes.Sweep3_1.geometry}
            material={materials["Mat.1"]}
            position={[107.66, 8.59, 40.02]}
            rotation={[0.21, 0, 3.14]}
            >
            <meshStandardMaterial
                    color={"rgb(100,100,80)"}
                    metalness={2}
                    roughness={0.3}
            />
        </mesh>
          <mesh
            geometry={nodes.Sweep2_1.geometry}
            material={materials["Mat.1"]}
            position={[107.86, 220.61, 40.02]}
            >
            <meshStandardMaterial
                    color={"rgb(100,100,80)"}
                    metalness={2}
                    roughness={0.3}
            />
        </mesh>
          <mesh
            geometry={nodes.Sweep1_1.geometry}
            material={materials["Mat.1"]}
            position={[107.83, 463.57, 40.02]}
            >
            <meshStandardMaterial
                    color={"rgb(100,100,80)"}
                    metalness={2}
                    roughness={0.3}
            />
        </mesh>
          <mesh
            geometry={nodes.Sweep_1.geometry}
            material={materials["Mat.1"]}
            position={[-752.51, -165.65, 40.02]}
            >
            <meshStandardMaterial
                    color={"rgb(100,100,80)"}
                    metalness={2}
                    roughness={0.3}
            />
        </mesh>
        </group>
        <group position={[311.9, 452.11, -282.71]}>
          <mesh
            geometry={nodes.Cube12.geometry}
            material={materials.Mat}
            position={[0, -91.81, 415.25]}
            rotation={[-1.66, 0, 0]}
            >
            <meshStandardMaterial
                    color={"rgb(250,180,20)"}
                   
            />
        </mesh>
          <mesh
            geometry={nodes.Cube11.geometry}
            material={materials.Mat}
            position={[0, -99.92, 309.83]}
            rotation={[-1.65, 0, 0]}
            >
            <meshStandardMaterial
                    color={"rgb(250,180,20)"}
            />
        </mesh>
          <mesh
            geometry={nodes.Cube10.geometry}
            material={materials.Mat}
            position={[0, -108.4, 232.91]}
            rotation={[-1.71, 0, 0]}
          />
          <mesh
            geometry={nodes.Cube9.geometry}
            material={materials.Mat}
            position={[0, -118.57, 159.61]}
            rotation={[-1.62, 0, 0]}
          />
          <mesh
            geometry={nodes.Cube7.geometry}
            material={materials.Mat}
            position={[0, -112.84, 7.72]}
            rotation={[-1.41, 0, 0]}
          />
          <mesh
            geometry={nodes.Cube5.geometry}
            material={materials.Mat}
            position={[0, -56.46, -128.69]}
            rotation={[-0.83, 0, 0]}
            >
            <meshStandardMaterial
                    color={"rgb(150,100,80)"}
                   
            />
        </mesh>
          <mesh
            geometry={nodes.Cube2.geometry}
            material={materials.Mat}
            position={[0, 155.28, -210.38]}
            rotation={[-0.19, 0, 0]}
            >
            <meshStandardMaterial
                    color={"rgb(180,120,80)"}
            />
        </mesh>
          <mesh
            geometry={nodes.Cube8.geometry}
            material={materials.Mat}
            position={[0, -118.09, 82.09]}
            rotation={[-1.57, 0, 0]}
            >
            <meshStandardMaterial
                    color={"rgb(180,120,80)"}
            />
        </mesh>
          <mesh
            geometry={nodes.Cube6.geometry}
            material={materials.Mat}
            position={[0, -95.48, -63.37]}
            rotation={[-1.17, 0, 0]}
            >
            <meshStandardMaterial
                    color={"rgb(180,120,80)"}
            />
        </mesh>
          <mesh
            geometry={nodes.Cube4.geometry}
            material={materials.Mat}
            position={[0, 7.03, -169.55]}
            rotation={[-0.38, 0, 0]}
            >
            <meshStandardMaterial
                    color={"rgb(180,120,80)"}
            />
        </mesh>
          <mesh
            geometry={nodes.Cube1.geometry}
            material={materials.Mat}
            position={[0, 234.22, -228.98]}
            rotation={[-0.18, 0, 0]}
          >
            <meshStandardMaterial
                    color={"rgb(180,120,80)"}
            />
        </mesh>
          <mesh
            geometry={nodes.Cube3.geometry}
            material={materials.Mat}
            position={[0, 81.75, -192.85]}
            rotation={[-0.26, 0, 0]}
            >
            <meshStandardMaterial
                    color={"rgb(180,120,80)"}
            />
        </mesh>
          <mesh
            geometry={nodes.Cube.geometry}
            material={materials.Mat}
            position={[0, 316.26, -243.71]}
            rotation={[-0.2, 0, 0]}
            >
            <meshStandardMaterial
                    color={"rgb(180,120,80)"}
            />
        </mesh>
        </group>
        <mesh
          geometry={nodes.Loft1.geometry}
          material={materials["Mat.4"]}
          position={[-162.66, -56.52, 94.64]}
          rotation={[1.48, -0.02, 2.69]}
          >
          <meshStandardMaterial
                  color={"rgb(180,120,80)"}
          />
      </mesh>
        <mesh
          geometry={nodes.Loft3.geometry}
          material={materials["Mat.4"]}
          position={[-438.53, -71.39, 282.04]}
          rotation={[-1.62, -0.08, 1.63]}
          >
          <meshStandardMaterial
                  color={"rgb(180,120,80)"}
          />
      </mesh>
        <mesh
          geometry={nodes.Loft2.geometry}
          material={materials["Mat.4"]}
          position={[-407.65, -42.57, 122.11]}
          rotation={[1.46, 0.09, -2.77]}
        />
        <mesh
          geometry={nodes.Loft.geometry}
          material={materials["Mat.4"]}
          position={[-251.18, -61.6, 237.39]}
          rotation={[-1.56, -0.02, -3.02]}
         >
            <meshStandardMaterial
                    color={"rgb(180,120,80)"}
            />
        </mesh>
        <mesh
          geometry={nodes.Extrude.geometry}
          material={nodes.Extrude.material}
          position={[398.49, -138.65, -281.14]}
          >
            <meshStandardMaterial
                    color={"rgb(120,120,120)"}
            />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/Autumn.glb");