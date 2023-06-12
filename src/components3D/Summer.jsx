import React, { useRef } from "react";
import { useGLTF, OrthographicCamera, Environment, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Summer(props) {
  const { nodes, materials } = useGLTF("/Summer.glb");

  const umbrellaRef = useRef()
  const data = useScroll()

  useFrame(() => {
    umbrellaRef.current.rotation.y += 0.002
  })

  return (
    <group {...props} dispose={null}
      scale={0.0035}
      rotation={[0, -1.8, 0]}
      position={[1.5, -0.8, 0]}
    >

      <Environment
        preset="city"
      />
      <group
        position={[0.64, -4.63, 0]}
        rotation={[0, 0, -0.07]}
        scale={[0.76, 1, 0.8]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={nodes.floor.material}
          position={[-132.96, 1.25, -200]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.88}
        >
          <meshStandardMaterial
            color={"rgb(250,200,100)"}
            roughness={0.8}
          />

        </mesh>
      </group>
      <group
        ref={umbrellaRef}
        position={[0, 0, -104.46]}
        rotation={[-0.29, 0, 0.1]}
        scale={[3, 5, 3]}
      >
        <group position={[0, 39.4, 0]}

        >

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_1.geometry}
            material={nodes.Sphere_1.material}
          >
            <meshStandardMaterial
              color={"rgb(200,120,20)"}
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere-Mat1"].geometry}
            material={nodes["Sphere-Mat1"].material}
          >
            <meshStandardMaterial
              color={"rgb(150,120,220)"}
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere-Mat"].geometry}
            material={nodes["Sphere-Mat"].material}
          >
            <meshStandardMaterial
              color={"rgb(250,220,20)"}
              roughness={0.5}
            />

          </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1.geometry}
          material={nodes.Cylinder1.material}
          position={[0, 49.73, 0]}
          scale={[2, 1, 2]}
        >
          <meshStandardMaterial
            color={"rgb(230,220,220)"}
          />
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2_1.geometry}
        material={nodes.Cube_2_1.material}
        position={[0.89, 94.13, 57.75]}
        rotation={[0, 0, 0.76]}
      >
        <meshStandardMaterial
          color={"rgb(120,120,220)"}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_5.geometry}
        material={nodes.Cube_5.material}
        position={[0, 44.73, -65.19]}
        rotation={[0, 0, -1.27]}
      >
        <meshStandardMaterial
          color={"rgb(200,120,20)"}
          roughness={0.1}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_4.geometry}
        material={nodes.Cube_4.material}
        position={[0, 102.62, -64.75]}
        rotation={[0, 0, 0.76]}
      >
        <meshStandardMaterial
          color={"rgb(200,120,200)"}
          roughness={0.1}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_7.geometry}
        material={nodes.Cube_7.material}
        position={[-36.58, 86.63, -63.83]}
        scale={[1, 1.17, 0.64]}
      >
        <meshStandardMaterial
          color={"rgb(200,120,20)"}
          roughness={0.1}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_6.geometry}
        material={nodes.Cube_6.material}
        position={[-36.58, 86.63, 65.25]}
        scale={[1, 1.17, 0.64]}
      >
        <meshStandardMaterial
          color={"rgb(200,120,20)"}
          roughness={0.1}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_5_1.geometry}
        material={nodes.Cube_5_1.material}
        position={[0, 44.73, 65.42]}
        rotation={[0, 0, -1.27]}
      >
        <meshStandardMaterial
          color={"rgb(200,120,20)"}
          roughness={0.1}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_3.geometry}
        material={nodes.Cube_3.material}
        position={[0, 102.62, 64.75]}
        rotation={[0, 0, 0.76]}
      >
        <meshStandardMaterial
          color={"rgb(200,120,20)"}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}
