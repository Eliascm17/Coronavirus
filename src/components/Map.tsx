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
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
                center: [0, 0],
                zoom: 5
            });

            map.on("load", () => {
                setMap(map);
                map.resize();
            });
        };

        if (!map) initializeMap({ setMap, mapContainer });

    }, [map]);

    return(
        <div ref={(el: any) => (mapContainer.current = el)} style={styles}/>
    ) 
};

export default Map