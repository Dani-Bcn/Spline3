import React, { useEffect, useRef, useState } from "react";
import { Text3D, useGLTF, useCursor, Html } from "@react-three/drei";
import font1 from '../fonts/Bruno.json'

export function Calculator3d(props) {
  const { nodes, materials } = useGLTF("/Calculadora.gltf");
  const botonRef = useRef()
  const { activeCalcu } = props
  const { handleClickCalcu } = props
  const [num, setNum] = useState("")
  const [position, setPosition] = useState(1.5)
  const [activeCursor, setActiveCursor] = useState(false)
  const [activeInput, setActiveInput] = useState(true)
  const [scaleNums,setScaleNums] = useState(50)

  useCursor(activeCursor)

  const handleClick = ((e) => {
/* 
    const onlyNums = ((value) => {
      const coco = "coco"
      return coco === (value)
    })

    console.log(onlyNums("coc")) */

    if (e.object.name === "off") {

      handleClickCalcu(),
        setNum("")
      setPosition(1.5)
      return
    }
    setPosition(position => position - 0.333)

    num.length > 6  ? setScaleNums(scaleNums -3.5): setScaleNums(50)
    console.log(activeInput)
    if (e.object.name === "=") {
     setNum("" + eval(num))
     if(eval(num)=== 0){
      setNum("")
     }
     
      setPosition()
    } else {
      activeInput ? setNum(oldArray => [...oldArray, e.object.name].join("")) : null
    }
    if (e.object.name === "c") {
      setNum("")
      setPosition(1.5)
    }
  })

  return (
    <group
      rotation={[0, 0, 0]}
      scale={[1, 1, 1]}
    >
      <Text3D
      position={[-1.6,1.05,0]}
        font={font1}
        scale={[0.22, 0.35, 0.5]}
      >
        Off
        <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
      </Text3D>
      <Html >
        <div  className="screen"
         style={{   
            fontSize:scaleNums
          }}
        >
          <h2 > {num}</h2>
        </div>
      </Html>
      <group {...props} dispose={null}
        scale={0.002}
      >
        <group position={[-658.49, 133.54, 13]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extrude1.geometry}
            material={nodes.Extrude1.material}
            position={[23.43, -24.09, -20.31]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <meshStandardMaterial
              color="rgb(150,200,250)"
              roughness={0.01}
            />
          </mesh>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name={1}
            castShadow
            receiveShadow
            geometry={nodes.Extrusión.geometry}
            material={nodes.Extrusión.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
            />
          </mesh>
        </group>
        <group name="Botón119" position={[622.96, -1126.67, 13]}>
          <group name="MoText" position={[18.35, -52.43, 13]}>
            <group name="1" position={[-152.88, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["=_1"].geometry}
                material={nodes["=_1"].material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name="="
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_1.geometry}
            material={nodes.Extrusión_1.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón118" position={[202.14, -1126.67, 13]}>
          <group name="MoText_1" position={[33.35, 73.57, 13]}>
            <group name="1_1" position={[-38.65, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes[",_1"].geometry}
                material={nodes[",_1"].material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name={","}
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_2.geometry}
            material={nodes.Extrusión_2.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group
          name="Botón117" position={[-237.79, -1126.67, 13]}>
          <group name="MoText_2" position={[24.35, -79.43, 13]}>
            <group name="1_2" position={[-120.43, 0, 0]}>
              <mesh
                name="0_1"
                castShadow
                receiveShadow
                geometry={nodes["0_1"].geometry}
                material={nodes["0_1"].material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name={0}
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_3.geometry}
            material={nodes.Extrusión_3.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón116" position={[-658.49, -1126.67, 13]}>
          <group name="MoText_3" position={[15.35, 55.57, 13]}>
            <group name="1_3" position={[-48.78, 0, 0]}>
              <mesh
                name="_1"
                castShadow
                receiveShadow
                geometry={nodes._1.geometry}
                material={nodes._1.material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name="."
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_4.geometry}
            material={nodes.Extrusión_4.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón115" position={[-658.49, -708.6, 13]}>
          <group name="MoText_4" position={[18.35, -79.43, 13]}>
            <group name="1_4" position={[-120.65, 0, 0]}>
              <mesh
                name="7_1"
                castShadow
                receiveShadow
                geometry={nodes["7_1"].geometry}
                material={nodes["7_1"].material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name={7}
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_5.geometry}
            material={nodes.Extrusión_5.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón114" position={[-237.79, -708.6, 13]}>
          <group name="MoText_5" position={[24.35, -79.43, 13]}>
            <group name="1_5" position={[-120.86, 0, 0]}>
              <mesh
                name="8_1"
                castShadow
                receiveShadow
                geometry={nodes["8_1"].geometry}
                material={nodes["8_1"].material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name={8}
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_6.geometry}
            material={nodes.Extrusión_6.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón113" position={[202.14, -708.6, 13]}>
          <group name="MoText_6" position={[9.35, -79.43, 13]}>
            <group name="1_6" position={[-119.56, 0, 0]}>
              <mesh
                name="9_1"
                castShadow
                receiveShadow
                geometry={nodes["9_1"].geometry}
                material={nodes["9_1"].material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name={9}
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_7.geometry}
            material={nodes.Extrusión_7.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón112" position={[622.96, -708.6, 13]}>
          <group
            name="MoText_7"
            position={[11.35, -11.43, 13]}
            scale={[1, 1.04, 1]}
          >
            <group name="1_18" position={[-54.21, 0, 0]}>
              <mesh
                name="_3"
                castShadow
                receiveShadow
                geometry={nodes._3.geometry}
                material={nodes._3.material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name={"/"}
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_8.geometry}
            material={nodes.Extrusión_8.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón111" position={[622.96, -288.69, 13]}>
          <group name="MoText_8" position={[16.35, -79.43, 13]}>
            <group name="1_7" position={[-119.83, 0, 0]}>
              <mesh
                name="X_1"
                castShadow
                receiveShadow
                geometry={nodes.X_1.geometry}
                material={nodes.X_1.material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name={"*"}
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_9.geometry}
            material={nodes.Extrusión_9.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón110" position={[202.14, -288.69, 13]}>
          <group name="MoText_9" position={[9.35, -79.43, 13]}>
            <group name="1_8" position={[-123.37, 0, 0]}>
              <mesh
                name="6_1"
                castShadow
                receiveShadow
                geometry={nodes["6_1"].geometry}
                material={nodes["6_1"].material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name={6}
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_10.geometry}
            material={nodes.Extrusión_10.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón19" position={[-237.79, -288.69, 13]}>
          <group name="MoText_10" position={[24.35, -79.43, 13]}>
            <group name="1_9" position={[-123.37, 0, 0]}>
              <mesh
                name="5_1"
                castShadow
                receiveShadow
                geometry={nodes["5_1"].geometry}
                material={nodes["5_1"].material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name={5}
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_11.geometry}
            material={nodes.Extrusión_11.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón18" position={[-658.49, -288.69, 13]}>
          <group name="MoText_11" position={[15.35, -79.43, 13]}>
            <group name="1_10" position={[-114.11, 0, 0]}>
              <mesh
                name="4_1"
                castShadow
                receiveShadow
                geometry={nodes["4_1"].geometry}
                material={nodes["4_1"].material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name={4}
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_12.geometry}
            material={nodes.Extrusión_12.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón16" position={[-237.79, 131.85, 13]}>
          <group name="MoText_12" position={[24.35, -79.43, 13]}>
            <group name="1_11" position={[-120.1, 0, 0]}>
              <mesh
                name="2_1"
                castShadow
                receiveShadow
                geometry={nodes["2_1"].geometry}
                material={nodes["2_1"].material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name={2}
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_13.geometry}
            material={nodes.Extrusión_13.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón15" position={[202.14, 131.85, 13]}>
          <group name="MoText_13" position={[12.35, -79.43, 13]}>
            <group name="1_12" position={[-117.16, 0, 0]}>
              <mesh
                name="3_1"
                castShadow
                receiveShadow
                geometry={nodes["3_1"].geometry}
                material={nodes["3_1"].material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name={3}
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_14.geometry}
            material={nodes.Extrusión_14.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón14" position={[622.96, 131.85, 13]}>
          <group name="MoText_14" position={[19.35, -156.82, 13]}>
            <group name="1_13" position={[-163.65, 0, 0]}>
              <mesh
                name="-_1"
                castShadow
                receiveShadow
                geometry={nodes["-_1"].geometry}
                material={nodes["-_1"].material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name={"-"}
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_15.geometry}
            material={nodes.Extrusión_15.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón13" position={[622.96, 552.45, 13]}>
          <group name="MoText_15" position={[16.35, -71.43, 13]}>
            <group name="1_14" position={[-191.86, 0, 0]}>
              <mesh
                name="+_1"
                castShadow
                receiveShadow
                geometry={nodes["+_1"].geometry}
                material={nodes["+_1"].material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name="+"
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_16.geometry}
            material={nodes.Extrusión_16.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón1" position={[195, 552.45, 13]}>
          <group name="MoText_18" position={[2.35, -55.43, 13]}>
            <group name="1_17" position={[-104.75, 0, 0]}>
              <mesh
                name="c_1"
                castShadow
                receiveShadow
                geometry={nodes.c_1.geometry}
                material={nodes.c_1.material}
              >
                <meshStandardMaterial
                  color="rgb(150,200,250)"
                  roughness={8}
                />
              </mesh>
            </group>
          </group>
          <mesh
            scale={[1, 1, 1]}
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            name="c"
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_19.geometry}
            material={nodes.Extrusión_19.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón1" position={[-650, 552.45, 13]}>
          <mesh
            onClick={(e) => handleClick(e)}
            onPointerOver={() => setActiveCursor(true)}
            onPointerOut={() => setActiveCursor(false)}
            scale={[1, 1, 1]}
            name="off"
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_19.geometry}
            material={nodes.Extrusión_19.material}
            position={[17.65, 79.43, -13]}
          >
            <meshStandardMaterial
              color="rgb(275,200,150)"
              roughness={8}
            />
          </mesh>
        </group>
        <group name="Botón120" position={[-6.89, 1055.11, 13]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extrusión_20.geometry}
            material={nodes.Extrusión_20.material}
            position={[6.07, 79.43, -31.05]}
          >
            <meshStandardMaterial
              color="rgb(230,230,250)"
              roughness={8}
            />
          </mesh>
        </group>
        <mesh
          name="Extrude"
          castShadow
          receiveShadow
          geometry={nodes.Extrude.geometry}
          material={nodes.Extrude.material}
          position={[0, 0, -60.65]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <meshStandardMaterial
            color="rgb(230,230,150)"
            roughness={8}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/Calculadora.gltf");