import React from 'react';
import * as jsonData from './data/casefile-json.json';
import './App.css';

function App() {
		return (
      <ul>
        {jsonData.Cases.map(function(case) (
          <li>{case.Perpetrator}</li>
        ))}
      </ul>
    )
} 

export default App;
