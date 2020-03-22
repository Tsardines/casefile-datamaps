import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import * as crimeData from "../data/casefile-final.json";



export default class RatingsLineChart extends PureComponent {

  render() {
    {crimeData.features.map(rating => {
      let epNumber = rating.attributes.FID,
          epRating = rating.attributes.EpisodeRating
         
          let feed = {number: epNumber, rating: epRating}
          console.log(feed)
          // let data = [];
          // data.push(feed)
        })}
    return (
      <LineChart
        width={700}
        height={300}
        data={feed}
        margin={{ top: 5, right: 30, left: 20, bottom: 5, }}
      >
    
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Episode Number" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>  
    );
  
  }
}

