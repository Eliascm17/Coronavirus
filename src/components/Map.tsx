import React, { useEffect, useRef, useState, ReactNode, Fragment } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface IProps {
    setMap: any;
    mapContainer: any;
}

const styles: React.CSSProperties  = {
    width: "100vw",
    height: "calc(100vh - 80px)",
    position: "absolute"
};

const Map = () => {

    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    useEffect(() => {

        mapboxgl.accessToken = 'pk.eyJ1IjoiZWxpYXNjbTE3IiwiYSI6ImNrOHJyNjNndzBobTQzZnBtOG85cW5iMzIifQ.C7a0Lkk8aenM5SDxQYw-Hg'

        const initializeMap = ({ setMap, mapContainer }: IProps) => {

            const map = new mapboxgl.Map({
                container: 'map',
                style: "mapbox://styles/mapbox/dark-v10", // stylesheet location
                center: [ -96.7129, 38.0902],
                zoom: 4.3
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

        if (!map) initializeMap({ setMap, mapContainer });

    }, [map]);

    return(
        <div id='map' ref={(el: any) => (mapContainer.current = el)} style={styles}/>
    ) 
};

export default Map