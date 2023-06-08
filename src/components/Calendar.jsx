import { Environment, OrbitControls, PerspectiveCamera, Scroll, ScrollControls, SpotLight, Text, Text3D, useCursor } from '@react-three/drei';
import { Calendar3d } from '../components3D/Calendar3d';
import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion'
import { Canvas } from '@react-three/fiber';

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
            <section className='select-date'
                style={{
                    zIndex:5,                   
                }}
            >
                <article>
                    <h3>X</h3>
                </article>
                <article
                style={{
                    width:"100%",
                    display:"flex",
                    justifyContent:"space-around"  
                }}
                >
                    <h3>{"<<"}</h3>              
                    <h3>{">>"}</h3>
                </article>
                <article>
                    <h3>{nameMonths}</h3>
                </article>
                <article>
                    <h3>{nameYears}</h3>
                </article>
            </section>

            <section className="obj-calendar">
              
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
                <Environment
                    preset='city'
                />
                <PerspectiveCamera
                    makeDefault
                    position={[0, 0, 250]}
                    fov={1}
                />
                <pointLight
                    position={[-5, 5, 5]}
                    castShadow
                    intensity={7}
                    shadow-bias={0.0001}
                    distance={75}
                    decay={18}
                />
                <ScrollControls
                    pages={0}>
                    <Scroll>
                        <Calendar3d />
                    </Scroll>
                </ScrollControls>
            </Canvas>

        </m.main>
    )
}

export default Calendar;
