import React from 'react';
import './WeatherDetails.css';

function WeatherDetails({ weatherData }) {
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
          {weatherData.name}, {weatherData.country}
        </h1>
        <p>{formatDate()}</p>
        <p>{weatherData.description}</p>
        <h2>{weatherData.temp}&deg;</h2>
      </div>
    </div>
  );
}

export default WeatherDetails;
