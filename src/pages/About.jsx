import React, { useState } from 'react';
import SceneAbout from '../scenes3d/SceneAbout';
import { motion as m } from 'framer-motion'
import imgMin from '/img/minimizar.png'
import Calendar from '../components3D/Calendar';


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
        console.log(e.object.name)
    })
    const [activeCalendar, setActiveCalendar] = useState(false)
    const handleClickCalendar=((e)=>{
      setActiveCalendar(!activeCalendar)
    })
    return (

        <main className='about'>
            <SceneAbout handleClick={handleClick} handleClickCalendar={handleClickCalendar}/>
            <m.div className='back-about'
                animate={{
                    x: [-2000, 0],
                    opacity:[0,0,0,0.9],
                    transition: {
                        delay: 2,
                        ease: "backOut",
                        duration: 1
                    }
                }}
            ></m.div>
            <m.article
                animate={{
                    opacity:[0,1],
                    top: [850, -100],
                    transition: {
                        ease: "circOut",
                        delay: 2,
                        duration: 1.5
                    }
                }}
            >
                <h1>Click Me !!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quibusdam iure error dolorem itaque vel aliquam vero neque soluta cum minus.</p>
                <img
                    src={imgMin}
                    alt="imgMin"
                    style={{
                        position: "absolute",
                        width: 50,
                        marginTop: -250,
                        marginRight: -1050,
                        cursor: "pointer",
                    }}
                />
            </m.article>
            <Calendar handleClickCalendar={handleClickCalendar} activeCalendar={activeCalendar}/> 

        </main>
    );
}

export default About;
