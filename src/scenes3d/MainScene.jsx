import { Environment, PerspectiveCamera, OrbitControls, RoundedBox, Scroll, ScrollControls, useScroll } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, useState, Suspense } from 'react';

import { Title3d } from '../components3D/Title3d';
import { Calendar_icon } from '../components3D/Calendar_icon';
import { Dados_links } from '../components3D/Dados_links';
import SceneMeteo from './SceneMeteo';
import { Menu_home } from '../components3D/Menu_home';
import { Lamp3d } from '../components3D/Lamp3d';
import { Plant } from '../components3D/Plant';
import { Back_logo } from '../components3D/Back_logo3d';



const MainScene = () => {

   
    const cameraRef = useRef()
    const [presetEnviroment, setPresetEnviroment] = useState("night")

    const CustomCamera = (() => {
        useFrame(() => {
            cameraRef.current.position.y = 0 - data.range(0, 2 / 2) * 1
        })
        const data = useScroll()
        return (
            <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                position={[0, 0, -50]}
                fov={10}
            />
        )
    })

    const lightProps = ((intensity) => {
        setPresetEnviroment(intensity)
        intensity === 1.5 ?
            setPresetEnviroment("night")
            :
            setPresetEnviroment("city")
    })

    return (
        <div>
            <Canvas
                shadows
            >
                <Environment
                    preset={presetEnviroment}
                />         
                <ScrollControls
                    pages={2}
                    damping={0.5}
                >
                    <Scroll>
                        <CustomCamera />
                        <RoundedBox
                            position={[-6, 0, 0]}
                        ></RoundedBox>
                        <Title3d />
                        <Calendar_icon />
                        <SceneMeteo />
                        <Menu_home />
                        <Lamp3d />
                        <Dados_links />
                        <Plant />
                        <Back_logo/>
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </div>
    );
}

export default MainScene;
