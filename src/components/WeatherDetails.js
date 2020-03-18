import React from 'react';
import './WeatherDetails.css';

function WeatherDetails({ data }) {
  return (
    <div id='wrapper'>
      <div id='details'>
        <div className='information'>
          <h2>
            {data.name}, {data.country}
          </h2>
          <p>{data.description}</p>
          <p className='temp'>{Math.round(data.temp)} &deg;C</p>
          <ul>
            <li>Wind: {data.speed} m/s</li>
            <li>Humidity: {data.humidity}%</li>
            <li>
              Coords: [{data.lat}, {data.lon}]
            </li>
          </ul>
        </div>
        <div className='image'>
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
