import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import * as crimeData from "../data/casefile-json.json";

// import { Button, Box } from 'react-bulma-components';


export default function CrimeMap() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })

  const [selectedLocation, setSelectedLocation] = useState(null);

  // useEffect(() => {
  //   const listener = (e) => {
  //     if (e.key === 'Escape') {
  //       setSelectedLocation(null);
  //     }
  //   };
  //   window.addEventListener("keydown", listener);

  //   return () => {
  //     window.removeEventListener("keydown", listener)
  //   }
  // }, [])

  return (
    <div className="CrimeMap">
		 <ReactMapGL 
		   {...viewport} 
			 mapboxApiAccessToken="pk.eyJ1IjoidHNhcmRpbmVzIiwiYSI6ImNrNmZ6dGhvYTFlN2wzbG13aTJ3d2tuaWkifQ.xXgZGxcwtx3ahCeoNrKSmg"
			 mapStyle="mapbox://styles/tsardines/ck4ophj9c0szv1cpm3ih7czez"
       onViewportChange={viewport => {
         setViewport(viewport);
       }}
     >
       {crimeData.cases.map(crime => (
         <Marker
          key={crime.attributes.CaseNumber}
          latitude={crime.geometry.y} 
          longitude={crime.geometry.x}
         >
          {/* <button 
           className="marker-btn" 
           onClick={(e) => {
              e.preventDefault();
              setSelectedLocation(crime);
           }}
          >
            <img src="" alt="marker"/>
           </button> */}

         </Marker>
       ))}

       {selectedLocation ? (
        <Popup
          latitude={selectedLocation.geometry.y} 
          longitude={selectedLocation.geometry.x}
          onClose={() => {
            setSelectedLocation(null);
          }}
        >
          {/* <div>
            <h3>{selectedLocation.attributes.CaseName}</h3>
            <p>{selectedLocation.attributes.CityOfCrime} + ", " + {selectedLocation.attributes.CountryOfCrime}</p>
            <p>{selectedLocation.attributes.VictimName}</p>
            <p>{selectedLocation.attributes.SolvedOrUnsolved}</p>
          </div> */}
        </Popup>
       ) : null }
     </ReactMapGL>
    </div>
  );
}

