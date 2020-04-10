import React, { useState } from 'react'
import ReactMapGl from 'react-map-gl';
import useStats from '../helper/useStats';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
    sun: {
        marginLeft: 30,
        marginTop: 60,
        padding: 25,
        borderRadius: 100,
    },
    moon: {
        background: '#2e2e2e',
        marginLeft: 30,
        marginTop: 60,
        padding: 25,
        borderRadius: 100,
    }
})

export default function Stats() {
    const liveStatesData = useStats("https://api.covidnow.com/v1/usa/states")
    const liveCountiesData = useStats('https://api.covidnow.com/v1/usa/counties')

    const [dark, setDark] = useState(false)

    const classes = useStyles()

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
                mapStyle={dark ? 'mapbox://styles/mapbox/dark-v10' : 'mapbox://styles/mapbox/light-v10'}
            >
                <Button 
                    classes={dark ? { root: classes.sun } : { root: classes.moon } }
                    size="small"
                    variant="contained"
                    startIcon={dark ? 
                        <FontAwesomeIcon 
                            icon={faSun} 
                            style={{ 
                                fontSize: 35,
                                paddingLeft: 3,
                                paddingTop: 3,
                                paddingBottom: 3
                                
                            }} /> : 
                        <FontAwesomeIcon 
                            icon={faMoon} 
                            style={{ 
                                fontSize: 35, 
                                paddingLeft: 3,
                                paddingTop: 3,
                                paddingBottom: 3,
                                color: '#e3e3e3'
                            }}/>}
                    onClick={() => {setDark(!dark)}}
                ></Button>
            </ReactMapGl>   
    )
}
