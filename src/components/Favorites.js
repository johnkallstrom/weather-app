import React from 'react';
import './Favorites.css';

const Favorites = ({ storedLocations, handleSearch }) => {
  return (
    <div id='favorites-container'>
      <ul>
        {storedLocations.map(location => {
          const { name, id } = location;
          return (
            <li className='shell' key={id} onClick={() => handleSearch(name)}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorites;
