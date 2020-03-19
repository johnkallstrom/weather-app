import React from 'react';
import ErrorLogo from '../svg/exclamation-circle.svg';

const Error = () => {
  return (
    <>
      <p>Oops, something went wrong!</p>
      <img src={ErrorLogo} alt='error' className='error-img' />
    </>
  );
};

export default Error;
