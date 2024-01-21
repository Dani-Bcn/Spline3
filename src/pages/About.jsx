import React, { useState } from 'react';
import SceneAbout from '../scenes3d/SceneAbout';
import { motion as m } from 'framer-motion'
import Comp_calculator from '../components/Comp_calculator';
import Comp_calendar from '../components/Comp_calendar';
import Comp_EmailForm from '../components/Comp_EmailForm';
const About = () => {

    const [nameApp, setNameApp] = useState()
    /*    window.open("https://web.whatsapp.com/",
         "location=no",
         "WhatsApp",
         "width=40, height=480",
         "top=600,left=100");
     */
    const handleClick = ((e) => {
        setNameApp(e.object.name)
    })
    const [activeCalendar, setActiveCalendar] = useState(false)
    const handleClickCalendar = ((e) => {
        setActiveCalendar(!activeCalendar)
    })
    const [activeCalcu, setActiveCalcu] = useState(false)
    const handleClickCalcu = ((e) => {
        setActiveCalcu(!activeCalcu)
    })
    const [activeEmail, setActiveEmail] = useState(false)
    const handleClickEmail = ((e) => {
        setActiveEmail(!activeEmail)
    })
    return (

        <m.main className='about'
            exit={{
                opacity: [1, 0]
            }}
        >
            <SceneAbout
                handleClick={handleClick}
                handleClickCalendar={handleClickCalendar}
                handleClickCalcu={handleClickCalcu}
                handleClickEmail={handleClickEmail}
            />
        <Comp_calendar
                activeCalendar={activeCalendar}
                handleClickCalendar={handleClickCalendar} />
            <m.div className='back-about'
                animate={{
                    x: [-2000, 0],
                    opacity: [0, 0, 0, 1],
                    transition: {
                        delay: 1,
                        ease: "backOut",
                        duration: 1
                    }
                }}
            ></m.div>
           <m.article className='article-about'
                animate={{
                    opacity: [0, 0, 0, 0, 1],
                    top: [850, -100],
                    transition: {
                        delay: 1,
                        ease: "circOut",
                        duration: 1
                    }
                }}
            >
                <h1>Click Me !!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quibusdam iure error dolorem itaque vel aliquam vero neque soluta cum minus.</p>
            </m.article>
            <Comp_EmailForm
               handleClickEmail={handleClickEmail}
                activeEmail={activeEmail}
            />
            <Comp_calculator handleClickCalcu={handleClickCalcu} activeCalcu={activeCalcu} /> 
             
        </m.main>
    );
}

export default About;
