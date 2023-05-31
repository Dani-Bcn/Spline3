import React from 'react';

const CompTime = () => {

    const fecha = new Date()
    const hoy = fecha.toDateString()
    const month = hoy.slice(3, 7).toUpperCase()
    const day = hoy.slice(8, 11)
    const year = hoy.slice(13, 15)


    return (
        <div>
            
        </div>
    );
}

export default CompTime;
