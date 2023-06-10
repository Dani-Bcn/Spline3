import { Environment, OrbitControls, PerspectiveCamera, Scroll, ScrollControls, SpotLight, Text, Text3D, useCursor } from '@react-three/drei';
import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion'
import { Flowers } from '../components3D/Flowers';
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

    useCursor(hover)

    useEffect(() => {
        month === 6 && month === 0 ? setVariantNum(2) : null
    }, [nameMonths])

    const varianstActive = {
        open: {
            clipPath: "circle(71% at 50% 50%)",
            opacity: [0, 0, 0, 1],
            top: [0, 0],
            left: [0, 0],
            transition: {
                duration: 1,
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

        <m.main className="calendar"
            variants={varianstActive}
            animate={
                activeCalendar ? "open" : "close"
            }
        >
            <h3
                style={{
                    position: "absolute",
                    fontSize: "2rem",
                    margin: 50,
                    cursor: "pointer",
                    zIndex: 5,
                    color: "wheat",
                }}
                onClick={() => handleClickCalendar()}
            >X</h3>
            <section className='ct-calendar'>
                <section className='head-calendar'>
                    <h3>{nameMonths}</h3>
                    <h3>{nameYears}</h3>
                </section>
                <section>
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
                                    new Date(year, month, i - 9).getMonth() === currentMonth ? setColor("rgb(155,220,250)") : setColor("rgb(175,175,175)")
                                    i === day + 9 && nameMonths === currentData.toDateString().slice(4, 7) ? setColor("rgb(255,150,200)") : null
                                })
                                return (
                                    <h2 key={i}
                                        style={{
                                            color: color
                                        }}
                                    >
                                        {new Date(year, month + nextMonth, i - firstDayMonth + varianNum).getDate()}
                                    </h2>
                                )
                            })
                        }
                    </article>

                    <section className='footer-calendar' >
                        <h3
                            onClick={() => setNextMonth(nextMonth - 1)}
                        >{"<<"}</h3>
                        <h3
                            onClick={() => setNextMonth(nextMonth + 1)}
                        >{">>"}</h3>
                    </section>
                </section>
            </section>
            <section
                style={{
                    zIndex: -10,
                    top: "0px",
                    width: "100vw",
                    height: "100vh",
                    right: 0
                }}
            >
                < Canvas>
                    <Environment
                        preset='city'
                    />
                    <spotLight
                        position={[0, 0, 255]}

                        intensity={0.1}
                    />

                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, 250]}
                        fov={10}
                    />
                    <ScrollControls
                        pages={0}>
                        <Scroll>
                            <Flowers />
                        </Scroll>
                    </ScrollControls>

                </Canvas>
            </section>



        </m.main>



    )
}

export default Calendar;
