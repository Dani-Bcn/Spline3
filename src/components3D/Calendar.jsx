import { Html, Environment, RoundedBox, Scroll, ScrollControls, Text, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion'
import font1 from '../fonts/Bebas_Regular.json'

const Calendar = (props) => {

    const { activeCalendar } = props

    

    const currentDate = new Date()
    const currentDay = currentDate.getDate()
    let currentDayWeek = currentDate.getDay()
    currentDayWeek === 0 ? currentDayWeek = 7 : null
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()
    const arrayIcons = new Array(38).fill()
    let posX = 0
    let posY = 0

    const varianstActive = {
        open: {
            y: 400,
        },
        close: {
            y: -800
        }
    }
    return (

        <m.main className='ct-calendar'
            variants={varianstActive}
            animate={
                activeCalendar ? "open" : "close"
            }
            transition={{
                duration: 1,
                ease: "circOut"
            }}
        >
            <Canvas>
                <Environment
                    preset='city'
                />
                <spotLight
                    position={[0, 50, 50]}
                    intensity={0.1}
                />
                <ScrollControls
                    pages={0}>
                    <Scroll>

                        <group>
                            <Html
                                position={[-5, 0, 0]}
                            >
                                <button
                                  
                                    style={{
                                        fontSize: "2rem",
                                        padding: 10,
                                        borderRadius: 10,
                                    }}
                                >
                                    Back
                                </button>
                            </Html>
                            {
                                arrayIcons.map((e, i) => {
                                    posX = posX + 1.2
                                    if (i === 7 || i === 14 || i === 21 || i === 28 || i === 35) {
                                        posX = 1.2
                                        posY = posY - 1.1
                                    }

                                    return (
                                        <group key={i}>
                                            <group
                                                position={[posX - 4, posY + 2.5, -0.1]}>
                                                <mesh
                                                    position={[0, 0, -0.1]}
                                                    scale={[1, 1, 0.2]}
                                                >
                                                    <RoundedBox
                                                        radius={0.2}
                                                    >
                                                        <meshStandardMaterial
                                                            color={'rgb(100,140,200)'}
                                                            roughness={0.5}
                                                        /></RoundedBox>,
                                                </mesh>
                                                <Text3D
                                                    font={font1}
                                                    scale={[0.3, 0.3, 0.05]}
                                                    curveSegments={5}
                                                    bevelEnabled={true}
                                                    bevelThickness={0.1}
                                                    bevelSize={0.001}
                                                    bevelOffset={0.05}
                                                    bevelSegments={1}
                                                    letterSpacing={0.1}

                                                >
                                                    {new Date(currentYear, currentMonth, i - 2).toDateString().slice(8, 10)}
                                                    <meshStandardMaterial
                                                        color={"rgb(250,200,50)"}
                                                        roughness={0.2}


                                                    />
                                                </Text3D>
                                            </group>
                                        </group>
                                    )
                                })
                            }

                        </group>
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </m.main>
    );
}

export default Calendar;
