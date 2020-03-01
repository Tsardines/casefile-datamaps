import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import 'bulma/css/bulma.css'
// import 'react-bulma-components/dist/react-bulma-components.min.css';

import "./components/Header.css";

import Header from "./components/Header.js";
import CrimeMap from "./components/CrimeMap.js";
// import * as jsonData from './data/casefile-json.json';

import './App.css';

function App() {
		return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <CrimeMap />
          <Switch>
            <Route path="/crime_map" component={CrimeMap} exact />
            {/* <Route path="/episode_ratings" component={ratings} exact /> */}

            {/* <Route component={error} /> */}
          </Switch>  
          {/* <Footer />         */}
      </div>
    </BrowserRouter>
    )
} 

export default App;
