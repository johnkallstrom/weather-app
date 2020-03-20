import React from 'react';
import ForecastCard from './ForecastCard';
import './Forecast.css';

function Forecast({ forecastData }) {
  const forecastList = forecastData.map(forecast => {
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
