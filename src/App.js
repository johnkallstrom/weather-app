import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import WeatherDetails from './components/WeatherDetails';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import Forecast from './components/Forecast';
import Error from './components/Error';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [query, setQuery] = useState('stockholm');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const url = `http://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_API_KEY}&units=metric&q=`;

    setIsError(false);
    setIsLoading(true);
    setTimeout(() => {
      fetch(`${url}${query}`)
        .then(res => res.json())
        .then(data => {
          const { name } = data;
          const { lon, lat } = data.coord;
          const { country } = data.sys;
          const { temp, temp_min, temp_max, humidity } = data.main;
          const [{ description, icon }] = data.weather;
          const { speed } = data.wind;

          setWeatherData({
            name,
            country,
            description,
            icon,
            lon,
            lat,
            speed,
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

  useEffect(() => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_API_KEY}&units=metric&q=`;

    fetch(`${url}${query}`)
      .then(res => res.json())
      .then(data => {
        setForecastData(data.list);
      })
      .catch(err => console.log(err));
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
            <Error />
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
                <Forecast forecastData={forecastData} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
