
import React, { PureComponent } from 'react';
import {
 RadialBar, RadialBarChart, Tooltip, Legend,
} from 'recharts';





  const data = [
    {
      "name": "Other Europe",
      "Episodes": 13,
      "avgRating": "",
      "fill": "#bf3946"
    },
    {
      "name": "UK & Ireland",
      "Episodes": 15,
      "avgRating": "",
      "fill": "#53b1df"
    },
    {
      "name": "United States",
      "Episodes": 37,
      "avgRating": "",
      "fill": "#e18f47"
    },
    {
      "name": "Australia",
      "Episodes": 49,
      "avgRating": "",
      "fill": "#30aa97"
    }
  ]

  // console.log(data.map(a => a.name))


  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
        <p className="label"><b>Number of Cases:</b> {payload[0].value}</p>
        </div>
      );
    }
  
    return null;
  };


  export default class CountriesRadialChart extends PureComponent {

    render() {
        
      return (
        <>

          <h3>Episodes by Country</h3>

          <RadialBarChart 
            width={900} 
            height={700} 
            innerRadius="10%" 
            outerRadius="80%" 
            data={data} 
            startAngle={180} 
            endAngle={20}
            barSize={50}
          >
            <RadialBar minAngle={15} label={{ fill: 'white', position: 'insideStart' }} background clockWise={true} dataKey='Episodes'/>
            <Legend iconSize={12} width={160} height={140} layout='vertical' verticalAlign='middle' align="right" />
            <Tooltip 
              content={<CustomTooltip />}
              wrapperStyle={{background: "rgb(229, 226, 225)", color: "black", padding: "1rem"}}
            />
          </RadialBarChart>
        </>
      );
    }


}




