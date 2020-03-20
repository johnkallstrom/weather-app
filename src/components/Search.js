import React, { useState } from 'react';
import './Search.css';

function Search({ handleSearch }) {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(value);
    setValue('');
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
        value={value}
        onChange={handleChange}
      />
      <button id='button'>
        <i className='fas fa-search'></i>
      </button>
    </form>
  );
}

export default Search;
