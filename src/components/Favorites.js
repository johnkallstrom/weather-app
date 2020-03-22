import React from 'react';
import './Favorites.css';

const Favorites = ({ storedLocations, handleSearch }) => {
  const favoriteList = storedLocations.map(location => {
    const { name, id } = location;
    return (
      <div className='shell' key={id}>
        <li onClick={() => handleSearch(name)}>{name}</li>
      </div>
    );
  });

  return (
    <div id='favorites-container'>
      <div className='favorites-wrapper'>
        <ul>{favoriteList}</ul>
      </div>
    </div>
  );
};

export default Favorites;
