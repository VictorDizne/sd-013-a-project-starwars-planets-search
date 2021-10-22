import React from 'react';
import PropTypes from 'prop-types';
import fetch from '../Hooks/Fetch';
import Context from './Context';

function Provider({ children }) {
  const [planets] = fetch;

  const value = {
    planets,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: 
}.isRequired;

export default Provider;
