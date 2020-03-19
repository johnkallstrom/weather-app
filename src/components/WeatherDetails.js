import React from 'react';
import './WeatherDetails.css';

function WeatherDetails({ data }) {
  const today = new Date();

  const getDay = () => {
    const day = today.toLocaleDateString('en-GB', { weekday: 'long' });
    return day;
  };

  const getTime = () => {
    const time = today.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
    return time;
  };

  const capitalizeDescription = string => {
    if (string !== undefined) {
      const newString = string.charAt(0).toUpperCase() + string.slice(1);
      return newString;
    }
  };

  return (
    <div id='wrapper'>
      <div id='details'>
        <div className='section-one'>
          <h2>
            {data.name}, {data.country}
          </h2>
          <p>
            {getDay()}, {getTime()}
          </p>
          <p>{capitalizeDescription(data.description)}</p>
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
