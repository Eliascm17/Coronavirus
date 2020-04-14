import React, { useState } from 'react'
import ReactMapGl, { Source, Layer } from 'react-map-gl';
import useStats from '../helper/useStats';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { stateFills, stateLines, buttonStyles } from '../layers/layers';

const useStyles = makeStyles(buttonStyles)

export default function Stats() {
    const liveStatesData = useStats("https://api.covidnow.com/v1/usa/states")
    const liveCountiesData = useStats('https://api.covidnow.com/v1/usa/counties')

    const [dark, setDark] = useState(false)
    const [hoverStateId, setHoverStateId] = useState(null)

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
                onHover={(e) => { if (e.features[0].properties.STATE_NAME) {setHoverStateId(e.features[0].properties)} }}  
            >
            <Source 
                id='states' 
                type={'geojson'} 
                data={'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'}
    
                >
                    <Layer id='stateLines' {...stateLines} />
                    <Layer id='stateFills' {...stateFills} />
            </Source>
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
