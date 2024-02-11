import React, { useRef, useState } from "react";
import {
  useGLTF,
  RoundedBox,
  MeshReflectorMaterial,
  useCursor,
  Text3D,
  useScroll,
  SpotLight
} from "@react-three/drei";
import font1 from "../fonts/Bruno.json";
import { gsap } from "gsap";
import { useFrame ,} from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { Environment } from "@react-three/drei";

export function Menu_home(props) {
  const [hover, setHover] = useState(false);
  const { nodes, materials } = useGLTF("/Object_3d.glb");
  const aboutRef = useRef();
  const projectsRef = useRef();
  const webRef = useRef();
  const groupRef = useRef();
  const data = useScroll();
  useCursor(hover);
  const navigate = useNavigate();

  const hoverAboutOn = () => {
    setHover(true);
    gsap.to(aboutRef.current.material.color, {
      r: 0.5,
      g: 0.1,
      b: 0.1,
    });
  };

  const hoverAboutOff = () => {
    setHover(false);
    gsap.to(aboutRef.current.material.color, {
      r: 0.1,
      g: 0.1,
      b: 0.3,
    });
  };

  const hoverProjectsOn = () => {
    setHover(true);
    gsap.to(projectsRef.current.material.color, {
      r: 0.5,
      g: 0.1,
      b: 0.1,
    });
  };

  const hoverProjectsOff = () => {
    setHover(false);
    gsap.to(projectsRef.current.material.color, {
      r: 0.1,
      g: 0.1,
      b: 0.3,
    });
  };

  const hoverWebOn = () => {
    setHover(true);
    gsap.to(webRef.current.material.color, {
      r: 0.5,
      g: 0.1,
      b: 0.1,
    });
  };

  const hoverWebOff = () => {
    setHover(false);
    gsap.to(webRef.current.material.color, {
      r: 0.1,
      g: 0.1,
      b: 0.3,
    });
  };

  useFrame(() => {
    groupRef.current.position.y = 25 - data.range(0, 2 / 2) * 25.1;

    /*  data.range(0, 2 / 2) > 0.95 ?
       gsap.to(groupRef.current.position, {
         z: 0,
         duration:1
       })
       :
       gsap.to(groupRef.current.position, {
         z: -1
       })  */
  });

  return (
    <group
      {...props}
      dispose={null}
      position={[0, -1.32, -55.3]}
      scale={[0.3, 0.3, 0.3]}
    >
    
      <group ref={groupRef} position={[0, 0, 0]}>
        <group
          scale={[0.006, 0.0045, 0.0045]}
          position={[0, 1.6, 0]}
          onPointerOver={() => hoverAboutOn()}
          onPointerOut={() => hoverAboutOff()}
        >
         
         

          <Text3D
            position={[-56, 105, -1.57]}
            scale={[20, 25, 45]}
            font={font1}
          >
            <meshStandardMaterial color={"rgb(85,85,150)"} roughness={0.8} />
            About
          </Text3D>
          <Text3D
            position={[-83, -60, -1.57]}
            scale={[20, 25, 45]}
            font={font1}
          >
            <meshStandardMaterial color={"rgb(85,85,150)"} roughness={0.8} />
            Projects
          </Text3D>
          <Text3D
            position={[-85, -225, -1.57]}
            scale={[20, 25, 45]}
            font={font1}
          >
            <meshStandardMaterial color={"rgb(85,85,150)"} roughness={0.8} />
            Portfolio
          </Text3D>
          <SpotLight
          intensity={5}
            position={[0,0,10]}
          />
          <mesh
            ref={aboutRef}
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2.geometry}
            material={nodes.Rectangle_2.material}
            position={[0, 120, -16.57]}
            scale={1.5}
          >
            <meshStandardMaterial color={"rgb(85,85,150)"} />
            <mesh
              onClick={() => navigate("/about")}
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_2.geometry}
              material={nodes.Rectangle_2.material}
              position={[0, 0, 2]}
              scale={[0.93, 0.9, 1]}
            >
              <meshStandardMaterial color={"rgb(180,150,150)"} />
            </mesh>
          </mesh>
        </group>
        <group
          scale={[0.006, 0.0045, 0.0045]}
          position={[0, 0.85, 0]}
          onPointerOver={() => hoverProjectsOn()}
          onPointerOut={() => hoverProjectsOff()}
        >
          <mesh
            ref={projectsRef}
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2.geometry}
            material={nodes.Rectangle_2.material}
            position={[0, 120, -16.57]}
            scale={1.5}
          >
            <meshStandardMaterial color={"rgb(85,85,150)"} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_2.geometry}
              material={nodes.Rectangle_2.material}
              position={[0, 0, 2]}
              scale={[0.93, 0.9, 1]}
            >
              <meshStandardMaterial color={"rgb(180,150,150)"} />
            </mesh>
          </mesh>
        </group>
        <group
          scale={[0.006, 0.0045, 0.005]}
          position={[0, 0.1, 0]}
          onPointerOver={() => hoverWebOn()}
          onPointerOut={() => hoverWebOff()}
        >
          <mesh
            ref={webRef}
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2.geometry}
            material={nodes.Rectangle_2.material}
            position={[0, 120, -16.57]}
            scale={1.5}
          >
            <meshStandardMaterial color={"rgb(85,85,150)"} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_2.geometry}
              material={nodes.Rectangle_2.material}
              position={[0, 0, 2]}
              scale={[0.93, 0.9, 1]}
            >
              <meshStandardMaterial color={"rgb(180,150,150)"} />
            </mesh>
          </mesh>
        </group>
      </group>
      <RoundedBox
        receiveShadow
        rotation={[-1.5, 0, 0]}
        scale={[15, 5, 0.1]}
        position={[0, -0.05, 0]}
        radius={0.05}
        smoothness={4}
        creaseAngle={0.4}
      >
        <MeshReflectorMaterial
          blur={[1700, 500]}
          resolution={2048}
          mixBlur={5}
          mixStrength={50}
          roughness={1.9}
          depthScale={1.9}
          minDepthThreshold={0.8}
          maxDepthThreshold={1.9}
          color="rgb(30,20,20)"
          metalness={0.5}
        />
      </RoundedBox>
      <mesh receiveShadow scale={[1500, 1000, 5]} position={[-5, -5, -0.15]}>
        <planeGeometry />
        <meshStandardMaterial color={"rgb(50,50,50)"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Object_3d");
