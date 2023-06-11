import React from 'react';
import MainScene from '../scenes3d/MainScene';
import { motion as m } from 'framer-motion'

const Home = () => {
    return (
        <m.div className='home'
            animate={{              
                opacity:[0,1],
                transition: {                 
                    duration: 3,
                }
            }}
            exit={{
                opacity:[1,1,1,1,0],           
                transition: {
                    delay:1,
                    duration: 2,                 
                }
            }} 
        >
            <MainScene />
          
        </m.div>
    );
}

export default Home;
