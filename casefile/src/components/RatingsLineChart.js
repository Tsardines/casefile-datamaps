import React, {PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
// import * as crimeData from "../data/casefile-final.json";




  const data = [

    { number: 1, Title: "The Wanda Beach Murders", rating: 3.88 }, 
    { number: 2, Title: "The Somerton Man", rating: 3.87 }, 
    { number: 3, Title: "Lauria Bible and Ashley Freeman", rating: 3.85 }, 
    { number: 4, Title: "Who Put Bella in the 'Witch' Elm", rating: 3.17 }, 
    { number: 5, Title: "Donna Wheeler", rating: 3.51 }, 
    { number: 6, Title: "Roger Dean", rating: 3.63 }, 
    { number: 7, Title: "Julian Buchwald and Carolynne Watson", rating: 3.69 }, 
    { number: 8, Title: "Holly Wells and Jessica Chapman", rating: 3.99 }, 
    { number: 9, Title: "Jonathan Luna", rating: 3.57 }, 
    { number: 10, Title: "Peter Shellard", rating: 3.61 }, 
    { number: 11, Title: "Anneliese Michel", rating: 3.67 }, 
    { number: 12, Title: "Katherine Knight", rating: 4.17 }, 
    { number: 13, Title: "The Family Court Murders", rating: 3.90 }, 
    { number: 14, Title: "", rating: 3.66 }, 
    { number: 15, Title: "", rating: 3.78 }, 
    { number: 16, Title: "", rating: 3.68 }, 
    { number: 17, Title: "", rating: 3.82 }, 
    { number: 18, Title: "", rating: 3.76 }, 
    { number: 19, Title: "", rating: 4.34 }, 
    { number: 20, Title: "", rating: 3.76 }, 
    { number: 21, Title: "", rating: 3.75 }, 
    { number: 22, Title: "", rating: 3.64 }, 
    { number: 23, Title: "", rating: 4.10 }, 
    { number: 24, Title: "", rating: 3.84 }, 
    { number: 25, Title: "", rating: 3.61 }, 
    { number: 26, Title: "", rating: 3.78 }, 
    { number: 27, Title: "", rating: 3.66 }, 
    { number: 28, Title: "", rating: 4.07 },
    { number: 29, Title: "", rating: 3.63 }, 
    { number: 30, Title: "", rating: 4.18 },
    { number: 31, Title: "", rating: 3.89 }, 
    { number: 32, Title: "", rating: 3.71 }, 
    { number: 33, Title: "", rating: 4.26 },
    { number: 34, Title: "", rating: 3.91 }, 
    { number: 35, Title: "", rating: 3.69 }, 
    { number: 36, Title: "", rating: 3.86 }, 
    { number: 37, Title: "", rating: 4.32 },
    { number: 38, Title: "", rating: 3.67 }, 
    { number: 39, Title: "", rating: 3.79 }, 
    { number: 40, Title: "", rating: 3.64 }, 
    { number: 41, Title: "", rating: 4.08 },
    { number: 42, Title: "", rating: 4.34 },
    { number: 43, Title: "", rating: 3.60 }, 
    { number: 44, Title: "", rating: 4.27 },
    { number: 45, Title: "", rating: 4.40 },
    { number: 46, Title: "", rating: 4.05 },
    { number: 47, Title: "", rating: 3.84 }, 
    { number: 48, Title: "", rating: 3.94 }, 
    { number: 49, Title: "", rating: 4.51 },
    { number: 50, Title: "", rating: 4.47 },
    { number: 51, Title: "", rating: 4.15 },
    { number: 52, Title: "", rating: 4.06 },
    { number: 53, Title: "", rating: 4.58 },
    { number: 54, Title: "", rating: 4.44 },
    { number: 55, Title: "", rating: 3.80 }, 
    { number: 56, Title: "", rating: 4.32 },
    { number: 57, Title: "", rating: 3.91 }, 
    { number: 58, Title: "", rating: 3.91 }, 
    { number: 59, Title: "", rating: 4.05 },
    { number: 60, Title: "", rating: 4.47 },
    { number: 61, Title: "", rating: 4.32 },
    { number: 62, Title: "", rating: 3.49 }, 
    { number: 63, Title: "", rating: 3.67 }, 
    { number: 64, Title: "", rating: 3.73 }, 
    { number: 65, Title: "", rating: 4.32 },
    { number: 66, Title: "", rating: 3.79 }, 
    { number: 67, Title: "", rating: 3.84 }, 
    { number: 68, Title: "", rating: 3.93 }, 
    { number: 69, Title: "", rating: 3.72 }, 
    { number: 70, Title: "", rating: 3.93 }, 
    { number: 71, Title: "", rating: 3.84 }, 
    { number: 72, Title: "", rating: 3.71 }, 
    { number: 73, Title: "", rating: 3.55 }, 
    { number: 74, Title: "", rating: 3.68 }, 
    { number: 75, Title: "", rating: 3.88 }, 
    { number: 76, Title: "", rating: 4.54 },
    { number: 77, Title: "", rating: 3.92 }, 
    { number: 78, Title: "", rating: 4.22 },
    { number: 79, Title: "", rating: 3.78 }, 
    { number: 80, Title: "", rating: 4.12 },
    { number: 81, Title: "", rating: 4.01 },
    { number: 82, Title: "", rating: 4.09 },
    { number: 83, Title: "", rating: 3.61 }, 
    { number: 84, Title: "", rating: 4.06 },
    { number: 85, Title: "", rating: 3.67 }, 
    { number: 86, Title: "", rating: 4.26 },
    { number: 87, Title: "", rating: 3.96 }, 
    { number: 88, Title: "", rating: 3.78 }, 
    { number: 89, Title: "", rating: 4.00 },
    { number: 90, Title: "", rating: 4.00 },
    { number: 91, Title: "", rating: 4.13 },
    { number: 92, Title: "", rating: 3.91 }, 
    { number: 93, Title: "", rating: 4.06 },
    { number: 94, Title: "", rating: 3.79 }, 
    { number: 95, Title: "", rating: 3.53 }, 
    { number: 96, Title: "", rating: 4.18 },
    { number: 97, Title: "", rating: 4.04 },
    { number: 98, Title: "", rating: 4.03 },
    { number: 99, Title: "", rating: 4.13 },
    { number: 100, Title: "", rating: 4.35 },
    { number: 101, Title: "", rating: 4.14 },
    { number: 102, Title: "", rating: 4.19 },
    { number: 103, Title: "", rating: 4.24 },
    { number: 104, Title: "", rating: 4.43 },
    { number: 105, Title: "", rating: 3.78 }, 
    { number: 106, Title: "", rating: 3.96 }, 
    { number: 107, Title: "", rating: 3.81 }, 
    { number: 108, Title: "", rating: 3.70 }, 
    { number: 109, Title: "", rating: 4.34 },
    { number: 110, Title: "", rating: 3.65 }, 
    { number: 111, Title: "", rating: 3.78 }, 
    { number: 112, Title: "", rating: 4.04 },
    { number: 113, Title: "", rating: 3.45 }, 
    { number: 114, Title: "", rating: 4.03 },
    { number: 115, Title: "", rating: 3.97 }, 
    { number: 116, Title: "", rating: 3.74 }, 
    { number: 117, Title: "", rating: 3.82 }, 
    { number: 118, Title: "", rating: 4.19 },
    { number: 119, Title: "", rating: 3.89 }, 
    { number: 120, Title: "", rating: 3.69 }, 
    { number: 121, Title: "", rating: 3.76 }, 
    { number: 122, Title: "", rating: 3.62 }, 
    { number: 123, Title: "", rating: 3.97 }, 
    { number: 124, Title: "", rating: 3.79 }, 
    { number: 125, Title: "", rating: 3.87 }, 
    { number: 126, Title: "", rating: 3.96 }, 
    { number: 127, Title: "", rating: 3.59 }, 
    { number: 128, Title: "", rating: 3.62 }, 
    { number: 129, Title: "", rating: 4.09 },
    { number: 130, Title: "", rating: 3.83 }, 
    { number: 131, Title: "", rating: 3.78 }, 
    { number: 132, Title: "", rating: 3.85 }, 
    { number: 133, Title: "", rating: 4.01 },
    { number: 134, Title: "", rating: 3.70 }, 
    { number: 135, Title: "", rating: 3.22 }, 
    { number: 136, Title: "", rating: 4.17 },
    { number: 137, Title: "", rating: 3.96 }, 
    { number: 138, Title: "", rating: 4.54 },
    { number: 139, Title: "", rating: 4.22 }
  
  
  ]

  class RatingsLineChart extends PureComponent {


  render() {
		// return (
      // crimeData.features.map(rating => {
      //   let epNumber = rating.attributes.FID,
			// 			epRating = rating.attributes.EpisodeRating,
			// 			epTitle = rating.attributes.CaseName
          
                
        return (
          <LineChart
            width={1200}
            height={400}
            data={data}
            margin={{ top: 5, right: 40, left: 40, bottom: 5, }}
          >
        
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis label="Episode Number" />
            <YAxis label="Episode Rating" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="rating" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>  
        );
      // })
		// )
  }
}

export default RatingsLineChart;



