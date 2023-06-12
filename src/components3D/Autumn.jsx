import React, { useEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Autumn(props) {
  const { nodes, materials } = useGLTF("/Bench.glb");

  const leafRef1 = useRef()
  const leafRef2 = useRef()
  const data = useScroll()
 
    useFrame(() => {
      leafRef1.current.position.z -= 2
      leafRef2.current.position.z -= 2
    })
 


  return (
    <group {...props} dispose={null}
      scale={0.00075}
      position={[1.5, -0.9, 0]}
      rotation={[0.1, 2.8, 0]}
    >
      <Environment
        preset="night"
      />
      <pointLight
        position={[0, 50, 20]}
        castShadow
        receiveShadow
        color={"rgb(255,150,120)"}
        distance={1}
        intensity={5}
        decay={0.5}
      />
      <group

        position={[417.23, 561.36, 79.46]}
        rotation={[-1.54, -0.01, -0.85]}
      >
        <group position={[0, 323.19, 0]} rotation={[0, 0, 0.77]}>
          <mesh

            geometry={nodes.Loft_3.geometry}
            material={materials["Mat.4"]}
            position={[-90.59, 0, -46.14]}
          />
        </group>
        <group position={[0, 94.8, 0]}>
          <mesh
            geometry={nodes.Loft_4.geometry}
            material={materials["Mat.4"]}
            position={[-667.08, -8.52, 309.54]}
            rotation={[1.56, -1.33, 0]}
          />
        </group>
        <group position={[0, 50.02, 0]}>
          <mesh
            ref={leafRef1}
            geometry={nodes.Loft_5.geometry}
            material={materials["Mat.4"]}
            position={[132.62, 218.66, 1347.39]}
            rotation={[-1.45, -1.1, -2.06]}
          />
          <mesh
             ref={leafRef2}
            geometry={nodes.Loft1_3.geometry}
            material={materials["Mat.4"]}
            position={[-197.51, -1323.18, 1586.57]}
            rotation={[-1.41, -0.78, -2.29]}
          />
          <mesh   ref={leafRef1}
            geometry={nodes.Loft2_3.geometry}
            material={materials["Mat.4"]}
            position={[-759.77, -1523.35, 261.55]}
            rotation={[-1.19, -1.19, -2.83]}
          />
          <mesh
            geometry={nodes.Loft3_3.geometry}
            material={materials["Mat.4"]}
            position={[-419.8, -406.02, 1109.25]}
            rotation={[-1.25, -1.07, 1.85]}
          />
        </group>
        <group position={[0, -158.45, 0]}>
          <mesh
            geometry={nodes.Loft_6.geometry}
            material={materials["Mat.4"]}
            position={[119.68, 5.2, 816.06]}
            rotation={[-2.1, -0.73, -0.11]}
          />
          <mesh
            geometry={nodes.Loft1_4.geometry}
            material={materials["Mat.4"]}
            position={[-77.97, 147.94, -545.46]}
            rotation={[-0.05, 0.03, 1.62]}
          />
        </group>
        <group position={[0, -98.34, 0]}>
          <mesh
            geometry={nodes.Loft_7.geometry}
            material={materials["Mat.4"]}
            position={[48.88, 319.77, -43.61]}
            rotation={[0, 0, -0.57]}
          />
        </group>
        <group position={[0, -42.86, 0]}>
          <mesh
            geometry={nodes.Loft_8.geometry}
            material={materials["Mat.4"]}
            position={[-44.66, 216.8, -43.18]}
            rotation={[0, 0, -1.42]}
          />
        </group>
        <group position={[0, 24.5, 0]}>
          <mesh
            geometry={nodes.Loft_9.geometry}
            material={materials["Mat.4"]}
            position={[56.26, 280.42, -53.79]}
            rotation={[3.02, 0.01, -1.67]}
          />
        </group>
      </group>
      <group
        position={[-181.68, 39.91, -88.23]}
        rotation={[-1.54, -0.01, -0.85]}
      >
        <group position={[0, 323.19, 0]} rotation={[0, 0, 0.77]}>
          <mesh
            geometry={nodes.Loft_10.geometry}
            material={materials["Mat.4"]}
            position={[-13.97, -2.53, -30.04]}
          />
        </group>
        <group position={[0, 94.8, 0]}>
          <mesh
            geometry={nodes.Loft_11.geometry}
            material={materials["Mat.4"]}
            position={[-143.41, -268.44, -7.91]}
          />
        </group>
        <group position={[0, 50.02, 0]}>
          <mesh
            geometry={nodes.Loft_12.geometry}
            material={materials["Mat.4"]}
            position={[-14.76, 391.21, -29.88]}
            rotation={[0, 0, -0.47]}
          />
          <mesh
            geometry={nodes.Loft1_5.geometry}
            material={materials["Mat.4"]}
            position={[-160.37, 380.89, -34.79]}
            rotation={[0.06, 0.02, -1.53]}
          />
          <mesh
            geometry={nodes.Loft2_4.geometry}
            material={materials["Mat.4"]}
            position={[-80.77, 265.1, 352.57]}
            rotation={[2.54, -1.04, 0.1]}
          />
          <mesh
            geometry={nodes.Loft3_4.geometry}
            material={materials["Mat.4"]}
            position={[24.13, 841.4, 441.94]}
            rotation={[-0.95, 1.39, -1.24]}
          />
        </group>
        <group position={[0, -158.45, 0]}>
          <mesh
            geometry={nodes.Loft_13.geometry}
            material={materials["Mat.4"]}
            position={[224.1, 542.16, -21]}
            rotation={[-0.08, 0.08, 0.71]}
          />
          <mesh
            geometry={nodes.Loft1_6.geometry}
            material={materials["Mat.4"]}
            position={[817.4, 148.94, 2332.33]}
            rotation={[-1.26, -0.62, 0.43]}
          />
        </group>
        <group position={[0, -98.34, 0]}>
          <mesh
            geometry={nodes.Loft_14.geometry}
            material={materials["Mat.4"]}
            position={[50.16, 321.78, -18.04]}
            rotation={[0, 0, -0.57]}
          />
        </group>
        <group position={[0, -42.86, 0]}>
          <mesh
            geometry={nodes.Loft_15.geometry}
            material={materials["Mat.4"]}
            position={[-39.41, 217.6, -39.19]}
            rotation={[0, 0, -1.42]}
          />
        </group>
        <group position={[0, 24.5, 0]}>
          <mesh
            geometry={nodes.Loft_16.geometry}
            material={materials["Mat.4"]}
            position={[200.47, 297.08, -33.34]}
            rotation={[3.02, 0.01, -1.67]}
          />
        </group>
      </group>
      <group position={[-64, 22.33, -295.26]} rotation={[-1.59, 0.03, 1.63]}>
        <group position={[0, 440.92, 0]} rotation={[0, 0, 0.77]}>
          <mesh
            geometry={nodes.Loft_17.geometry}
            material={materials["Mat.4"]}
            position={[0, 0, -4.48]}
          />
        </group>
        <group position={[0, 129.33, 0]}>
          <mesh
            geometry={nodes.Loft_18.geometry}
            material={materials["Mat.4"]}
            position={[-251.28, 538.19, 472.14]}
          />
        </group>
        <group
          rotation={[0.1, 0, 0]}
          position={[0, 68.24, 0]}>
          <mesh
            geometry={nodes.Loft_19.geometry}
            material={materials["Mat.4"]}
            position={[-20.13, 533.71, 489.11]}
            rotation={[0, 0, -0.47]}
          />
          <mesh
            geometry={nodes.Loft1_7.geometry}
            material={materials["Mat.4"]}
            position={[-152.63, 491.61, 489.11]}
            rotation={[0.06, 0.02, -1.53]}
          />
          <mesh
            geometry={nodes.Loft2_5.geometry}
            material={materials["Mat.4"]}
            position={[-110.19, 361.67, 480.99]}
            rotation={[0.06, 0.02, -1.93]}
          />
          <mesh
            geometry={nodes.Loft3_5.geometry}
            material={materials["Mat.4"]}
            position={[-249.94, 414.46, 486.3]}
            rotation={[0.01, 0.01, -3.01]}
          />
        </group>
        <group position={[0, -216.17, 0]}>
          <mesh
            geometry={nodes.Loft_20.geometry}
            material={materials["Mat.4"]}
            position={[-1.52, 503.01, -2.92]}
            rotation={[-0.22, -0.04, 0.7]}
          />
          <mesh
            geometry={nodes.Loft1_8.geometry}
            material={materials["Mat.4"]}
            position={[4.48, 326.8, -2.17]}
            rotation={[-0.05, 0.03, 0.71]}
          />
        </group>
        <group position={[0, -134.17, 0]}>
          <mesh
            geometry={nodes.Loft_21.geometry}
            material={materials["Mat.4"]}
            position={[70.27, 441.86, 0]}
            rotation={[0, 0, -0.57]}
          />
        </group>
        <group position={[0, -58.47, 0]}>
          <mesh
            geometry={nodes.Loft_22.geometry}
            material={materials["Mat.4"]}
            position={[-47.69, 257.08, -4.84]}
            rotation={[0, 0, -1.42]}
          />
        </group>
        <group position={[0, 33.42, 0]}>
          <mesh
            geometry={nodes.Loft_23.geometry}
            material={materials["Mat.4"]}
            position={[176.55, 529.63, -19.69]}
            rotation={[3.02, 0.01, -1.67]}
          />
        </group>
      </group>
      <group position={[-1497.5, 0, 0]}>
        <mesh
          geometry={nodes["Lathe-Mat3"].geometry}
          material={materials["Mat.3"]}
        />
        <mesh
          geometry={nodes["Lathe-Mat2"].geometry}
          material={materials["Mat.2"]}
        />
      </group>
      <group position={[-922.91, 174.18, 40.02]}>
        <mesh
          geometry={nodes.Cube16.geometry}
          material={materials["Mat.1"]}
          position={[107.29, -130.36, -245.03]}
        />
        <mesh
          geometry={nodes.Cube15.geometry}
          material={materials["Mat.1"]}
          position={[107.29, -130.36, 324.64]}
        />
        <mesh
          geometry={nodes.Cube14.geometry}
          material={materials["Mat.1"]}
          position={[107.29, -133.2, 324.64]}
        />
        <mesh
          geometry={nodes.Cube13.geometry}
          material={materials["Mat.1"]}
          position={[107.29, -133.2, -244.19]}
        />
        <mesh
          geometry={nodes.Sweep3.geometry}
          material={materials["Mat.1"]}
          position={[107.66, 8.59, -40.02]}
          rotation={[-0.21, 0, 3.14]}
        />
        <mesh
          geometry={nodes.Sweep2.geometry}
          material={materials["Mat.1"]}
          position={[107.86, 220.61, -40.02]}
        />
        <mesh
          geometry={nodes.Sweep1.geometry}
          material={materials["Mat.1"]}
          position={[107.83, 463.57, -40.02]}
        />
        <mesh
          geometry={nodes.Sweep.geometry}
          material={materials["Mat.1"]}
          position={[-752.51, -165.65, -40.02]}
        />
      </group>
      <group position={[702.54, 173.92, 40.02]}>
        <mesh
          geometry={nodes.Cube16_1.geometry}
          material={materials["Mat.1"]}
          position={[107.29, -130.36, -245.03]}
        />
        <mesh
          geometry={nodes.Cube15_1.geometry}
          material={materials["Mat.1"]}
          position={[107.29, -130.36, 324.64]}
        />
        <mesh
          geometry={nodes.Cube14_1.geometry}
          material={materials["Mat.1"]}
          position={[107.29, -133.2, 324.64]}
        />
        <mesh
          geometry={nodes.Cube13_1.geometry}
          material={materials["Mat.1"]}
          position={[107.29, -133.2, -244.19]}
        />
        <mesh
          geometry={nodes.Sweep3_1.geometry}
          material={materials["Mat.1"]}
          position={[107.66, 8.59, -40.02]}
          rotation={[-0.21, 0, 3.14]}
        />
        <mesh
          geometry={nodes.Sweep2_1.geometry}
          material={materials["Mat.1"]}
          position={[107.86, 220.61, -40.02]}
        />
        <mesh
          geometry={nodes.Sweep1_1.geometry}
          material={materials["Mat.1"]}
          position={[107.83, 463.57, -40.02]}
        />
        <mesh
          geometry={nodes.Sweep_1.geometry}
          material={materials["Mat.1"]}
          position={[-752.51, -165.65, -40.02]}
        />
      </group>
      <group position={[0, 590.77, 127.03]}>
        <mesh
          geometry={nodes.Cube12.geometry}
          material={materials.Mat}
          position={[0, -94.47, -387.96]}
          rotation={[1.57, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube11.geometry}
          material={materials.Mat}
          position={[0, -99.92, -309.83]}
          rotation={[1.65, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube10.geometry}
          material={materials.Mat}
          position={[0, -108.4, -232.91]}
          rotation={[1.71, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube9.geometry}
          material={materials.Mat}
          position={[0, -118.57, -159.61]}
          rotation={[1.62, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube8.geometry}
          material={materials.Mat}
          position={[0, -118.09, -82.09]}
          rotation={[1.57, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube7.geometry}
          material={materials.Mat}
          position={[0, -112.84, -7.72]}
          rotation={[1.41, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube6.geometry}
          material={materials.Mat}
          position={[0, -95.48, 63.37]}
          rotation={[1.17, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube5.geometry}
          material={materials.Mat}
          position={[0, -55.84, 121.69]}
          rotation={[0.71, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube4.geometry}
          material={materials.Mat}
          position={[0, 10.13, 161.7]}
          rotation={[0.38, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube3.geometry}
          material={materials.Mat}
          position={[0, 83.37, 186.8]}
          rotation={[0.26, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube2.geometry}
          material={materials.Mat}
          position={[0, 156.57, 203.79]}
          rotation={[0.16, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube1.geometry}
          material={materials.Mat}
          position={[0, 235.41, 216.85]}
          rotation={[0.1, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.Mat}
          position={[0, 318.11, 225.92]}
          rotation={[0.1, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Bench.glb");