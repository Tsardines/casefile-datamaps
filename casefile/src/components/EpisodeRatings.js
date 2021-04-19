import React, { PureComponent, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import * as crimeData from "../data/casefile-final.json";

export default function EpisodeRatings() {
	constructor(props) { // props
		super(props)
			this.state = {
				crimeData,
				dayview: []
			}
	}


		return (
			<LineChart
				width={500}
				height={300}
				data={this.state.crimeData}
				margin={{
					top: 5, right: 25, left: 25, bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
				<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
			</LineChart>
		);
	

}


