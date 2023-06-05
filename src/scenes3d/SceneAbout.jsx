import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import { Mobile } from '../components3D/Mobile';
import { Environment, PerspectiveCamera } from '@react-three/drei';



const SceneAbout = (props) => {

    const cameraRef = useRef()

    const { handleClick } = props
    const { handleClickCalendar } = props

    console.log(props)

    return (
        <Canvas>
            <Environment
                preset='city'
            />
            <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                position={[0, 0, 50]}
                fov={10}
            />
            <spotLight
                intensity={1}
                position={[-50, 0, 100]}
            />          
                <Mobile handleClick={handleClick} handleClickCalendar={handleClickCalendar} />         
        </Canvas>
    );
}

export default SceneAbout;
