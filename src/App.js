import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import WeatherDetails from './components/WeatherDetails';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import Forecast from './components/Forecast';
import Error from './components/Error';
import Favorites from './components/Favorites';

function App() {
  const [storedLocations, setStoredLocations] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [query, setQuery] = useState('stockholm');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_API_KEY}&units=metric&q=`;

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
    const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_API_KEY}&units=metric&q=`;

    fetch(`${url}${query}`)
      .then(res => res.json())
      .then(data => {
        setForecastData(data.list);
      })
      .catch(err => console.log(err));
  }, [query]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('locations'));
    if (data !== null) {
      setStoredLocations(data);
    }
  }, []);

  useEffect(() => {
    if (storedLocations !== null) {
      localStorage.setItem('locations', JSON.stringify(storedLocations));
    }
  }, [storedLocations]);

  const addLocation = newLocation => {
    if (storedLocations.some(location => location.name === newLocation.name)) {
      return;
    }

    setStoredLocations([newLocation, ...storedLocations]);
  };

  const handleSearch = value => {
    if (value !== null || value !== undefined) {
      setQuery(value);
    }
  };

  const clearStoredLocations = () => {
    setStoredLocations([]);
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
                <Favorites
                  storedLocations={storedLocations}
                  handleSearch={handleSearch}
                />
                <WeatherDetails
                  weatherData={weatherData}
                  addLocation={addLocation}
                />
                <Forecast forecastData={forecastData} />
                {storedLocations.length ? (
                  <div id='clear'>
                    <p>
                      Click{' '}
                      <span onClick={() => clearStoredLocations()}>here</span>{' '}
                      to empty favorites list.
                    </p>
                  </div>
                ) : (
                  <div></div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
