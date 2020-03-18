import React from 'react';
import './WeatherDetails.css';

function WeatherDetails({ data }) {
  const convertTimestamp = timestamp => {
    var date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = '0' + date.getMinutes();
    var seconds = '0' + date.getSeconds();
    var formattedTime =
      hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  };

  return (
    <div id='wrapper'>
      <div id='details'>
        <div className='section-one'>
          <h2>
            {data.name}, {data.country}
          </h2>
          <p>{convertTimestamp(data.dt)}</p>
          <p>{data.description}</p>
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
