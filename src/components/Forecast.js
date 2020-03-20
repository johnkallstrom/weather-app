import React from 'react';
import ForecastCard from './ForecastCard';
import './Forecast.css';

function Forecast({ forecastData }) {
  const result = [];
  for (let i = 7; i < forecastData.length; i += 8) {
    result.push(forecastData[i]);
  }

  const forecastList = result.map(forecast => {
    const { dt_txt } = forecast;
    const { temp_max, temp_min } = forecast.main;
    const [{ icon }] = forecast.weather;
    return (
      <ForecastCard
        key={dt_txt}
        date={dt_txt}
        maxtemp={temp_max}
        mintemp={temp_min}
        icon={icon}
      />
    );
  });
  return <div id='forecast-container'>{forecastList}</div>;
}

export default Forecast;
