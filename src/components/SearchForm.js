import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ searchWeatherByLocation }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchWeatherByLocation(searchValue);
    setSearchValue('');
  };

  return (
    <form id='form' onSubmit={handleSubmit}>
      <input
        type='text'
        id='input'
        required
        placeholder='Enter location...'
        onFocus={e => (e.target.placeholder = '')}
        onBlur={e => (e.target.placeholder = 'Enter location...')}
        value={searchValue}
        onChange={handleChange}
      />
      <button id='button'>Search</button>
    </form>
  );
}

export default SearchForm;
