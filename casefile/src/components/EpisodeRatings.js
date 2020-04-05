import React from 'react';
import "./Header.css";

import RatingsLineChart from "./RatingsLineChart.js";
import CountriesRadialChart from "./CountriesRadialChart.js";

  export default function EpisodeRatings() {
      return (

        <React.Fragment>

          <RatingsLineChart />

            <br />

          <CountriesRadialChart />

        </React.Fragment>

      );
  }
