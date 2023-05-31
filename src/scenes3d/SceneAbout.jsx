import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef } from 'react';
import { Mobile } from '../components3D/Mobile';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { gsap } from 'gsap';

const SceneAbout = (props) => {

    const cameraRef = useRef()

    const { handleClick } = props

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
            <Suspense>
                <Mobile handleClick={handleClick} />
            </Suspense>
        </Canvas>
    );
}

export default SceneAbout;
