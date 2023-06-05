import React from 'react';
import { Calculator3d } from '../components3D/Calculator3d';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Scroll, ScrollControls } from '@react-three/drei';

const Comp_calculator = () => {
    return (
        <div className='ct-calculator'>
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
                <ScrollControls>
                    <Scroll>
                        <Environment
                            preset='city'
                        />
                        <Calculator3d />
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </div>
    );
}

export default Comp_calculator;
