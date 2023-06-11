import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";

export function Plant2(props) {
  const { nodes, materials } = useGLTF("/Plant2.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.07}
        rotation={[0,1.3,0.2]}
        position={[15,-17,5]}
      >
        <group
          position={[-30.83, 5.65, -370.08]}
          rotation={[-Math.PI, 0.32, -Math.PI]}
          scale={[1.32, 1.19, 1.32]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={nodes.Cube_2.material}
            position={[-1.42, 113.07, -5.96]}
            rotation={[Math.PI, Math.PI / 6, Math.PI]}
            scale={0.29}
          >
                <meshStandardMaterial
                    color="green"
                />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_3.geometry}
            material={nodes.Cube_3.material}
            position={[11.89, 90.73, 1.37]}
            rotation={[-0.07, -0.52, -0.01]}
            scale={0.3}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4.geometry}
            material={nodes.Cube_4.material}
            position={[-34.04, 74.88, -4.31]}
            rotation={[-3.13, 0.09, 2.88]}
            scale={0.29}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_5.geometry}
            material={nodes.Cube_5.material}
            position={[15.38, 78.04, -2.08]}
            rotation={[-3.13, -0.53, -2.87]}
            scale={0.3}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            position={[24.13, 74.9, -13.43]}
            rotation={[0, 0.61, -0.17]}
            scale={0.29}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
        </group>
        <group
          position={[-32.14, 5.65, -274.35]}
          rotation={[-Math.PI, -0.78, -Math.PI]}
          scale={[1.32, 1.52, 1.32]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2_1.geometry}
            material={nodes.Cube_2_1.material}
            position={[-1.42, 113.07, -5.96]}
            rotation={[Math.PI, Math.PI / 6, Math.PI]}
            scale={0.29}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_3_1.geometry}
            material={nodes.Cube_3_1.material}
            position={[11.89, 90.73, 1.37]}
            rotation={[-0.07, -0.52, -0.01]}
            scale={0.3}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4_1.geometry}
            material={nodes.Cube_4_1.material}
            position={[-34.04, 74.88, -4.31]}
            rotation={[-3.13, 0.09, 2.88]}
            scale={0.29}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_5_1.geometry}
            material={nodes.Cube_5_1.material}
            position={[15.38, 78.04, -2.08]}
            rotation={[-3.13, -0.53, -2.87]}
            scale={0.3}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={nodes.Cube_1.material}
            position={[24.13, 74.9, -13.43]}
            rotation={[0, 0.61, -0.17]}
            scale={0.29}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
        </group>
        <group
          position={[-58.53, 5.65, -454.4]}
          rotation={[0, 0.56, 0]}
          scale={[1.32, 1.19, 1.32]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2_2.geometry}
            material={nodes.Cube_2_2.material}
            position={[-1.42, 113.07, -5.96]}
            rotation={[Math.PI, Math.PI / 6, Math.PI]}
            scale={0.29}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_3_2.geometry}
            material={nodes.Cube_3_2.material}
            position={[11.89, 90.73, 1.37]}
            rotation={[-0.07, -0.52, -0.01]}
            scale={0.3}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4_2.geometry}
            material={nodes.Cube_4_2.material}
            position={[-34.04, 74.88, -4.31]}
            rotation={[-3.13, 0.09, 2.88]}
            scale={0.29}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_5_2.geometry}
            material={nodes.Cube_5_2.material}
            position={[15.38, 78.04, -2.08]}
            rotation={[-3.13, -0.53, -2.87]}
            scale={0.3}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_6.geometry}
            material={nodes.Cube_6.material}
            position={[24.13, 74.9, -13.43]}
            rotation={[0, 0.61, -0.17]}
            scale={0.29}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
        </group>
        <group
          position={[-15.16, 5.65, -189.88]}
          rotation={[-Math.PI, 1.48, -Math.PI]}
          scale={[1.32, 1.19, 1.32]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2_3.geometry}
            material={nodes.Cube_2_3.material}
            position={[-1.42, 113.07, -5.96]}
            rotation={[Math.PI, Math.PI / 6, Math.PI]}
            scale={0.29}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_3_3.geometry}
            material={nodes.Cube_3_3.material}
            position={[11.89, 90.73, 1.37]}
            rotation={[-0.07, -0.52, -0.01]}
            scale={0.3}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4_3.geometry}
            material={nodes.Cube_4_3.material}
            position={[-34.04, 74.88, -4.31]}
            rotation={[-3.13, 0.09, 2.88]}
            scale={0.29}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_5_3.geometry}
            material={nodes.Cube_5_3.material}
            position={[15.38, 78.04, -2.08]}
            rotation={[-3.13, -0.53, -2.87]}
            scale={0.3}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_7.geometry}
            material={nodes.Cube_7.material}
            position={[24.13, 74.9, -13.43]}
            rotation={[0, 0.61, -0.17]}
            scale={0.29}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
        </group>
        <group
          position={[-2.73, 5.65, -78.44]}
          rotation={[0, 0.56, 0]}
          scale={[1.32, 1.19, 1.32]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2_4.geometry}
            material={nodes.Cube_2_4.material}
            position={[-1.42, 113.07, -5.96]}
            rotation={[Math.PI, Math.PI / 6, Math.PI]}
            scale={0.29}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_3_4.geometry}
            material={nodes.Cube_3_4.material}
            position={[11.89, 90.73, 1.37]}
            rotation={[-0.07, -0.52, -0.01]}
            scale={0.3}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4_4.geometry}
            material={nodes.Cube_4_4.material}
            position={[-34.04, 74.88, -4.31]}
            rotation={[-3.13, 0.09, 2.88]}
            scale={0.29}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_5_4.geometry}
            material={nodes.Cube_5_4.material}
            position={[15.38, 78.04, -2.08]}
            rotation={[-3.13, -0.53, -2.87]}
            scale={0.3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_8.geometry}
            material={nodes.Cube_8.material}
            position={[24.13, 74.9, -13.43]}
            rotation={[0, 0.61, -0.17]}
            scale={0.29}
            >
            <meshStandardMaterial
                color="green"
            />

      </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2_5.geometry}
          material={nodes.Cube_2_5.material}
          position={[-1.42, 113.07, -5.96]}
          rotation={[Math.PI, Math.PI / 6, Math.PI]}
          scale={0.29}
          >
          <meshStandardMaterial
              color="green"
          />

    </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3_5.geometry}
          material={nodes.Cube_3_5.material}
          position={[11.89, 90.73, 1.37]}
          rotation={[-0.07, -0.52, -0.01]}
          scale={0.3}
          >
          <meshStandardMaterial
              color="green"
          />

    </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_4_5.geometry}
          material={nodes.Cube_4_5.material}
          position={[-34.04, 74.88, -4.31]}
          rotation={[-3.13, 0.09, 2.88]}
          scale={0.29}
          >
          <meshStandardMaterial
              color="green"
          />

    </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_5_5.geometry}
          material={nodes.Cube_5_5.material}
          position={[15.38, 78.04, -2.08]}
          rotation={[-3.13, -0.53, -2.87]}
          scale={0.3}
          >
          <meshStandardMaterial
              color="green"
          />

    </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_9.geometry}
          material={nodes.Cube_9.material}
          position={[24.13, 74.9, -13.43]}
          rotation={[0, 0.61, -0.17]}
          scale={0.29}
          >
          <meshStandardMaterial
              color="green"
          />

    </mesh>
        <group
          position={[0.64, -4.63, -278.67]}
          rotation={[0, 0, -0.07]}
          scale={[0.76, 0.55, 1.45]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.floor.geometry}
            material={nodes.floor.material}
            position={[-132.96, 1.25, -162.01]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.88}
            >
            <meshStandardMaterial
                color="rgb(100,220,100)"
            />

      </mesh>
        </group>
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[1005.46, 295.3, -294.34]}
          rotation={[-2.21, 1.31, 2.23]}
        />
      </group>
    </group>
  );
}
