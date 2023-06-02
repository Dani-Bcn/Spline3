import React, { useEffect, useRef, useState } from "react";
import { Text, useGLTF, useCursor, useTexture, RoundedBox, Html } from "@react-three/drei";
import { gsap } from "gsap";
import img_whats from '/img/whatsapp.svg'
import img_crome from '/img/crome.svg'
import img_galery from '/img/galery.svg'
import img_calcu from '/img/calcu.svg'
import img_email from '/img/email.svg'

export function Mobile(props) {

  const { nodes, materials } = useGLTF("/Iphone.gltf");
  const { handleClick } = props
  const {handleClickCalendar} = props
  const [hovered, setHovered] = useState(false)
  const textureWhats = useTexture(img_whats)
  const textureCrome = useTexture(img_crome)
  const textureGalery = useTexture(img_galery)
  const textureCalcu = useTexture(img_calcu)
  const textureEmail = useTexture(img_email)
  const timeRef = useRef()
  const iconsRef = useRef()
  const groupRef = useRef()

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
        y: 0.55,
        x: -0.5,
        z: 0.2,
       delay:0,
        duration: 2,
       
      })
      gsap.to(groupRef.current.position, {
        z: 3,
        x: -5,
        y: 0,
        delay:0,
        duration: 2,
      })

      gsap.to(groupRef.current.scale, {
        z: 0.5,
        x: 0.5,
        y: 0.5,
        delay:0,
        duration: 2,
        
      })
    }
  }, [])

  const handleWhats = ((e) => {
    setHovered(false)
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
      x: -2,
      y: 0,
    })
    gsap.to(iconsRef.current.scale, {
      y: 0.5,
      x: 0.5,
      z: 1,
    })
    handleClick(e)
    gsap.to(groupRef.current.rotation, {
      z: 1.565,
      x: 0,
      y: 0,
      duration:1
    })
    gsap.to(groupRef.current.position, {
      z: 0.5,
      x: -0.2,
      y: 0.85,
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
  const [activeCalendar, setActiveCalendar] = useState(false)


  return (
    <group {...props} dispose={null}
      ref={groupRef}
      scale={[0.4, 0.43, 0.3]}
      position={[5, 0, 50]}
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
        position={[-2.2, 6.7, 0.5]}
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
        position={[0, -2.1, 0.1]}
      >
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
            roughness={0.01}
          />
        </mesh>
        <mesh
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
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => handleClickCalendar(e)}
          name="calerdar"
          position={[3.75, -2, 0.5]}
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

      <group
        position={[0, 0.0284, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={8.544}
      >
        <group
          position={[0, 0, -0.0033]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.117}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.phone_body.geometry}
            material={materials["Material.009"]}
            position={[1.3731, 5.1152, -0.5652]}
            scale={1.8545}
          />
        </group>
        <group
          position={[0.0005, -0.0028, 0.0023]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.117}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_1.geometry}
            material={materials["Mat.2"]}

          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.backpanel.geometry}
          material={materials["Material.009"]}
          position={[0.1607, 0.0662, 0.5954]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.2171}
          material-roughness={0.15}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_bump.geometry}
          material={materials["Material.012"]}
          position={[0.1607, 0.0662, 0.5954]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.2171}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_1.geometry}
          material={materials.Mat}
          position={[0.2572, 0.0579, 0.703]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.0894, 0.0894, 0.0202]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_3.geometry}
          material={materials.Mat}
          position={[0.0649, 0.0579, 0.5985]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.0935, 0.0935, 0.0211]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_2.geometry}
          material={materials.Mat}
          position={[0.2572, 0.0579, 0.495]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.0894, 0.0894, 0.0202]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lens_1.geometry}
          material={materials["Mat.1"]}
          position={[0.2572, 0.0579, 0.703]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.0894, 0.0894, 0.0202]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.APPLE_LOGO.geometry}
          material={materials["Mat.1"]}
          position={[-0.0018, 0.1476, 0.0043]}
          rotation={[1.4263, 0, 0]}
          scale={0.1666}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.power_key.geometry}
          material={materials.Mat}
          position={[0.4172, 0.0001, 0.391]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.0146}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.volume_keys.geometry}
          material={materials.Mat}
          position={[-0.4055, 0.0001, 0.4556]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
          scale={0.0146}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slider_button.geometry}
          material={materials.Mat}
          position={[-0.4136, 0.0001, 0.4585]}
          rotation={[Math.PI, -1.5705, 0]}
          scale={0.0146}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bottom_screws.geometry}
          material={nodes.bottom_screws.material}
          position={[-0.0433, 0.0762, -0.7574]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.2515}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.charging_port.geometry}
          material={nodes.charging_port.material}
          position={[0.1607, 0.0662, 0.5954]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.2171}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lens_3.geometry}
          material={materials["Mat.1"]}
          position={[0.0649, 0.0579, 0.5985]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.0935, 0.0935, 0.0211]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lens_2.geometry}
          material={materials["Mat.1"]}
          position={[0.2572, 0.0579, 0.495]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.0894, 0.0894, 0.0202]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earpiece_mesh.geometry}
        material={materials.Mat}
        position={[0.0059, 7.0703, 0.361]}
        scale={0.0468}
      />
    </group>
  );
}

useGLTF.preload("/Iphone.gltf");