import React from 'react';
import ForecastCard from './ForecastCard';
import './Forecast.css';

function Forecast() {
  return (
    <div id='forecast-container'>
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
    </div>
  );
}

export default Forecast;
