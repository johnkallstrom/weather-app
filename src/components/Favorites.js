import React from 'react';
import './Favorites.css';

const Favorites = () => {
  return (
    <div id='favorites-container'>
      <div className='favorites-wrapper'>
        <ul>
          <div className='shell'>
            <li>Stockholm</li>
          </div>
          <div className='shell'>
            <li>London</li>
          </div>
          <div className='shell'>
            <li>Barcelona</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Favorites;
