import { Html, Environment, RoundedBox, Scroll, ScrollControls, Text, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion'
import font1 from '../fonts/Bebas_Regular.json'

const Calendar = (props) => {

    const { handleClickCalendar } = props
    const { activeCalendar } = props
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const monthDate = new Date(year, month, 1)
    const nameCurrentMonth = date.toDateString().slice(4, 7)
    const stringCurrentNameMonth = date.toDateString().slice(4, 7)
    const dayOfWeek = monthDate.getDay()
    const arrayIcons = new Array(42).fill()

    const varianstActive = {
        open: {
            clipPath: ["circle(0.01% at 50% 50%)", "circle(0.01% at 50% 50%)", "circle(75% at 50% 50%)"],
            opacity: [0, 1, 1, 1],
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
    let top = 0
    let left = 400
    return (

        <m.main className='ct-calendar'
            variants={varianstActive}
            animate={
                activeCalendar ? "open" : "close"
            }
        >
            <section>
                {
                    arrayIcons.map((e, i) => {
                        const numberDay = Number(new Date(year, month, i - dayOfWeek + 2 - 7).toDateString().slice(8, 10))
                        const nameMonth = new Date(year, month, i - dayOfWeek + 2 - 7).toDateString().slice(4, 7)
                        console.log(nameCurrentMonth, nameMonth)
                        const [colorDay, setColorDay] = useState("grey")
                        
                        useEffect(() => {
                            if (nameCurrentMonth === nameMonth) { setColorDay("black") }
                        }, [])

                        return (

                            <div key={i}
                                style={{
                                    margin: 2,
                                    width: 75,
                                    height: 75,
                                    color: colorDay
                                }}
                            >

                                {
                                    <div
                                        style={{
                                            color: colorDay
                                        }}
                                    >
                                        <h2>  {numberDay}</h2>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </section>
        </m.main>

    );
}

export default Calendar;
