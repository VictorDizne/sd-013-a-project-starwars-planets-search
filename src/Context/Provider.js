import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../Hooks/Fetch';
import Context from './Context';

function Provider({ children }) {
  const [planets, loaded] = useFetch();
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });
  const value = {
    planets,
    loaded,
    filter,
    setFilter,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}),
}.isRequired;

export default Provider;
