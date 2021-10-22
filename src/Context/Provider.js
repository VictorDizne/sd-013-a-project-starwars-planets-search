import React from 'react';
// import PropTypes from 'prop-types';
import useFetch from '../Hooks/Fetch';
import Context from './Context';

function Provider({ children }) {
  const [planets, loaded] = useFetch();

  const value = {
    planets,
    loaded,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
