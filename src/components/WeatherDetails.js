import React from 'react';
import './WeatherDetails.css';

function WeatherDetails({ data }) {
  const formatDate = () => {
    const now = new Date();
    const date = now.getDate();
    const monthIndex = now.getMonth();

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const monthName = months[monthIndex];

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const dayIndex = now.getDay();
    const dayName = days[dayIndex];

    const formatted = `${dayName}, ${date} ${monthName}`;
    return formatted;
  };

  return (
    <div id='wrapper'>
      <div id='details'>
        <h1>
          {data.name}, {data.country}
        </h1>
        <p>{formatDate()}</p>
        <p>{data.description}</p>
      </div>
      <div id='image'>
        <div className='temp'>
          <h1>{Math.round(data.temp)}&deg;</h1>
        </div>
        <div className='img'>
          <img
            src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
            alt='weather-img'
          />
        </div>
      </div>
      <div id='weather'>
        <p>Humidity: {data.humidity}%</p>
        <p>Wind: {data.speed} m/s</p>
        <p>Cloudiness: {data.all}%</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
