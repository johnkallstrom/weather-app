import React from 'react';
import './WeatherDetails.css';

function WeatherDetails({ weatherData }) {
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
    <div id='details-container'>
      <div className='details-wrapper'>
        <div className='section-one'>
          <h2>
            {weatherData.name}, {weatherData.country}
          </h2>
          <p>
            {getDay()}, {getTime()}
          </p>
          <p>{capitalizeDescription(weatherData.description)}</p>
          <p></p>
          <ul>
            <li>Wind: {weatherData.speed} m/s</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>
              Coords: [{weatherData.lat}, {weatherData.lon}]
            </li>
          </ul>
          <button className='add-button'>
            <i className='fas fa-heart'></i>
          </button>
        </div>
        <div className='section-two'>
          <p className='temp'>{Math.round(weatherData.temp)} &deg;C</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
            alt='weather'
            id='img'
          />
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
