
import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
// import * as crimeData from "../data/casefile-final.json";




  const data = [

    { name: "The Wanda Beach Murders", number: 1, rating: 3.88 }, 
    { number: 2, name: "The Somerton Man", rating: 3.87 }, 
    { number: 3, name: "Lauria Bible and Ashley Freeman", rating: 3.85 }, 
    { number: 4, name: "Who Put Bella in the 'Witch' Elm", rating: 3.17 }, 
    { number: 5, name: "Donna Wheeler", rating: 3.51 }, 
    { number: 6, name: "Roger Dean", rating: 3.63 }, 
    { number: 7, name: "Julian Buchwald and Carolynne Watson", rating: 3.69 }, 
    { number: 8, name: "Holly Wells and Jessica Chapman", rating: 3.99 }, 
    { number: 9, name: "Jonathan Luna", rating: 3.57 }, 
    { number: 10, name: "Peter Shellard", rating: 3.61 }, 
    { number: 11, name: "Anneliese Michel", rating: 3.67 }, 
    { number: 12, name: "Katherine Knight", rating: 4.17 },
    { number: 13, name: "The Family Court Murders", rating: 3.90 }, 
    { number: 14, name: "", rating: 3.66 }, 
    { number: 15, name: "", rating: 3.78 }, 
    { number: 16, name: "", rating: 3.68 }, 
    { number: 17, name: "", rating: 3.82 }, 
    { number: 18, name: "", rating: 3.76 }, 
    { number: 19, name: "", rating: 4.34 }, 
    { number: 20, name: "", rating: 3.76 }, 
    { number: 21, name: "", rating: 3.75 }, 
    { number: 22, name: "", rating: 3.64 }, 
    { number: 23, name: "", rating: 4.10 }, 
    { number: 24, name: "", rating: 3.84 }, 
    { number: 25, name: "", rating: 3.61 }, 
    { number: 26, name: "", rating: 3.78 }, 
    { number: 27, name: "", rating: 3.66 }, 
    { number: 28, name: "", rating: 4.07 },
    { number: 29, name: "", rating: 3.63 }, 
    { number: 30, name: "", rating: 4.18 },
    { number: 31, name: "", rating: 3.89 }, 
    { number: 32, name: "", rating: 3.71 }, 
    { number: 33, name: "", rating: 4.26 },
    { number: 34, name: "", rating: 3.91 }, 
    { number: 35, name: "", rating: 3.69 }, 
    { number: 36, name: "", rating: 3.86 }, 
    { number: 37, name: "", rating: 4.32 },
    { number: 38, name: "", rating: 3.67 }, 
    { number: 39, name: "", rating: 3.79 }, 
    { number: 40, name: "", rating: 3.64 }, 
    { number: 41, name: "", rating: 4.08 },
    { number: 42, name: "", rating: 4.34 },
    { number: 43, name: "", rating: 3.60 }, 
    { number: 44, name: "", rating: 4.27 },
    { number: 45, name: "", rating: 4.40 },
    { number: 46, name: "", rating: 4.05 },
    { number: 47, name: "", rating: 3.84 }, 
    { number: 48, name: "", rating: 3.94 }, 
    { number: 49, name: "", rating: 4.51 },
    { number: 50, name: "", rating: 4.47 },
    { number: 51, name: "", rating: 4.15 },
    { number: 52, name: "", rating: 4.06 },
    { number: 53, name: "", rating: 4.58 },
    { number: 54, name: "", rating: 4.44 },
    { number: 55, name: "", rating: 3.80 }, 
    { number: 56, name: "", rating: 4.32 },
    { number: 57, name: "", rating: 3.91 }, 
    { number: 58, name: "", rating: 3.91 }, 
    { number: 59, name: "", rating: 4.05 },
    { number: 60, name: "", rating: 4.47 },
    { number: 61, name: "", rating: 4.32 },
    { number: 62, name: "", rating: 3.49 }, 
    { number: 63, name: "", rating: 3.67 }, 
    { number: 64, name: "", rating: 3.73 }, 
    { number: 65, name: "", rating: 4.32 },
    { number: 66, name: "", rating: 3.79 }, 
    { number: 67, name: "", rating: 3.84 }, 
    { number: 68, name: "", rating: 3.93 }, 
    { number: 69, name: "", rating: 3.72 }, 
    { number: 70, name: "", rating: 3.93 }, 
    { number: 71, name: "", rating: 3.84 }, 
    { number: 72, name: "", rating: 3.71 }, 
    { number: 73, name: "", rating: 3.55 }, 
    { number: 74, name: "", rating: 3.68 }, 
    { number: 75, name: "", rating: 3.88 }, 
    { number: 76, name: "", rating: 4.54 },
    { number: 77, name: "", rating: 3.92 }, 
    { number: 78, name: "", rating: 4.22 },
    { number: 79, name: "", rating: 3.78 }, 
    { number: 80, name: "", rating: 4.12 },
    { number: 81, name: "", rating: 4.01 },
    { number: 82, name: "", rating: 4.09 },
    { number: 83, name: "", rating: 3.61 }, 
    { number: 84, name: "", rating: 4.06 },
    { number: 85, name: "", rating: 3.67 }, 
    { number: 86, name: "", rating: 4.26 },
    { number: 87, name: "", rating: 3.96 }, 
    { number: 88, name: "", rating: 3.78 }, 
    { number: 89, name: "", rating: 4.00 },
    { number: 90, name: "", rating: 4.00 },
    { number: 91, name: "", rating: 4.13 },
    { number: 92, name: "", rating: 3.91 }, 
    { number: 93, name: "", rating: 4.06 },
    { number: 94, name: "", rating: 3.79 }, 
    { number: 95, name: "", rating: 3.53 }, 
    { number: 96, name: "", rating: 4.18 },
    { number: 97, name: "", rating: 4.04 },
    { number: 98, name: "", rating: 4.03 },
    { number: 99, name: "", rating: 4.13 },
    { number: 100, name: "", rating: 4.35 },
    { number: 101, name: "", rating: 4.14 },
    { number: 102, name: "", rating: 4.19 },
    { number: 103, name: "", rating: 4.24 },
    { number: 104, name: "", rating: 4.43 },
    { number: 105, name: "", rating: 3.78 }, 
    { number: 106, name: "", rating: 3.96 }, 
    { number: 107, name: "", rating: 3.81 }, 
    { number: 108, name: "", rating: 3.70 }, 
    { number: 109, name: "", rating: 4.34 },
    { number: 110, name: "", rating: 3.65 }, 
    { number: 111, name: "", rating: 3.78 }, 
    { number: 112, name: "", rating: 4.04 },
    { number: 113, name: "", rating: 3.45 }, 
    { number: 114, name: "", rating: 4.03 },
    { number: 115, name: "", rating: 3.97 }, 
    { number: 116, name: "", rating: 3.74 }, 
    { number: 117, name: "", rating: 3.82 }, 
    { number: 118, name: "", rating: 4.19 },
    { number: 119, name: "", rating: 3.89 }, 
    { number: 120, name: "", rating: 3.69 }, 
    { number: 121, name: "", rating: 3.76 }, 
    { number: 122, name: "", rating: 3.62 }, 
    { number: 123, name: "", rating: 3.97 }, 
    { number: 124, name: "", rating: 3.79 }, 
    { number: 125, name: "", rating: 3.87 }, 
    { number: 126, name: "", rating: 3.96 }, 
    { number: 127, name: "", rating: 3.59 }, 
    { number: 128, name: "", rating: 3.62 }, 
    { number: 129, name: "", rating: 4.09 },
    { number: 130, name: "", rating: 3.83 }, 
    { number: 131, name: "", rating: 3.78 }, 
    { number: 132, name: "", rating: 3.85 }, 
    { number: 133, name: "", rating: 4.01 },
    { number: 134, name: "", rating: 3.70 }, 
    { number: 135, name: "", rating: 3.22 }, 
    { number: 136, name: "", rating: 4.17 },
    { number: 137, name: "", rating: 3.96 }, 
    { number: 138, name: "", rating: 4.54 },
    { number: 139, name: "", rating: 4.21 },
    { number: 140, name: "Richmond Hill", rating: 2.50 }
  
  
  ]


  const getIntroOfPage = (label) => {
      if (label !== "") {
        return "Page A is about men's clothing";
      }
    }
  
  
    
  



  export default class RatingsLineChart extends PureComponent {
    enderTooltip = ({ active, payload, label }) => {
      if (active) {
        return (
          <div className="custom-tooltip">
            <p className="label">{`${label} : ${payload[0].value}`}</p>
            <p className="intro">{getIntroOfPage(label)}</p>
            <p className="desc">Anything you want can be displayed here.</p>
          </div>
        );
      }
    
      return null;
    };
    render() {
        
      return (
        <LineChart
          width={1200}
          height={500}
          data={data}
          margin={{ top: 5, right: 40, left: 40, bottom: 5, }}
        >
      
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis domain={[0, 'dataMax']} ticks={[30, 60, 90, 120, 150]} label="Episode Number" />
          <YAxis tickCount={5} label="Episode Rating" />
          <Tooltip
            content={<renderTooltip />}
            viewBox={{x: 0, y: 0, width: 400, height: 600}}
            cursor={{ stroke: '#006d5c', strokeWidth: 1 }}
          />
          <Legend />
          <Line name="" type="monotone" dataKey="rating" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>  
      );
    }


}




