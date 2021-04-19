import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as crimeData from "./data/casefile-json.json";

// import { Button, Box } from 'react-bulma-components';

export default function crimeMap() {
  const [viewport, setViewport] = useState({
    latitude: 0.000000,
    longitude: 0.0000003,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })

  const [crimeLocation, setCrimeLocation] = useState(null);

  useEffect(() => {
    const listener =(e) => {
      if (e.key === 'Escape') {
        setCrimeLocation(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [])

  return (
    <div className="App">
		 <ReactMapGL 
		   {...viewport} 
			 mapboxApiAccessToken="pk.eyJ1IjoidHNhcmRpbmVzIiwiYSI6ImNrNmZ6ZXVyajFtZTYzZXMwcTQwandxbHIifQ.dCGU9zv1_wVkVPCdxIYzUg"
			 mapStyle="mapbox://styles/tsardines/ck4ophj9c0szv1cpm3ih7czez"
       onViewportChange={viewport => {
         setViewport(viewport);
       }}
     >
       {crimeData.features.map(crime => (
         <Marker
            key={crime.attributes.FID}
            latitude={crime.geometry.y} 
            longitude={crime.geometry.x}
         >
          <button 
           class="marker-btn" 
           onClick={(e) => {
              e.preventDefault();
              setCrimeLocation(crime);
           }}
          >
            <img src="/hamburger.svg" alt=""/>
           </button>

         </Marker>
       ))}

       {crimeLocation ? (
        <Popup 
          latitude={crimeLocation.geometry.y} 
          longitude={crimeLocation.geometry.x}
          onClose={() => {
            setCrimeLocation(null);
          }}
        >
          <div>
            <h3>{crimeLocation.attributes.Trade_Name}</h3>
            <p>{crimeLocation.attributes.Concept}</p>
            <p>{crimeLocation.attributes.Location}</p>
            <p>{crimeLocation.attributes.Website}</p>
          </div>
        </Popup>
       ) : null }
     </ReactMapGL>
    </div>
  );
}