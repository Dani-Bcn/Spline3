import { Environment, PerspectiveCamera, Scroll, ScrollControls, SpotLight, Text, Text3D, useCursor } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion'
import font1 from '../fonts/Bebas_Regular.json'
import { Calendar3d } from '../components3D/Calendar3d';

const Calendar = (props) => {
    const [nextMonth, setNextMonth] = useState(0)
    const { handleClickCalendar } = props
    const { activeCalendar } = props
    const [hover, setHover] = useState(false)
    const currentData = new Date()
    const currentYear = currentData.getFullYear()
    const currentMonth = currentData.getMonth()
    const currentDay = currentData.getDate()
    const data = new Date(currentYear, currentMonth + nextMonth, currentDay)
    const year = data.getFullYear()
    const month = data.getMonth()
    const day = data.getDate()
    const firstDayMonth = new Date(year, month, 1).getDay();
    const arrayNumsDay = new Array(42).fill()
    const arrayNamesDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const [varianNum, setVariantNum] = useState(-5)

    let nameMonths = data.toDateString().slice(4, 7)
    let nameYears = data.toDateString().slice(11, 15)

    console.log(nameYears)

    useCursor(hover)

    useEffect(() => {


        month === 6 && month === 0 ? setVariantNum(2) : null
    }, [nameMonths])

    const varianstActive = {
        open: {
            clipPath: "circle(75% at 50% 50%)",
            opacity: [0, 1, 1, 1],
            top: [0, 0],
            left: [0, 0],
            transition: {
                duration: 2,
                ease: "backOut"
            }
        },
        close: {
            clipPath: "circle(1% at 50% 50%)",
            opacity: [1, 0.9],
            top: [0, 400],
            left: [0, 300],
            transition: {
                duration: 0.5,
                ease: "circIn"
            }
        }
    }

    return (

        <m.main className="ct-calendar"
            variants={varianstActive}
            animate={
                activeCalendar ? "open" : "close"
            }
            style={{
                position: "absolute",
                fontFamily: "Bruno",
            }}
        >

            <section className="obj-calendar">
                <div>
                <h3
                        onClick={() => handleClickCalendar()}
                        style={{
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            top: -225,
                            left: -700,
                            height: 100,
                            fontSize: "4rem",
                            cursor: "pointer"
                        }}
                    >X</h3>
                    
                <h3
                        onClick={() => setNextMonth(nextMonth - 1)}
                        style={{
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            top: -100,
                            left: -625,
                            height: 100,
                            fontSize: "9rem",
                            cursor: "pointer"
                        }}
                    >{"<<"}</h3>
                    <h3
                        onClick={() => setNextMonth(nextMonth + 1)}
                        style={{
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            top: -100,
                            left: -375,
                            height: 100,
                            fontSize: "9rem",
                            cursor: "pointer"
                        }}
                    >{">>"}</h3>
                    <h3                       
                        style={{
                            position: "absolute",
                            top: 100,
                            left: -600,
                            fontSize: "8rem",
                        }}
                    >{nameMonths}</h3>
                    <h3                        
                        style={{
                            position: "absolute",
                            top: 250,
                            left: -600,
                            fontSize: "8rem",
                        }}
                    >{nameYears}</h3>
              

                </div>
                <article className='days-calendar'>
                    {
                        arrayNamesDay.map((e, i) => {
                            return (
                                <h3 key={i}>
                                    {e}
                                </h3>
                            )
                        })
                    }
                </article>
                <article className='nums-calendar'>
                    {
                        arrayNumsDay.map((e, i) => {
                            const [color, setColor] = useState()
                            useEffect(() => {
                                i === day + 9 && nameMonths === currentData.toDateString().slice(4, 7) ? setColor("red") : setColor("black")
                            })
                            return (
                                <h2 key={i}

                                    style={{
                                        color: color
                                    }}
                                >
                                    {new Date(year, month, i - firstDayMonth + varianNum).getDate()}
                                </h2>
                            )
                        })
                    }
                </article>
            </section>
            <Canvas
                shadows
            >
                <PerspectiveCamera
                    makeDefault
                    fov={1.3}
                    position={[-13.5, 12.5, 250]}
                    rotation={[-0.05, -0.05, -0.025]}
                />
                <spotLight
                    castShadow
                    position={[-30, 2, 20]}
                    intensity={30}
                    decay={1.8}
                    distance={50}
                    shadow-bias={0.00001}
                />
                <spotLight
                    castShadow
                    position={[0, 5, 40]}
                    intensity={8}
                    distance={60}
                    decay={1.7}
                />
                <Environment
                    preset='night'
                    resolution={2040}
                    blur={50}
                />
                <ScrollControls
                    pages={0}
                >
                    <Scroll>
                        <Calendar3d />
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </m.main>
    )
}

export default Calendar;
