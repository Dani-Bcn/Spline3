import { Environment, OrbitControls, PerspectiveCamera, Scroll, ScrollControls, SpotLight, Text, Text3D, useCursor } from '@react-three/drei';
import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion'
import { Spring } from '../components3D/Spring';
import { Summer } from '../components3D/Summer';
import { Canvas } from '@react-three/fiber';
import { Winter } from '../components3D/Winter';
import { Autumn } from '../components3D/Autumn'



const Calendar = (props) => {

    const [nextMonth, setNextMonth] = useState(0)
    const { handleClickCalendar } = props
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
    const [activeSpring, setActiveSpring] = useState(false)
    const [activeSummer, setActiveSummer] = useState(false)
    const [activeWinter, setActiveWinter] = useState(false)
    const [activeAutumn, setActiveAutumn] = useState(false)
    const [namesSeasons, setNamesSeasons] = useState()
  
    useCursor(hover)

    let season = (Number((data.getMonth().toString()) + (data.getDate())))

    useEffect(() => {
        if (season > 219 && season < 521) {
            setActiveSpring(true)
            setNamesSeasons("Spring")
        }
        else {
            setActiveSpring(false)
        }
        if (season > 521 && season < 823) {
            setActiveSummer(true)
            setNamesSeasons("Summer")
        } else {
            setActiveSummer(false)
        }
        if (season > 823 && season < 1121) {
            setActiveAutumn(true)
            setNamesSeasons("Autumn")
        }
        else {
            setActiveAutumn(false)
        }
        if (season > 1121 || season < 220) {
            setActiveWinter(true)
            setNamesSeasons("Winter")
        }
        else {
            setActiveWinter(false)
        }
    }, [season])

    const variantsSpring = {
        open: {
            x: 0
        },
        close: {
            x: 700
        }
    }

    useEffect(() => {
        month === 6 && month === 0 ? setVariantNum(2) : null
    }, [nameMonths])


    const pageClose = (() => {
        setNextMonth(nextMonth - nextMonth)
        handleClickCalendar()
    })

    return (

        <m.main className="calendar">
            <h3
                style={{
                    position: "absolute",
                    fontSize: "0.5rem",
                    margin: 50,
                    cursor: "pointer",
                    zIndex: 5,
                    color: "wheat",
                }}
                onClick={() => pageClose()}
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
                                    new Date(year, month, i - 9).getMonth() === currentMonth ? setColor("rgb(250, 251, 200)") : setColor("rgb(200,200,200)")
                                    i === day + 9 && nameMonths === currentData.toDateString().slice(4, 7) ? setColor("rgb(21,250,250)") : null
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
                <h1
                    style={{
                        position: "absolute",
                        left: -110,
                        width: "100vw",
                        height: "100vh",
                        fontSize: "22rem",
                        color: "rgba(250,20,0,0.04)",
                        transition: "all 0.5s"
                    }}
                >
                    {namesSeasons}
                </h1>
                <m.section
                    style={{
                        position: "absolute"
                    }}
                    variants={variantsSpring}
                    animate={
                        activeSpring ? "open" : "close"
                    }
                >
                    < Canvas>
                        <PerspectiveCamera
                            makeDefault
                            position={[0, 0, 15]}
                            fov={10}
                        />
                        <ScrollControls
                            pages={0}>
                            <Scroll>
                                <Spring />
                            </Scroll>
                        </ScrollControls>
                    </Canvas>
                </m.section>
                <m.section
                    style={{
                        position: "absolute"
                    }}
                    variants={variantsSpring}
                    animate={
                        activeSummer ? "open" : "close"
                    }
                >
                    < Canvas>

                        <PerspectiveCamera
                            makeDefault
                            position={[0, 0, 15]}
                            fov={10}
                        />
                        <ScrollControls
                            pages={0}>
                            <Scroll>
                                <Summer />
                            </Scroll>
                        </ScrollControls>
                    </Canvas>
                </m.section>
                <m.section
                    style={{
                        position: "absolute"
                    }}
                    variants={variantsSpring}
                    animate={
                        activeAutumn ? "open" : "close"
                    }
                >
                    < Canvas>
                        <PerspectiveCamera
                            makeDefault
                            position={[0, 0, 15]}
                            fov={10}
                        />
                        <ScrollControls
                            pages={0}>
                            <Scroll>
                                <Autumn />
                            </Scroll>
                        </ScrollControls>
                    </Canvas>
                </m.section>
                <m.section
                    variants={variantsSpring}
                    animate={
                        activeWinter ? "open" : "close"
                    }
                >
                    < Canvas>

                        <PerspectiveCamera
                            makeDefault
                            position={[0, 0, 15]}
                            fov={10}
                        />
                        <ScrollControls
                            pages={0}>
                            <Scroll>
                                <Winter />
                            </Scroll>
                        </ScrollControls>
                    </Canvas>
                </m.section>
            </section>




        </m.main>



    )
}

export default Calendar;
