import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetchAPI from '../hooks/useFetchAPI';
import Context from './Context';

function Provider({ children }) {
  const { data, planetsKeys, planetsList, setPlanetsList } = useFetchAPI();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const contextValue = {
    data,
    planetsKeys,
    planetsList,
    setPlanetsList,
    filters,
    setFilters,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
