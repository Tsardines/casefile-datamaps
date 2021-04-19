import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";

// import * as crimeData from "../data/casefile-json.json";
import * as crimeData from "../data/casefile-final.json";


import "./CrimeMap.css";

import marker from "./location-pin.png";
import markerUnsolved from "./location-pin-unsolved.png";

// import { Button, Box } from 'react-bulma-components';

export default function CrimeMap() {
	const [viewport, setViewport] = useState({
		latitude: 45.420304,
		longitude: 75.6977,
		width: '100vw',
		height: '100vh',
		zoom: 1
	})

  const [selectedLocation, setSelectedLocation] = useState(null); // [] is array destructuring

	useEffect(() => {
		const listener = (e) => {
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
		<div className="CrimeMap">
			<ReactMapGL 
			{...viewport} 
				mapboxApiAccessToken="pk.eyJ1IjoidHNhcmRpbmVzIiwiYSI6ImNrNmZ6dGhvYTFlN2wzbG13aTJ3d2tuaWkifQ.xXgZGxcwtx3ahCeoNrKSmg"
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
				className="marker-btn" 
				onClick={(e) => {
					e.preventDefault(); 
					setSelectedLocation(crime);
				}}
			>
			{crime.attributes.SolvedOrUnsolved === "Solved" ? 
				( <img src={marker} alt="marker-alt" /> ) 
				: <img src={markerUnsolved} alt="marker-unsolved" />
			}
				
			</button>

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
			<div className="crime_popup">
			<h3>Ep. {selectedLocation.attributes.FID}: {selectedLocation.attributes.CaseName}</h3>
			<p><b>Location: </b>{selectedLocation.attributes.CityOfCrime}, {selectedLocation.attributes.CountryOfCrime}</p>
			<p className="victim_names"><b>Victim(s): </b>{selectedLocation.attributes.VictimName}</p>
			<p><b>Status: </b>{selectedLocation.attributes.SolvedOrUnsolved}</p>
			</div>

		</Popup>
		) : null }
		</ReactMapGL>
	</div>
	);
}

// export default CrimeMap

