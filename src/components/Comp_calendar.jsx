import React from 'react';
import Calendar from './Calendar';
import { motion as m } from 'framer-motion'

const Comp_calendar = (props) => {

    const { handleClickCalendar } = props
    const { activeCalendar } = props


    const variantsActive = {
        open: {
            clipPath: "circle(71% at 50% 50%)",
            opacity: [0, 1],
            top: [0, 0],
            left: [0, 0],
            transition: {
                duration: 1,
                ease: "backOut"
            }
        },
        close: {
            clipPath: "circle(0.001% at 50% 50%)",
            opacity: [1, 0.8],
            top: [0, 400],
            left: [0, 300],
            transition: {
                duration: 0.5,
                ease: "circIn" 
            }
        }
    }

    return (
        <m.div className='ct-calculator'
            variants={variantsActive}
            animate={
                activeCalendar ? "open" : "close"
            }
            transition={{
                duration: 0.5,
                ease: "easeIn"
            }}
        >
          <Calendar
                handleClickCalendar={handleClickCalendar}
                activeCalendar={activeCalendar}
            /> 
        </m.div>
    );
}

export default Comp_calendar;