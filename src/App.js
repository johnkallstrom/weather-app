import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import WeatherDetails from './components/WeatherDetails';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import Forecast from './components/Forecast';

const url = `${process.env.REACT_APP_BASE_URL}?appid=${process.env.REACT_APP_API_KEY}&units=metric&q=`;

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [query, setQuery] = useState('stockholm');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    setTimeout(() => {
      fetch(`${url}${query}`)
        .then(res => res.json())
        .then(data => {
          const { name, dt } = data;
          const { lon, lat } = data.coord;
          const { country } = data.sys;
          const { temp, temp_min, temp_max, humidity } = data.main;
          const [{ description, icon }] = data.weather;
          const { speed } = data.wind;
          const { all } = data.clouds;

          setWeatherData({
            name,
            country,
            dt,
            description,
            icon,
            lon,
            lat,
            speed,
            all,
            temp,
            temp_min,
            temp_max,
            humidity
          });
          setIsLoading(false);
        })
        .catch(err => {
          setIsError(true);
          console.log(err);
        });
    }, 1000);
  }, [query]);

  const handleSearch = value => {
    if (value !== null || value !== undefined) {
      setQuery(value);
    }
  };

  return (
    <div id='app'>
      <div id='container'>
        <Header />
        <Search handleSearch={handleSearch} />
        {isError ? (
          <div id='error'>
            <p>Oops, we could not find that location...</p>
          </div>
        ) : (
          <>
            {isLoading ? (
              <div id='loading'>
                <LoadingSpinner />
              </div>
            ) : (
              <>
                <WeatherDetails weatherData={weatherData} />
                <Forecast />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
