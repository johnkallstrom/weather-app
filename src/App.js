import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import WeatherDetails from './components/WeatherDetails';
import Header from './components/Header';

const URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    fetch(`${URL}?q=Stockholm&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        const { name } = data;
        const { lon, lat } = data.coord;
        const { country } = data.sys;
        const { temp, temp_min, temp_max } = data.main;
        const [{ description, icon }] = data.weather;

        setWeatherData({
          name,
          country,
          description,
          icon,
          lon,
          lat,
          temp,
          temp_min,
          temp_max
        });
      });
  }, []);

  const searchWeatherByLocation = searchValue => {
    fetch(`${URL}?q=${searchValue}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        const { name } = data;
        const { lon, lat } = data.coord;
        const { country } = data.sys;
        const { temp, temp_min, temp_max } = data.main;
        const [{ description, icon }] = data.weather;

        setWeatherData({
          name,
          country,
          description,
          icon,
          lon,
          lat,
          temp,
          temp_min,
          temp_max
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div id='app'>
      <div id='container'>
        <Header />
        <SearchForm searchWeatherByLocation={searchWeatherByLocation} />
        <WeatherDetails weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
