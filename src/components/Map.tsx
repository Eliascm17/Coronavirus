import React, { useEffect, useRef, useState, useContext } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Global, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { GlobalContext } from '../store/context'
import { theme } from '../theme/theme';
import Toggle from './Toggle'
import { stringify } from "querystring";
import { Stats } from "./Stats";

const styles: React.CSSProperties  = {
    width: "100vw",
    height: "calc(100vh - 80px)",
    position: "absolute"
};

const Map = () => {
    
    const { state }: any = useContext(GlobalContext)
    const theme: any = useTheme()
    const [map, setMap] = useState<mapboxgl.Map>();
    const mapContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        
        mapboxgl.accessToken = String(process.env.REACT_APP_API_KEY)
        
        interface IProps {
            setMap: React.Dispatch<React.SetStateAction<mapboxgl.Map | undefined>>;
        }

        const initializeMap = ({ setMap }: IProps) => {

            const map = new mapboxgl.Map({
                container: 'map',
                style: state.isDark ? theme.dark.mapStyle : theme.light.mapStyle,
                center: [ -96.7129, 38.0902],
                zoom: 4.3
            });

            var popup = new mapboxgl.Popup({ //popup info window
                closeButton: false,
                closeOnClick: false
            });

            var mapDiv: any = document.getElementById('map');
            mapDiv.style.height = '100%';

            var hoveredStateId: any = null;

            map.on("load", () => {
                setMap(map);
                map.resize();

                map.addSource('states', {
                    'type': 'geojson',
                    'data':
                        'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
                });

                map.addLayer({
                    'id': 'state-fills',
                    'type': 'fill',
                    'source': 'states',
                    'layout': {},
                    'paint': {
                        'fill-color': '#627BC1',
                        'fill-opacity': [
                            'case',
                            ['boolean', ['feature-state', 'hover'], false],
                            1,
                            0.5
                        ]
                    }
                });

                map.addLayer({
                    'id': 'state-borders',
                    'type': 'line',
                    'source': 'states',
                    'layout': {},
                    'paint': {
                        'line-color': '#627BC1',
                        'line-width': 2
                    }
                });

                map.on('mousemove', 'state-fills', function (e: any) {

                    // console.log(e.lngLat) mouse pointer coordinates

                    popup.setLngLat(e.lngLat)
                        .setHTML(hoveredStateId) //what goes into the popup window
                        .addTo(map);

                    if (e.features.length > 0) {
                        if (hoveredStateId) {
                            map.setFeatureState(
                                { source: 'states', id: hoveredStateId },
                                { hover: false }
                            );
                        }
                        hoveredStateId = e.features[0].id;
                        map.setFeatureState(
                            { source: 'states', id: hoveredStateId },
                            { hover: true }
                        );
                    }
                });


                map.on('mouseleave', 'state-fills', function () {

                    map.getCanvas().style.cursor = '';
                    popup.remove();

                    if (hoveredStateId) {
                        map.setFeatureState(
                            { source: 'states', id: hoveredStateId },
                            { hover: false }
                        );
                    }
                    hoveredStateId = null;
                });

            });

        };

        if (!map) initializeMap({ setMap });

    }, [map]);

    return(
        <>
            <div id='map' ref={mapContainer} style={styles}/>
            <Toggle />
            <Stats />
        </>
    ) 
};

export default Map