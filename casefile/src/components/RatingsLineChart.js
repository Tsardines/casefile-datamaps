
import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

// import * as crimeData from "../data/casefile-final.json";




  const data = [
    { "number": 1, "name": "The Wanda Beach Murders", rating: 3.88 }, 
    { "number": 2, "name": "The Somerton Man", "rating": 3.87 }, 
    { "number": 3, "name": "Lauria Bible and Ashley Freeman", "rating": 3.85 }, 
    { "number": 4, "name": "Who Put Bella in the 'Witch' Elm", "rating": 3.17 }, 
    { "number": 5, "name": "Donna Wheeler", "rating": 3.51 }, 
    { "number": 6, "name": "Roger Dean", "rating": 3.63 }, 
    { "number": 7, "name": "Julian Buchwald and Carolynne Watson", "rating": 3.69 }, 
    { "number": 8, "name": "Holly Wells and Jessica Chapman", "rating": 3.99 }, 
    { "number": 9, "name": "Jonathan Luna", "rating": 3.57 }, 
    { "number": 10, "name": "Peter Shellard", "rating": 3.61 }, 
    { "number": 11, "name": "Anneliese Michel", "rating": 3.67 }, 
    { "number": 12, "name": "Katherine Knight", "rating": 4.17 },
    { "number": 13, "name": "The Family Court Murders", "rating": 3.90 }, 
    { "number": 15, "name": "Helen Munnings", "rating": 3.78 }, 
    { "number": 15, "name": "The Weepy Voiced Killer", "rating": 3.78 }, 
    { "number": 16, "name": "Cris and Cru Kahui", "rating": 3.68 }, 
    { "number": 17, "name": "The Eriksson Twins", "rating": 3.82 }, 
    { "number": 18, "name": "The North Hollywood Shootout", "rating": 3.76 }, 
    { "number": 19, "name": "Snowtown", "rating": 4.34 }, 
    { "number": 20, "name": "Stoni Blair and Stephen Berry", "rating": 3.76 }, 
    { "number": 21, "name": "Pamela Lawrence", "rating": 3.75 }, 
    { "number": 22, "name": "Marguerite Edwards", "rating": 3.64 }, 
    { "number": 23, "name": "The Frankston Serial Killer (2 parter)", "rating": 4.10 }, 
    { "number": 24, "name": "Russell Street Bombing (2 parter)", "rating": 3.84 }, 
    { "number": 25, "name": "Prue Bird", "rating": 3.61 }, 
    { "number": 26, "name": "Lisa Marie Young", "rating": 3.78 }, 
    { "number": 27, "name": "The West Mesa Bone Collector", "rating": 3.66 }, 
    { "number": 28, "name": "Lindsay Buziak", "rating": 4.07 },
    { "number": 29, "name": "The Burgate House Murders", "rating": 3.63 }, 
    { "number": 30, "name": "The Claremont Serial Killer", "rating": 4.18 },
    { "number": 31, "name": "The Killer Couple", "rating": 3.89 }, 
    { "number": 32, "name": "Grace and Kathleen Holmes", "rating": 3.71 }, 
    { "number": 33, "name": "Jaycee Lee Dugard", "rating": 4.26 },
    { "number": 34, "name": "The Catholic Mafia", "rating": 3.91 }, 
    { "number": 35, "name": "Operation Mayan", "rating": 3.69 }, 
    { "number": 36, "name": "Amok", "rating": 3.86 }, 
    { "number": 37, "name": "The Yorkshire Ripper (3 parter)", "rating": 4.32 },
    { "number": 38, "name": "The Pikuls", "rating": 3.67 }, 
    { "number": 39, "name": "Janelle Patton", "rating": 3.79 }, 
    { "number": 40, "name": "John Newman", "rating": 3.64 }, 
    { "number": 41, "name": "Mr. Cruel", "rating": 4.08 },
    { "number": 42, "name": "Sherri Rasmussen", "rating": 4.34 },
    { "number": 43, "name": "Keith Warren", "rating": 3.60 }, 
    { "number": 44, "name": "Peter Falconio", "rating": 4.27 },
    { "number": 45, "name": "Port Arthur", "rating": 4.40 },
    { "number": 46, "name": "The Frankston and Tynong North Serial Killer", "rating": 4.05 },
    { "number": 47, "name": "Yara Gambirasio", "rating": 3.84 }, 
    { "number": 48, "name": "Suzy Lamplugh", "rating": 3.94 }, 
    { "number": 49, "name": "The Moors Murders (3 parter)", "rating": 4.51 },
    { "number": 50, "name": "Jennifer Pan", "rating": 4.47 },
    { "number": 51, "name": "Tina Watson", "rating": 4.15 },
    { "number": 52, "name": "Mary & Beth Stauffer, Jason Wilkman", "rating": 4.06 },
    { "number": 53, "name": "The East Area Rapist (5 parter)", "rating": 4.58 },
    { "number": 54, "name": "Daniel Morcombe", "rating": 4.44 },
    { "number": 55, "name": "Simone Strobel", "rating": 3.80 }, 
    { "number": 56, "name": "Anita Cobby", "rating": 4.32 },
    { "number": 57, "name": "Walsh Street ", "rating": 3.91 }, 
    { "number": 58, "name": "Shannon Matthews", "rating": 3.91 }, 
    { "number": 59, "name": "Amy Lynn Bradley", "rating": 4.05 },
    { "number": 60, "name": "Jonestown (3 parter)", "rating": 4.47 },
    { "number": 61, "name": "The Lin Family", "rating": 4.32 },
    { "number": 62, "name": "The Honolulu Strangler", "rating": 3.49 }, 
    { "number": 63, "name": "Catherine Holmes and Georgina Watmore", "rating": 3.67 }, 
    { "number": 64, "name": "Peter Weinberger", "rating": 3.73 }, 
    { "number": 65, "name": "Allison Baden-Clay", "rating": 4.32 },
    { "number": 66, "name": "The Black Widow", "rating": 3.79 }, 
    { "number": 67, "name": "The Battle of Alcatraz", "rating": 3.84 }, 
    { "number": 68, "name": "Escape from Alcatraz ", "rating": 3.93 }, 
    { "number": 69, "name": "Gary Patterson", "rating": 3.72 }, 
    { "number": 70, "name": "The Kimberley Killer", "rating": 3.93 }, 
    { "number": 71, "name": "Elodie Morel", "rating": 3.84 }, 
    { "number": 72, "name": "Wilhelmina Kruger and Anna Dowlingkoa", "rating": 3.71 }, 
    { "number": 73, "name": "The Lady in the Barrel", "rating": 3.55 }, 
    { "number": 74, "name": "Eric Coy", "rating": 3.68 }, 
    { "number": 75, "name": "Graeme Thorne", "rating": 3.88 }, 
    { "number": 76, "name": "Silk Road (3 parter)", "rating": 4.54 },
    { "number": 77, "name": "Mia Zapata ", "rating": 3.92 }, 
    { "number": 78, "name": "The Janabi Family", "rating": 4.22 },
    { "number": 79, "name": "Rayna Rison", "rating": 3.78 }, 
    { "number": 80, "name": "Beth Barnard", "rating": 4.12 },
    { "number": 81, "name": "Brian Wells", "rating": 4.01 },
    { "number": 82, "name": "Maria Korp", "rating": 4.09 },
    { "number": 83, "name": "Chantelle & Leela McDougall, Tony Popic", "rating": 3.61 }, 
    { "number": 84, "name": "Lesley Molseed (2 parter)", "rating": 4.06 },
    { "number": 85, "name": "Tom Brown", "rating": 3.67 }, 
    { "number": 86, "name": "Amy Allwine", "rating": 4.26 },
    { "number": 87, "name": "Elaine O'Hara ", "rating": 3.96 }, 
    { "number": 88, "name": "Stephen Hilder", "rating": 3.78 }, 
    { "number": 89, "name": "Ella Tundra", "rating": 4.00 },
    { "number": 90, "name": "Hoddle Street", "rating": 4.00 },
    { "number": 91, "name": "Carly Ryan ", "rating": 4.13 },
    { "number": 92, "name": "Dnepropetrovsk Maniacs", "rating": 3.91 }, 
    { "number": 93, "name": "Susan Snow and Bruce Nickell", "rating": 4.06 },
    { "number": 94, "name": "Millie & Trevor Horn, Janice Saunders", "rating": 3.79 }, 
    { "number": 95, "name": "The Vampire of Krakow", "rating": 3.53 }, 
    { "number": 96, "name": "The Toy Box (3 parter)", "rating": 4.18 },
    { "number": 97, "name": "Rebecca Schaeffer", "rating": 4.04 },
    { "number": 98, "name": "The Pillow Pyro", "rating": 4.03 },
    { "number": 99, "name": "Becky Watts", "rating": 4.13 },
    { "number": 100, "name": "The Beaumont Children ", "rating": 4.35 },
    { "number": 101, "name": "Sian Kingi", "rating": 4.14 },
    { "number": 102, "name": "Britt Lapthorne", "rating": 4.19 },
    { "number": 103, "name": "The Gonzales Family", "rating": 4.24 },
    { "number": 104, "name": "Mark and John", "rating": 4.43 },
    { "number": 105, "name": "Louise Bell", "rating": 3.78 }, 
    { "number": 106, "name": "Peter Nielsen (2 parter)", "rating": 3.96 }, 
    { "number": 107, "name": "Lucie Blackman & Carita Ridgway", "rating": 3.81 }, 
    { "number": 108, "name": "The Kicevo Monster", "rating": 3.70 }, 
    { "number": 109, "name": "Belanglo (5 parter)", "rating": 4.34 },
    { "number": 110, "name": "Muriel McKay", "rating": 3.65 }, 
    { "number": 111, "name": "Shauna Howe", "rating": 3.78 }, 
    { "number": 112, "name": "Rachel Barber", "rating": 4.04 },
    { "number": 113, "name": "Brendan Bernard", "rating": 3.45 }, 
    { "number": 114, "name": "Elisa Claps & Heather Barnett", "rating": 4.03 },
    { "number": 115, "name": "Operation Cathedral", "rating": 3.97 }, 
    { "number": 116, "name": "Chloe Ayling", "rating": 3.74 }, 
    { "number": 117, "name": "Hannah Foster", "rating": 3.82 }, 
    { "number": 118, "name": "The Chicago Tylenol Murders", "rating": 4.19 },
    { "number": 119, "name": "Abigail Williams and Liberty German", "rating": 3.89 }, 
    { "number": 120, "name": "Bill McGuire", "rating": 3.69 }, 
    { "number": 121, "name": "The Freeway Phantom", "rating": 3.76 }, 
    { "number": 122, "name": "Leeann Lapham", "rating": 3.62 }, 
    { "number": 123, "name": "Mark Kilroy", "rating": 3.97 }, 
    { "number": 124, "name": "Hinterkaifeck", "rating": 3.79 }, 
    { "number": 125, "name": "The Angels of Wynarka & Belanglo", "rating": 3.87 }, 
    { "number": 126, "name": "Johnny Altinger", "rating": 3.96 }, 
    { "number": 127, "name": "Killer Petey", "rating": 3.59 }, 
    { "number": 128, "name": "Joan Vollmer", "rating": 3.62 }, 
    { "number": 129, "name": "The Dupont de Ligonnes Family", "rating": 4.09 },
    { "number": 130, "name": "Joe Cinque", "rating": 3.83 }, 
    { "number": 131, "name": "Mr. Stinky", "rating": 3.78 }, 
    { "number": 132, "name": "Rui Pedro Teixeira Mendonça", "rating": 3.85 }, 
    { "number": 133, "name": "Tom & Eileen Lonergan", "rating": 4.01 },
    { "number": 134, "name": "Martha Puebla", "rating": 3.70 }, 
    { "number": 135, "name": "The Santa Claus Bank Robbery", "rating": 3.22 }, 
    { "number": 136, "name": "Azaria Chamberlain", "rating": 4.17 },
    { "number": 137, "name": "Arlis Perry", "rating": 3.96 }, 
    { "number": 138, "name": "The Batavia", "rating": 4.54 },
    { "number": 139, "name": "Beryl & Geraldine Evans (2 parter)", "rating": 4.21 },
    { "number": 140, "name": "Richmond Hill", "rating": 2.50 }
  
  
  ]

  // console.log(data.map(a => a.name))


  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label"><b>Episode Name:</b> {label}</p>
          <p className="label"><b>Rating:</b> {payload[0].value}</p>
        </div>
      );
    }
  
    return null;
  };

  export default class RatingsLineChart extends PureComponent {

    render() {

      
        
      return (
        <>

          <h3>Episode Ratings</h3>

          <LineChart
            width={1200}
            height={500}
            data={data}
            margin={{ top: 5, right: 40, left: 40, bottom: 5, }}
          >
        
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis domain={[0, 'dataMax']} ticks={[30, 60, 90, 120, 150]} label="Episode Name" dataKey="name" />
            <YAxis tickCount={5} label="Episode Rating" />
            <Tooltip
              content={<CustomTooltip />}
              viewBox={{x: 0, y: 0, width: 400, height: 600}}
              cursor={{ stroke: '#006d5c', strokeWidth: 1 }}
              wrapperStyle={{background: "rgb(229, 226, 225)", color: "black", padding: "1rem"}}
            />
            <Legend />
            <Line name="" type="monotone" dataKey="rating" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart> 
        </> 
      );
    }


}




