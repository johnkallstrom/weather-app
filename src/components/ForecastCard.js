import React from 'react';

function ForecastCard() {
  return (
    <div id='card-wrapper'>
      <p>Fri</p>
      <img
        src={`http://openweathermap.org/img/wn/10d@2x.png`}
        alt='forecast'
        id='forecast-img'
      />
      <p>
        7 &deg;<span>2 &deg;</span>
      </p>
    </div>
  );
}

export default ForecastCard;
