import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Flowers(props) {
  const { nodes, materials } = useGLTF("/flowers.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[17.88, 7.01, 2.55]}>
        <group position={[0.37, -1.46, 0.41]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cube-maceta"].geometry}
            material={materials.maceta}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cube-circuloFlor"].geometry}
            material={materials.circuloFlor}
          />
        </group>
        <group position={[3.26, 5.11, 1.86]} rotation={[-0.05, -0.01, -0.26]}>
          <group position={[0, 0, -0.06]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0.geometry}
              material={materials.Petalos}
              position={[0, 1.72, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1.geometry}
              material={materials.Petalos}
              position={[1.35, 1.07, 0]}
              rotation={[0, 0, -0.9]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2.geometry}
              material={materials.Petalos}
              position={[1.68, -0.38, 0]}
              rotation={[0, 0, -1.8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3.geometry}
              material={materials.Petalos}
              position={[0.75, -1.55, 0]}
              rotation={[0, 0, -2.69]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4.geometry}
              material={materials.Petalos}
              position={[-0.75, -1.55, 0]}
              rotation={[0, 0, 2.69]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_5.geometry}
              material={materials.Petalos}
              position={[-1.68, -0.38, 0]}
              rotation={[0, 0, 1.8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_6.geometry}
              material={materials.Petalos}
              position={[-1.35, 1.07, 0]}
              rotation={[0, 0, 0.9]}
            />
          </group>
          <group position={[0, 0, -0.05]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_8.geometry}
              material={materials.circuloFlor}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.05]}
          />
        </group>
        <group position={[0.51, 3.5, 2.95]} rotation={[-0.05, -0.01, -0.12]}>
          <group position={[0, 0, -0.06]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_1.geometry}
              material={materials.Petalos}
              position={[0, 1.55, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_1.geometry}
              material={materials.Petalos}
              position={[1.34, 0.77, 0]}
              rotation={[0, 0, -Math.PI / 3]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_1.geometry}
              material={materials.Petalos}
              position={[1.34, -0.77, 0]}
              rotation={[0, 0, -2.09]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_1.geometry}
              material={materials.Petalos}
              position={[0, -1.55, 0]}
              rotation={[0, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_1.geometry}
              material={materials.Petalos}
              position={[-1.34, -0.77, 0]}
              rotation={[0, 0, 2.09]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_5_1.geometry}
              material={materials.Petalos}
              position={[-1.34, 0.77, 0]}
              rotation={[0, 0, Math.PI / 3]}
            />
          </group>
          <group position={[0, 0, -0.04]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_9.geometry}
              material={materials.circuloFlor}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.04]}
          />
        </group>
        <group position={[-0.07, 6.32, 1.9]} rotation={[-0.05, -0.01, -0.12]}>
          <group position={[0, 0, -0.04]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_2.geometry}
              material={materials.Petalos}
              position={[0, 1.22, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_2.geometry}
              material={materials.Petalos}
              position={[1.16, 0.38, 0]}
              rotation={[0, 0, -1.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_2.geometry}
              material={materials.Petalos}
              position={[0.72, -0.98, 0]}
              rotation={[0, 0, -2.51]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_2.geometry}
              material={materials.Petalos}
              position={[-0.72, -0.98, 0]}
              rotation={[0, 0, 2.51]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_2.geometry}
              material={materials.Petalos}
              position={[-1.16, 0.38, 0]}
              rotation={[0, 0, 1.26]}
            />
          </group>
          <group position={[0, 0, -0.03]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_10.geometry}
              material={materials.circuloFlor}
            />
          </group>
          <group position={[0, 0, -0.04]} rotation={[0, 0, -0.56]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_3.geometry}
              material={materials.Petalos}
              position={[0, 1.22, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_3.geometry}
              material={materials.Petalos}
              position={[1.16, 0.38, 0]}
              rotation={[0, 0, -1.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_3.geometry}
              material={materials.Petalos}
              position={[0.72, -0.98, 0]}
              rotation={[0, 0, -2.51]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_3.geometry}
              material={materials.Petalos}
              position={[-0.72, -0.98, 0]}
              rotation={[0, 0, 2.51]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_3.geometry}
              material={materials.Petalos}
              position={[-1.16, 0.38, 0]}
              rotation={[0, 0, 1.26]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.03]}
          />
        </group>
        <group position={[-2.73, 4.3, 2.38]} rotation={[-0.05, -0.01, 0.2]}>
          <group position={[0, 0, -0.05]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_4.geometry}
              material={materials.Petalos}
              position={[0, 1.35, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_4.geometry}
              material={materials.Petalos}
              position={[1.28, 0.42, 0]}
              rotation={[0, 0, -1.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_4.geometry}
              material={materials.Petalos}
              position={[0.79, -1.09, 0]}
              rotation={[0, 0, -2.51]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_4.geometry}
              material={materials.Petalos}
              position={[-0.79, -1.09, 0]}
              rotation={[0, 0, 2.51]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_4.geometry}
              material={materials.Petalos}
              position={[-1.28, 0.42, 0]}
              rotation={[0, 0, 1.26]}
            />
          </group>
          <group position={[0, 0, -0.04]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_11.geometry}
              material={materials.circuloFlor}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_3.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.04]}
          />
        </group>
      </group>
      <group position={[-17.55, 7.01, 2.55]}>
        <group position={[0.38, -1.46, 0.41]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cube-maceta_1"].geometry}
            material={materials.maceta}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cube-circuloFlor_1"].geometry}
            material={materials.circuloFlor}
          />
        </group>
        <group position={[3.26, 5.11, 1.86]} rotation={[-0.05, -0.01, -0.26]}>
          <group position={[0, 0, -0.06]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_5.geometry}
              material={materials.Petalos}
              position={[0, 1.72, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_5.geometry}
              material={materials.Petalos}
              position={[1.35, 1.07, 0]}
              rotation={[0, 0, -0.9]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_5.geometry}
              material={materials.Petalos}
              position={[1.68, -0.38, 0]}
              rotation={[0, 0, -1.8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_5.geometry}
              material={materials.Petalos}
              position={[0.75, -1.55, 0]}
              rotation={[0, 0, -2.69]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_5.geometry}
              material={materials.Petalos}
              position={[-0.75, -1.55, 0]}
              rotation={[0, 0, 2.69]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_5_2.geometry}
              material={materials.Petalos}
              position={[-1.68, -0.38, 0]}
              rotation={[0, 0, 1.8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_6_1.geometry}
              material={materials.Petalos}
              position={[-1.35, 1.07, 0]}
              rotation={[0, 0, 0.9]}
            />
          </group>
          <group position={[0, 0, -0.05]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_12.geometry}
              material={materials.rama}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_4.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.05]}
          />
        </group>
        <group position={[0.51, 3.5, 2.95]} rotation={[-0.05, -0.01, -0.12]}>
          <group position={[0, 0, -0.06]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_6.geometry}
              material={materials.Petalos}
              position={[0, 1.55, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_6.geometry}
              material={materials.Petalos}
              position={[1.34, 0.77, 0]}
              rotation={[0, 0, -Math.PI / 3]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_6.geometry}
              material={materials.Petalos}
              position={[1.34, -0.77, 0]}
              rotation={[0, 0, -2.09]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_6.geometry}
              material={materials.Petalos}
              position={[0, -1.55, 0]}
              rotation={[0, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_6.geometry}
              material={materials.Petalos}
              position={[-1.34, -0.77, 0]}
              rotation={[0, 0, 2.09]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_5_3.geometry}
              material={materials.Petalos}
              position={[-1.34, 0.77, 0]}
              rotation={[0, 0, Math.PI / 3]}
            />
          </group>
          <group position={[0, 0, -0.04]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_13.geometry}
              material={materials.rama}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_5.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.04]}
          />
        </group>
        <group position={[-0.07, 6.32, 1.9]} rotation={[-0.05, -0.01, -0.12]}>
          <group position={[0, 0, -0.04]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_7.geometry}
              material={materials.Petalos}
              position={[0, 1.22, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_7.geometry}
              material={materials.Petalos}
              position={[1.16, 0.38, 0]}
              rotation={[0, 0, -1.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_7.geometry}
              material={materials.Petalos}
              position={[0.72, -0.98, 0]}
              rotation={[0, 0, -2.51]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_7.geometry}
              material={materials.Petalos}
              position={[-0.72, -0.98, 0]}
              rotation={[0, 0, 2.51]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_7.geometry}
              material={materials.Petalos}
              position={[-1.16, 0.38, 0]}
              rotation={[0, 0, 1.26]}
            />
          </group>
          <group position={[0, 0, -0.03]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_14.geometry}
              material={materials.rama}
            />
          </group>
          <group position={[0, 0, -0.04]} rotation={[0, 0, -0.56]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_8.geometry}
              material={materials.Petalos}
              position={[0, 1.22, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_8.geometry}
              material={materials.Petalos}
              position={[1.16, 0.38, 0]}
              rotation={[0, 0, -1.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_8.geometry}
              material={materials.Petalos}
              position={[0.72, -0.98, 0]}
              rotation={[0, 0, -2.51]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_8.geometry}
              material={materials.Petalos}
              position={[-0.72, -0.98, 0]}
              rotation={[0, 0, 2.51]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_8.geometry}
              material={materials.Petalos}
              position={[-1.16, 0.38, 0]}
              rotation={[0, 0, 1.26]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_6.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.03]}
          />
        </group>
        <group position={[-2.73, 4.3, 2.38]} rotation={[-0.05, -0.01, 0.2]}>
          <group position={[0, 0, -0.05]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_9.geometry}
              material={materials.Petalos}
              position={[0, 1.35, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_9.geometry}
              material={materials.Petalos}
              position={[1.28, 0.42, 0]}
              rotation={[0, 0, -1.26]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_9.geometry}
              material={materials.Petalos}
              position={[0.79, -1.09, 0]}
              rotation={[0, 0, -2.51]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_9.geometry}
              material={materials.Petalos}
              position={[-0.79, -1.09, 0]}
              rotation={[0, 0, 2.51]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_9.geometry}
              material={materials.Petalos}
              position={[-1.28, 0.42, 0]}
              rotation={[0, 0, 1.26]}
            />
          </group>
          <group position={[0, 0, -0.04]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_15.geometry}
              material={materials.rama}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_7.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.04]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_0.geometry}
        material={materials.madera}
        position={[-24.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_1.geometry}
        material={materials.madera}
        position={[-17.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_2.geometry}
        material={materials.madera}
        position={[-10.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_3.geometry}
        material={materials.madera}
        position={[-3.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_4.geometry}
        material={materials.madera}
        position={[3.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_5.geometry}
        material={materials.madera}
        position={[10.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_6.geometry}
        material={materials.madera}
        position={[17.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_7.geometry}
        material={materials.madera}
        position={[24.5, 0, 0]}
      />
      <group position={[0, -7.68, 0.85]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude1_1.geometry}
          material={materials.madera}
        />
      </group>
      <group position={[0, 7.47, 0.85]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_8.geometry}
          material={materials.madera}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sol.geometry}
        material={materials.Petalos}
        position={[20.5, 56.96, 0.61]}
        scale={8.41}
      />
    </group>
  );
}

useGLTF.preload("/flowers.gltf");