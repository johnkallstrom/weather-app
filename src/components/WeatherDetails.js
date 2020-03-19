import React from 'react';
import './WeatherDetails.css';

function WeatherDetails({ data }) {
  const getDate = () => {
    var today = new Date();
    return today.toLocaleDateString('en-US', { weekday: 'long' });
  };

  return (
    <div id='wrapper'>
      <div id='details'>
        <div className='section-one'>
          <h2>
            {data.name}, {data.country}
          </h2>
          <p>{getDate()}</p>
          <p>{data.description}</p>
          <p></p>
          <ul>
            <li>Wind: {data.speed} m/s</li>
            <li>Humidity: {data.humidity}%</li>
            <li>
              Coords: [{data.lat}, {data.lon}]
            </li>
          </ul>
        </div>
        <div className='section-two'>
          <p className='temp'>{Math.round(data.temp)} &deg;C</p>
          <img
            src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
            alt='weather'
            id='img'
          />
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
