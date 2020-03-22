import React from 'react';

function ForecastCard({ date, maxtemp, mintemp, icon }) {
  return (
    <div id='card-wrapper'>
      <p>{new Date(date).toLocaleDateString('en-GB', { weekday: 'short' })}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt='forecast'
        id='forecast-img'
      />
      <p>
        {Math.round(maxtemp)} &deg;<span>{Math.round(mintemp)} &deg;</span>
      </p>
    </div>
  );
}

export default ForecastCard;
