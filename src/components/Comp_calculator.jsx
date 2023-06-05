import React from 'react';
import { Calculator3d } from '../components3D/Calculator3d';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Scroll, ScrollControls } from '@react-three/drei';
import { motion as m } from 'framer-motion'

const Comp_calculator = (props) => {

    const { handleClickCalcu } = props
    const { activeCalcu } = props
    console.log(handleClickCalcu)
    console.log(activeCalcu)

    const varianstCalcu = {
        open: {
            y: 0
        },
        close: {
            y: -900
        }
    }



    return (
        <m.div className='ct-calculator'
            variants={varianstCalcu}
            animate={
                activeCalcu ? "open" : "close"
            }
            transition={{
                duration: 0.5
            }}
        >
            <Canvas
                shadows
            >
                <pointLight
                    castShadow
                    position={[-10, 0, 10]}
                    shadow-bias={0.001}
                    decay={2}
                    distance={20}
                    intensity={5}
                    shadow-mapSize={2048}
                    color={"rgb(200,150,250)"}
                />
                <ScrollControls
                pages={0}>
                    <Scroll>
                        <Environment
                            preset='city'
                        />
                        <Calculator3d
                            handleClickCalcu={handleClickCalcu}
                            activeCalcu={activeCalcu}
                        />
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </m.div>
    );
}

export default Comp_calculator;
