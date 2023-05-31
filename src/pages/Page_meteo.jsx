import { Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import SceneMeteo from '../scenes3d/SceneMeteo';

const PageTime = () => {
    return (
        <div>
            <Canvas>
                <Environment
                    preset={"city"}
                />
                <ScrollControls
                    pages={2}
                    damping={0.5}
                >
                    <Scroll>
                        <SceneMeteo />
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </div>
    );
}

export default PageTime;
