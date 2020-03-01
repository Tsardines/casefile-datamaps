import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as crimeData from "./data/casefile-json.json";

// import 'bulma/css/bulma.css'
// import 'react-bulma-components/dist/react-bulma-components.min.css';

// import "./components/Header.css";

// import Header from "./components/Header.js";
// import CrimeMap from "./components/CrimeMap.js";
// import * as jsonData from './data/casefile-json.json';

import './App.css';



export default function App() {
  const [viewport, setViewport] = useState({
    latitude: -33.868820,
    longitude:  151.209290,
    width: '100vw',
    height: '100vh',
    zoom: 11
  })

  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const listener =(e) => {
      if (e.key === 'Escape') {
        setSelectedLocation(null);
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
       {crimeData.cases.map(crime => (
         <Marker
          key={crime.attributes.CaseNumber}
          latitude={crime.geometry.x} 
          longitude={crime.geometry.y}
         >
          <button 
           class="marker-btn" 
           onClick={(e) => {
              e.preventDefault();
              setSelectedLocation(crime);
           }}
          >
            <img src="" alt="marker"/>
           </button>

         </Marker>
       ))}

       {selectedLocation ? (
        <Popup 
          latitude={selectedLocation.geometry.x} 
          longitude={selectedLocation.geometry.y}
          onClose={() => {
            setSelectedLocation(null);
          }}
        >
          <div>
            <h3>{selectedLocation.attributes.CaseName}</h3>
            <p>{selectedLocation.attributes.CityOfCrime}</p>
            <p>{selectedLocation.attributes.CountryOfCrime}</p>
            <p>{selectedLocation.attributes.VictimName}</p>
            <p>{selectedLocation.attributes.SolvedOrUnsolved}</p>
          </div>
        </Popup>
       ) : null }
     </ReactMapGL>
    </div>
  );
}

// function App() {
// 		return (
//       <BrowserRouter>
//       <div className="App">
//         <Header />
//           <Switch>
//             <Route path="/crime_map" component={CrimeMap} exact />
//             {/* <Route path="/episode_ratings" component={ratings} exact /> */}

//             {/* <Route component={error} /> */}
//           </Switch>  
//           {/* <Footer />         */}
//       </div>
//     </BrowserRouter>
//     )
// } 


