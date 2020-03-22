import React, {PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import * as crimeData from "../data/casefile-final.json";



class RatingsLineChart extends PureComponent {
  render() {
		return (
      crimeData.features.map(rating => {
        let epNumber = rating.attributes.FID,
						epRating = rating.attributes.EpisodeRating,
						epTitle = rating.attributes.CaseName
          
            let feed = [{number: epNumber, Rating: epRating, Title: epTitle}]
            // console.log(feed)
           
        return (
          <LineChart
            width={700}
            height={300}
            data={feed}
            margin={{ top: 5, right: 40, left: 40, bottom: 5, }}
          >
        
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={feed} label="Episode Number" />
            <YAxis label="Episode Rating" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Rating" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>  
        );
      })
		)
  }
}

export default RatingsLineChart;



