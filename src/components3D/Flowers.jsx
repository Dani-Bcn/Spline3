import React, { useRef } from "react";
import { MeshReflectorMaterial, useGLTF } from "@react-three/drei";

export function Flowers(props) {
  const { nodes, materials } = useGLTF("/flowers.glb");
  return (
    <group {...props} dispose={null}
      scale={0.03}
      rotation={[0, -3.5, 0]}
      position={[25, 0, -24]}
    >
      <group position={[55.18, 230.65, -116.13]} rotation={[0.03, 0, 0]}>
        <group position={[0, 0, 0.52]}>
          <mesh
            geometry={nodes.Sweep_6.geometry}
            material={materials["Mat.2"]}
          />
        </group>
        <group position={[0, 0, 0.52]}>
          <mesh
            geometry={nodes.Cylinder1_0.geometry}
            material={materials.Mat}
            position={[0, 85.01, 0]}
          />
          <mesh
            geometry={nodes.Cylinder1_1.geometry}
            material={materials.Mat}
            position={[80.85, 26.27, 0]}
            rotation={[0, 0, -1.26]}
          />
          <mesh
            geometry={nodes.Cylinder1_2.geometry}
            material={materials.Mat}
            position={[49.97, -68.77, 0]}
            rotation={[0, 0, -2.51]}
            material-color="red"
          />
          <mesh
            geometry={nodes.Cylinder1_3.geometry}
            material={materials.Mat}
            position={[-49.97, -68.77, 0]}
            rotation={[0, 0, 2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_4.geometry}
            material={materials.Mat}
            position={[-80.85, 26.27, 0]}
            rotation={[0, 0, 1.26]}
          />
        </group>
        <group position={[0, 0, 0.52]} rotation={[0, 0, -0.63]}>
          <mesh
            geometry={nodes.Cylinder1_0_1.geometry}
            material={materials.Mat}
            position={[0, 85.01, 0]}
          />
          <mesh
            geometry={nodes.Cylinder1_1_1.geometry}
            material={materials.Mat}
            position={[80.85, 26.27, 0]}
            rotation={[0, 0, -1.26]}
          />
          <mesh
            geometry={nodes.Cylinder1_2_1.geometry}
            material={materials.Mat}
            position={[49.97, -68.77, 0]}
            rotation={[0, 0, -2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_3_1.geometry}
            material={materials.Mat}
            position={[-49.97, -68.77, 0]}
            rotation={[0, 0, 2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_4_1.geometry}
            material={materials.Mat}
            position={[-80.85, 26.27, 0]}
            rotation={[0, 0, 1.26]}
          />
        </group>
        <mesh
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Mat.3"]}
          position={[0, 0, -1.57]}
        />
      </group>
      <group position={[-82.71, 229.6, -155.11]} rotation={[0.05, 0.02, 0.3]}>
        <group position={[0, 0, 0.46]}>
          <mesh
            geometry={nodes.Sweep_7.geometry}
            material={materials["Mat.2"]}
          />
        </group>
        <group position={[0, 0, 0.46]}>
          <mesh
            geometry={nodes.Cylinder1_0_2.geometry}
            material={materials.Mat}
            position={[0, 75.17, 0]}
          />
          <mesh
            geometry={nodes.Cylinder1_1_2.geometry}
            material={materials.Mat}
            position={[71.49, 23.23, 0]}
            rotation={[0, 0, -1.26]}
          />
          <mesh
            geometry={nodes.Cylinder1_2_2.geometry}
            material={materials.Mat}
            position={[44.18, -60.81, 0]}
            rotation={[0, 0, -2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_3_2.geometry}
            material={materials.Mat}
            position={[-44.18, -60.81, 0]}
            rotation={[0, 0, 2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_4_2.geometry}
            material={materials.Mat}
            position={[-71.49, 23.23, 0]}
            rotation={[0, 0, 1.26]}
          />
        </group>
        <group position={[0, 0, 0.46]} rotation={[0, 0, -0.63]}>
          <mesh
            geometry={nodes.Cylinder1_0_3.geometry}
            material={materials.Mat}
            position={[0, 75.17, 0]}
          />
          <mesh
            geometry={nodes.Cylinder1_1_3.geometry}
            material={materials.Mat}
            position={[71.49, 23.23, 0]}
            rotation={[0, 0, -1.26]}
          />
          <mesh
            geometry={nodes.Cylinder1_2_3.geometry}
            material={materials.Mat}
            position={[44.18, -60.81, 0]}
            rotation={[0, 0, -2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_3_3.geometry}
            material={materials.Mat}
            position={[-44.18, -60.81, 0]}
            rotation={[0, 0, 2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_4_3.geometry}
            material={materials.Mat}
            position={[-71.49, 23.23, 0]}
            rotation={[0, 0, 1.26]}
          />
        </group>
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={materials["Mat.3"]}
          position={[0, 0, -1.39]}
        />
      </group>
      <group position={[168.82, 156.19, -153.94]} rotation={[0, -0.02, -0.39]}>
        <group position={[0, 0, 0.61]}>
          <mesh
            geometry={nodes.Sweep_8.geometry}
            material={materials["Mat.2"]}
          />
        </group>
        <group position={[0, 0, 0.61]}>
          <mesh
            geometry={nodes.Cylinder1_0_4.geometry}
            material={materials.Mat}
            position={[0, 99.22, 0]}
          />
          <mesh
            geometry={nodes.Cylinder1_1_4.geometry}
            material={materials.Mat}
            position={[94.37, 30.66, 0]}
            rotation={[0, 0, -1.26]}
          />
          <mesh
            geometry={nodes.Cylinder1_2_4.geometry}
            material={materials.Mat}
            position={[58.32, -80.27, 0]}
            rotation={[0, 0, -2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_3_4.geometry}
            material={materials.Mat}
            position={[-58.32, -80.27, 0]}
            rotation={[0, 0, 2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_4_4.geometry}
            material={materials.Mat}
            position={[-94.37, 30.66, 0]}
            rotation={[0, 0, 1.26]}
          />
        </group>
        <group position={[0, 0, 0.61]} rotation={[0, 0, -0.63]}>
          <mesh
            geometry={nodes.Cylinder1_0_5.geometry}
            material={materials.Mat}
            position={[0, 99.22, 0]}
          />
          <mesh
            geometry={nodes.Cylinder1_1_5.geometry}
            material={materials.Mat}
            position={[94.37, 30.66, 0]}
            rotation={[0, 0, -1.26]}
          />
          <mesh
            geometry={nodes.Cylinder1_2_5.geometry}
            material={materials.Mat}
            position={[58.32, -80.27, 0]}
            rotation={[0, 0, -2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_3_5.geometry}
            material={materials.Mat}
            position={[-58.32, -80.27, 0]}
            rotation={[0, 0, 2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_4_5.geometry}
            material={materials.Mat}
            position={[-94.37, 30.66, 0]}
            rotation={[0, 0, 1.26]}
          />
        </group>
        <mesh
          geometry={nodes.Cylinder_3.geometry}
          material={materials["Mat.3"]}
          position={[0, 0, -1.84]}
        />
      </group>
      <group position={[-23.34, 421.66, -153.94]} rotation={[0.12, 0.02, 0.16]}>
        <group position={[0, 0, 0.52]}>
          <mesh
            geometry={nodes.Sweep_9.geometry}
            material={materials["Mat.2"]}
          />
        </group>
        <group position={[0, 0, 0.52]}>
          <mesh
            geometry={nodes.Cylinder1_0_6.geometry}
            material={materials.Mat}
            position={[0, 84.98, 0]}
          />
          <mesh
            geometry={nodes.Cylinder1_1_6.geometry}
            material={materials.Mat}
            position={[80.82, 26.26, 0]}
            rotation={[0, 0, -1.26]}
          />
          <mesh
            geometry={nodes.Cylinder1_2_6.geometry}
            material={materials.Mat}
            position={[49.95, -68.75, 0]}
            rotation={[0, 0, -2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_3_6.geometry}
            material={materials.Mat}
            position={[-49.95, -68.75, 0]}
            rotation={[0, 0, 2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_4_6.geometry}
            material={materials.Mat}
            position={[-80.82, 26.26, 0]}
            rotation={[0, 0, 1.26]}
          />
        </group>
        <group position={[0, 0, 0.52]} rotation={[0, 0, -0.63]}>
          <mesh
            geometry={nodes.Cylinder1_0_7.geometry}
            material={materials.Mat}
            position={[0, 84.98, 0]}
          />
          <mesh
            geometry={nodes.Cylinder1_1_7.geometry}
            material={materials.Mat}
            position={[80.82, 26.26, 0]}
            rotation={[0, 0, -1.26]}
          />
          <mesh
            geometry={nodes.Cylinder1_2_7.geometry}
            material={materials.Mat}
            position={[49.95, -68.75, 0]}
            rotation={[0, 0, -2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_3_7.geometry}
            material={materials.Mat}
            position={[-49.95, -68.75, 0]}
            rotation={[0, 0, 2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_4_7.geometry}
            material={materials.Mat}
            position={[-80.82, 26.26, 0]}
            rotation={[0, 0, 1.26]}
          />
        </group>
        <mesh
          geometry={nodes.Cylinder_4.geometry}
          material={materials["Mat.3"]}
          position={[0, 0, -1.57]}
        />
      </group>
      <group position={[-97.38, 65.24, -123.36]} rotation={[-0.2, 0.17, 0.39]}>
        <group position={[0, 0, 0.53]}>
          <mesh
            geometry={nodes.Sweep_10.geometry}
            material={materials["Mat.2"]}
          />
        </group>
        <group position={[0, 0, 0.53]}>
          <mesh
            geometry={nodes.Cylinder1_0_8.geometry}
            material={materials.Mat}
            position={[0, 86.4, 0]}
          />
          <mesh
            geometry={nodes.Cylinder1_1_8.geometry}
            material={materials.Mat}
            position={[82.18, 26.7, 0]}
            rotation={[0, 0, -1.26]}
          />
          <mesh
            geometry={nodes.Cylinder1_2_8.geometry}
            material={materials.Mat}
            position={[50.79, -69.9, 0]}
            rotation={[0, 0, -2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_3_8.geometry}
            material={materials.Mat}
            position={[-50.79, -69.9, 0]}
            rotation={[0, 0, 2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_4_8.geometry}
            material={materials.Mat}
            position={[-82.18, 26.7, 0]}
            rotation={[0, 0, 1.26]}
          />
        </group>
        <group position={[0, 0, 0.53]} rotation={[0, 0, -0.63]}>
          <mesh
            geometry={nodes.Cylinder1_0_9.geometry}
            material={materials.Mat}
            position={[0, 86.4, 0]}
          />
          <mesh
            geometry={nodes.Cylinder1_1_9.geometry}
            material={materials.Mat}
            position={[82.18, 26.7, 0]}
            rotation={[0, 0, -1.26]}
          />
          <mesh
            geometry={nodes.Cylinder1_2_9.geometry}
            material={materials.Mat}
            position={[50.79, -69.9, 0]}
            rotation={[0, 0, -2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_3_9.geometry}
            material={materials.Mat}
            position={[-50.79, -69.9, 0]}
            rotation={[0, 0, 2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_4_9.geometry}
            material={materials.Mat}
            position={[-82.18, 26.7, 0]}
            rotation={[0, 0, 1.26]}
          />
        </group>
        <mesh
          geometry={nodes.Cylinder_5.geometry}
          material={materials["Mat.3"]}
          position={[0, 0, -1.6]}
        />
      </group>
      <group
        position={[-244.88, 212.84, -146.7]}
        rotation={[-0.28, 0.11, 0.56]}
      >
        <group position={[0, 0, 0.67]}>
          <mesh
            geometry={nodes.Sweep_11.geometry}
            material={materials["Mat.2"]}
          />
        </group>
        <group position={[0, 0, 0.67]}>
          <mesh
            geometry={nodes.Cylinder1_0_10.geometry}
            material={materials.Mat}
            position={[0, 108.19, 0]}
          />
          <mesh
            geometry={nodes.Cylinder1_1_10.geometry}
            material={materials.Mat}
            position={[102.89, 33.43, 0]}
            rotation={[0, 0, -1.26]}
          />
          <mesh
            geometry={nodes.Cylinder1_2_10.geometry}
            material={materials.Mat}
            position={[63.59, -87.52, 0]}
            rotation={[0, 0, -2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_3_10.geometry}
            material={materials.Mat}
            position={[-63.59, -87.52, 0]}
            rotation={[0, 0, 2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_4_10.geometry}
            material={materials.Mat}
            position={[-102.89, 33.43, 0]}
            rotation={[0, 0, 1.26]}
          />
        </group>
        <group position={[0, 0, 0.67]} rotation={[0, 0, -0.63]}>
          <mesh
            geometry={nodes.Cylinder1_0_11.geometry}
            material={materials.Mat}
            position={[0, 108.19, 0]}
          />
          <mesh
            geometry={nodes.Cylinder1_1_11.geometry}
            material={materials.Mat}
            position={[102.89, 33.43, 0]}
            rotation={[0, 0, -1.26]}
          />
          <mesh
            geometry={nodes.Cylinder1_2_11.geometry}
            material={materials.Mat}
            position={[63.59, -87.52, 0]}
            rotation={[0, 0, -2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_3_11.geometry}
            material={materials.Mat}
            position={[-63.59, -87.52, 0]}
            rotation={[0, 0, 2.51]}
          />
          <mesh
            geometry={nodes.Cylinder1_4_11.geometry}
            material={materials.Mat}
            position={[-102.89, 33.43, 0]}
            rotation={[0, 0, 1.26]}
          />
        </group>
        <mesh
          geometry={nodes.Cylinder_6.geometry}
          material={materials["Mat.3"]}
          position={[0, 0, -2]}
        />
      </group>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials["Mat.1"]}
        position={[0, -489.59, 0]}
        material-color="rgb(250,150,100)"
      />
    </group>
  );
}

useGLTF.preload("/flowers.glb");