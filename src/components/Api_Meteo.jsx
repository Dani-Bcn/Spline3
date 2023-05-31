import React, { useEffect, useState, useRef } from 'react';

const Api_Meteo = () => {

    const [latitud, setLatitud] = useState()
    const [longitude, setLongitude] = useState()
    const [dataTime,setDataTime] = useState()

/* 
    useEffect(() => {
      fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${latitud},${longitude}&apikey=AuF8Rgc75vvaZyd2tXviuBVGoPrNQQpX`)
        .then(resp => resp.json())
        .then(resp =>  console.log(resp))      
        navigator.geolocation.getCurrentPosition((position) => {
            return (
                setLatitud(position.coords.latitude),
                setLongitude(position.coords.longitude)
            )
        });
    })  */
   

    return (
        <group></group>
           
        
    );
}

export default Api_Meteo;
