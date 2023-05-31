import React from 'react';
import ApiMeteo from '../components/Api_Meteo';
import { Cloud_icon } from '../components3D/Cloud_icon';

const SceneMeteo = () => {

    const valuesTime = ((longitude) => {
    })
    return (
        <group >
            <ApiMeteo valuesTime={valuesTime} />
            <Cloud_icon />
        </group>
    );
}

export default SceneMeteo;
