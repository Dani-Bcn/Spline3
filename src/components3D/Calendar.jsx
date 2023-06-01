import { Environment, RoundedBox, Scroll, ScrollControls, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import {motion as m }from 'framer-motion'
const Calendar = () => {

    const currentDate = new Date()
    const currentDay = currentDate.getDate()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()
    const date = new Date(currentYear, currentMonth - 1, 0)
    const day = date.getDate()
    let arrayDays = new Array(day).fill()

    const IconsDays = (() => {
        return (
            <mesh
                scale={0.5}>
                <planeGeometry />
                <meshStandardMaterial />
            </mesh>
        )
    })

    return (

        <m.main className='ct-calendar' >          
                <Canvas>
                    <Environment
                        preset='city'
                    />
                    <ScrollControls>
                        <Scroll>
                            <group>
                                {
                                    arrayDays.map((e, i) => {
                                        const [position, setPosition] = useState(5)
                                        const arrayPositionY = [0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -2, -2, -2, -2, -2, -2, -2, -3, -3, -3, -3, -3, -3, -3, -4, -4, -4, -4, -4, -4, -4]
                                        const arrayPositionX = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7]
                                        return (
                                            <group
                                                key={i}
                                                position={[arrayPositionX[i] - 3, arrayPositionY[i] + 1, 0]}
                                            >
                                                <IconsDays />
                                                <Text
                                                    scale={0.2}
                                                    color="rgb(250,100,100)"
                                                >
                                                    {new Date(currentYear, currentMonth, i + 1).toDateString()}
                                                </Text>
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
