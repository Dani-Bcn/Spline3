import React, { useEffect, useRef, useState } from "react";
import { Text, useGLTF, useCursor, useTexture, RoundedBox, Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import img_whats from '/img/whatsapp.svg'
import img_crome from '/img/crome.svg'
import img_galery from '/img/galery.svg'
import img_calcu from '/img/calcu.svg'
import img_email from '/img/email.svg'
import img_home from '/img/Home.svg'


export function Mobile_prueba(props) {
  const { nodes, materials } = useGLTF("/Mobile.glb");
  const navigate = useNavigate()
  const { handleClick } = props
  const { handleClickCalendar } = props
  const { handleClickCalcu } = props
  const [hovered, setHovered] = useState(false)
  const textureWhats = useTexture(img_whats)
  const textureCrome = useTexture(img_crome)
  const textureGalery = useTexture(img_galery)
  const textureCalcu = useTexture(img_calcu)
  const textureEmail = useTexture(img_email)
  const textureHome = useTexture(img_home)
  const timeRef = useRef()
  const iconsRef = useRef()
  const groupRef = useRef()
  const calendarRef = useRef()
  const homeRef = useRef()
  const fecha = new Date()
  const stringFecha = fecha.toDateString()
  const Nameday = stringFecha.slice(0, 3)
  const numberDay = stringFecha.slice(9, 10)
  useCursor(hovered)

  let hours = fecha.getHours()
  hours < 10 ? hours = `0${hours}` : { hours }
  let minutes = fecha.getMinutes()
  minutes < 10 ? minutes = `0${minutes}` : { minutes }
  const [passTime, setPassTime] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setPassTime(!passTime)
    }, 1000);
    return () => clearInterval(timer);
  }, [passTime])

  useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.rotation, {
        y: 0.8,
        x: -0.5,
        z: 0.4,
        delay: 0,
        duration: 2,
      })
      gsap.to(groupRef.current.position, {
        z: 3,
        x: -5,
        y: 0,
        delay: 0,
        duration: 2,
      })
      gsap.to(groupRef.current.scale, {
        z: 0.6,
        x: 0.5,
        y: 0.5,
        delay: 0,
        duration: 2,
      })
    }
  }, [])

  const handleWhats = ((e) => {
    setHovered(false)
    gsap.to(homeRef.current.position, {
      x: -3.75,
      y: -2,
      z: 0.5
    })
    gsap.to(calendarRef.current.position, { 
      x: 3.75,
      y: -2,
      z: 0.5
    })
    gsap.to(timeRef.current.position, { 
      y: -5.2,
      x: 2
    })
    gsap.to(timeRef.current.rotation, {
      z: -1.56
    })
    gsap.to(iconsRef.current.rotation, {
      z: -1.57,
    })
    gsap.to(iconsRef.current.position, {
      x: -1.7,
      y: 0,
    })
    gsap.to(iconsRef.current.scale, {
      y: 0.5,
      x: 0.5,
      z: 1,
    })
    handleClick(e)
    gsap.to(groupRef.current.rotation, {
      z: 1.57,
      x: 0,
      y: 0,
      duration: 1
    })
    gsap.to(groupRef.current.position, {
      z: 1.5,
      x: -0.5, 
      y: 0.5,
      duration: 0.5,
      delay: 1,
      ease: "expo.out"
    })
    gsap.to(groupRef.current.scale, {
      z: 1.5,
      x: 1.5,
      y: 1.5,
      delay: 1,
      duration: 1,
      ease: "expo.out"
    })
  })

  return (
    <group {...props} dispose={null}
      ref={groupRef}
      scale={[0.4, 0.43, 0.3]}
      position={[15, 0, 5]}
      rotation={[1, 5, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => handleWhats(e)}
    >
      <group
        castShadow
        ref={timeRef}
        name="letters"
        scale={[0.3, 0.3, 0]}
        position={[-2.2, 6.2, 0.5]}
      >
        {
          passTime ?
            <Text>
              {hours}:{minutes}
            </Text> :
            <Text>
              {hours}:{minutes}
            </Text>
        }
      </group>
      <group
        ref={iconsRef}
        position={[-0.25, -3, 0.1]}
      >
        <mesh
        ref={homeRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => navigate('/')}
          name="Home"
          position={[-1.25, -1, 0.5]} 
          scale={[0.9, 0.85, 0.5]}
        >
          <planeGeometry />
          <meshStandardMaterial
            map={textureHome}
          />
        </mesh>
        <mesh
          name="whats"
          position={[-2.5, -2, 0.5]}
          scale={[0.9, 0.85, 0.5]}
        >
          <planeGeometry />
          <meshStandardMaterial
            map={textureWhats}
          />
        </mesh>
        <mesh
          name="crome"
          position={[-1.25, -2, 0.5]}
          scale={[0.9, 0.85, 0.5]}
        >
          <planeGeometry />
          <meshStandardMaterial
            map={textureCrome}
          />
        </mesh>
        <mesh
          name="galery"
          position={[0, -2, 0.5]}
          scale={[0.9, 0.85, 0.5]}
        >
          <planeGeometry />
          <meshStandardMaterial
            map={textureGalery}
            roughness={8}
          />
        </mesh>
        <mesh
          ref={calendarRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => handleClickCalcu(e)}
          name="calcu"
          position={[1.25, -2, 0.5]}
          scale={[0.9, 0.85, 0.5]}
        >
          <planeGeometry />
          <meshStandardMaterial
            map={textureCalcu}
            color={"rgb(220,120,150)"}
          />
        </mesh>
        <mesh
          name="email"
          position={[2.5, -2, 0.5]}
          scale={[0.9, 0.85, 0.5]}
        >
          <planeGeometry />
          <meshStandardMaterial
            map={textureEmail}
          />
        </mesh>
        <mesh
          ref={calendarRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => handleClickCalendar(e)}
          name="calendar"
          position={[-2.5, -1, 0.5]}
          scale={[0.9, 0.85, 0.05]}
        >
          <RoundedBox
            radius={0.1}
          />
          <meshStandardMaterial />
          <Text
            position={[0, 0.3, 1]}
            color="rgb(120,120,250)"
            scale={0.3}
          >
            {Nameday}
          </Text>
          <Text
            position={[0, -0.2, 1]}
            color="rgb(120,120,250)"
            scale={0.5}
          >
            {numberDay}
          </Text>
        </mesh>
      </group>
    <group {...props} dispose={null}
        scale={[0.75,0.7,0.75]}
    >
      <group position={[2.76, 6.75, -0.03]}
      onClick={()=>handleWhats()}
    ref={groupRef}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder3-Mat"].geometry}
          material={materials.Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder3-Mat1"].geometry}
          material={materials["Mat.1"]}
        />
      </group>
      <group position={[1.39, 6.75, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder2-Mat"].geometry}
          material={materials.Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder2-Mat1"].geometry}
          material={materials["Mat.1"]}
        />
      </group>
      <group position={[2.76, 8.23, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder1-Mat"].geometry}
          material={materials.Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder1-Mat1"].geometry}
          material={materials["Mat.1"]}
        />
      </group>
      <group position={[1.39, 8.23, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder-Mat"].geometry}
          material={materials.Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder-Mat1"].geometry}
          material={materials["Mat.1"]}
        />
      </group>
      <group position={[0, 0.01, 0]} scale={[1, 0.9, 1]}>
        <group position={[0, -0.01, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Loft-Material009"].geometry}
            material={materials["Material.009"]}
          />
          <mesh
          rotation={[0,3.15,3.14]}
          position={[0,0,1]}
            castShadow
            receiveShadow
            geometry={nodes["Loft-Mat2"].geometry}
            material={materials["Mat.2"]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube4.geometry}
        material={materials["Material.009"]}
        position={[2.09, 7.5, -0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube3.geometry}
        material={materials.Mat}
        position={[-3.97, 5.1, 0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2.geometry}
        material={materials.Mat}
        position={[-3.97, 6.05, 0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube1.geometry}
        material={materials.Mat}
        position={[3.99, 3.9, 0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Mat}
        position={[3.99, 6.05, 0.22]}
      />
    </group>
    </group>
  );
}

useGLTF.preload("/Mobile.glb");
