import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import WeatherDetails from './components/WeatherDetails';
import Header from './components/Header';

const url = `${process.env.REACT_APP_BASE_URL}?appid=${process.env.REACT_APP_API_KEY}&units=metric&q=`;

function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState('stockholm');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    fetch(`${url}${query}`)
      .then(res => res.json())
      .then(data => {
        const { name } = data;
        const { lon, lat } = data.coord;
        const { country } = data.sys;
        const { temp, temp_min, temp_max } = data.main;
        const [{ description, icon }] = data.weather;

        setData({
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
        setIsLoading(false);
      })
      .catch(err => {
        setIsError(true);
        console.log(err);
      });
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
            <p>Oops, something went wrong...</p>
          </div>
        ) : (
          <div>
            {isLoading ? (
              <div id='loading'>
                <p>Loading...</p>
              </div>
            ) : (
              <div>
                <WeatherDetails data={data} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
