import React, { useState } from 'react'
import ReactMapGl from 'react-map-gl';
import useStats from '../helper/useStats';

export default function Stats() {
    const liveStatesData = useStats("https://api.covidnow.com/v1/usa/states")
    const liveCountiesData = useStats('https://api.covidnow.com/v1/usa/counties')
    
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        height: window.innerHeight, 
        latitude: 38.0902,
        longitude: -96.7129,
        zoom: 4.3
    })

    return (
            <ReactMapGl
                mapboxApiAccessToken={process.env.REACT_APP_API_KEY}
                {...viewport}
                onViewportChange={setViewport}
            />   
    )
}
